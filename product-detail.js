// الخطوة 1: مصفوفة المنتجات (مع الأوصاف التسويقية)
const products = [
    {
        id: 1,
        name: 'براوني بروتين (قطعة)',
        category: 'حلويات',
        price: 18,
        image: 'images/brouniii.png',
        description: 'قطعة براوني غنية بالبروتين ومناسبة للكيتو، محضرة من دقيق اللوز والكاكاو الهولندي الفاخر، ومحلاة بالمونك فروت. 12 جرام بروتين، 3 جرام كارب فقط!'
    },
    {
        id: 2,
        name: 'كيكة جزر صحية (شريحة)',
        category: 'حلويات',
        price: 22,
        image: 'images/carrot-cake.png',
        description: 'شريحة من كيكة الجزر الطازجة والغنية بالجوز والبهارات الدافئة. محضرة من دقيق الشوفان ومحلاة بسكر التمر الطبيعي، مع طبقة كريمة الجبن الصحية.'
    },
    {
        id: 3,
        name: 'قهوة V60 باردة',
        category: 'قهوة',
        price: 20,
        image: 'images/V60.png',
        description: 'قهوة مقطرة باردة V60 محضرة من أجود أنواع البن الإثيوبي. تتميز بإيحاءات فاكهية منعشة وقوام خفيف. مثالية ليوم حار.'
    },
    {
        id: 4,
        name: 'كرات طاقة بالتمر',
        category: 'حلويات',
        price: 12,
        image: 'images/ball-dates.png',
        description: 'كرات الطاقة المثالية لسناك سريع وصحي! مصنوعة من التمر الفاخر، الشوفان، والمكسرات الغنية، ومغطاة بجوز الهند أو الفستق. دفعة طاقة طبيعية بدون سكر مضاف.'
    },
    {
        id: 5,
        name: 'سبانش لاتيه ',
        category: 'قهوة',
        price: 18,
        image: 'images/latte.png',
        description: 'دلل نفسك مع السبانش لاتيه الصحي! مزيج كريمي من الإسبريسو الغني مع الحليب (نباتي حسب اختيارك) ولمسة حلاوة طبيعية من الحليب المكثف الصحي المحضر منزلياً. الطعم الكلاسيكي، بضمير مرتاح.'
    },
    {
        id: 6,
        name: 'اسبريسو',
        category: 'قهوة',
        price: 24,
        image: 'images/Espresso.png',
        description: 'النقي، القوي، والأصيل. شوت إسبريسو كلاسيكي مستخلص من أجود حبوب البن لدينا. قوام كريمي ونكهة مركزة تبدأ بها يومك.'
    },
    {
        id: 7,
        name: 'كوكيز شوفان (قطعتين)',
        category: 'حلويات',
        price: 15,
        image: 'images/cookies.png',
        description: 'قطعتان من الكوكيز الصحي الذي لا يقاوم! مخبوزة بالشوفان الكامل وحبيبات الشوكولاتة الداكنة، ومحلاة بلمسة من العسل. متعة مثالية بجانب قهوتك.'
    },
    {
        id: 8,
        name: 'كولد برو',
        category: 'قهوة',
        price: 18,
        image: 'images/cold-brew.png',
        description: 'قهوتنا الباردة المميزة (كولد برو)، منقوعة ببطء لمدة 18 ساعة لاستخلاص نكهات عميقة وسلسة بحموضة منخفضة. انتعاش فوري وقوة تدوم.'
    },
    {
        id: 9,
        name: 'تشيزكيك توت نباتي',
        category: 'حلويات',
        price: 25,
        image: 'images/Cheesecake.png',
        description: 'قطعة كريمية وغنية من التشيزكيك النباتي (Vegan) الصحي. محضرة من الكاجو وطبقة بسكويت باللوز، مغطاة بصوص التوت الطبيعي الخالي من السكر المكرر.'
    },
    {
        id: 10,
        name: ' لاتيه مثلج',
        category: 'قهوة',
        price: 18,
        image: 'images/iced-latte.png',
        description: 'الانتعاش الكلاسيكي. شوت إسبريسو غني ممزوج مع الحليب البارد (نباتي حسب اختيارك) وقطع الثلج. بسيط، منعش، ومثالي.'
    },
    {
        id: 11,
        name: 'كوب كتب',
        category: 'أكواب',
        price: 35,
        image: 'images/books-cup.png',
        description: 'الكوب المثالي لمحبي القراءة. تصميم أنيق يجمع بين شغف القهوة والكتب. مصنوع من السيراميك عالي الجودة لحفظ حرارة مشروبك أثناء جلسات القراءة الطويلة.'
    },
    {
        id: 12,
        name: 'كوب فن',
        category: 'أكواب',
        price: 35,
        image: 'images/art-cup.png',
        description: 'أطلق العنان لإبداعك مع كل رشفة! هذا الكوب الفني بتصميمه الملون هو الرفيق المثالي لجلساتك الإبداعية. "الإبداع يغذي كوبي".'
    },
    {
        id: 13,
        name: 'كوب صحراء',
        category: 'أكواب',
        price: 35,
        image: 'images/desert-cup.png',
        description: 'تصميم مستوحى من هدوء وجمال الصحراء. كوب بتفاصيل ذهبية أنيقة وزخارف عربية يضيف لمسة من الفخامة والسلام لقهوتك الصباحية. "السلام في كل كوب".'
    },
    { 
        id: 14,
        name: 'كوب القهوة',
        category: 'أكواب',
        price: 30,
        image: 'images/logo-cup.png',
        description: 'الكوب الرسمي لمتجرنا! تصميم بسيط وأنيق يحمل شعارنا. مصنوع من السيراميك المتين، وهو الكوب المثالي للاستمتاع بقهوتك اليومية.'
    },
    {
        id: 15,
        name: 'كوب مكتب',
        category: 'أكواب',
        price: 35,
        image: 'images/office-cup.png',
        description: 'لأبطال العمل المكتبي. هذا الكوب يذكرك بأنك "مدعوم بالقهوة". الهدية المثالية لزميل العمل أو لإضافة لمسة مرحة لمكتبك.'
    },
    {
        id: 16,
        name: 'كوب مغامرة',
        category: 'أكواب',
        price: 35,
        image: 'images/adv-cup.png',
        description: 'لأرواح المغامرين. تصميم مستوحى من الطبيعة والجبال. ابدأ يومك بكوب يذكرك بأن "المغامرة بانتظارك". رائع للمشروبات الساخنة في المنزل أو في رحلتك القادمة.'
    },
    {
        id: 17,
        name: 'محصول يمني يافعي',
        category: 'محاصيل',
        price: 75,
        image: 'images/Coffee-Beans.png',
        description: 'جوهرة نادرة من مرتفعات يافع باليمن. محصول فاخر بمعالجة مجففة، يتميز بإيحاءات الزبيب، التوابل، ولمسة من العسل. قوام غني وتجربة فريدة.'
    },
    {
        id: 18,
        name: 'محصول اثيوبي',
        category: 'محاصيل',
        price: 55,
        image: 'images/‏‏Coffee-Beans2.png',
        description: 'من أشهر بقاع القهوة، يأتي هذا المحصول الإثيوبي الفاخر. توقع نكهات فاكهية مشرقة، حموضة متوازنة، وإيحاءات زهرية تشبه الياسمين. مثالي للتقطير (V60).'
    },
    {
        id: 19,
        name: 'محصول برازيلي',
        category: 'محاصيل',
        price: 65,
        image: 'images/‏‏Coffee-Beans3.png',
        description: 'كلاسيكية لا غنى عنها. محصول برازيلي بمعالجة مجففة، يقدم قواماً ممتلئاً، وإيحاءات كلاسيكية من الشوكولاتة، المكسرات، وحلاوة الكراميل. رائع للإسبريسو ومشروبات الحليب.'
    },
    {
        id: 20,
        name: 'محصول كولومبي',
        category: 'محاصيل',
        price: 45,
        image: 'images/‏‏Coffee-Beans4.png',
        description: 'توازن مثالي في كوبك. محصول كولومبي مغسول، يتميز بحموضة متوسطة، نكهات مكسرات، ولمسات خفيفة من الفاكهة الحمراء. قهوة متوازنة تناسب كل الأوقات.'
    },
    {
        id: 21,
        name: 'محصول اوغندي',
        category: 'محاصيل',
        price: 45,
        image: 'images/‏‏Coffee-Beans5.png',
        description: 'اكتشف النكهة الأفريقية الغنية. محصول أوغندي يتميز بقوام ثقيل، إيحاءات الشوكولاتة الداكنة، ولمسة من نكهة الحلو. تجربة جريئة ومختلفة.'
    }
];

// --- دوال الـ localStorage لجعل السلة مشتركة ---
function getCartFromStorage() {
    const cart = localStorage.getItem('coffeeStoreCart');
    return cart ? JSON.parse(cart) : [];
}

function saveCartToStorage(cart) {
    localStorage.setItem('coffeeStoreCart', JSON.stringify(cart));
}

let cartItems = getCartFromStorage();


document.addEventListener('DOMContentLoaded', () => {

    // === (جديد) الكود الخاص بصفحة تفاصيل المنتج ===
    const productDetailContainer = document.getElementById('product-detail-container');

    // 1. قراءة الـ "id" من الرابط
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    // 2. البحث عن المنتج في المصفوفة
    const product = products.find(p => p.id == productId);

    // 3. عرض المنتج (أو رسالة خطأ)
    if (product && productDetailContainer) {

        // التحقق من حالة الزر (هل هو مضاف؟ هل وصل للحد؟)
        const itemInCart = cartItems.find(item => item.product.id == product.id);
        const isDisabled = itemInCart && itemInCart.quantity >= 10;

        const productDetailHTML = `
        <div class="row">
            <div class="col-md-6">
                <img src="${product.image}" class="img-fluid product-detail-image" alt="${product.name}">
            </div>
            <div class="col-md-6 product-detail-info">
                <h2 class="product-detail-title">${product.name}</h2>
                <p class="product-detail-category">${product.category}</p>
                <h3 class="product-detail-price">${product.price} ر.س</h3>
                <p class="product-detail-description">
                    ${product.description || 'لا يتوفر وصف لهذا المنتج حالياً.'}
                </p>
                <button class="add-to-cart-btn" data-product-id="${product.id}" ${isDisabled ? 'disabled' : ''}>
                    ${isDisabled ? '<span><i class="bi bi-check-lg"></i> تمت الإضافة</span>' : '<span><i class="bi bi-bag"></i> أضف إلى السلة</span>'}
                </button>
            </div>
        </div>
        `;
        productDetailContainer.innerHTML = productDetailHTML;
    } else if (productDetailContainer) {
        productDetailContainer.innerHTML = '<h2 class="text-white text-center">عذراً، لم نتمكن من العثور على هذا المنتج.</h2>';
    }


    // === الكود المشترك (السلة والنافبار) ===

    const cartCounterElement = document.getElementById('cart-counter');
    const cartIcon = document.querySelector('.cart-icon-container');
    const cartModalBody = document.getElementById('cart-modal-body');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    const checkoutButton = document.querySelector('.btn-checkout');

    // (جديد) دالة لإعادة رسم الأزرار في هذه الصفحة
    function refreshAllProducts() {
        // (بما أننا في صفحة التفاصيل، نكتفي بتحديث الزر الوحيد الموجود)
        const button = document.querySelector('.product-detail-info .add-to-cart-btn');
        if (!button) return;

        const productId = button.dataset.productId;
        const itemInCart = cartItems.find(item => item.product.id == productId);
        const isDisabled = itemInCart && itemInCart.quantity >= 10;

        button.disabled = isDisabled;
        button.innerHTML = isDisabled ? '<span><i class="bi bi-check-lg"></i> تمت الإضافة</span>' : '<span><i class="bi bi-bag"></i> أضف إلى السلة</span>';
    }

    // دالة لتحديث عداد السلة الإجمالي
    function updateCartCounter() {
        const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        cartCounterElement.innerText = totalCount;
    }

    // دالة لفتح وتحديث النافذة المنبثقة
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

    // تفعيل سلة المشتريات
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
                const originalText = '<span><i class="bi bi-bag"></i> أضف إلى السلة</span>';
                button.innerHTML = '<span><i class="bi bi-check-lg"></i> أضيف +1</span>';
                setTimeout(() => {
                    const item = cartItems.find(item => item.product.id == productId);
                    if (!item || item.quantity < 10) {
                        button.innerHTML = originalText;
                    }
                }, 1000); 
            }

            updateCartCounter(); 
            saveCartToStorage(cartItems); 
        }
    });

    // تفعيل الضغط على أيقونة السلة
    cartIcon.addEventListener('click', () => {
        updateCartModal(); 
        cartModal.show();  
    });

    // تفعيل أزرار الحذف والكمية داخل السلة
    cartModalBody.addEventListener('click', (e) => {
        const target = e.target;

        if (target.closest('.btn-delete-item')) {
            const button = target.closest('.btn-delete-item');
            const productId = button.dataset.id;
            cartItems = cartItems.filter(item => item.product.id != productId);

            updateCartModal();    
            updateCartCounter();  
            refreshAllProducts(); // (لتحديث زر الإضافة في هذه الصفحة)
            saveCartToStorage(cartItems); 
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
            saveCartToStorage(cartItems); 
        }
    });

    // تفعيل زر "الانتقال للدفع"
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
            saveCartToStorage(cartItems); 
        }
    });

    // تفعيل التمرير الناعم (للرجوع للرئيسية)
    document.querySelectorAll('.navbar a[href^="index.html#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 
            const href = this.getAttribute('href');
            window.location.href = href;
        });
    });

    // تحديث العداد عند تحميل الصفحة
    updateCartCounter();
});