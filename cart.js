function addToCart(name, price, image) {
    // 1. استخراج السلة أو إنشاء واحدة جديدة
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
function addToCart(name, price, image) {
    // 1. استخراج السلة أو إنشاء واحدة جديدة
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const product = {
        name: name,
        price: price,
        image: image
    };

    cart.push(product);

    // 2. الحفظ في الذاكرة باسم 'cart'
    localStorage.setItem('cart', JSON.stringify(cart));

    // 3. تحديث العداد فوراً في الصفحة
    if (typeof updateCartCount === "function") {
        updateCartCount();
    }

    // 4. استدعاء وظيفة الرسالة الخضراء (التي أضفناها بالأسفل)
    showConfirmation(name);
}

function showConfirmation(name) {
    // إنشاء عنصر الرسالة
    const toast = document.createElement('div');
    
    // تنسيق الرسالة (CSS) لضمان ظهورها بشكل أخضر وأنيق أسفل الشاشة
    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#2ecc71', // اللون الأخضر
        color: '#ffffff',
        padding: '12px 25px',
        borderRadius: '50px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
        zIndex: '10000',
        fontSize: '16px',
        fontWeight: 'bold',
        direction: 'rtl',
        fontFamily: 'Cairo, sans-serif',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        minWidth: '250px',
        justifyContent: 'center'
    });

    // محتوى الرسالة
    toast.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>تم إضافة "${name}" بنجاح!</span>
    `;

    document.body.appendChild(toast);

    // تأثير دخول الأنميشن
    toast.animate([
        { opacity: 0, transform: 'translate(-50%, 20px)' },
        { opacity: 1, transform: 'translate(-50%, 0)' }
    ], {
        duration: 300,
        easing: 'ease-out'
    });

    // الإخفاء التلقائي بعد 3 ثوانٍ
    setTimeout(() => {
        toast.style.transition = 'all 0.5s ease';
        toast.style.opacity = '0';
        toast.style.transform = 'translate(-50%, 20px)';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}
        image: image
    };

    cart.push(product);

    // 2. الحفظ في الذاكرة باسم 'cart'
    localStorage.setItem('cart', JSON.stringify(cart));

    // 3. تحديث العداد فوراً في الصفحة
    if (typeof updateCartCount === "function") {
        updateCartCount();
    }

    // 4. استدعاء وظيفة الرسالة الخضراء (التي أضفناها بالأسفل)
    showConfirmation(name);
}

function showConfirmation(name) {
    // إنشاء عنصر الرسالة
    const toast = document.createElement('div');
    
    // تنسيق الرسالة (CSS) لضمان ظهورها بشكل أخضر وأنيق أسفل الشاشة
    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#2ecc71', // اللون الأخضر
        color: '#ffffff',
        padding: '12px 25px',
        borderRadius: '50px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
        zIndex: '10000',
        fontSize: '16px',
        fontWeight: 'bold',
        direction: 'rtl',
        fontFamily: 'Cairo, sans-serif',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        minWidth: '250px',
        justifyContent: 'center'
    });

    // محتوى الرسالة
    toast.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>تم إضافة "${name}" بنجاح!</span>
    `;

    document.body.appendChild(toast);

    // تأثير دخول الأنميشن
    toast.animate([
        { opacity: 0, transform: 'translate(-50%, 20px)' },
        { opacity: 1, transform: 'translate(-50%, 0)' }
    ], {
        duration: 300,
        easing: 'ease-out'
    });

    // الإخفاء التلقائي بعد 3 ثوانٍ
    setTimeout(() => {
        toast.style.transition = 'all 0.5s ease';
        toast.style.opacity = '0';
        toast.style.transform = 'translate(-50%, 20px)';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}
