// (هذا هو الكود الكامل لملف products.js)

// الخطوة 1: مصفوفة المنتجات (نحتاجها في كل صفحة)
const products = [
    {
        id: 1,
        name: 'براوني بروتين (قطعة)',
        category: 'حلويات',
        price: 18,
        image: 'images/brouniii.png'
    },
    {
        id: 2,
        name: 'كيكة جزر صحية (شريحة)',
        category: 'حلويات',
        price: 22,
        image: 'images/carrot-cake.png' 
    },
    {
        id: 3,
        name: 'قهوة V60 باردة',
        category: 'قهوة',
        price: 20,
        image: 'images/V60.png'
    },
    {
        id: 4,
        name: 'كرات طاقة بالتمر',
        category: 'حلويات',
        price: 12,
        image: 'images/ball-dates.png'
    },
    {
        id: 5,
        name: 'سبانش لاتيه ',
        category: 'قهوة',
        price: 18,
        image: 'images/latte.png'
    },
    {
        id: 6,
        name: 'اسبريسو',
        category: 'قهوة',
        price: 24,
        image: 'images/Espresso.png'
    },
    {
        id: 7,
        name: 'كوكيز شوفان (قطعتين)',
        category: 'حلويات',
        price: 15,
        image: 'images/cookies.png'
    },
    {
        id: 8,
        name: 'كولد برو',
        category: 'قهوة',
        price: 18,
        image: 'images/cold-brew.png'
    },
    {
        id: 9,
        name: 'تشيزكيك توت نباتي',
        category: 'حلويات',
        price: 25,
        image: 'images/Cheesecake.png'
    },
    {
        id: 10,
        name: ' لاتيه مثلج',
        category: 'قهوة',
        price: 18,
        image: 'images/iced-latte.png'
    },
    {
        id: 11,
        name: 'كوب كتب',
        category: 'أكواب',
        price: 35,
        image: 'images/books-cup.png'
    },
    {
        id: 12,
        name: 'كوب فن',
        category: 'أكواب',
        price: 35,
        image: 'images/art-cup.png'
    },
    {
        id: 13,
        name: 'كوب صحراء',
        category: 'أكواب',
        price: 35,
        image: 'images/desert-cup.png'
    },
    
    { 
        id: 14,
        name: 'كوب القهوة',
        category: 'أكواب',
        price: 30,
        image: 'images/logo-cup.png'
    },
    {
        id: 15,
        name: 'كوب مكتب',
        category: 'أكواب',
        price: 35,
        image: 'images/office-cup.png'
    },
    {
        id: 16,
        name: 'كوب مغامرة',
        category: 'أكواب',
        price: 35,
        image: 'images/adv-cup.png'
    },
    {
        id: 17,
        name: 'محصول يمني يافعي',
        category: 'محاصيل',
        price: 75,
        image: 'images/Coffee-Beans.png'
    },
    {
        id: 18,
        name: 'محصول اثيوبي',
        category: 'محاصيل',
        price: 55,
        image: 'images/‏‏Coffee-Beans2.png'
    },
    {
        id: 19,
        name: 'محصول برازيلي',
        category: 'محاصيل',
        price: 65,
        image: 'images/‏‏Coffee-Beans3.png'
    },
    {
        id: 20,
        name: 'محصول كولومبي',
        category: 'محاصيل',
        price: 45,
        image: 'images/‏‏Coffee-Beans4.png'
    },
    {
        id: 21,
        name: 'محصول اوغندي',
        category: 'محاصيل',
        price: 45,
        image: 'images/‏‏Coffee-Beans5.png'
    }
];

// --- (جديد) سنقوم بتعريف السلة هنا (خارج الدوم) لنحفظها
// (هذه هي الخطوة الأولى لجعل السلة "مشتركة")
// سنستخدم "localStorage" ليحفظ المتصفح السلة حتى لو أغلق المستخدم الصفحة
function getCartFromStorage() {
    const cart = localStorage.getItem('coffeeStoreCart');
    return cart ? JSON.parse(cart) : [];
}

function saveCartToStorage(cart) {
    localStorage.setItem('coffeeStoreCart', JSON.stringify(cart));
}

let cartItems = getCartFromStorage();


document.addEventListener('DOMContentLoaded', () => {

    // === الكود الخاص بصفحة المنتجات (products.html) ===
    const titleElement = document.getElementById('category-title');
    const gridContainer = document.getElementById('product-grid-container');

    // 1. قراءة "معيار الرابط" من الـ URL
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category'); 

    // 2. تحديث العنوان بناءً على ما جاء في الرابط
    if (category) {
        titleElement.innerText = ` ${category}`;
    } else {
        titleElement.innerText = 'كل المنتجات';
    }

    // 3. فلترة المنتجات
    let productsToShow = [];
    if (category) {
        productsToShow = products.filter(p => p.category === category);
    } else {
        productsToShow = products; // اعرض الكل
    }

    // 4. دالة لعرض المنتجات (هذه المرة كشبكة)
    function displayProductsInGrid(productsList) {
        if (!gridContainer) return; // تأكد أننا في الصفحة الصحيحة
        
        gridContainer.innerHTML = '';
        if (productsList.length === 0) {
            gridContainer.innerHTML = '<p class="text-white">لا توجد منتجات في هذا القسم حالياً.</p>';
            return;
        }

        productsList.forEach(product => {
            // (جديد) التحقق من السلة لتحديث الأزرار
            const itemInCart = cartItems.find(item => item.product.id == product.id);
            const isDisabled = itemInCart && itemInCart.quantity >= 10;
            
            const productCardHTML = `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="product-card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="product-name">${product.name}</h5>
                        <p class="product-price">${product.price} ر.س</p>
                        <button class="add-to-cart-btn" data-product-id="${product.id}" ${isDisabled ? 'disabled' : ''}>
                            ${isDisabled ? '<span><i class="bi bi-check-lg"></i> تمت الإضافة</span>' : '<span><i class="bi bi-bag"></i> أضف إلى السلة</span>'}
                        </button>
                    </div> 
                </div>
            </div>
            `;
            gridContainer.innerHTML += productCardHTML;
        });
    }

    // 5. تشغيل العرض
    displayProductsInGrid(productsToShow);


    // === (جديد) الكود المشترك (الذي كان في app.js) ===
    // (هذا الكود سيعمل الآن في products.html)

    const cartCounterElement = document.getElementById('cart-counter');
    const cartIcon = document.querySelector('.cart-icon-container');
    const cartModalBody = document.getElementById('cart-modal-body');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    const checkoutButton = document.querySelector('.btn-checkout');

    // (جديد) دالة لإعادة رسم جميع المنتجات (لتحديث الأزرار المعطلة)
    function refreshAllProducts() {
        // (بما أننا في صفحة المنتجات، نكتفي بتحديث الشبكة)
        displayProductsInGrid(productsToShow);
    }

    // (جديد) دالة لتحديث عداد السلة الإجمالي
    function updateCartCounter() {
        const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        cartCounterElement.innerText = totalCount;
    }

    // (جديد) دالة لفتح وتحديث النافذة المنبثقة
    function updateCartModal() {
        cartModalBody.innerHTML = '';
        
        if (cartItems.length === 0) {
            cartModalBody.innerHTML = '<p>سلتك فارغة حالياً.</p>';
            cartTotalPrice.innerText = '0 ر.س';
            return;
        }

        let total = 0;
        cartItems.forEach(item => {
            const itemHTML = `
                <div class="cart-item">
                    <img src="${item.product.image}" alt="${item.product.name}">
                    <div class="cart-item-details">
                        <h6>${item.product.name}</h6>
                        <p>${item.product.category}</p>
                    </div>
                    <div class="cart-quantity-controls">
                        <button class="btn-quantity" data-id="${item.product.id}" data-action="decrease">-</button>
                        <span>${item.quantity}</span>
                        <button class="btn-quantity" data-id="${item.product.id}" data-action="increase" ${item.quantity >= 10 ? 'disabled' : ''}>+</button>
                    </div>
                    <span class="cart-item-price">${item.product.price * item.quantity} ر.س</span>
                    <button class="btn-delete-item" data-id="${item.product.id}">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>
            `;
            cartModalBody.innerHTML += itemHTML;
            total += item.product.price * item.quantity;
        });

        cartTotalPrice.innerText = total + ' ر.س';
    }

    // (جديد) تفعيل سلة المشتريات (لتدعم الكميات)
    document.body.addEventListener('click', function(e) {
        const button = e.target.closest('.add-to-cart-btn');
        if (button && !button.disabled) {
            
            const productId = button.dataset.productId;
            const productToAdd = products.find(p => p.id == productId);
            const existingItem = cartItems.find(item => item.product.id == productId);

            if (existingItem) {
                if (existingItem.quantity < 10) {
                    existingItem.quantity++;
                }
                if (existingItem.quantity >= 10) {
                    button.innerHTML = '<span><i class="bi bi-check-lg"></i> تمت الإضافة</span>';
                    button.disabled = true;
                }
            } else {
                cartItems.push({ product: productToAdd, quantity: 1 });
            }
            
            if (!button.disabled) {
                const originalText = button.innerHTML;
                button.innerHTML = '<span><i class="bi bi-check-lg"></i> أضيف +1</span>';
                setTimeout(() => {
                    button.innerHTML = originalText;
                }, 1000); 
            }
            
            updateCartCounter(); 
            saveCartToStorage(cartItems); // (جديد) حفظ السلة
        }
    });

    // (جديد) تفعيل الضغط على أيقونة السلة
    cartIcon.addEventListener('click', () => {
        updateCartModal(); 
        cartModal.show();  
    });

    // (جديد) تفعيل أزرار الحذف والكمية داخل السلة
    cartModalBody.addEventListener('click', (e) => {
        const target = e.target;
        
        if (target.closest('.btn-delete-item')) {
            const button = target.closest('.btn-delete-item');
            const productId = button.dataset.id;
            cartItems = cartItems.filter(item => item.product.id != productId);
            
            updateCartModal();    
            updateCartCounter();  
            refreshAllProducts(); 
            saveCartToStorage(cartItems); // (جديد) حفظ السلة
        }

        if (target.closest('.btn-quantity')) {
            const button = target.closest('.btn-quantity');
            const productId = button.dataset.id;
            const action = button.dataset.action;
            const item = cartItems.find(item => item.product.id == productId);

            if (item) {
                if (action === 'increase' && item.quantity < 10) {
                    item.quantity++;
                } else if (action === 'decrease') {
                    item.quantity--;
                    if (item.quantity === 0) {
                        cartItems = cartItems.filter(i => i.product.id != productId);
                    }
                }
            }
            
            updateCartModal();    
            updateCartCounter();  
            refreshAllProducts(); 
            saveCartToStorage(cartItems); // (جديد) حفظ السلة
        }
    });
    
    // (جديد) تفعيل زر "الانتقال للدفع"
    checkoutButton.addEventListener('click', () => {
        if (cartItems.length === 0) {
            alert('سلتك فارغة! أضف بعض المنتجات أولاً.');
        } else {
            alert('شكراً لطلبك! سيتم نقلك لصفحة الدفع (وهمية).');
            cartModal.hide();
            cartItems = [];
            updateCartModal();
            updateCartCounter();
            refreshAllProducts();
            saveCartToStorage(cartItems); // (جديد) حفظ السلة
        }
    });
    
    // (جديد) تفعيل التمرير الناعم للروابط التي تشير لـ index.html
    document.querySelectorAll('.navbar a[href^="index.html#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 
            const href = this.getAttribute('href');
            // (بما أننا في صفحة مختلفة، ننتقل للرابط)
            window.location.href = href;
        });
    });

    // (جديد) تحديث العداد عند تحميل الصفحة
    updateCartCounter();
});