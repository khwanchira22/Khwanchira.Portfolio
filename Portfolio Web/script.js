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
    const itemWidth = items[0].clientWidth + 15; // รวมช่องว่างระหว่างภาพ
    const visibleItems = 4; // จำนวนภาพที่มองเห็นได้
    const maxIndex = items.length - visibleItems; // คำนวณ index สุดท้ายที่แสดงภาพเต็ม

    // ดึงค่า index ปัจจุบัน ถ้าไม่มีให้ใช้ 0
    let currentIndex = parseInt(slidersInner.getAttribute('data-index')) || 0;

    // อัพเดต index ตาม direction
    currentIndex += direction;

    // วนกลับไปภาพแรกเมื่อถึงภาพสุดท้าย
    if (currentIndex > maxIndex) {
        currentIndex = 0; // กลับไปที่ภาพแรก
    } else if (currentIndex < 0) {
        currentIndex = maxIndex; // ไปยังชุดภาพสุดท้าย
    }

    // ปรับค่า transform และเพิ่ม transition ให้เลื่อนนุ่มนวลยิ่งขึ้น
    slidersInner.style.transition = "transform 0.6s ease-in-out"; // ใช้ ease-in-out และเพิ่มเวลาเป็น 0.6s
    slidersInner.style.transform = `translateX(-${currentIndex * itemWidth}px)`; // เลื่อนตาม index
    slidersInner.setAttribute('data-index', currentIndex);
}

// เรียกใช้ initializeSlide เมื่อเริ่มต้น
initializeSlide('yourSliderId'); // เปลี่ยน 'yourSliderId' เป็น id ของ slider
