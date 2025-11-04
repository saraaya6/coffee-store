document.addEventListener('DOMContentLoaded', () => {

    // الخطوة 1: تعريف "قاعدة البيانات الوهمية" للمنتجات
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
            price: 0,
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
            id: 21, // (تم تصحيح الـ ID المكرر)
            name: 'محصول اوغندي',
            category: 'محاصيل',
            price: 45,
            image: 'images/‏‏Coffee-Beans5.png'
        }
    ];

    // --- (ترقية) مصفوفة السلة أصبحت تخزن المنتجات والكميات ---
    let cartItems = []; 
    // ---------------------------------------------

    // الخطوة 2: الإمساك بالحاويات
    const coffeeContainer = document.getElementById('coffee-carousel-container');
    const sweetsContainer = document.getElementById('sweets-carousel-container');
    const cupsContainer = document.getElementById('cups-carousel-container'); 
    const beansContainer = document.getElementById('beans-carousel-container'); 
    const cartCounterElement = document.getElementById('cart-counter');
    const cartIcon = document.querySelector('.cart-icon-container');
    const cartModalBody = document.getElementById('cart-modal-body');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    const checkoutButton = document.querySelector('.btn-checkout'); // (جديد)


    // الخطوة 3: دالة لإنشاء وعرض المنتجات (لا تحتاج تعديل)
    function displayProducts(productsList, container) {
        if (!container) return;
        container.innerHTML = ''; 

        productsList.forEach(product => {
            // (جديد) التحقق إذا كان المنتج معطلاً في السلة
            const itemInCart = cartItems.find(item => item.product.id == product.id);
            const isDisabled = itemInCart && itemInCart.quantity >= 50;
            
            const productCardHTML = `
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
            `;
            container.innerHTML += productCardHTML;
        });
    }

    // --- (جديد) دالة لإعادة رسم جميع أقسام المنتجات (لتحديث الأزرار المعطلة) ---
    function refreshAllProducts() {
        displayProducts(coffeeProducts, coffeeContainer);
        displayProducts(sweetProducts, sweetsContainer);
        displayProducts(cupProducts, cupsContainer);
        displayProducts(beanProducts, beansContainer);
    }
    
    // --- (جديد) دالة لتحديث عداد السلة الإجمالي ---
    function updateCartCounter() {
        // العداد الآن هو مجموع الكميات، وليس فقط عدد المنتجات
        const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        cartCounterElement.innerText = totalCount;
    }

    // الخطوة 4: فلترة البيانات وتوزيعها (كما هي)
    const coffeeProducts = products.filter(product => product.category === 'قهوة');
    const sweetProducts = products.filter(product => product.category === 'حلويات');
    const cupProducts = products.filter(product => product.category === 'أكواب');
    const beanProducts = products.filter(product => product.category === 'محاصيل');

    // الخطوة 5: تشغيل الدالة لكل قسم (كما هي)
    refreshAllProducts();

    // الخطوة 6: تفعيل السحب بالماوس (كما هي)
    const sliders = document.querySelectorAll('.product-carousel');
    sliders.forEach(slider => {
        let isDown = false, startX, scrollLeft;
        slider.addEventListener('mousedown', (e) => {
            isDown = true; slider.classList.add('active-drag');
            startX = e.pageX - slider.offsetLeft; scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseup', () => { isDown = false; slider.classList.remove('active-drag'); });
        slider.addEventListener('mouseleave', () => { isDown = false; slider.classList.remove('active-drag'); });
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return; e.preventDefault();
            const x = e.pageX - slider.offsetLeft; const walk = (x - startX) * 2; 
            slider.scrollLeft = scrollLeft - walk;
        });
    });

    // --- الخطوة 7: (ترقية) تفعيل سلة المشتريات (لتدعم الكميات) ---
    document.body.addEventListener('click', function(e) {
        const button = e.target.closest('.add-to-cart-btn');
        if (button && !button.disabled) {
            
            const productId = button.dataset.productId;
            const productToAdd = products.find(p => p.id == productId);
            
            // ابحث إذا كان المنتج موجوداً مسبقاً في السلة
            const existingItem = cartItems.find(item => item.product.id == productId);

            if (existingItem) {
                // (جديد) إذا موجود، زد الكمية (بحد أقصى 10)
                if (existingItem.quantity < 50) {
                    existingItem.quantity++;
                }
                // (جديد) تعطيل الزر إذا وصلت للحد الأقصى
                if (existingItem.quantity >= 50) {
                    button.innerHTML = '<span><i class="bi bi-check-lg"></i> تمت الإضافة</span>';
                    button.disabled = true;
                }
            } else {
                // (جديد) إذا غير موجود، أضفه بكمية 1
                cartItems.push({ product: productToAdd, quantity: 1 });
            }
            
            // (جديد) أظهر تأكيداً مؤقتاً على الزر
            if (!button.disabled) {
                const originalText = button.innerHTML;
                button.innerHTML = '<span><i class="bi bi-check-lg"></i> تم الاضافة . . </span>';
                setTimeout(() => {
                    button.innerHTML = originalText;
                }, 300); // إظهار الرسالة لثانية واحدة
            }
            
            updateCartCounter(); // تحديث العداد
        }
    });

    // --- الخطوة 8: (ترقية) دالة لفتح وتحديث النافذة المنبثقة (لتدعم الكميات والحذف) ---
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
                        <button class="btn-quantity" data-id="${item.product.id}" data-action="increase" ${item.quantity >= 50 ? 'disabled' : ''}>+</button>
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

    // --- الخطوة 9: تفعيل الضغط على أيقونة السلة (كما هي) ---
    cartIcon.addEventListener('click', () => {
        updateCartModal(); // حدث البيانات
        cartModal.show();  // أظهر النافذة
    });

    // --- (جديد) الخطوة 10: تفعيل أزرار الحذف والكمية داخل السلة ---
    cartModalBody.addEventListener('click', (e) => {
        const target = e.target;
        
        // إذا ضغطت "حذف"
        if (target.closest('.btn-delete-item')) {
            const button = target.closest('.btn-delete-item');
            const productId = button.dataset.id;
            
            // حذف المنتج من مصفوفة السلة
            cartItems = cartItems.filter(item => item.product.id != productId);
            
            updateCartModal();    // حدث عرض السلة
            updateCartCounter();  // حدث العداد
            refreshAllProducts(); // حدث الصفحة الرئيسية لإعادة تفعيل الزر
        }

        // إذا ضغطت "كمية" (+ أو -)
        if (target.closest('.btn-quantity')) {
            const button = target.closest('.btn-quantity');
            const productId = button.dataset.id;
            const action = button.dataset.action;
            
            const item = cartItems.find(item => item.product.id == productId);

            if (item) {
                if (action === 'increase' && item.quantity < 50) {
                    item.quantity++;
                } else if (action === 'decrease') {
                    item.quantity--;
                    if (item.quantity === 0) {
                        // إذا وصلت الكمية 0، احذفه
                        cartItems = cartItems.filter(i => i.product.id != productId);
                    }
                }
            }
            
            updateCartModal();    // حدث عرض السلة
            updateCartCounter();  // حدث العداد
            refreshAllProducts(); // حدث الصفحة الرئيسية لتحديث الأزرار
        }
    });
    
    // --- (جديد) الخطوة 11: تفعيل زر "الانتقال للدفع" ---
    checkoutButton.addEventListener('click', () => {
        if (cartItems.length === 0) {
            alert('سلتك فارغة! أضف بعض المنتجات أولاً.');
        } else {
            // (كمشروع واجهة أمامية، سنكتفي بإظهار رسالة)
            alert('شكراً لطلبك! سيتم نقلك لصفحة الدفع .');
            // (هنا يمكنك إخفاء النافذة وإعادة تعيين السلة)
            cartModal.hide();
            cartItems = [];
            updateCartModal();
            updateCartCounter();
            refreshAllProducts();
        }
    });

    // --- الخطوة 12: تفعيل التمرير الناعم (كما هي) ---
    document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

});