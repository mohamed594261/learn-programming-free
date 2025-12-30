// script.js - الملف الرئيسي للتفاعل

document.addEventListener('DOMContentLoaded', function() {
    console.log('موقع "تعلم البرمجة مجاناً" جاهز! 🚀');
    
    // إضافة تأثير للنقر على الروابط في شريط التنقل
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // بيانات الدروس (مؤقتة - ستأتي من ملف JSON لاحقاً)
    const courses = [
        { title: 'HTML & CSS', description: 'بناء وتصميم مواقع الويب', icon: 'fas fa-code', color: '#e74c3c' },
        { title: 'JavaScript', description: 'برمجة الويب التفاعلية', icon: 'fab fa-js-square', color: '#f1c40f' },
        { title: 'Python', description: 'برمجة عامة وتحليل بيانات', icon: 'fab fa-python', color: '#3498db' },
        { title: 'Git & GitHub', description: 'إدارة المشاريع والعمل الجماعي', icon: 'fab fa-git-alt', color: '#9b59b6' },
        { title: 'قواعد البيانات', description: 'SQL والتعامل مع البيانات', icon: 'fas fa-database', color: '#2ecc71' },
        { title: 'مشاريع عملية', description: 'تطبيقات حقيقية من الصفر', icon: 'fas fa-laptop-code', color: '#e67e22' }
    ];
    
    // عرض الدروس في القسم الخاص بها
    const coursesGrid = document.querySelector('.courses-grid');
    if (coursesGrid) {
        courses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = 'card';
            courseCard.innerHTML = `
                <i class="${course.icon}" style="color: ${course.color}; font-size: 3rem;"></i>
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <button class="btn btn-primary" style="margin-top: 1rem;">ابدأ الدرس</button>
            `;
            coursesGrid.appendChild(courseCard);
        });
    }
    
    // إضافة سنة التحديث التلقائي في الفوتر
    const yearSpan = document.querySelector('#current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});