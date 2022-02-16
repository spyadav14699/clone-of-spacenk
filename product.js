

var btn_one = document.getElementById("priceappend");
var btn_two = document.getElementById("priceappend1");
var btn_three = document.getElementById("priceappend2");


function hello1() {
   
  
    btn_one.innerHTML = `<div id="checkbox_one">
      <div  id="one_checkbox_div"></div>
      <p>£00.00 - £20.00(59)</p>
  </div>
  <div id="checkbox_one">
    <div id="one_checkbox_divone"></div>
    <p>£00.00 - £20.00(59)</p>
</div>`


}
function hello2() {
    btn_one.innerHTML = null;
}
function hello3() {
   
  
    btn_two.innerHTML = `<div id="checkbox_one">
     <div  id="one_checkbox_div"></div>
     <p>Haircare (1)</p>
 </div>
 <div id="checkbox_one">
   <div id="one_checkbox_divone"></div>
   <p>Makeup (5)</p>
</div>
<div id="checkbox_one">
   <div id="one_checkbox_divone"></div>
   <p>Skincare (57)</p>
</div>
`


}

function hello4() {
    btn_two.innerHTML = null;
}

function hello5() {
   
  
   btn_three.innerHTML = `<div id="checkbox_one">
     <div  id="one_checkbox_div"></div>
     <p>Complexion (5)</p>
 </div>
 <div id="checkbox_one">
   <div id="one_checkbox_divone"></div>
   <p>Hair Treatment (1)</p>
</div>`


}

function hello6() {
    btn_three.innerHTML = null;
}


var parent = document.getElementById("appenddata");

function append_cart_data() {


    let cartdata =  [
    {
         image1: "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwcbca70fe/products/BYTERRY/UK300051290_BYTERRY.jpg",
         image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwe19bcdf3/products/BYTERRY/UK300051290_BYTERRY_1.jpg?sw=582&sh=582",
         image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw8994536c/products/BYTERRY/UK300051290_BYTERRY_2.jpg?sw=582&sh=582",
       name : "GIFT CARDS",
      para : "BEDTIME HERO REED DIFFUSER",
      price : "£50.00",
      rating : "5.0",
      description : "Share the gift of beauty with our festive gift cards. Treat them to the perfect gift by letting them choose from our extensive collection of the finest beauty products.SKU# UK200023057"
    },
    {
        image1: "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw22f15659/products/AUGUSTINUS/UK300056540_AUGUSTINUS.jpg?sw=582&sh=582",
        image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwb7090622/products/AUGUSTINUS/UK300056540_AUGUSTINUS_1.jpg?sw=582&sh=582",
        image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwe04a42ba/products/AUGUSTINUS/UK300056540_AUGUSTINUS_2.jpg?sw=582&sh=582",
        name : "SPACE NK",
        para : "WHERE IT ALL STARTS CREAM ",
        price : "£50.00",
        rating : "5.0",
        description : "Introducing Space NKs first ever candle collection, a handpicked edit of four uplifting fragrances guaranteed to bring light and warmth to your home. Includes a full-size, limited-edition Space NK Shimmering Spice candle."
      },
      {
        image1: "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw49a5f461/products/DR_STURM/UK300053147_DR_STURM.jpg?sw=582&sh=582",
        image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw7f01484f/products/DR_STURM/UK300053147_DR_STURM_1.jpg?sw=582&sh=582",
        image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw921c7eee/products/DR_STURM/UK300053147_DR_STURM_2.jpg?sw=582&sh=582",
         name : "CHARLOTTE TILBURY",
        para : "VOLUME WASH 236ML",
        price : "£45.00",
        rating : "4.8",
        description : "Share the gift of beauty with our festive gift cards. Treat them to the perfect gift by letting them choose from our extensive collection of the finest beauty products.SKU# UK200023057"

      },
      {
        image1: "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw36e343de/products/OMOROVICZA/UK200012079_OMOROVICZA.jpg",
        image2 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw36e343de/products/OMOROVICZA/UK200012079_OMOROVICZA.jpg",
        image3 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw36e343de/products/OMOROVICZA/UK200012079_OMOROVICZA.jpg",
          name : "Rose Beauty",
        para : "VOLUME WASH 236ML",
        price : "£45.00",
        rating : "5.0",
        description : "Keep a makeup bag up to date with the Rose Inc The Modern Essentials Kit, a set of three products essential in a contemporary beauty routine."
      },
      {
        image1: "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw5b5657bc/products/MARIO_B/UK200032877_MARIO_B.jpg",
         image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwa88113e7/products/MARIO_B/UK200032877_MARIO_B_1.jpg?sw=582&sh=582",
         image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw2479a7ce/products/MARIO_B/UK200032877_MARIO_B_2.jpg?sw=582&sh=582",
          name : "PAULA'S CHOICE",
        para : "VOLUME WASH 236ML",
        price : "£56.00",
        rating : "4.9",
        description : "Please note we do not ship Paula's Choice to Germany, the Netherlands, Belgium, France, Norway, Sweden, Poland, Denmark, Romania, Slovenia, Croatia and Hungary.."
      },

      {
        image1: "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw4feaba97/products/SUMMER_FRI/UK200031226_SUMMER_FRI.jpg",
        image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw92a053d7/products/SUMMER_FRI/UK200031226_SUMMER_FRI_1.jpg?sw=582&sh=582",
        image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwff31224a/products/SUMMER_FRI/UK200031226_SUMMER_FRI_2.jpg?sw=582&sh=582",
          name : "SPACE NK",
        para : "VOLUME WASH 236ML",
        price : "£22.00",
        rating : "5.0",
        description : "Energise your mind while calming the body with this gentle, hydrating body wash and lotion duo, made with uplifting adaptogen ashwaghanda along with aloe vera, agave extracts and jojoba esters which work to soothe and soften the skin."
      },
      {
       
        image1: "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw521d0377/products/FRESH/UK200030276_FRESH.jpg?sw=582&sh=582",
        image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwd3bdccb7/products/FRESH/UK200030276_FRESH_1.jpg?sw=582&sh=582",
        image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwa65e3758/products/FRESH/UK200030276_FRESH_3.jpg?sw=582&sh=582",
        
        name : "DIPTYQUE",
        para : "BEDTIME HERO REED DIFFUSER",
        price : "£60.00",
        rating : "4.5",
        description : "Ramp up the home's holiday atmosphere with the Diptyque Sapin Candle, a scented candle that provides a unique interpretation on the classic pine fragrance. Infuse the home's air with fragrance with this limited edition candle that has been specifically crafted for this holiday season."
      },
      {
        image1: "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw1c0938df/products/SHISEIDO/UK200028135_SHISEIDO.jpg?sw=582&sh=582",
        image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw3a754d96/products/SHISEIDO/UK200028135_SHISEIDO_1.jpg?sw=582&sh=582",
        image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwcc9f2de6/products/SHISEIDO/UK200028135_SHISEIDO_2.jpg?sw=582&sh=582",
      name : "GIFT CARDS",
     para : "BEDTIME HERO REED DIFFUSER",
     price : "£50.00",
     rating : "5.0",
     description : "Share the gift of beauty with our festive gift cards. Treat them to the perfect gift by letting them choose from our extensive collection of the finest beauty products.SKU# UK200023057"
   },

      {
       
        image1: "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw34f05128/products/RMS_BEAUTY/UK200019920_RMS_BEAUTY.jpg?sw=582&sh=582",
        image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwe998f9a3/products/RMS_BEAUTY/UK200019920_RMS_BEAUTY_1.jpg?sw=582&sh=582",
        image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwf96a48fb/products/RMS_BEAUTY/UK200019920_RMS_BEAUTY_2.jpg?sw=582&sh=582",
        
        name : "DIPTYQUE",
        para : "BEDTIME HERO REED DIFFUSER",
        price : "£60.00",
        rating : "4.5",
        description : "Ramp up the home's holiday atmosphere with the Diptyque Sapin Candle, a scented candle that provides a unique interpretation on the classic pine fragrance. Infuse the home's air with fragrance with this limited edition candle that has been specifically crafted for this holiday season."
      },
      {
        image1: "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw7c454643/products/NARS_COSME/UK200026311_NARS_COSME.jpg",
        image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw5fb286af/products/NARS_COSME/UK200026311_NARS_COSME_1.jpg?sw=582&sh=582",
        image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw719562c4/products/NARS_COSME/UK200026311_NARS_COSME_2.jpg?sw=582&sh=582",
        name : "SPACE NK",
        para : "WHERE IT ALL STARTS CREAM ",
        price : "£50.00",
        rating : "5.0",
        description : "Introducing Space NKs first ever candle collection, a handpicked edit of four uplifting fragrances guaranteed to bring light and warmth to your home. Includes a full-size, limited-edition Space NK Shimmering Spice candle."
      },
      {
        image1: "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw3831f8ca/products/NARS_COSME/UK200033322_NARS_COSME.jpg",
        image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw86a047c5/products/NARS_COSME/UK200033322_NARS_COSME_1.jpg?sw=582&sh=582",
        image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwa822fd7c/products/NARS_COSME/UK200033322_NARS_COSME_2.jpg?sw=582&sh=582",
         name : "CHARLOTTE TILBURY",
        para : "VOLUME WASH 236ML",
        price : "£45.00",
        rating : "4.8",
        description : "Share the gift of beauty with our festive gift cards. Treat them to the perfect gift by letting them choose from our extensive collection of the finest beauty products.SKU# UK200023057"

      },
      {
        image1: "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw44031c76/products/SISLEY/UK200012344_SISLEY.jpg",
        image2 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw44031c76/products/SISLEY/UK200012344_SISLEY.jpg",
        image3 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw44031c76/products/SISLEY/UK200012344_SISLEY.jpg",
        name : "NIMYA",
        para : "SET IT & FORGET IT SPRAY",
        price : "£22.00",
        rating : "5.0",
        description : "Give makeup a freshly applied look that lasts throughout the day with the Nimya Set It & Forget It Spray, a setting spray that can be used to keep any makeup look, from the natural to the vibrant, looking fresh and perfectly locked in place."
      },
      {
        image1: "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw62a6d5f0/products/DR_GROSS/UK200023027_DR_GROSS.jpg",
        image2 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw62a6d5f0/products/DR_GROSS/UK200023027_DR_GROSS.jpg",
        image3 : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw62a6d5f0/products/DR_GROSS/UK200023027_DR_GROSS.jpg",
        name : "NIMYA",
        para : "BLOW BEFORE YOU GO PORTABLE FAN",
        price : "£13.00",
        rating : "4.5",
        description : "Keep makeup in place throughout the day with the Nimya Blow Before You Go Fan, a convenient addition to your makeup kit. It is ideal for use in conjunction with the Nimya Set It & Forget It Setting Spray to help maintain a fresh, just-applied look."
      },
      {
        image1: "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw7866ff94/products/ULTRAVIOLE/UK200029723_ULTRAVIOLE.jpg",
        image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw011cb458/products/ULTRAVIOLE/UK200029723_ULTRAVIOLE_1.jpg?sw=582&sh=582",
        image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw76333803/products/ULTRAVIOLE/UK200029723_ULTRAVIOLE_2.jpg?sw=582&sh=582",
        name : "IGK HAIR",
        para : "EXTRA LOVE SHAMPOO 236ML",
        price : "£23.00",
        rating : "0",
        description : "Gently cleanse hair and balance oil production with IGK Hair Extra Love Volumizing & Thickening Shampoo. This shampoo works to deliver long-lasting volume and body."
      },
      {
        image1: "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw5a16e4c0/products/VERSO/UK300051422_VERSO.jpg",
        image2 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw4304c117/products/VERSO/UK300051422_VERSO_1.jpg?sw=582&sh=582",
        image3 : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw46a9a219/products/VERSO/UK300051422_VERSO_2.jpg?sw=582&sh=582",
         name : "RAINCRY",
        para : "VOLUME WASH 236ML",
        price : "£29.00",
        rating : "0",
        description : "Achieve a fuller look with the Raincry Volume Wash, a haircare treatment that promotes body and feels weightless."
      }

  ]


  cartdata.forEach(el => {
    
let div = document.createElement("div");

let image = document.createElement("img");

image.src = el.image1;

let name = document.createElement("p");

name.textContent = el.name;

let para = document.createElement("p");

para.textContent = el.para

let price = document.createElement("h2");

price.textContent = el.price

 let star = document.createElement("h1");

 star.innerHTML = "&#11088;" +  "&#11088;" + "&#11088;" + "&#11088;" + "&#11088;"

let quick = document.createElement("div");
let quick1 = document.createElement("p")
quick1.innerText = "QUICK VIEW"
quick1.onclick = function() {
  window.location.href = "./cartpage.html"
}
quick.onclick = function () {
        addtocart(el);
      };

  div.append(image, quick, name, para, price, star);

  parent.append(div);
  quick.append(quick1)



});

}

append_cart_data()


if(localStorage.getItem("cart")=== null) {
      localStorage.setItem("cart", JSON.stringify([]))
    }


  function addtocart(product) {

    let proucts_cart = JSON.parse(localStorage.getItem("cart"));
    
    proucts_cart.push(product)

    localStorage.setItem("cart", JSON.stringify(proucts_cart))
    console.log("product", proucts_cart)

    
  }

