document.addEventListener('DOMContentLoaded', function() {
  // Load the SVG map of Indonesia
  const mapContainer = document.getElementById('indonesia-map-container');
  
  fetch('svg/indonesia.svg')
    .then(response => response.text())
    .then(svgContent => {
      mapContainer.innerHTML = svgContent;
      
      // Add map markers after SVG is loaded
      setTimeout(addMapMarkers, 100);
    })
    .catch(error => {
      console.error('Error loading SVG:', error);
      mapContainer.innerHTML = '<p>Error loading map. Please try again later.</p>';
    });
  
  function addMapMarkers() {
    const svgElement = mapContainer.querySelector('svg');
    if (!svgElement) return;
    
    // Make the SVG responsive
    svgElement.setAttribute('width', '100%');
    svgElement.setAttribute('height', '100%');
    svgElement.setAttribute('viewBox', '0 0 1000 500');
    svgElement.style.maxHeight = '500px';
    
    // Historical events data with coordinates on the map
    const events = [
      {
        id: 1,
        name: "Pertempuran Surabaya",
        location: "Surabaya",
        date: "10 November 1945",
        description: "Pertempuran besar antara pejuang Indonesia dan pasukan Inggris/Belanda. Dikenal sebagai Hari Pahlawan.",
        coordinates: { x: 304, y: 257 },
        type: "military"
      },
      {
        id: 2,
        name: "Perjanjian Linggarjati",
        location: "Linggarjati, Jawa Barat",
        date: "15 November 1946",
        description: "Perundingan antara Indonesia dan Belanda. Belanda mengakui kedaulatan RI atas Jawa, Madura, dan Sumatra.",
        coordinates: { x: 225, y: 245 },
        type: "diplomatic"
      },
      {
        id: 3,
        name: "Proklamasi Kemerdekaan",
        location: "Jakarta",
        date: "17 Agustus 1945",
        description: "Soekarno-Hatta memproklamasikan kemerdekaan Indonesia dari penjajahan.",
        coordinates: { x: 195, y: 245 },
        type: "political"
      },
      {
        id: 4,
        name: "Perjanjian Roem-Royen",
        location: "Jakarta",
        date: "7 Mei 1949",
        description: "Perundingan yang menghasilkan kembalinya pemerintah RI ke Yogyakarta dan persiapan KMB.",
        coordinates: { x: 195, y: 235 },
        type: "diplomatic"
      },
      {
        id: 5,
        name: "Agresi Militer Belanda I",
        location: "Jawa",
        date: "21 Juli 1947",
        description: "Serangan militer Belanda terhadap wilayah Jawa, bertujuan untuk menguasai daerah-daerah ekonomi penting.",
        coordinates: { x: 280, y: 260 },
        type: "military"
      },
      {
        id: 6,
        name: "Agresi Militer Belanda I",
        location: "Sumatra",
        date: "21 Juli 1947",
        description: "Serangan militer Belanda untuk menguasai daerah perkebunan dan tambang minyak di Sumatra.",
        coordinates: { x: 160, y: 200 },
        type: "military"
      },
      {
        id: 7,
        name: "Konferensi Asia Afrika",
        location: "Bandung",
        date: "18-24 April 1955",
        description: "Konferensi yang menjadi dasar untuk gerakan non-blok dan solidaritas negara Asia-Afrika.",
        coordinates: { x: 215, y: 245 },
        type: "cultural"
      },
      {
        id: 8,
        name: "Serangan Umum 1 Maret",
        location: "Yogyakarta",
        date: "1 Maret 1949",
        description: "Serangan enam jam oleh tentara Indonesia yang membuktikan bahwa TNI masih ada dan kuat.",
        coordinates: { x: 260, y: 260 },
        type: "military"
      },
      {
        id: 9,
        name: "Pertempuran Medan Area",
        location: "Medan",
        date: "13 Oktober 1945",
        description: "Konflik antara pemuda Indonesia dengan pasukan Sekutu dan NICA di Medan.",
        coordinates: { x: 125, y: 120 },
        type: "military"
      },
      {
        id: 10,
        name: "Pertempuran Ambarawa",
        location: "Ambarawa, Jawa Tengah",
        date: "20 November - 15 Desember 1945",
        description: "Pertempuran melawan tentara Inggris dan NICA, dikenal sebagai awal perang kemerdekaan.",
        coordinates: { x: 260, y: 250 },
        type: "military"
      },
      {
        id: 11,
        name: "Pembentukan PDRI",
        location: "Bukittinggi, Sumatra Barat",
        date: "22 Desember 1948",
        description: "Pembentukan Pemerintah Darurat Republik Indonesia setelah Belanda menduduki Yogyakarta.",
        coordinates: { x: 100, y: 140 },
        type: "political"
      }
    ];
    
    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.className = 'map-tooltip';
    tooltip.style.display = 'none';
    document.body.appendChild(tooltip);
    
    // Track active tooltip for mobile
    let activeTooltipId = null;
    
    // Add markers for each event
    events.forEach(event => {
      const marker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      marker.setAttribute('cx', event.coordinates.x);
      marker.setAttribute('cy', event.coordinates.y);
      marker.setAttribute('r', '8');
      marker.setAttribute('class', `map-marker ${event.type}`);
      marker.setAttribute('data-event-id', event.id);
      
      // Show tooltip on hover (desktop)
      marker.addEventListener('mouseenter', function(e) {
        if (window.matchMedia('(min-width: 769px)').matches) {
          showTooltip(event, e);
        }
      });
      
      marker.addEventListener('mousemove', function(e) {
        if (window.matchMedia('(min-width: 769px)').matches) {
          updateTooltipPosition(e);
        }
      });
      
      marker.addEventListener('mouseleave', function() {
        if (window.matchMedia('(min-width: 769px)').matches) {
          tooltip.style.display = 'none';
        }
      });
      
      // Add touch events for mobile
      marker.addEventListener('touchstart', function(e) {
        e.preventDefault(); // Prevent default touch behavior
        e.stopPropagation(); // Stop event from bubbling up
        
        // Toggle tooltip
        if (activeTooltipId === event.id) {
          tooltip.style.display = 'none';
          activeTooltipId = null;
        } else {
          showTooltip(event, e.touches[0]);
          activeTooltipId = event.id;
        }
      }, { passive: false });
      
      svgElement.appendChild(marker);
    });
    
    function showTooltip(event, e) {
      tooltip.innerHTML = `
        <h3>${event.name}</h3>
        <p class="tooltip-location">${event.location}</p>
        <p class="tooltip-date">${event.date}</p>
        <p>${event.description}</p>
        ${isMobile() ? '<div class="tooltip-close">Tutup</div>' : ''}
      `;
      tooltip.style.display = 'block';
      updateTooltipPosition(e);
      
      // Add a class if we're on mobile
      if (isMobile()) {
        tooltip.classList.add('mobile');
      } else {
        tooltip.classList.remove('mobile');
      }
    }
    
    function isMobile() {
      return window.matchMedia('(max-width: 768px)').matches;
    }
    
    // Close tooltip when clicking/touching outside
    document.addEventListener('click', function(e) {
      // Don't close if clicking on a marker (those have their own handlers)
      if (!e.target.classList || !e.target.classList.contains('map-marker')) {
        tooltip.style.display = 'none';
        activeTooltipId = null;
      }
    });
    
    document.addEventListener('touchstart', function(e) {
      // Don't close if touching a marker (those have their own handlers)
      if (!e.target.classList || !e.target.classList.contains('map-marker')) {
        tooltip.style.display = 'none';
        activeTooltipId = null;
      }
    });
    
    // Add map event listener to hide tooltip when clicking outside
    document.addEventListener('click', function() {
      tooltip.style.display = 'none';
    });
    
    // Add zoom controls
    const zoomControls = document.createElement('div');
    zoomControls.className = 'map-zoom-controls';
    zoomControls.innerHTML = `
      <button class="zoom-btn" id="zoom-in" aria-label="Perbesar">+</button>
      <button class="zoom-btn" id="zoom-out" aria-label="Perkecil">−</button>
      <button class="zoom-btn" id="zoom-reset" aria-label="Reset tampilan peta">↺</button>
    `;
    mapContainer.appendChild(zoomControls);
    
    // Initialize controls
    let currentZoom = 1;
    let panX = 0;
    let panY = 0;
    let isDragging = false;
    let lastX, lastY;
    let pinchDistance = 0;
    
    // Add help text for desktop users
    const helpText = document.createElement('div');
    helpText.className = 'map-help-text';
    helpText.innerHTML = `
      <span class="desktop-help">Gunakan scroll mouse untuk zoom in/out, atau klik dan geser untuk memindahkan peta</span>
      <span class="mobile-help">Gunakan dua jari untuk zoom in/out, atau geser untuk memindahkan peta</span>
    `;
    mapContainer.appendChild(helpText);
    
    // Button controls
    document.getElementById('zoom-in').addEventListener('click', function() {
      zoomMap(1.2);
    });
    
    document.getElementById('zoom-out').addEventListener('click', function() {
      zoomMap(0.8);
    });
    
    document.getElementById('zoom-reset').addEventListener('click', function() {
      currentZoom = 1;
      panX = 0;
      panY = 0;
      updateMapTransform();
    });
    
    // Mouse wheel zoom
    svgElement.addEventListener('wheel', function(e) {
      e.preventDefault();
      
      // Get mouse position relative to the SVG element
      const rect = svgElement.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      // Zoom direction
      const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
      
      // Apply zoom with focus point
      zoomMapWithFocus(zoomFactor, mouseX, mouseY);
    });
    
    // Mouse drag controls
    svgElement.addEventListener('mousedown', function(e) {
      isDragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      svgElement.style.cursor = 'grabbing';
      e.preventDefault(); // Prevent text selection during drag
    });
    
    document.addEventListener('mousemove', function(e) {
      if (!isDragging) return;
      
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      
      panX += dx / currentZoom;
      panY += dy / currentZoom;
      
      lastX = e.clientX;
      lastY = e.clientY;
      
      updateMapTransform();
    });
    
    document.addEventListener('mouseup', function() {
      isDragging = false;
      svgElement.style.cursor = 'grab';
    });
    
    // Touch controls for mobile
    svgElement.addEventListener('touchstart', function(e) {
      if (e.touches.length === 1) {
        // Single touch - start dragging
        isDragging = true;
        lastX = e.touches[0].clientX;
        lastY = e.touches[0].clientY;
      } else if (e.touches.length === 2) {
        // Two touches - pinch to zoom
        isDragging = false;
        pinchDistance = getPinchDistance(e);
      }
      e.preventDefault(); // Prevent default touch behavior like scrolling
    }, { passive: false });
    
    svgElement.addEventListener('touchmove', function(e) {
      if (e.touches.length === 1 && isDragging) {
        // Single touch - dragging
        const touch = e.touches[0];
        const dx = touch.clientX - lastX;
        const dy = touch.clientY - lastY;
        
        panX += dx / currentZoom;
        panY += dy / currentZoom;
        
        lastX = touch.clientX;
        lastY = touch.clientY;
        
        updateMapTransform();
      } else if (e.touches.length === 2) {
        // Two touches - pinch zooming
        const currentDistance = getPinchDistance(e);
        
        if (pinchDistance > 0) {
          // Calculate zoom factor based on pinch distance change
          const zoomFactor = currentDistance / pinchDistance;
          
          // Only zoom if the change is significant enough
          if (Math.abs(zoomFactor - 1) > 0.02) {
            // Calculate the midpoint of the two touches as the focus point
            const touch1 = e.touches[0];
            const touch2 = e.touches[1];
            const midX = (touch1.clientX + touch2.clientX) / 2;
            const midY = (touch1.clientY + touch2.clientY) / 2;
            
            // Convert to SVG coordinates
            const rect = svgElement.getBoundingClientRect();
            const focusX = midX - rect.left;
            const focusY = midY - rect.top;
            
            // Apply zoom with focus point
            zoomMapWithFocus(zoomFactor, focusX, focusY);
            
            // Update pinch distance for next move
            pinchDistance = currentDistance;
          }
        } else {
          pinchDistance = currentDistance;
        }
      }
      e.preventDefault(); // Prevent default touch behavior
    }, { passive: false });
    
    svgElement.addEventListener('touchend', function(e) {
      if (e.touches.length === 0) {
        isDragging = false;
        pinchDistance = 0;
      } else if (e.touches.length === 1) {
        // If we go from 2 fingers to 1, reset the single touch drag
        pinchDistance = 0;
        isDragging = true;
        lastX = e.touches[0].clientX;
        lastY = e.touches[0].clientY;
      }
    });
    
    // Double tap to zoom on mobile
    let lastTap = 0;
    svgElement.addEventListener('touchend', function(e) {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTap;
      if (tapLength < 300 && tapLength > 0 && e.touches.length === 0) {
        // Double tap detected
        const touch = e.changedTouches[0];
        const rect = svgElement.getBoundingClientRect();
        const focusX = touch.clientX - rect.left;
        const focusY = touch.clientY - rect.top;
        
        // Zoom in or out based on current zoom level
        const zoomFactor = currentZoom < 1.5 ? 1.5 : 0.7;
        zoomMapWithFocus(zoomFactor, focusX, focusY);
        
        e.preventDefault();
      }
      lastTap = currentTime;
    });
    
    // Add a visible touch feedback for mobile users
    svgElement.addEventListener('touchstart', function(e) {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        showTouchFeedback(touch.clientX, touch.clientY);
      }
    });
    
    function showTouchFeedback(x, y) {
      const feedback = document.createElement('div');
      feedback.className = 'touch-feedback';
      feedback.style.left = `${x - 25}px`;
      feedback.style.top = `${y - 25}px`;
      document.body.appendChild(feedback);
      
      setTimeout(() => {
        feedback.classList.add('active');
        setTimeout(() => {
          document.body.removeChild(feedback);
        }, 300);
      }, 10);
    }
    
    function updateMapTransform() {
      const group = svgElement.querySelector('g') || svgElement;
      group.style.transform = `translate(${panX}px, ${panY}px) scale(${currentZoom})`;
      group.style.transformOrigin = 'center';
    }
    
    function zoomMap(factor) {
      const newZoom = currentZoom * factor;
      
      // Limit zoom range
      if (newZoom >= 0.5 && newZoom <= 5) {
        currentZoom = newZoom;
        updateMapTransform();
      }
    }
    
    function zoomMapWithFocus(factor, focusX, focusY) {
      // Save old zoom for comparison
      const oldZoom = currentZoom;
      
      // Apply new zoom (with limits)
      const newZoom = currentZoom * factor;
      if (newZoom >= 0.5 && newZoom <= 5) {
        currentZoom = newZoom;
        
        // Adjust pan values to keep the focus point stationary
        panX = panX - (focusX / oldZoom - focusX / currentZoom) * oldZoom;
        panY = panY - (focusY / oldZoom - focusY / currentZoom) * oldZoom;
        
        updateMapTransform();
      }
    }
    
    function getPinchDistance(e) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      return Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) +
        Math.pow(touch2.clientY - touch1.clientY, 2)
      );
    }
    
    function updateTooltipPosition(e) {
      const padding = 10;
      const isTouchEvent = e.touches && e.touches.length;
      
      // Get the correct coordinates based on event type
      const clientX = isTouchEvent ? e.touches[0].clientX : e.clientX;
      const clientY = isTouchEvent ? e.touches[0].clientY : e.clientY;
      const pageX = isTouchEvent ? e.touches[0].pageX : e.pageX;
      const pageY = isTouchEvent ? e.touches[0].pageY : e.pageY;
      
      // For mobile, center the tooltip above the touch point
      if (isMobile()) {
        const rect = tooltip.getBoundingClientRect();
        tooltip.style.left = (clientX - rect.width / 2) + 'px';
        tooltip.style.top = (pageY - rect.height - 20) + 'px'; // Position above finger
      } else {
        // Desktop behavior - next to cursor
        tooltip.style.left = (pageX + padding) + 'px';
        tooltip.style.top = (pageY + padding) + 'px';
      }
      
      // Adjust if tooltip goes off screen
      const rect = tooltip.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Adjust horizontal position if needed
      if (rect.right > viewportWidth) {
        tooltip.style.left = (pageX - rect.width - padding) + 'px';
      }
      
      // Make sure left edge is visible
      if (rect.left < 0) {
        tooltip.style.left = padding + 'px';
      }
      
      // Adjust vertical position if needed
      if (rect.bottom > viewportHeight) {
        tooltip.style.top = (pageY - rect.height - padding) + 'px';
      }
      
      // Make sure top edge is visible
      if (rect.top < 0) {
        tooltip.style.top = padding + 'px';
      }
    }
    
    // Add a small instruction that fades away after a few seconds
    const instruction = document.createElement('div');
    instruction.className = 'map-instruction';
    instruction.textContent = 'Scroll untuk zoom, klik untuk geser';
    mapContainer.appendChild(instruction);
    
    setTimeout(() => {
      instruction.classList.add('fade-out');
      setTimeout(() => {
        instruction.remove();
      }, 1000);
    }, 5000);
  }
});
