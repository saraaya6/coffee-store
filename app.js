document.addEventListener('DOMContentLoaded', () => {

    // الخطوة 1: تعريف "قاعدة البيانات الوهمية" للمنتجات (مع تصحيح IDs)
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
        }
    ];

    // الخطوة 2: الإمساك بالحاويات
    const coffeeContainer = document.getElementById('coffee-carousel-container');
    const sweetsContainer = document.getElementById('sweets-carousel-container');

    // الخطوة 3: دالة لإنشاء وعرض المنتجات (مع أيقونة سلة أنيقة)
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
                        <button class="add-to-cart-btn">
                            <span><i class="bi bi-bag"></i> أضف إلى السلة</span>
                        </button>
                    </div> 
                </div>
            `;
            container.innerHTML += productCardHTML;
        });
    }

    // الخطوة 4: فلترة البيانات وتوزيعها
    const coffeeProducts = products.filter(product => product.category === 'قهوة');
    const sweetProducts = products.filter(product => product.category === 'حلويات');

    // الخطوة 5: تشغيل الدالة لكل قسم
    displayProducts(coffeeProducts, coffeeContainer);
    displayProducts(sweetProducts, sweetsContainer);

    // --- الخطوة 6: تفعيل السحب بالماوس (Drag-to-Scroll) ---
    const sliders = document.querySelectorAll('.product-carousel');
    sliders.forEach(slider => {
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active-drag');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active-drag');
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active-drag');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; 
            slider.scrollLeft = scrollLeft - walk;
        });
    });

    // --- الخطوة 7: تفعيل سلة المشتريات (بالتصميم الجديد) ---
    let cartCount = 0;
    const cartCounterElement = document.getElementById('cart-counter');
    // (يجب أن ننتظر حتى يتم إنشاء الأزرار ثم نربطها)
    // نستخدم "Event Delegation" لضمان عمل الأزرار التي تم إنشاؤها
    document.body.addEventListener('click', function(e) {
        // ابحث عن أقرب زر تم الضغط عليه
        const button = e.target.closest('.add-to-cart-btn');

        // تأكد أنه زر سلة وليس زر معطل
        if (button && !button.disabled) {
            cartCount++;
            cartCounterElement.innerText = cartCount;

            // تغيير الزر بعد الضغط
            button.innerHTML = '<span><i class="bi bi-check-lg"></i> تمت الإضافة</span>';
            button.disabled = true; // تعطيل الزر (ليأخذ تنسيق CSS)
        }
    });

    // --- الخطوة 8: تفعيل التمرير الناعم (Smooth Scroll) ---
    document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});