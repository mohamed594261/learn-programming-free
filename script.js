// script.js - الملف الرئيسي للتفاعل

// عندما يتم تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function() {
    console.log('موقع "تعلم البرمجة مجاناً" جاهز! 🚀');
    
    // تأثير شريط التنقل عند التمرير
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(44, 62, 80, 0.95)';
        } else {
            navbar.style.background = 'var(--primary)';
        }
    });
    
    // إنشاء زر العودة للأعلى
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    document.body.appendChild(scrollToTopBtn);
    
    // عند النقر على زر العودة للأعلى
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // إظهار/إخفاء زر العودة للأعلى
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
});

// نضيف هذا الكود في نهاية ملف style.css
/*
.scroll-to-top {
    position: fixed;
    bottom: 30px;
    left: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--secondary);
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    z-index: 1000;
}

.scroll-to-top:hover {
    background: #2980b9;
}
*/
