// ننتظر حتى يتم تحميل محتوى الصفحة بالكامل
document.addEventListener('DOMContentLoaded', () => {

    // الخطوة 1: تعريف "قاعدة البيانات الوهمية" للمنتجات
    // هذه هي البيانات الحقيقية لمشروعك
    const products = [
        {
            id: 1,
            name: 'براوني كيتو (قطعة)',
            category: 'حلويات',
            price: 18,
            image: 'images/keto-brownie.jpg' // تأكدي من وضع صورة بهذا الاسم في مجلد images
        },
        {
            id: 2,
            name: 'كيكة جزر صحية (شريحة)',
            category: 'حلويات',
            price: 22,
            image: 'images/carrot-cake.jpg' 
        },
        {
            id: 3,
            name: 'قهوة V60 باردة',
            category: 'قهوة',
            price: 20,
            image: 'images/v60-cold.jpg'
        },
        {
            id: 4,
            name: 'كرات طاقة بالتمر',
            category: 'حلويات',
            price: 12,
            image: 'images/date-balls.jpg'
        },
        {
            id: 5,
            name: 'سبانش لاتيه (حليب لوز)',
            category: 'قهوة',
            price: 24,
            image: 'images/spanish-latte.jpg'
        },
        {
            id: 6,
            name: 'كوكيز شوفان (قطعتين)',
            category: 'حلويات',
            price: 15,
            image: 'images/oat-cookies.jpg'
        },
        {
            id: 7,
            name: 'كولد برو',
            category: 'قهوة',
            price: 18,
            image: 'images/cold-brew.jpg'
        },
        {
            id: 8,
            name: 'تشيزكيك توت نباتي',
            category: 'حلويات',
            price: 25,
            image: 'images/vegan-cheesecake.jpg'
        }
    ];

    // الخطوة 2: الإمساك بالحاوية التي أنشأناها في index.html
    const productContainer = document.getElementById('product-list-container');

    // الخطوة 3: دالة لإنشاء وعرض المنتجات
    function displayProducts(productsToDisplay) {
        
        // مسح المحتوى القديم (مهم لخطوة الفلترة لاحقاً)
        productContainer.innerHTML = ''; 

        // المرور على كل منتج في القائمة
        productsToDisplay.forEach(product => {
            
            // إنشاء كود الـ HTML لكل كرت منتج
            // (استخدمنا نفس الكلاسات من ملف index.html الأصلي)
            const productCardHTML = `
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
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
                </div>
            `;
            
            // إضافة كود الـ HTML الجديد إلى الحاوية
            productContainer.innerHTML += productCardHTML;
        });
    }

    // الخطوة 4: تشغيل الدالة لعرض جميع المنتجات عند فتح الصفحة
    displayProducts(products);

});

// (الكود هذا يضاف داخل app.js، بعد تعريف productContainer)

// الخطوة 5: الإمساك بأزرار الفلترة
const filterAllBtn = document.getElementById('filter-all');
const filterCoffeeBtn = document.getElementById('filter-coffee');
const filterSweetsBtn = document.getElementById('filter-sweets');
// نمسك كل الأزرار لكي نتحكم بكلاس 'active'
const allFilterButtons = document.querySelectorAll('.btn-filter');

// دالة صغيرة لإدارة الكلاس 'active' بين الأزرار
function setActiveButton(activeBtn) {
    // أولاً: أزل 'active' من كل الأزرار
    allFilterButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    // ثانياً: أضف 'active' للزر الذي تم الضغط عليه
    activeBtn.classList.add('active');
}

// الخطوة 6: إضافة مستمعي الأحداث (Event Listeners) للأزرار

// زر "الكل"
filterAllBtn.addEventListener('click', () => {
    setActiveButton(filterAllBtn); // تفعيل الزر
    displayProducts(products); // اعرض جميع المنتجات
});

// زر "قهوة"
filterCoffeeBtn.addEventListener('click', () => {
    setActiveButton(filterCoffeeBtn); // تفعيل الزر
    // نستخدم دالة .filter لإنشاء مصفوفة جديدة
    const coffeeProducts = products.filter(product => product.category === 'قهوة');
    displayProducts(coffeeProducts); // اعرض القهوة فقط
});

// زر "حلويات"
filterSweetsBtn.addEventListener('click', () => {
    setActiveButton(filterSweetsBtn); // تفعيل الزر
    const sweetProducts = products.filter(product => product.category === 'حلويات');
    displayProducts(sweetProducts); // اعرض الحلويات فقط
});