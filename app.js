// ننتظر حتى يتم تحميل محتوى الصفحة بالكامل
document.addEventListener('DOMContentLoaded', () => {

    // الخطوة 1: تعريف "قاعدة البيانات الوهمية" للمنتجات
    const products = [
        {
            id: 1,
            name: 'براوني كيتو (قطعة)',
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
            id: 5,
            name: 'اسبريسو',
            category: 'قهوة',
            price: 24,
            image: 'images/Espresso.png'
        },
        {
            id: 6,
            name: 'كوكيز شوفان (قطعتين)',
            category: 'حلويات',
            price: 15,
            image: 'images/cookies.png'
        },
        {
            id: 7,
            name: 'كولد برو',
            category: 'قهوة',
            price: 18,
            image: 'images/cold-brew.png'
        },
        {
            id: 8,
            name: 'تشيزكيك توت نباتي',
            category: 'حلويات',
            price: 25,
            image: 'images/Cheesecake.png'
        }
    ];

    // الخطوة 2: الإمساك بالحاويات الجديدة (واحدة للقهوة وواحدة للحلويات)
    const coffeeContainer = document.getElementById('coffee-carousel-container');
    const sweetsContainer = document.getElementById('sweets-carousel-container');

    // الخطوة 3: دالة لإنشاء وعرض المنتجات (أصبحت تقبل "حاوية" كمدخل)
    function displayProducts(productsList, container) {
        
        // التأكد من أن الحاوية موجودة قبل محاولة الإضافة إليها
        if (!container) return;

        container.innerHTML = ''; 

        // المرور على كل منتج في القائمة
        productsList.forEach(product => {
            
            // إنشاء كود الـ HTML لكل كرت منتج
            // (ملاحظة: أزلنا كلاسات "col-*" لأن الكاروسيل يتحكم بالعرض)
            const productCardHTML = `
                <div class="product-card">
                    <img width="180px" height="200px" src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="product-name">${product.name}</h5>
                        <p class="product-price">${product.price} ر.س</p>
                        <button class="add-to-cart-btn">
                            <span class="bi bi-bag-plus"> أضف إلى السلة</span>
                        </button>
                    </div> 
                </div>
            `;
            
            // إضافة كود الـ HTML الجديد إلى الحاوية المحددة
            container.innerHTML += productCardHTML;
        });
    }

    // الخطوة 4: فلترة البيانات وتوزيعها
    const coffeeProducts = products.filter(product => product.category === 'قهوة');
    const sweetProducts = products.filter(product => product.category === 'حلويات');

    // الخطوة 5: تشغيل الدالة لكل قسم
    // أرسل منتجات القهوة إلى حاوية القهوة
    displayProducts(coffeeProducts, coffeeContainer);
    // أرسل منتجات الحلويات إلى حاوية الحلويات
    displayProducts(sweetProducts, sweetsContainer);

});