function initializeSlide(slidersId) {
    const slidersSection = document.querySelector(`.image-sliders-section[data-sliders-id="${slidersId}"]`);
    const slidersInner = slidersSection.querySelector('.image-sliders-inner');
    
    // กำหนดตำแหน่ง transform และ index เริ่มต้นที่ 0
    slidersInner.style.transform = 'translateX(0px)';  // ทำให้เริ่มจากภาพแรก
    slidersInner.setAttribute('data-index', 0); // ตั้งค่า index เป็น 0
}

function moveSlide(direction, slidersId) {
    const slidersSection = document.querySelector(`.image-sliders-section[data-sliders-id="${slidersId}"]`);
    const slidersInner = slidersSection.querySelector('.image-sliders-inner');
    const items = slidersInner.children;
    const itemWidth = items[0].clientWidth + 15; // Width of a single item including margin

    // Determine visible items based on screen size
    const isMobile = window.innerWidth <= 768; // Define "mobile" as screen width <= 768px
    const visibleItems = isMobile ? 1 : 4; // Show 1 item on mobile, 4 items on larger screens
    const maxIndex = items.length - visibleItems; // Calculate the max index for sliding

    // Get the current index, defaulting to 0
    let currentIndex = parseInt(slidersInner.getAttribute('data-index')) || 0;

    // Update the index based on direction
    currentIndex += direction;

    // Wrap around to the first item if we go past the last visible set
    if (currentIndex > maxIndex) {
        currentIndex = 0; // Reset to the first item
    } else if (currentIndex < 0) {
        currentIndex = maxIndex; // Go to the last visible set
    }

    // Apply the transform to move the slider
    slidersInner.style.transition = "transform 0.6s ease-in-out"; // Smooth sliding transition
    slidersInner.style.transform = `translateX(-${currentIndex * itemWidth}px)`; // Slide based on the index
    slidersInner.setAttribute('data-index', currentIndex);
}


// เรียกใช้ initializeSlide เมื่อเริ่มต้น
initializeSlide('yourSliderId'); // เปลี่ยน 'yourSliderId' เป็น id ของ slider
