

let cart1 = JSON.parse(localStorage.getItem("cart"));


function append_data_to_cart_page() {

  let parent_of_image1 = document.getElementById("cart_page_full_image_div");

  let img1 = document.createElement("img");

  img1.src = cart1[cart1.length-1].image1;

  parent_of_image1.append(img1)

// second image

let parent_of_first_image = document.getElementById("first_image");

let parent_of_second_image = document.getElementById("second_image");

let img2 = document.createElement("img");

img2.src = cart1[cart1.length-1].image2;

let img3 = document.createElement("img");
img3.src = cart1[cart1.length-1].image3;

parent_of_first_image.append(img2)
parent_of_second_image.append(img3)

// name_of_product

let name = document.getElementById("name_of_product");

name.textContent = cart1[cart1.length-1].name;

let para = document.getElementById("paragrap_text");

para.textContent = cart1[cart1.length-1].para;
let price = document.getElementById("price_of_product");
price.textContent = cart1[cart1.length-1].price;

let review = document.getElementById("review_data");
review.textContent = cart1[cart1.length-1].rating;
}

append_data_to_cart_page()

function liginpage() {
  window.location.href = "./login.html"
}



var dil = document.getElementById("dil");
function Dil() {
  dil.style.color = "red"
}


var discription1 = document.getElementById("cart_page_discription")
function discription() {


 discription1.innerHTML = `<p>Quench lips with Anthony Mint & White Tea Lip Balm SPF25. Developed for men, coveted by women, Anthony personal care products address the specific concerns of skin damaged by the harshest conditions.</p>


<p>Anthony Lip Balm with green tea extract antioxidants is a broad-spectrum UVA/UVB sunscreen with SPF 25 that works to prevent lips from drying and cracking in response to weather and other extremities such as pollution. Help to control the harsh effects of the climate and revive lip skin with Anthony Mint & White Tea Lip Balm with SPF 25.</p>

<p>Utilising advanced skincare technology and innovative design, the natural ingredients in Anthony personal care system products are the result of clinical testing and dermatologist recommendations. Suitable for all skin types, this lip balm is paraben-free, clinically-tested, and dermatologist approved.</p>
   
<h1>KEY BENEFITS</h1>
<ul>
    <li>Works to repair and protect lips</li>
    <li>Provides broad spectrum SPF 25 protection</li>
    <li>Hypoallergenic</li>
    <li>Clinically-tested, and dermatologist approved
    </li>

    <li>Formulated with green tea extract
    </li>
</ul>
<h1>SKU# UK200019286</h1>`

}

function less1() {
    discription1.innerHTML = null;
}
var benifit = document.getElementById("appendhere");

function benifitone() {
    benifit.innerHTML = ` <div id="oneline">
        <h1>Ingredients :</h1>
        <p>anti-oxidants</p>
        <p>Hypo-allergenic</p>
        <p>parderm-toxic</p>
        <p>paint/font</p>
    </div>

    
    <div id="oneline">
        <h1>Formets :</h1>
        <p>Combination    </p>
        <p>Dry</p>
        <p>Oily</p>
        <p>Sensitive</p>
    </div>

    <div id="oneline">
        <h1>Skin Type:</h1>
        <p> Wax  </p>
        <p>Balm</p>
        
    </div>

    <div id="oneline">
        <h1>Skin Concern:</h1>
        <p>Combination    </p>
        <p>Dry</p>
        <p>Oily</p>
        <p>Sensitive</p>
    </div>`
}

function less2() {
    benifit.innerHTML = null;
}
var returndilevery = document.getElementById("dilevery_return_content");


function returnde() {
    returndilevery.innerHTML = `<h1>UK STANDARD DELIVERY - £4</h1>
        <p>Free when you spend £20</p>
        <p>Delivery within 2-4 working days.</p>
        <br>

        <h1>UK NEXT DAY DELIVERY - £5</h1>
        <p>Free when you spend £100 Order before 2pm Monday - Friday, and receive your order the next working day. Orders placed over the weekend or on UK Bank Holidays will be processed the next working day</p>
        <h1>CLICK & COLLECT - FREE</h1>
        <p>Collect your order from any of our stores within 2-4 working days.</p>
    
    <h1>EXPRESS CLICK & COLLECT - FREE
    </h1>
    <p>Collect your order from one of our stores within 1 hour. Select 'Find in Store' on the product page to check whether your item is available for Express Click & Collect</p>
    
    <h1>2 HOUR DELIVERY - £8</h1>
    <p>Free when you spend £100.
        Receive your order within 2 hours from a local store.
        Service will show at checkout if available. Only certain postcodes are eligible for our 2 hour delivery service.
        
        We ship worldwide! Find out more about our international shipping options on our delivery page.</p>
    
    <h1>RETURNS</h1>
    <p>Buy with confidence thanks to Space NKs 100% Satisfaction Guarantee
        Unopened product can be returned for a full refund or exchange within 28 days of purchase with proof of purchase.
        Opened or used products that you are not completely satisfied with can be returned for an exchange within 28 days of purchase with proof of purchase.</p>
    </div>`
}


function less3() {
    returndilevery.innerHTML = null;
}





function cart_page_append () {
let parentdiv1 = document.getElementById("cartpage_data_mid")
  
let homedata1 = [
    {
      image1 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw0399c788/products/C_GIFTCARD/UK200023057_C_GIFTCARD_2.jpg",
      image2 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw238aab9b/products/C_GIFTCARD/UK200023057_C_GIFTCARD.jpg",
      image3 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw17675b71/products/C_GIFTCARD/UK200023057_C_GIFTCARD_1.jpg",
      name : "GIFT CARDS",
      para : "BEDTIME HERO REED DIFFUSER",
      price : "£50.00",
      rating : "5.0",
      description : "Share the gift of beauty with our festive gift cards. Treat them to the perfect gift by letting them choose from our extensive collection of the finest beauty products.SKU# UK200023057"
    },
    {
        image1 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw8e79930b/products/NK/UK200032864_NK.jpg",
        image2 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw8e79930b/products/NK/UK200032864_NK.jpg",
        image3 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw8e79930b/products/NK/UK200032864_NK.jpg",
        name : "SPACE NK",
        para : "WHERE IT ALL STARTS CREAM ",
        price : "£50.00",
        rating : "5.0",
        description : "Introducing Space NKs first ever candle collection, a handpicked edit of four uplifting fragrances guaranteed to bring light and warmth to your home. Includes a full-size, limited-edition Space NK Shimmering Spice candle."
      },
      {
        image1 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw8ee432b3/products/CHARLOTTE/UK200032273_CHARLOTTE.jpg",
        image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw0bcab7ec/products/CHARLOTTE/UK200032273_CHARLOTTE_1.jpg?sw=582&sh=582",
        image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw0bcab7ec/products/CHARLOTTE/UK200032273_CHARLOTTE_1.jpg?sw=582&sh=582",
        name : "CHARLOTTE TILBURY",
        para : "VOLUME WASH 236ML",
        price : "£45.00",
        rating : "4.8",
        description : "Share the gift of beauty with our festive gift cards. Treat them to the perfect gift by letting them choose from our extensive collection of the finest beauty products.SKU# UK200023057"

      },
      {
        image1 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw62a02f26/products/ROSE_INC/UK200032293_ROSE_INC.jpg?sw=405&sh=405",
        image2 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwc28d83d0/products/ROSE_INC/UK200032293_ROSE_INC_1.jpg",
        image3 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwa26a75a4/products/ROSE_INC/UK200032293_ROSE_INC_2.jpg",
       name : "Rose Beauty",
        para : "VOLUME WASH 236ML",
        price : "£45.00",
        rating : "5.0",
        description : "Keep a makeup bag up to date with the Rose Inc The Modern Essentials Kit, a set of three products essential in a contemporary beauty routine."
      },
      {
        image1 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw6e9944ca/products/PAULAS/UK200032291_PAULAS.jpg?sw=582&sh=582",
        image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw8cdf8e0d/products/PAULAS/UK200032291_PAULAS_1.jpg?sw=582&sh=582",
        image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw90f5e3ee/products/PAULAS/UK200032291_PAULAS_2.jpg?sw=582&sh=582",
        name : "PAULA'S CHOICE",
        para : "VOLUME WASH 236ML",
        price : "£56.00",
        rating : "4.9",
        description : "Please note we do not ship Paula's Choice to Germany, the Netherlands, Belgium, France, Norway, Sweden, Poland, Denmark, Romania, Slovenia, Croatia and Hungary.."
      },

      {
        image1 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw5f23d346/products/NK/UK200031502_NK.jpg?sw=582&sh=582",
        image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw31ee50ef/products/NK/UK200031502_NK_1.jpg?sw=582&sh=582",
        image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwd60536e1/products/NK/UK200031502_NK_2.jpg?sw=582&sh=582",
        name : "SPACE NK",
        para : "VOLUME WASH 236ML",
        price : "£22.00",
        rating : "5.0",
        description : "Energise your mind while calming the body with this gentle, hydrating body wash and lotion duo, made with uplifting adaptogen ashwaghanda along with aloe vera, agave extracts and jojoba esters which work to soothe and soften the skin."
      },
      {
        image1 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw38bc0edd/products/DIPTYQUE/UK300057470_DIPTYQUE.jpg?sw=582&sh=582",
        image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwe1e094d9/products/DIPTYQUE/UK300057470_DIPTYQUE_1.jpg?sw=582&sh=582",
        image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwaee39190/products/DIPTYQUE/UK300057470_DIPTYQUE_2.jpg?sw=582&sh=582",
        name : "DIPTYQUE",
        para : "BEDTIME HERO REED DIFFUSER",
        price : "£60.00",
        rating : "4.5",
        description : "Ramp up the home's holiday atmosphere with the Diptyque Sapin Candle, a scented candle that provides a unique interpretation on the classic pine fragrance. Infuse the home's air with fragrance with this limited edition candle that has been specifically crafted for this holiday season."
      },
      {
      image1 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw0399c788/products/C_GIFTCARD/UK200023057_C_GIFTCARD_2.jpg",
      image2 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw238aab9b/products/C_GIFTCARD/UK200023057_C_GIFTCARD.jpg",
      image3 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw17675b71/products/C_GIFTCARD/UK200023057_C_GIFTCARD_1.jpg",
      name : "GIFT CARDS",
      para : "BEDTIME HERO REED DIFFUSER",
      price : "£50.00",
      rating : "5.0",
      description : "Share the gift of beauty with our festive gift cards. Treat them to the perfect gift by letting them choose from our extensive collection of the finest beauty products.SKU# UK200023057"
    },
    {
        image1 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw8e79930b/products/NK/UK200032864_NK.jpg",
        image2 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw8e79930b/products/NK/UK200032864_NK.jpg",
        image3 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw8e79930b/products/NK/UK200032864_NK.jpg",
        name : "SPACE NK",
        para : "WHERE IT ALL STARTS CREAM ",
        price : "£50.00",
        rating : "5.0",
        description : "Introducing Space NKs first ever candle collection, a handpicked edit of four uplifting fragrances guaranteed to bring light and warmth to your home. Includes a full-size, limited-edition Space NK Shimmering Spice candle."
      },
      {
        image1 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw8ee432b3/products/CHARLOTTE/UK200032273_CHARLOTTE.jpg",
        image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw0bcab7ec/products/CHARLOTTE/UK200032273_CHARLOTTE_1.jpg?sw=582&sh=582",
        image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw0bcab7ec/products/CHARLOTTE/UK200032273_CHARLOTTE_1.jpg?sw=582&sh=582",
        name : "CHARLOTTE TILBURY",
        para : "VOLUME WASH 236ML",
        price : "£45.00",
        rating : "4.8",
        description : "Share the gift of beauty with our festive gift cards. Treat them to the perfect gift by letting them choose from our extensive collection of the finest beauty products.SKU# UK200023057"

      },
      {
        image1 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw62a02f26/products/ROSE_INC/UK200032293_ROSE_INC.jpg?sw=405&sh=405",
        image2 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwc28d83d0/products/ROSE_INC/UK200032293_ROSE_INC_1.jpg",
        image3 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwa26a75a4/products/ROSE_INC/UK200032293_ROSE_INC_2.jpg",
       name : "Rose Beauty",
        para : "VOLUME WASH 236ML",
        price : "£45.00",
        rating : "5.0",
        description : "Keep a makeup bag up to date with the Rose Inc The Modern Essentials Kit, a set of three products essential in a contemporary beauty routine."
      },
      {
        image1 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw6e9944ca/products/PAULAS/UK200032291_PAULAS.jpg?sw=582&sh=582",
        image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw8cdf8e0d/products/PAULAS/UK200032291_PAULAS_1.jpg?sw=582&sh=582",
        image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw90f5e3ee/products/PAULAS/UK200032291_PAULAS_2.jpg?sw=582&sh=582",
        name : "PAULA'S CHOICE",
        para : "VOLUME WASH 236ML",
        price : "£56.00",
        rating : "4.9",
        description : "Please note we do not ship Paula's Choice to Germany, the Netherlands, Belgium, France, Norway, Sweden, Poland, Denmark, Romania, Slovenia, Croatia and Hungary.."
      },

      {
        image1 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw5f23d346/products/NK/UK200031502_NK.jpg?sw=582&sh=582",
        image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw31ee50ef/products/NK/UK200031502_NK_1.jpg?sw=582&sh=582",
        image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwd60536e1/products/NK/UK200031502_NK_2.jpg?sw=582&sh=582",
        name : "SPACE NK",
        para : "VOLUME WASH 236ML",
        price : "£22.00",
        rating : "5.0",
        description : "Energise your mind while calming the body with this gentle, hydrating body wash and lotion duo, made with uplifting adaptogen ashwaghanda along with aloe vera, agave extracts and jojoba esters which work to soothe and soften the skin."
      },
      {
        image1 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw38bc0edd/products/DIPTYQUE/UK300057470_DIPTYQUE.jpg?sw=582&sh=582",
        image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwe1e094d9/products/DIPTYQUE/UK300057470_DIPTYQUE_1.jpg?sw=582&sh=582",
        image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwaee39190/products/DIPTYQUE/UK300057470_DIPTYQUE_2.jpg?sw=582&sh=582",
        name : "DIPTYQUE",
        para : "BEDTIME HERO REED DIFFUSER",
        price : "£60.00",
        rating : "4.5",
        description : "Ramp up the home's holiday atmosphere with the Diptyque Sapin Candle, a scented candle that provides a unique interpretation on the classic pine fragrance. Infuse the home's air with fragrance with this limited edition candle that has been specifically crafted for this holiday season."
      },
      {
      image1 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw0399c788/products/C_GIFTCARD/UK200023057_C_GIFTCARD_2.jpg",
      image2 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw238aab9b/products/C_GIFTCARD/UK200023057_C_GIFTCARD.jpg",
      image3 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw17675b71/products/C_GIFTCARD/UK200023057_C_GIFTCARD_1.jpg",
      name : "GIFT CARDS",
      para : "BEDTIME HERO REED DIFFUSER",
      price : "£50.00",
      rating : "5.0",
      description : "Share the gift of beauty with our festive gift cards. Treat them to the perfect gift by letting them choose from our extensive collection of the finest beauty products.SKU# UK200023057"
    },
    {
        image1 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw8e79930b/products/NK/UK200032864_NK.jpg",
        image2 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw8e79930b/products/NK/UK200032864_NK.jpg",
        image3 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw8e79930b/products/NK/UK200032864_NK.jpg",
        name : "SPACE NK",
        para : "WHERE IT ALL STARTS CREAM ",
        price : "£50.00",
        rating : "5.0",
        description : "Introducing Space NKs first ever candle collection, a handpicked edit of four uplifting fragrances guaranteed to bring light and warmth to your home. Includes a full-size, limited-edition Space NK Shimmering Spice candle."
      },
      {
        image1 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw8ee432b3/products/CHARLOTTE/UK200032273_CHARLOTTE.jpg",
        image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw0bcab7ec/products/CHARLOTTE/UK200032273_CHARLOTTE_1.jpg?sw=582&sh=582",
        image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw0bcab7ec/products/CHARLOTTE/UK200032273_CHARLOTTE_1.jpg?sw=582&sh=582",
        name : "CHARLOTTE TILBURY",
        para : "VOLUME WASH 236ML",
        price : "£45.00",
        rating : "4.8",
        description : "Share the gift of beauty with our festive gift cards. Treat them to the perfect gift by letting them choose from our extensive collection of the finest beauty products.SKU# UK200023057"

      },
      {
        image1 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw62a02f26/products/ROSE_INC/UK200032293_ROSE_INC.jpg?sw=405&sh=405",
        image2 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwc28d83d0/products/ROSE_INC/UK200032293_ROSE_INC_1.jpg",
        image3 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwa26a75a4/products/ROSE_INC/UK200032293_ROSE_INC_2.jpg",
       name : "Rose Beauty",
        para : "VOLUME WASH 236ML",
        price : "£45.00",
        rating : "5.0",
        description : "Keep a makeup bag up to date with the Rose Inc The Modern Essentials Kit, a set of three products essential in a contemporary beauty routine."
      },
      {
        image1 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw6e9944ca/products/PAULAS/UK200032291_PAULAS.jpg?sw=582&sh=582",
        image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw8cdf8e0d/products/PAULAS/UK200032291_PAULAS_1.jpg?sw=582&sh=582",
        image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw90f5e3ee/products/PAULAS/UK200032291_PAULAS_2.jpg?sw=582&sh=582",
        name : "PAULA'S CHOICE",
        para : "VOLUME WASH 236ML",
        price : "£56.00",
        rating : "4.9",
        description : "Please note we do not ship Paula's Choice to Germany, the Netherlands, Belgium, France, Norway, Sweden, Poland, Denmark, Romania, Slovenia, Croatia and Hungary.."
      },

      {
        image1 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw5f23d346/products/NK/UK200031502_NK.jpg?sw=582&sh=582",
        image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw31ee50ef/products/NK/UK200031502_NK_1.jpg?sw=582&sh=582",
        image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwd60536e1/products/NK/UK200031502_NK_2.jpg?sw=582&sh=582",
        name : "SPACE NK",
        para : "VOLUME WASH 236ML",
        price : "£22.00",
        rating : "5.0",
        description : "Energise your mind while calming the body with this gentle, hydrating body wash and lotion duo, made with uplifting adaptogen ashwaghanda along with aloe vera, agave extracts and jojoba esters which work to soothe and soften the skin."
      },
      {
        image1 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw38bc0edd/products/DIPTYQUE/UK300057470_DIPTYQUE.jpg?sw=582&sh=582",
        image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwe1e094d9/products/DIPTYQUE/UK300057470_DIPTYQUE_1.jpg?sw=582&sh=582",
        image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwaee39190/products/DIPTYQUE/UK300057470_DIPTYQUE_2.jpg?sw=582&sh=582",
        name : "DIPTYQUE",
        para : "BEDTIME HERO REED DIFFUSER",
        price : "£60.00",
        rating : "4.5",
        description : "Ramp up the home's holiday atmosphere with the Diptyque Sapin Candle, a scented candle that provides a unique interpretation on the classic pine fragrance. Infuse the home's air with fragrance with this limited edition candle that has been specifically crafted for this holiday season."
      },
    
  ];

 
  var i = 0;
 

   
   
     let div_img = document.createElement("div");

    
   let first_div = document.createElement("div");
   let second_div = document.createElement("div")
   let last_div = document.createElement("div")

let pic1 = document.createElement("img");
let pic2 = document.createElement("img");
let pic3 = document.createElement("img");

pic1.src = homedata1[0].image1 
pic2.src = homedata1[1].image1 
pic3.src = homedata1[2].image1 


let name1 = document.createElement("h1");
let name2 = document.createElement("h1");
let name3 = document.createElement("h1");

name1.textContent = homedata1[0].name
name2.textContent = homedata1[1].name
name3.textContent = homedata1[2].name

let para1 = document.createElement("p");
let para2 = document.createElement("p");
let para3 = document.createElement("p");
para1.textContent = homedata1[0].para
para2.textContent = homedata1[1].para
para3.textContent = homedata1[2].para

let price1 = document.createElement("h2")
let price2 = document.createElement("h2")
let price3 = document.createElement("h2")
price1.textContent = homedata1[0].price
price2.textContent = homedata1[1].price
price3.textContent = homedata1[2].price
let star3 = document.createElement("h1");
let star1 = document.createElement("h1");
let star2 = document.createElement("h1");
star3.innerHTML = "&#11088;" +  "&#11088;" + "&#11088;" + "&#11088;" + "&#11088;"
star2.innerHTML = "&#11088;" +  "&#11088;" + "&#11088;" + "&#11088;" + "&#11088;"
star1.innerHTML = "&#11088;" +  "&#11088;" + "&#11088;" + "&#11088;" + "&#11088;"

let btn1 = document.getElementById("next");
let btn2 = document.getElementById("prev")


 function next() {
i++;
pic1.src = homedata1[i].image1 
pic2.src = homedata1[1+i].image1 
pic3.src = homedata1[2+i].image1
name1.textContent = homedata1[i].name
name2.textContent = homedata1[i+1].name
name3.textContent = homedata1[i+3].name
para1.textContent = homedata1[i].para
para2.textContent = homedata1[i+1].para
para3.textContent = homedata1[i+3].para
price1.textContent = homedata1[i].price
price2.textContent = homedata1[i+1].price
price3.textContent = homedata1[i+3].price

 
 }
 function prev() {
 i--;
pic1.src = homedata1[i].image1 
pic2.src = homedata1[1+i].image1 
pic3.src = homedata1[2+i].image1
name1.textContent = homedata1[i].name
name2.textContent = homedata1[i+1].name
name3.textContent = homedata1[i+3].name
para1.textContent = homedata1[i].para
para2.textContent = homedata1[i+1].para
para3.textContent = homedata1[i+3].para
price1.textContent = homedata1[i].price
price2.textContent = homedata1[i+1].price
price3.textContent = homedata1[i+3].price

 
 }


btn1.addEventListener("click", next)
btn2.addEventListener("click", prev)

first_div.append(pic1, name1, para1, price1, star3)
 second_div.append(pic2, name2, para2, price2,star2 )

 last_div.append(pic3, name3, para3, price3, star1)

div_img.append(first_div, second_div, last_div)


parentdiv1.append(div_img)


    


}

cart_page_append ()

function cart_page_append1 () {
let parentdiv2 = document.getElementById("cartpage_data_mid1")
  
let homedata1 = [
    {
        image1 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwec8af871/products/NIMYA/UK200033176_NIMYA.jpg",
        image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw110512da/products/NIMYA/UK200033176_NIMYA_1.jpg?sw=582&sh=582",
        image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw06740301/products/NIMYA/UK200033176_NIMYA_2.jpg?sw=582&sh=582",
        name : "NIMYA",
        para : "SET IT & FORGET IT SPRAY",
        price : "£22.00",
        rating : "5.0",
        description : "Give makeup a freshly applied look that lasts throughout the day with the Nimya Set It & Forget It Spray, a setting spray that can be used to keep any makeup look, from the natural to the vibrant, looking fresh and perfectly locked in place."
      },
      {
        image1 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwb173afb1/products/NIMYA/UK200033214_NIMYA.jpg",
        image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw20d5767e/products/NIMYA/UK200033214_NIMYA_1.jpg?sw=582&sh=582",
        image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw7e074242/products/NIMYA/UK200033214_NIMYA_2.jpg?sw=582&sh=582",
        name : "NIMYA",
        para : "BLOW BEFORE YOU GO PORTABLE FAN",
        price : "£13.00",
        rating : "4.5",
        description : "Keep makeup in place throughout the day with the Nimya Blow Before You Go Fan, a convenient addition to your makeup kit. It is ideal for use in conjunction with the Nimya Set It & Forget It Setting Spray to help maintain a fresh, just-applied look."
      },
      {
        image1 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwf02313d2/products/IGK_HAIR/UK200032551_IGK_HAIR.jpg?sw=582&sh=582",
        image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw37f81ca2/products/IGK_HAIR/UK200032551_IGK_HAIR_1.jpg?sw=582&sh=582",
        image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw22974416/products/IGK_HAIR/UK200032551_IGK_HAIR_2.jpg?sw=582&sh=582",
        name : "IGK HAIR",
        para : "EXTRA LOVE SHAMPOO 236ML",
        price : "£23.00",
        rating : "0",
        description : "Gently cleanse hair and balance oil production with IGK Hair Extra Love Volumizing & Thickening Shampoo. This shampoo works to deliver long-lasting volume and body."
      },
      {
        image1 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwf77a35af/products/RAINCRY/UK300053680_RAINCRY.jpg?sw=582&sh=582",
        image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwe0e11f16/products/RAINCRY/UK300053680_RAINCRY_1.jpg?sw=582&sh=582",
        image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwe0e11f16/products/RAINCRY/UK300053680_RAINCRY_1.jpg?sw=582&sh=582",
        name : "RAINCRY",
        para : "VOLUME WASH 236ML",
        price : "£29.00",
        rating : "0",
        description : "Achieve a fuller look with the Raincry Volume Wash, a haircare treatment that promotes body and feels weightless."
      },
      {
        image1 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw56569fa6/products/NIMYA/UK200033150_NIMYA.jpg",
        image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw89fd40a3/products/NIMYA/UK200033150_NIMYA_1.jpg?sw=582&sh=582",
        image3 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw4e748543/products/NIMYA/UK200033150_NIMYA_2.jpg",
        name : "NIMYA",
        para : "WHERE IT ALL STARTS CREAM ",
        price : "£26.00",
        rating : "£26.00",
        description : "Create the perfect canvas to optimise makeup application with the Nimya Where It All Starts, a primer and moisturiser hybrid that works to leave skin with a luminous finish."
      },
      {
        image1 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw79b8fbf6/products/NEOM/UK200032584_NEOM.jpg",
        image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwdd69a0cb/products/NEOM/UK200032584_NEOM_1.jpg?sw=582&sh=582",
        image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwe5e004cf/products/NEOM/UK200032584_NEOM_3.jpg?sw=582&sh=582",
        name : "NEOM",
        para : "BEDTIME HERO REED DIFFUSER",
        price : "£40.00",
        rating : "0",
        description : "Enjoy the restorative effects of a good nights sleep with the Neom Bedtime Hero Reed Diffuser, a home fragrance that is part of Neom’s Scent To Sleep™ range designed to help relax the body and mind."
      },
  
]
 
  var i = 0;
 

   
   
     let div_img = document.createElement("div");

    
   let first_div = document.createElement("div");
   let second_div = document.createElement("div")
   let last_div = document.createElement("div")

let pic1 = document.createElement("img");
let pic2 = document.createElement("img");
let pic3 = document.createElement("img");

pic1.src = homedata1[0].image1 
pic2.src = homedata1[1].image1 
pic3.src = homedata1[2].image1 


let name1 = document.createElement("h1");
let name2 = document.createElement("h1");
let name3 = document.createElement("h1");

name1.textContent = homedata1[0].name
name2.textContent = homedata1[1].name
name3.textContent = homedata1[2].name

let para1 = document.createElement("p");
let para2 = document.createElement("p");
let para3 = document.createElement("p");
para1.textContent = homedata1[0].para
para2.textContent = homedata1[1].para
para3.textContent = homedata1[2].para

let price1 = document.createElement("h2")
let price2 = document.createElement("h2")
let price3 = document.createElement("h2")
price1.textContent = homedata1[0].price
price2.textContent = homedata1[1].price
price3.textContent = homedata1[2].price

let star3 = document.createElement("h1");
let star1 = document.createElement("h1");
let star2 = document.createElement("h1");
star3.innerHTML = "&#11088;" +  "&#11088;" + "&#11088;" + "&#11088;" + "&#11088;"
star2.innerHTML = "&#11088;" +  "&#11088;" + "&#11088;" + "&#11088;" + "&#11088;"
star1.innerHTML = "&#11088;" +  "&#11088;" + "&#11088;" + "&#11088;" + "&#11088;"

let btn1 = document.getElementById("next1");
let btn2 = document.getElementById("prev1")


 function next() {
i++;
pic1.src = homedata1[i].image1 
pic2.src = homedata1[1+i].image1 
pic3.src = homedata1[2+i].image1
name1.textContent = homedata1[i].name
name2.textContent = homedata1[i+1].name
name3.textContent = homedata1[i+3].name
para1.textContent = homedata1[i].para
para2.textContent = homedata1[i+1].para
para3.textContent = homedata1[i+3].para
price1.textContent = homedata1[i].price
price2.textContent = homedata1[i+1].price
price3.textContent = homedata1[i+3].price

 
 }
 function prev() {
 i--;
pic1.src = homedata1[i].image1 
pic2.src = homedata1[1+i].image1 
pic3.src = homedata1[2+i].image1
name1.textContent = homedata1[i].name
name2.textContent = homedata1[i+1].name
name3.textContent = homedata1[i+3].name
para1.textContent = homedata1[i].para
para2.textContent = homedata1[i+1].para
para3.textContent = homedata1[i+3].para
price1.textContent = homedata1[i].price
price2.textContent = homedata1[i+1].price
price3.textContent = homedata1[i+3].price

 
 }


btn1.addEventListener("click", next)
btn2.addEventListener("click", prev)

 first_div.append(pic1, name1, para1, price1, star3)
 second_div.append(pic2, name2, para2, price2,star2 )

 last_div.append(pic3, name3, para3, price3, star1)

div_img.append(first_div, second_div, last_div)


parentdiv2.append(div_img)


    


}

cart_page_append1 ()





