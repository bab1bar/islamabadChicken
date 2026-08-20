const products = [

    {
        id: 1,
        category: "Chicken",
        name_en: "Whole Chicken",
        name_ur: "پورا چکن",
        price: 900,
        unit: "kg",
        photo: "https://raw.githubusercontent.com/bab1bar/Raja-meat-Shop/aae95908c941cc7db331d8a791de4b409e255d74/whole-chicken.png"
    },

    {
        id: 2,
        category: "Chicken",
        name_en: "Whole Chicken (Peeled)",
        name_ur: "پورا چکن (جلد اترا ہوا)",
        price: 1200,
        unit: "kg",
        photo: "https://raw.githubusercontent.com/bab1bar/Raja-meat-Shop/aae95908c941cc7db331d8a791de4b409e255d74/whole-chicken.png"
    },

    {
        id: 3,
        category: "Chicken",
        name_en: "Tikka Cut",
        name_ur: "تکہ کٹ",
        price: 500,
        unit: "piece",
        photo: "images/tikka.png"
    },

    {
        id: 4,
        category: "Chicken",
        name_en: "Karahi Cut",
        name_ur: "کڑاہی کٹ",
        price: 800,
        unit: "kg",
        photo: "images/karahi-cut.PNG"
    },

    {
        id: 5,
        category: "Chicken",
        name_en: "Pota & Kaleji",
        name_ur: "پوٹھا اور کلیجی",
        price: 400,
        unit: "kg",
        photo: "images/pota-kaleji.png"
    },

    {
        id: 6,
        category: "Chicken",
        name_en: "Chicken Neck",
        name_ur: "چکن کی گردن",
        price: 399,
        unit: "kg",
        photo: "images/neck.png"
    },

    {
        id: 7,
        category: "Chicken",
        name_en: "Golden Pieces",
        name_ur: "گولڈن پیسز",
        price: 950,
        unit: "kg",
        photo: "images/golden-pieces.png"
    },

    {
        id: 8,
        category: "Chicken",
        name_en: "Chicken Tail",
        name_ur: "چکن کی دم",
        price: 200,
        unit: "kg",
        photo: "images/chicken-tail.png"
    },

    {
        id: 9,
        category: "Chicken",
        name_en: "Chicken Wings",
        name_ur: "چکن ونگز",
        price: 350,
        unit: "kg",
        photo: "images/full-wings.png"
    },

    {
        id: 10,
        category: "Chicken",
        name_en: "Chicken Head",
        name_ur: "چکن کا سر",
        price: 150,
        unit: "kg",
        photo: "images/heads.png"
    },

    {
        id: 11,
        category: "Chicken",
        name_en: "Chicken Feet",
        name_ur: "چکن کے پنجے",
        price: 600,
        unit: "kg",
        photo: "images/panjy.png"
    },

    {
        id: 12,
        category: "Chicken",
        name_en: "Stir Fry",
        name_ur: "اسٹر فرائی",
        price: 1500,
        unit: "kg",
        photo: "images/stir-fry.jpg"
    },

    {
        id: 13,
        category: "Chicken",
        name_en: "Boneless Chicken",
        name_ur: "بون لیس چکن",
        price: 1400,
        unit: "kg",
        photo: "images/boneless-cut.png"
    },

    {
        id: 14,
        category: "Chicken",
        name_en: "Drumsticks with Skin",
        name_ur: "جلد سمیت چکن ڈرم اسٹکس",
        price: 1300,
        unit: "kg",
        photo: "images/drumstick-skin.png"
    },

    {
        id: 15,
        category: "Chicken",
        name_en: "Drumsticks without Skin",
        name_ur: "جلد کے بغیر چکن ڈرم اسٹکس",
        price: 1500,
        unit: "kg",
        photo: "images/drumstickpeel.png"
    },

    {
        id: 16,
        category: "Chicken",
        name_en: "Desi Chicken",
        name_ur: "دیسی چکن",
        price: 2999,
        unit: "kg",
        photo: "images/desi-chicken.png"
    },

    {
        id: 17,
        category: "Chicken",
        name_en: "Chicken Breast",
        name_ur: "چکن بریسٹ",
        price: 1700,
        unit: "kg",
        photo: "images/breastfull.PNG"
    },

    {
        id: 18,
        category: "Chicken",
        name_en: "Chicken Thigh",
        name_ur: "چکن ران",
        price: 1350,
        unit: "kg",
        photo: "images/thighpeel.PNG"
    },

    // {
    //     id: 1,
    //     category: "Chicken",
    //     name_en: "Chicken Leg",
    //     name_ur: "چکن لیگ",
    //     price: 1020,
    //     unit: "kg",
    //     photo: "images/chicken-leg.png"
    // },

    {
        id: 19,
        category: "Chicken",
        name_en: "Chicken Liver",
        name_ur: "چکن کلیجی",
        price: 400,
        unit: "kg",
        photo: "images/kalegi.png"
    }

];


// Show Products

const productList = document.getElementById("product-list");

products.forEach(function(product) {

    productList.innerHTML += `

        <div class="product-card">

            <img 
                src="${product.photo}" 
                alt="${product.name_en}"
            >

            <h3>${product.name_en}</h3>

            <p>${product.name_ur}</p>

            <p>
                Rs. ${product.price} / ${product.unit}
            </p>

           <button class="add-to-cart" data-id="${product.id}">
    Add to Cart
</button>
        </div>

    `;

});

let cart = [];

const cartCount = document.getElementById("cartCount");

productList.addEventListener("click", function(event) {

    if (event.target.classList.contains("add-to-cart")) {

        const productId = Number(event.target.dataset.id);

        const product = products.find(function(product) {
            return product.id === productId;
        });

        if (product) {
            cart.push(product);
            cartCount.textContent = cart.length;
        }

if (product) {

    const existingItem = cart.find(function(item) {
        return item.product.id === product.id;
    });

    if (existingItem) {

        existingItem.quantity++;
        

    } else {

        cart.push({
            product: product,
            quantity: 1
        });

    }

    updateCartCount();
}



    }

});
























































function updateCartCount() {

    function updateCartTotal() {

    let total = 0;

    cart.forEach(function(item) {

        total += item.product.price * item.quantity;

    });

    console.log("CART:", cart);
    console.log("TOTAL:", total);

    cartTotal.textContent = "Rs. " + total;
}

    let totalQuantity = 0;

    cart.forEach(function(item) {
        totalQuantity += item.quantity;
    });

    cartCount.textContent = totalQuantity;
}
// =====================================================
// 🛒 CART DISPLAY
// =====================================================

const cartButton = document.getElementById("cartButton");

// cartButton.addEventListener("click", function() {

//     console.log("Cart clicked");

//     console.log(cart);

// });







// =====================================================
// 🛒 CART PANEL
// =====================================================

const cartPanel = document.getElementById("cartPanel");
const closeCartButton = document.getElementById("closeCartButton");
const cartItems = document.getElementById("cartItems");
const cartOverlay = document.getElementById("cartOverlay");
const cartTotal = document.getElementById("cartTotal");

cartButton.addEventListener("click", function() {

    cartPanel.classList.add("open");
    cartOverlay.classList.add("show");

    cartItems.innerHTML = "";
    

    cart.forEach(function(product) {

        cartItems.innerHTML += `

            <div class="cart-item">

                <h3>${product.name_en}</h3>

                <p>${product.name_ur}</p>

                <p>
                    Rs. ${product.price} / ${product.unit}
                </p>

            </div>

        `;

    });

});

closeCartButton.addEventListener("click", function() {

    cartPanel.classList.remove("open");
    cartOverlay.classList.remove("show");

});
















// =====================================================
// 🛒 CLOSE CART WHEN CLICKING OUTSIDE
// =====================================================

document.addEventListener("click", function(event) {

    if (
        cartPanel.classList.contains("open") &&
        !cartPanel.contains(event.target) &&
        !cartButton.contains(event.target)
    ) {

        cartPanel.classList.remove("open");
        cartOverlay.classList.remove("show");

    }

});

