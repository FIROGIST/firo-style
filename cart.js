// 1. وظيفة إضافة المنتج للسلة
function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const product = {
        name: name,
        price: price,
        image: image
    };

    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    // تحديث العداد في الهيدر فوراً
    updateCartCount();

    // إظهار الرسالة الخضراء
    showConfirmation(name);
}

// 2. وظيفة تحديث رقم العداد (أيقونة السلة)
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.innerText = cart.length;
    }
}

// 3. وظيفة الرسالة الخضراء (Toast)
function showConfirmation(name) {
    const toast = document.createElement('div');
    
    // تنسيق الرسالة
    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#2ecc71',
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
        gap: '10px'
    });

    toast.innerHTML = `<i class="fas fa-check-circle"></i> تم إضافة "${name}" بنجاح!`;
    document.body.appendChild(toast);

    // أنيميشن الدخول
    toast.animate([{ opacity: 0, bottom: '0px' }, { opacity: 1, bottom: '30px' }], { duration: 300 });

    // الاختفاء بعد 3 ثوانٍ
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// تحديث العداد عند تحميل أي صفحة مرتبطة بالملف
window.addEventListener('load', updateCartCount);