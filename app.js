document.addEventListener('DOMContentLoaded', () => {

    // الخطوة 1: تعريف "قاعدة البيانات الوهمية" للمنتجات (مع إضافة الأكواب والمحاصيل)
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
        // --- المنتجات الجديدة: أكواب ---
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
        // --- المنتجات الجديدة: محاصيل ---
        {
            id: 17,
            name: 'محصول يمني يافعي',
            category: 'محاصيل',
            price: 75,
            image: 'images/Coffee-Beans.png' // (استخدمت الصور المتاحة كمثال)
        },
        {
            id: 18,
            name: 'محصول اثيوبي',
            category: 'محاصيل',
            price: 55,
            image: 'images/‏‏Coffee-Beans2.png' // (استخدمت الصور المتاحة كمثال)
        },
        {
            id: 19,
            name: 'محصول برازيلي',
            category: 'محاصيل',
            price: 65,
            image: 'images/‏‏Coffee-Beans3.png' // (استخدمت الصور المتاحة كمثال)
        },
        {
            id: 20,
            name: 'محصول كولومبي',
            category: 'محاصيل',
            price: 45,
            image: 'images/‏‏Coffee-Beans4.png' // (استخدمت الصور المتاحة كمثال)
        },
        {
            id: 20,
            name: 'محصول اوغندي',
            category: 'محاصيل',
            price: 45,
            image: 'images/‏‏Coffee-Beans5.png' // (استخدمت الصور المتاحة كمثال)
        }
    ];

    // الخطوة 2: الإمساك بالحاويات (مع إضافة الحاويات الجديدة)
    const coffeeContainer = document.getElementById('coffee-carousel-container');
    const sweetsContainer = document.getElementById('sweets-carousel-container');
    const cupsContainer = document.getElementById('cups-carousel-container'); // (جديد)
    const beansContainer = document.getElementById('beans-carousel-container'); // (جديد)


    // الخطوة 3: دالة لإنشاء وعرض المنتجات (لا تحتاج تعديل)
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

    // الخطوة 4: فلترة البيانات وتوزيعها (مع إضافة الفلاتر الجديدة)
    const coffeeProducts = products.filter(product => product.category === 'قهوة');
    const sweetProducts = products.filter(product => product.category === 'حلويات');
    const cupProducts = products.filter(product => product.category === 'أكواب'); // (جديد)
    const beanProducts = products.filter(product => product.category === 'محاصيل'); // (جديد)

    // الخطوة 5: تشغيل الدالة لكل قسم (مع إضافة الأقسام الجديدة)
    displayProducts(coffeeProducts, coffeeContainer);
    displayProducts(sweetProducts, sweetsContainer);
    displayProducts(cupProducts, cupsContainer); // (جديد)
    displayProducts(beanProducts, beansContainer); // (جديد)

    // --- الخطوة 6: تفعيل السحب بالماوس (Drag-to-Scroll) ---
    // (الكود يعمل كما هو لجميع الأقسام الجديدة)
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
    // (الكود يعمل كما هو لجميع الأزرار الجديدة)
    let cartCount = 0;
    const cartCounterElement = document.getElementById('cart-counter');
    document.body.addEventListener('click', function(e) {
        const button = e.target.closest('.add-to-cart-btn');
        if (button && !button.disabled) {
            cartCount++;
            cartCounterElement.innerText = cartCount;
            button.innerHTML = '<span><i class="bi bi-check-lg"></i> تمت الإضافة</span>';
            button.disabled = true; 
        }
    });

    // --- الخطوة 8: تفعيل التمرير الناعم (Smooth Scroll) ---
    // (الكود يعمل كما هو للروابط الجديدة)
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