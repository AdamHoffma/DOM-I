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
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelector('nav')
let anchortag = document.querySelectorAll('a')
anchortag[0].textContent = "Services"

let nav1 = document.querySelector('nav')
let anchortag2 = document.querySelectorAll('a')
anchortag2[1].textContent = "Product"

let nav2 = document.querySelector('nav')
let anchortag3 = document.querySelectorAll('a')
anchortag3[2].textContent = "Vision"

let nav3 = document.querySelector('nav')
let anchortag4 = document.querySelectorAll('a')
anchortag4[3].textContent = "Features"

let nav4 = document.querySelector('nav')
let anchortag5 = document.querySelectorAll('a')
anchortag5[4].textContent = "About"

let nav5 = document.querySelector('nav')
let anchortag6 = document.querySelectorAll('a')
anchortag6[5].textContent = "Contact"

const DomHead = document.querySelector(".cta-text h1") 
DomHead.textContent = "DOM is awesome"

const CtaButton = document.querySelector('.cta button')
CtaButton.textContent = "Get Started"

const CtaImg = document.getElementById("cta-img");
CtaImg.setAttribute('src', siteContent["cta"]["img-src"])

let feats = document.querySelector('.text-content h4')
feats.textContent = "Features"

let featscontent = document.querySelector('.text-content p')
featscontent.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let about = document.querySelector('.top-content')
let h42 = document.querySelectorAll('h4')
h42[1].textContent = "About"

let aboutContent = document.querySelector('.top-content')
let p2 =document.querySelectorAll('p')
p2[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let MidImg = document.getElementById("middle-img");
MidImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])




//"about-h4":"About",
//"about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//"middle-img-src": "img/mid-page-accent.jpg",
//"services-h4":"Services",
//"services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//"product-h4":"Product",
//"product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//"vision-h4":"Vision",
//"vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//const secondHeading = document.querySelector('.second-heading');

