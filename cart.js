function addToCart(name, price, image) {
    // التأكد من استخراج السلة بنفس الاسم 'cart'
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const product = {
        name: name,
        price: price,
        image: image
    };

    cart.push(product);

    // الحفظ بنفس الاسم 'cart'
    localStorage.setItem('cart', JSON.stringify(cart));

    // تحديث العداد فوراً إذا كان موجوداً في الصفحة
    if (typeof updateCartCount === "function") {
        updateCartCount();
    }

    showConfirmation(name);
}