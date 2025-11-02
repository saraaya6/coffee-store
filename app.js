// ننتظر حتى يتم تحميل محتوى الصفحة بالكامل
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
            id: 6, // <-- تم التصحيح
            name: 'اسبريسو',
            category: 'قهوة',
            price: 24,
            image: 'images/Espresso.png'
        },
        {
            id: 7, // <-- تم التصحيح
            name: 'كوكيز شوفان (قطعتين)',
            category: 'حلويات',
            price: 15,
            image: 'images/cookies.png'
        },
        {
            id: 8, // <-- تم التصحيح
            name: 'كولد برو',
            category: 'قهوة',
            price: 18,
            image: 'images/cold-brew.png'
        },
        {
            id: 9, // <-- تم التصحيح
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
                         <span><i class="bi bi-bag"></i> أضف إلى السلة</span>
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
// --- الخطوة 6: تفعيل السحب بالماوس (Drag-to-Scroll) ---
    
    // 1. نمسك بكل الكاروسيلات (الأقسام المتحركة)
    const sliders = document.querySelectorAll('.product-carousel');
    
    sliders.forEach(slider => {
        let isDown = false; // هل الماوس مضغوط؟
        let startX;       // أين بدأ الضغط؟
        let scrollLeft;   // أين كان مكان التمرير؟

        // عندما تضغط بالماوس على الكاروسيل
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active-drag'); // أضف كلاس لتغيير شكل الماوس
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        
        // عندما تترك الماوس
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active-drag');
        });

        // عندما يغادر الماوس منطقة الكاروسيل
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active-drag');
        });

        // عندما يتحرك الماوس
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return; // توقف إذا لم يكن الماوس مضغوطاً
            
            e.preventDefault(); // امنع السلوك الافتراضي (مثل تحديد النص)
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // ( * 2 لجعل السحب أسرع)
            slider.scrollLeft = scrollLeft - walk;
        });
    });

// --- الخطوة 7: تفعيل التمرير الناعم (Smooth Scroll) ---

// امسك بكل الروابط في النافبار (الشعار + الروابط العادية)
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // امنع القفز الافتراضي

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // اجعل الصفحة تنزلق بنعومة إلى القسم المطلوب
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

});


// --- الخطوة 7: تفعيل سلة المشتريات ---
let cartCount = 0;
const cartCounterElement = document.getElementById('cart-counter');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 1. زيادة العداد
        cartCount++;

        // 2. تحديث الرقم الظاهر في السلة
        cartCounterElement.innerText = cartCount;

        // 3. (تعديل) تغيير الزر بعد الضغط
        button.innerHTML = '<span><i class="bi bi-check-lg"></i> تمت الإضافة</span>';
        button.disabled = true;
    });
});

// --- الخطوة 8: تفعيل التمرير الناعم (Smooth Scroll) ---
// (أضفت هذا الكود أيضاً لأنه ناقص لديكِ)
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // منع القفز الافتراضي

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // اجعل التمرير ناعماً
            });
        }
    });
});


});
