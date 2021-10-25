

const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};



// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
// const nav_arr = Array.from(siteContent["nav"])

let navs = document.querySelectorAll('nav a');


for (let i = 0; i < 6; i++) {
  let index = 'nav-item-' + (i + 1);
  navs[i].textContent = siteContent['nav'][index]
}

navs.forEach(nav => {
  nav.style.color= "green";
})

const nav_singular = document.querySelector("nav");
const child_end = document.createElement('a');
child_end.textContent = "Profile"
child_end.href = "#"
child_end.style.color = "green"
nav_singular.appendChild(child_end)

const child_begin = document.createElement('a');
child_begin.textContent = "Sales";
child_begin.href = "#";
child_begin.style.color = "green";
nav_singular.prepend(child_begin);

const button = document.querySelector(".cta-text button");
button.textContent = "Get Started";

let br = "DOM<br>Is<br>Awesome";
const h1_text = document.querySelector(".cta-text h1");
h1_text.innerHTML = br;

const cta_img = document.querySelector("#cta-img");
cta_img.src = "img/header-img.png";

const main = document.querySelector(".main-content")

const h4_feature = document.querySelector(".top-content:nth-child(1) h4");
h4_feature.textContent = siteContent["main-content"]["features-h4"];

const p_feature = document.querySelector(".top-content .text-content:nth-child(1) p");
p_feature.textContent = siteContent["main-content"]["features-content"];

const h4_about = document.querySelector(".top-content .text-content:nth-child(2) h4");
h4_about.textContent = siteContent["main-content"]["about-h4"];

const p_about = document.querySelector(".top-content .text-content:nth-child(2) p");
p_about.textContent = siteContent["main-content"]["about-content"];

const middle_img = document.querySelector(".middle-img");
middle_img.src = siteContent["main-content"]["middle-img-src"];

const h4_services = document.querySelector(".bottom-content .text-content:nth-child(1) h4");
h4_services.textContent = siteContent["main-content"]["services-h4"];

const p_content = document.querySelector(".bottom-content .text-content:nth-child(1) p")
p_content.textContent = siteContent["main-content"]["services-content"]

const h4_product = document.querySelector(".bottom-content .text-content:nth-child(2) h4")
h4_product.textContent = siteContent["main-content"]["product-h4"]

const p_product = document.querySelector(".bottom-content .text-content:nth-child(2) p")
p_product.textContent = siteContent["main-content"]["product-content"]

const h4_vision = document.querySelector(".bottom-content .text-content:nth-child(3) h4")
h4_vision.textContent = siteContent["main-content"]["vision-h4"]

const p_vision = document.querySelector(".bottom-content .text-content:nth-child(3) p")
p_vision.textContent = siteContent["main-content"]["vision-content"]

const h4_contact = document.querySelector(".contact h4")
h4_contact.textContent = siteContent["contact"]["contact-h4"]

const p1_contact = document.querySelector(".contact p:nth-of-type(1) ")
p1_contact.textContent = siteContent["contact"]["address"]

const p2_contact = document.querySelector(".contact p:nth-of-type(2)")
p2_contact.textContent = siteContent["contact"]["phone"]

const p3_contact = document.querySelector(".contact p:nth-of-type(3)")
p3_contact.textContent = siteContent["contact"]["email"]

const footer = document.querySelector("footer p")
footer.textContent = `\u00A9${siteContent["footer"]["copyright"]}`



































