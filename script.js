 /* ================= SCRIPT.JS ================= */
document.addEventListener("DOMContentLoaded", function () {

/* ================= VARIABLES ================= */
var shopName = "MR Trader";
let location = "Karachi";
const whatsappHasnain = "03272012520";
const whatsappAdnan = "03132034367";

let products = ["SSD", "USB", "Router", "Gaming Keyboard", "Mouse", "Webcam", "Android Box", "Logitech Accessories"];
let productPrices = [4500, 500, 3500, 7000, 1200, 2500, 8000, 600];

let shopInfo = {
    name: "MR Trader",
    address: "Shop #M-155, Mezzanine Floor, Odean Center, Regal Saddar, Karachi",
    email: "mrtraderskhi@gmail.com",
    whatsapp: {
        hasNain: whatsappHasnain,
        adnan: whatsappAdnan
    },
    experience: 7
};

/* ================= FUNCTIONS ================= */
function openWhatsApp(number, message) {
    console.log("Opening WhatsApp for number:", number);
    let url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

function productClicked(productName) {
    console.log("Product clicked:", productName);
    alert("You clicked on: " + productName);
}

function checkStock(product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(products.includes(product)) {
                resolve(product + " is available in stock");
            } else {
                reject(product + " is out of stock");
            }
        }, 1000);
    });
}

/* ================= EVENT LISTENERS ================= */
document.getElementById('whatsappBtn').addEventListener('click', () => {
    openWhatsApp(shopInfo.whatsapp.hasNain, "Hello MR Trader, I want wholesale rates");
});

document.getElementById('whatsappBtnHasnain').addEventListener('click', () => {
    openWhatsApp(shopInfo.whatsapp.hasNain, "Hello S. Hasnain, I want bulk order info");
});

document.getElementById('whatsappBtnAdnan').addEventListener('click', () => {
    openWhatsApp(shopInfo.whatsapp.adnan, "Hello S. Adnan, I want bulk order info");
});

/* ================= PRODUCT CLICK EVENTS ================= */
const productCards = document.querySelectorAll('.product-card');
productCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        productClicked(card.textContent);
        checkStock(card.textContent)
            .then(msg => console.log(msg))
            .catch(err => console.log(err));
    });
});

/* ================= FADE ANIMATION ON SCROLL ================= */
window.addEventListener('scroll', () => {
    const fades = document.querySelectorAll('.fade');
    fades.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            el.classList.add('show');
        }
    });
});

/* ================= STATS COUNTER ================= */
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    let target = +counter.getAttribute('data-target');
    let count = 0;
    const increment = target / 100;
    const updateCounter = () => {
        count += increment;
        if(count < target){
            counter.textContent = Math.ceil(count);
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target;
        }
    };
    updateCounter();
});

/* ================= LOOP EXAMPLES ================= */
for(let i=0; i<products.length; i++){
    console.log("For Loop Product:", products[i]);
}

products.forEach(prod => console.log("forEach Product:", prod));

let j = 0;
while(j < products.length){
    console.log("While Loop Product:", products[j]);
    j++;
}

for(const prod of products){
    console.log("for...of Product:", prod);
}

for(const key in shopInfo){
    console.log("Shop Info Key:", key, "Value:", shopInfo[key]);
}

/* ================= CONDITIONALS ================= */
let sampleProduct = "SSD";
if(products.includes(sampleProduct)){
    console.log(sampleProduct + " is available");
} else {
    console.log(sampleProduct + " is not available");
}

switch(sampleProduct){
    case "SSD":
        console.log("High speed storage");
        break;
    case "USB":
        console.log("Portable storage");
        break;
    default:
        console.log("Other product");
}

const greetClient = (name) => {
    console.log("Hello " + name + ", welcome to MR Trader!");
}
greetClient("Sara");

// DOM manipulation examples
document.querySelector('h1').innerHTML = shopInfo.name;
});
// Search Products Function
function searchProducts() {

  let input = document.getElementById("productSearch").value.toLowerCase();
  let products = document.querySelectorAll(".product-box");
  let noResults = document.getElementById("noResults");

  let found = false;

  products.forEach(function (box) {
    let text = box.innerText.toLowerCase();

    if (text.includes(input)) {
      box.style.display = "block";
      found = true;
    } else {
      box.style.display = "none";
    }
  });

  // Agar koi product match nahi hua
  if (!found) {
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
  }

}


// Buy Now Function
function buyNow(productName) {
  let number = "923278235054"; // WhatsApp number
  let message = "Hello MR Trader, I want to buy: " + productName;
  let url = "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}



/////////////////////BUY NOW ////////////////////////
function buyNow(productName) {
  let number = "923278235054";
  let message = "Hello MR Trader, I want to buy: " + productName;
  window.open(
    "https://wa.me/" + number + "?text=" + encodeURIComponent(message),
    "_blank"
  );
}

const productCards = document.querySelectorAll('.product-box');

document.getElementById("whatsappBtn").addEventListener("click", function () {

  let number = "923132034367";   // yahan apna WhatsApp number likho
  let message = "Hello MR Trader, I want wholesale rates for bulk order.";

  let url = "https://wa.me/" + number + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");

});

// Scroll effect: fade in on scroll
window.addEventListener('scroll', () => {
  const fadeElems = document.querySelectorAll('.fade-in');
  fadeElems.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 50){
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});

// Hero Boxes Parallax
window.addEventListener('scroll', () => {
  const heroBoxes = document.querySelectorAll('.hero-box');

  heroBoxes.forEach((box, index) => {
    const speed = (index + 1) * 0.3; // different speed per box
    const yOffset = window.scrollY * speed / 10;
    box.style.transform = `translateY(${yOffset}px)`;
  });

  // Fade-in on scroll
  const fadeElems = document.querySelectorAll('.fade-in');
  fadeElems.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});
