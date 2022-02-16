

//  slide image bar started here
 function slidebar_div() {
  var parent_image = document.getElementById("image_slide");

let slide_image = ["https://lh3.googleusercontent.com/-m4YvMjpVI-w/YbnUW4kRepI/AAAAAAAAXls/xDZPQ0ztKiIVlr12gu0eeHdtANvjyzMVgCNcBGAsYHQ/Screenshot%2B%252886%2529.png", "https://lh3.googleusercontent.com/-MULhpv5d-Mg/YbnUZhB69SI/AAAAAAAAXlw/6DYBL1J_kzM98_2e5FDdyWlgX9xK8eM8wCNcBGAsYHQ/Screenshot%2B%252885%2529.png", "https://lh3.googleusercontent.com/-ua-ABL0Euas/YbnUdW8rQnI/AAAAAAAAXl0/HvT0mewFCxsdBoRd1FOkTPM71563GHvOwCNcBGAsYHQ/Screenshot%2B%252884%2529.png", "https://lh3.googleusercontent.com/-N0zGC4be2O4/YbnUgiUImiI/AAAAAAAAXl4/pooqsKJFClofG0X1IaOa9TITn-OIHfuyQCNcBGAsYHQ/Screenshot%2B%252883%2529.png",
"https://lh3.googleusercontent.com/-m4YvMjpVI-w/YbnUW4kRepI/AAAAAAAAXls/xDZPQ0ztKiIVlr12gu0eeHdtANvjyzMVgCNcBGAsYHQ/Screenshot%2B%252886%2529.png", "https://lh3.googleusercontent.com/-MULhpv5d-Mg/YbnUZhB69SI/AAAAAAAAXlw/6DYBL1J_kzM98_2e5FDdyWlgX9xK8eM8wCNcBGAsYHQ/Screenshot%2B%252885%2529.png", "https://lh3.googleusercontent.com/-ua-ABL0Euas/YbnUdW8rQnI/AAAAAAAAXl0/HvT0mewFCxsdBoRd1FOkTPM71563GHvOwCNcBGAsYHQ/Screenshot%2B%252884%2529.png", "https://lh3.googleusercontent.com/-N0zGC4be2O4/YbnUgiUImiI/AAAAAAAAXl4/pooqsKJFClofG0X1IaOa9TITn-OIHfuyQCNcBGAsYHQ/Screenshot%2B%252883%2529.png",
"https://lh3.googleusercontent.com/-m4YvMjpVI-w/YbnUW4kRepI/AAAAAAAAXls/xDZPQ0ztKiIVlr12gu0eeHdtANvjyzMVgCNcBGAsYHQ/Screenshot%2B%252886%2529.png", "https://lh3.googleusercontent.com/-MULhpv5d-Mg/YbnUZhB69SI/AAAAAAAAXlw/6DYBL1J_kzM98_2e5FDdyWlgX9xK8eM8wCNcBGAsYHQ/Screenshot%2B%252885%2529.png", "https://lh3.googleusercontent.com/-ua-ABL0Euas/YbnUdW8rQnI/AAAAAAAAXl0/HvT0mewFCxsdBoRd1FOkTPM71563GHvOwCNcBGAsYHQ/Screenshot%2B%252884%2529.png", "https://lh3.googleusercontent.com/-N0zGC4be2O4/YbnUgiUImiI/AAAAAAAAXl4/pooqsKJFClofG0X1IaOa9TITn-OIHfuyQCNcBGAsYHQ/Screenshot%2B%252883%2529.png",
"https://lh3.googleusercontent.com/-m4YvMjpVI-w/YbnUW4kRepI/AAAAAAAAXls/xDZPQ0ztKiIVlr12gu0eeHdtANvjyzMVgCNcBGAsYHQ/Screenshot%2B%252886%2529.png", "https://lh3.googleusercontent.com/-MULhpv5d-Mg/YbnUZhB69SI/AAAAAAAAXlw/6DYBL1J_kzM98_2e5FDdyWlgX9xK8eM8wCNcBGAsYHQ/Screenshot%2B%252885%2529.png", "https://lh3.googleusercontent.com/-ua-ABL0Euas/YbnUdW8rQnI/AAAAAAAAXl0/HvT0mewFCxsdBoRd1FOkTPM71563GHvOwCNcBGAsYHQ/Screenshot%2B%252884%2529.png", "https://lh3.googleusercontent.com/-N0zGC4be2O4/YbnUgiUImiI/AAAAAAAAXl4/pooqsKJFClofG0X1IaOa9TITn-OIHfuyQCNcBGAsYHQ/Screenshot%2B%252883%2529.png",
"https://lh3.googleusercontent.com/-m4YvMjpVI-w/YbnUW4kRepI/AAAAAAAAXls/xDZPQ0ztKiIVlr12gu0eeHdtANvjyzMVgCNcBGAsYHQ/Screenshot%2B%252886%2529.png", "https://lh3.googleusercontent.com/-MULhpv5d-Mg/YbnUZhB69SI/AAAAAAAAXlw/6DYBL1J_kzM98_2e5FDdyWlgX9xK8eM8wCNcBGAsYHQ/Screenshot%2B%252885%2529.png", "https://lh3.googleusercontent.com/-ua-ABL0Euas/YbnUdW8rQnI/AAAAAAAAXl0/HvT0mewFCxsdBoRd1FOkTPM71563GHvOwCNcBGAsYHQ/Screenshot%2B%252884%2529.png", "https://lh3.googleusercontent.com/-N0zGC4be2O4/YbnUgiUImiI/AAAAAAAAXl4/pooqsKJFClofG0X1IaOa9TITn-OIHfuyQCNcBGAsYHQ/Screenshot%2B%252883%2529.png",
"https://lh3.googleusercontent.com/-m4YvMjpVI-w/YbnUW4kRepI/AAAAAAAAXls/xDZPQ0ztKiIVlr12gu0eeHdtANvjyzMVgCNcBGAsYHQ/Screenshot%2B%252886%2529.png", "https://lh3.googleusercontent.com/-MULhpv5d-Mg/YbnUZhB69SI/AAAAAAAAXlw/6DYBL1J_kzM98_2e5FDdyWlgX9xK8eM8wCNcBGAsYHQ/Screenshot%2B%252885%2529.png", "https://lh3.googleusercontent.com/-ua-ABL0Euas/YbnUdW8rQnI/AAAAAAAAXl0/HvT0mewFCxsdBoRd1FOkTPM71563GHvOwCNcBGAsYHQ/Screenshot%2B%252884%2529.png", "https://lh3.googleusercontent.com/-N0zGC4be2O4/YbnUgiUImiI/AAAAAAAAXl4/pooqsKJFClofG0X1IaOa9TITn-OIHfuyQCNcBGAsYHQ/Screenshot%2B%252883%2529.png"];
  

  var i = 0;

  let div = document.createElement("img");

  div.src = slide_image[i];


   div.onclick  = next1;
  
   

   function next1() {
    div.src = slide_image[i++];
    
   }
 

  parent_image.append(div)
 }
 slidebar_div()


// cart page data append function


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

   first_div.onclick = function() {
     goto_the_cart1(homedata1[i])
   }
   let second_div = document.createElement("div");

   second_div.onclick = function() {
     goto_the_cart2(homedata1[i+1])
   }
   let last_div = document.createElement("div");

   last_div.onclick = function() {
     goto_the_cart3(homedata1[i+2])
   }

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

 first_div.append(pic1, name1, para1, price1)
 second_div.append(pic2, name2, para2, price2)

 last_div.append(pic3, name3, para3, price3)

div_img.append(first_div, second_div, last_div)


parentdiv1.append(div_img)


    


}

cart_page_append ()


if(localStorage.getItem("cart")=== null) {
      localStorage.setItem("cart", JSON.stringify([]))
    }

function goto_the_cart1(product) {
  
  let proucts_cart = JSON.parse(localStorage.getItem("cart"));
    
    proucts_cart.push(product)

    localStorage.setItem("cart", JSON.stringify(proucts_cart))
    console.log("product", proucts_cart)

  
}
function goto_the_cart2(product1) {
  
  let proucts_cart = JSON.parse(localStorage.getItem("cart"));
    
    proucts_cart.push(product1)

    localStorage.setItem("cart", JSON.stringify(proucts_cart))
    console.log("product", proucts_cart)

  
}
function goto_the_cart3(product2) {
  
  let proucts_cart = JSON.parse(localStorage.getItem("cart"));
    
    proucts_cart.push(product2)

    localStorage.setItem("cart", JSON.stringify(proucts_cart))
    console.log("product", proucts_cart)

  
}




function go_to_the_cart_page() {
  window.location.href = "./cartpage.html"
}





// story data append function

function story() {

  let parent_story = document.getElementById("story");

  let homedata2 = [
    {
  
         image : "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw4507ac2c/products/ULTRAVIOLE/UK200032249_ULTRAVIOLE.jpg",
         name :  "Most Unwanted",
         heading : "Present Time",
         description : "Create a glossy, fuller-looking pout with Charlotte Tilbury Pillow Talk Magic Kisses, a set including Collagen Lip Bath lip gloss and Lip Cheat lip liner in the shade Pillow Talk. This high-shine lip gloss and lip liner combine to leave lips feeling hydrated and looking sumptuous."
  
        
        },
        {

         image : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw45187c7b/products/ULTRAVIOLE/UK200032250_ULTRAVIOLE.jpg?sw=582&sh=582",
  
         
         name :  "WE LOVE",
          
         heading : "Present Time",

         description : "Create a glossy, fuller-looking pout with Charlotte Tilbury Pillow Talk Magic Kisses, a set including Collagen Lip Bath lip gloss and Lip Cheat lip liner in the shade Pillow Talk. This high-shine lip gloss and lip liner combine to leave lips feeling hydrated and looking sumptuous."
  
          
        },
        {

  
         image : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw78e7db55/products/KORA/UK200032322_KORA.jpg?sw=582&sh=582",
         
         name :  "TRENDING NOW",
          
         heading : "Present Time",

         description : "Create a glossy, fuller-looking pout with Charlotte Tilbury Pillow Talk Magic Kisses, a set including Collagen Lip Bath lip gloss and Lip Cheat lip liner in the shade Pillow Talk. This high-shine lip gloss and lip liner combine to leave lips feeling hydrated and looking sumptuous."
  
          
        }

  ]

  

  homedata2.forEach(el => {
    let datadiv = document.createElement("div");
  let image = document.createElement("img");

  image.src = el.image
  let name = document.createElement("h1");
  name.textContent = el.name;

  let heading = document.createElement("p");

  heading.textContent = el.heading

  let description = document.createElement("p");
  description.textContent = el.description
  let link = document.createElement("p")

link.innerHTML = `<a href="./">SHOP NOW</a>`

parent_story.append(datadiv);
datadiv.append(image, name, heading, description, link)

  });

}

story()

// trending stories section

function trending() {

let trending_parent = document.getElementById("trending_stories")

let homedata3 =  [
    {
  image : "https://www.spacenk.com/on/demandware.static/-/Library-Sites-spacenk-global/default/dwc48d825b/images/landingpage/20_wk_13/online_events_main.jpg",
  heading : "8 Festive Finds Our Buying Team Love",   
  story : "Struggling to find the perfect gift for someone special or are you looking for some party makeup inspiration? The buyers have compiled their edit of the most festive beauty finds for Christmas 2021. From Diptyque’s highly coveted candle set to the must-have palette from By Terry, we doubt you’ll make it to the end without adding at least one thing into your basket…"


},

{
    image : "https://www.spacenk.com/on/demandware.static/-/Library-Sites-spacenk-global/default/dw7534cf37/how-to-revive-your-skin-for-winter-space-nk.jpg",
    heading : "How To Rescue Your Skin During The Party Season",
    story : "With festive soirees in full swing and most of us burning the candle at both ends, you’re not alone if your skin is starting to look and feel a little bit worse for wear. “This time of year can be quite harsh on your skin for a number of reasons"
  
  },

  {
    image : "https://www.spacenk.com/on/demandware.static/-/Library-Sites-spacenk-global/default/dw8d86d332/inside-space-in-focus-how-to-buy-fragrance-for-notoriously-tricky-people.jpg",
    heading : "How To Buy Fragrance For Notoriously Tricky People",
    story : "There should be huge pressure on me right now to edit down a selection of bang-on items for this edit. Strangely there isn’t! Because I myself am that notoriously tricky person to buy for. My husband says it. My mum and sister say it. "
  
  },

  {
    image : "https://www.spacenk.com/on/demandware.static/-/Library-Sites-spacenk-global/default/dw78871a4d/best-last-minute-beauty-gifts-space-nk.jpg",
    heading : "The Christmas Issue Of Inside Space",
    story : "The festive season is the one time of the year where we all come together and embrace that warmth of the wider community. After more than a year of temporary store closures due to the various lockdowns, as a company we’ve been reminded of the power of community."
  
  },
]
  
homedata3.forEach(el => {

  let trend_parent = document.createElement("div");

  let image = document.createElement("img");
  image.src = el.image;
  let heading = document.createElement("h2");
heading.textContent = el.heading;
  let story = document.createElement("p");
  story.textContent = el.story;
  let link = document.createElement("p");

  link.innerHTML = `<a href="https://www.spacenk.com/uk/inside-space/in-focus/skin-rescue-tips-for-party-season.html">READ MORE</a>`

  trending_parent.append(trend_parent);

  trend_parent.append(image, heading, story, link)

    
  });
 
}
trending()
 

// 2nd cart page append function

function story_two() {

  let parent_story = document.getElementById("story_one");

let homedata_story = [
  {

       image : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Library-Sites-spacenk-global/default/dwe0c62606/Sisley%20Black%20Rose.jpg?sw=768&sfrm=jpg",
       name :  "BEAUTY EXPERTS",
     
       description : "Create a glossy, fuller-looking pout with Charlotte Tilbury Pillow Talk Magic Kisses, a set including Collagen Lip Bath lip gloss and Lip Cheat lip liner in the shade Pillow Talk. This high-shine lip gloss and lip liner combine to leave lips feeling hydrated and looking sumptuous."

      
      },
      {

       image : "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Library-Sites-spacenk-global/default/dwf90723ff/digital_events_images/Santa_Event.jpg?sw=768&sfrm=jpg",

       
       name :  "EVENTS",
        
   

       description : "Create a glossy, fuller-looking pout with Charlotte Tilbury Pillow Talk Magic Kisses, a set including Collagen Lip Bath lip gloss and Lip Cheat lip liner in the shade Pillow Talk. This high-shine lip gloss and lip liner combine to leave lips feeling hydrated and looking sumptuous."

        
      },
      {


       image : "https://www.spacenk.com/on/demandware.static/-/Library-Sites-spacenk-global/default/dwc48d825b/images/landingpage/20_wk_13/online_events_main.jpg",
       
       name :  "fOLLOW US ON INSTAGRAM",
        
       

       description : "Create a glossy, fuller-looking pout with Charlotte Tilbury Pillow Talk Magic Kisses, a set including Collagen Lip Bath lip gloss and Lip Cheat lip liner in the shade Pillow Talk. This high-shine lip gloss and lip liner combine to leave lips feeling hydrated and looking sumptuous."

        
      }

]



homedata_story.forEach(el => {
  let datadiv = document.createElement("div");
let image = document.createElement("img");

image.src = el.image
let name = document.createElement("h1");
name.textContent = el.name;

let heading = document.createElement("p");

heading.textContent = el.heading

let description = document.createElement("p");
description.textContent = el.description
let link = document.createElement("p")

link.innerHTML = `<a href="./">BOOK NOW</a>`

parent_story.append(datadiv);
datadiv.append(image, name, heading, description, link)

});
}
story_two()


function productpage() {
  window.location.href = "./product_page.html"
}


