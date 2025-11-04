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
            id: 21, // (تم تصحيح الـ ID المكرر)
            name: 'محصول اوغندي',
            category: 'محاصيل',
            price: 45,
            image: 'images/‏‏Coffee-Beans5.png'
        }
    ];

    // --- (جديد) سنحول العداد إلى مصفوفة حقيقية ---
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
    // (نحتاج للـ Modal نفسه لكي نظهره)
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));


    // الخطوة 3: دالة لإنشاء وعرض المنتجات (مع إضافة data-product-id)
    function displayProducts(productsList, container) {
        if (!container) return;
        container.innerHTML = ''; 

        productsList.forEach(product => {
            const productCardHTML = `
                <div class="product-card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="product-name">${product.name}</h5>
                        <p class="product-price">${product.price} ر.س</p>
                        <button class="add-to-cart-btn" data-product-id="${product.id}">
                            <span><i class="bi bi-bag"></i> أضف إلى السلة</span>
                        </button>
                    </div> 
                </div>
            `;
            container.innerHTML += productCardHTML;
        });
    }

    // الخطوة 4: فلترة البيانات وتوزيعها (كما هي)
    const coffeeProducts = products.filter(product => product.category === 'قهوة');
    const sweetProducts = products.filter(product => product.category === 'حلويات');
    const cupProducts = products.filter(product => product.category === 'أكواب');
    const beanProducts = products.filter(product => product.category === 'محاصيل');

    // الخطوة 5: تشغيل الدالة لكل قسم (كما هي)
    displayProducts(coffeeProducts, coffeeContainer);
    displayProducts(sweetProducts, sweetsContainer);
    displayProducts(cupProducts, cupsContainer);
    displayProducts(beanProducts, beansContainer);

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

    // --- الخطوة 7: (ترقية) تفعيل سلة المشتريات ---
    document.body.addEventListener('click', function(e) {
        const button = e.target.closest('.add-to-cart-btn');
        if (button && !button.disabled) {
            
            // (جديد) ابحث عن المنتج بدلاً من مجرد العد
            const productId = button.dataset.productId;
            const productToAdd = products.find(p => p.id == productId);

            if(productToAdd) {
                // (جديد) أضف المنتج الفعلي للمصفوفة
                cartItems.push(productToAdd);
                
                // (تعديل) حدث العداد بناءً على طول المصفوفة
                cartCounterElement.innerText = cartItems.length;
            }
            
            // تغيير الزر بعد الضغط (كما هو)
            button.innerHTML = '<span><i class="bi bi-check-lg"></i> تمت الإضافة</span>';
            button.disabled = true; 
        }
    });

    // --- (جديد) الخطوة 8: دالة لفتح وتحديث النافذة المنبثقة ---
    function updateCartModal() {
        // 1. مسح المحتوى القديم
        cartModalBody.innerHTML = '';
        
        // 2. التحقق إذا كانت السلة فارغة
        if (cartItems.length === 0) {
            cartModalBody.innerHTML = '<p>سلتك فارغة حالياً.</p>';
            cartTotalPrice.innerText = '0 ر.س';
            return;
        }

        // 3. بناء كروت المنتجات داخل السلة
        let total = 0;
        cartItems.forEach(item => {
            const itemHTML = `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h6>${item.name}</h6>
                        <p>${item.category}</p>
                    </div>
                    <span class="cart-item-price">${item.price} ر.س</span>
                </div>
            `;
            cartModalBody.innerHTML += itemHTML;
            
            // 4. حساب الإجمالي
            total += item.price;
        });

        // 5. تحديث الإجمالي
        cartTotalPrice.innerText = total + ' ر.س';
    }

    // --- (جديد) الخطوة 9: تفعيل الضغط على أيقونة السلة ---
    cartIcon.addEventListener('click', () => {
        // 1. حدث بيانات النافذة
        updateCartModal();
        // 2. أظهر النافذة
        cartModal.show();
    });

    // --- الخطوة 10: تفعيل التمرير الناعم (كما هي) ---
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