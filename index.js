var category1 = new XMLHttpRequest(); //men
var category2 = new XMLHttpRequest();//women
var category3= new XMLHttpRequest();
var category4= new XMLHttpRequest();
//GET each category
category1.open('GET', 'https://fakestoreapi.com/products'); 
category2.open('GET', 'https://fakestoreapi.com/products'); 
category3.open('GET', 'https://fakestoreapi.com/products/category/jewelery'); 
category4.open('GET', 'https://fakestoreapi.com/products/category/electronics'); 

category1.onload = function () {
  var response = category1.response;
  var parsedData = JSON.parse(response);

  var product = parsedData;
  console.log(product);

  for (let i = 0; i < 4; i++) {
    const menClothingTitle = parsedData[i].title;
    const menClothingImage = parsedData[i].image;

    const MenProductContainer = document.createElement('div');
    MenProductContainer.className = 'product-container-m';
    const menListTitle = document.createElement('p');
    const menListImage = document.createElement('img');

    if (i === 0) {
      // "Buy Here" link
      const buyHereLink = document.createElement('a');
      buyHereLink.href = 'https://www.fjallraven.com/uk/en-gb/bags-gear/backpacks-bags/laptop-bags/foldsack-no-1'; // Add your desired URL here
      buyHereLink.target = '_blank'; // Open in a new tab
      buyHereLink.appendChild(document.createTextNode('Buy Here'));

      menListTitle.textContent = menClothingTitle;
      menListTitle.appendChild(document.createElement('br')); // Add a line break
      menListTitle.appendChild(buyHereLink);


    } else if (i === 1) {
      // "Buy Here" link
      const buyHereLink = document.createElement('a');
      buyHereLink.href = 'https://www.amazon.com/dp/B01LA3Y6RS/ref=asc_df_B01LA3Y6RS1700046000000?tag=stylight2017-20&ascsubtag=1c34689d-7f97-48f1-b4f0-e07224ea78de&creative=395261&creativeASIN=B01LA3Y6RS&linkCode=asn'; // Add your desired URL here
      buyHereLink.target = '_blank'; // Open in a new tab
      buyHereLink.appendChild(document.createTextNode('Buy Here'));

      menListTitle.textContent = menClothingTitle;
      menListTitle.appendChild(document.createElement('br')); // Add a line break
      menListTitle.appendChild(buyHereLink);
    }else if (i === 2) {
      // "Buy Here" link
      const buyHereLink = document.createElement('a');
      buyHereLink.href = 'https://www.aliexpress.com/item/1005003680665894.html'; // Add your desired URL here
      buyHereLink.target = '_blank'; // Open in a new tab
      buyHereLink.appendChild(document.createTextNode('Buy Here'));

      menListTitle.textContent = menClothingTitle;
      menListTitle.appendChild(document.createElement('br')); // Add a line break
      menListTitle.appendChild(buyHereLink);
     } else if (i === 3) {
      // "Buy Here" link
      const buyHereLink = document.createElement('a');
      buyHereLink.href = 'https://www.amazon.com/H2H-Casual-T-Shirts-DARKBLUE-KMTTL0374/dp/B017XIG2SU?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1FWALUW7JMUM2'; // Add your desired URL here
      buyHereLink.target = '_blank'; // Open in a new tab
      buyHereLink.appendChild(document.createTextNode('Buy Here'));

      menListTitle.textContent = menClothingTitle;
      menListTitle.appendChild(document.createElement('br')); // Add a line break
      menListTitle.appendChild(buyHereLink);
    } else {
      menListTitle.textContent = menClothingTitle;
    }

    menListTitle.className = 'clothes-text';
    menListTitle.classList.add('clothes');
    menListImage.setAttribute('src', menClothingImage);
    menListImage.className = 'men-category';

    MenProductContainer.appendChild(menListImage);
    MenProductContainer.appendChild(menListTitle);
   
    document.getElementById('men-category').appendChild(MenProductContainer);
  }
};

category2.onload = function () {
  var response = category2.response;
  var parsedData = JSON.parse(response);

  var product = parsedData;
  console.log(product);

  for (let j = 14; j < 20; j++) {
    const womenClothingTitle = parsedData[j].title;
    const womenClothingImage = parsedData[j].image;

    const womenProductContainer = document.createElement('div');
    womenProductContainer.className = 'product-container';

    const womenListTitle = document.createElement('p');
    const womenListImage = document.createElement('img');
    
    if (j === 14) {
      // "Buy Here" link
      const buyHereLink = document.createElement('a');
      buyHereLink.href = 'https://www.aliexpress.com/item/1005003128351135.html'; // Add your desired URL here
      buyHereLink.target = '_blank'; // Open in a new tab
      buyHereLink.appendChild(document.createTextNode('Buy Here'));

      womenListTitle.textContent = womenClothingTitle;
      womenListTitle.appendChild(document.createElement('br')); // Add a line break
      womenListTitle.appendChild(buyHereLink);
    } else if (j == 15) {
      // "Buy Here" link
      const buyHereLink = document.createElement('a');
      buyHereLink.href = 'https://www.ebay.ph/itm/313689121431'; // Add your desired URL here
      buyHereLink.target = '_blank'; // Open in a new tab
      buyHereLink.appendChild(document.createTextNode('Buy Here'));

      womenListTitle.textContent = womenClothingTitle;
      womenListTitle.appendChild(document.createElement('br')); // Add a line break
      womenListTitle.appendChild(buyHereLink);
    } else if (j == 16) {
      // "Buy Here" link
      const buyHereLink = document.createElement('a');
      buyHereLink.href = 'https://brunei.desertcart.com/products/138219053-twinklady-rain-jacket-women-windbreaker-striped-climbing-raincoats-waterproof-lightweight-outdoor-hooded-trench-coats'; // Add your desired URL here
      buyHereLink.target = '_blank'; // Open in a new tab
      buyHereLink.appendChild(document.createTextNode('Buy Here'));

      womenListTitle.textContent = womenClothingTitle;
      womenListTitle.appendChild(document.createElement('br')); // Add a line break
      womenListTitle.appendChild(buyHereLink);
    } else if (j == 17) {
      // "Buy Here" link
      const buyHereLink = document.createElement('a');
      buyHereLink.href = 'https://www.galleon.ph/appliances-c863/women-c876/tops-tees-blouses-c1208/t-shirts-c1670/mbj-wt817-womens-dolman-drape-top-with-side-p7599412'; // Add your desired URL here
      buyHereLink.target = '_blank'; // Open in a new tab
      buyHereLink.appendChild(document.createTextNode('Buy Here'));

      womenListTitle.textContent = womenClothingTitle;
      womenListTitle.appendChild(document.createElement('br')); // Add a line break
      womenListTitle.appendChild(buyHereLink);
    } else if (j == 18) {
      // "Buy Here" link
      const buyHereLink = document.createElement('a');
      buyHereLink.href = 'https://riverascreenprinting.net/products/womens-short-sleeve-vneck-drifit-tshirt-1'; // Add your desired URL here
      buyHereLink.target = '_blank'; // Open in a new tab
      buyHereLink.appendChild(document.createTextNode('Buy Here'));

      womenListTitle.textContent = womenClothingTitle;
      womenListTitle.appendChild(document.createElement('br')); // Add a line break
      womenListTitle.appendChild(buyHereLink);
    } else if (j == 19) {
      // "Buy Here" link
      const buyHereLink = document.createElement('a');
      buyHereLink.href = 'https://www.amazon.com/dp/B07TCFDWBH?linkCode=ssc&tag=onamzlinds09a-20&creativeASIN=B07TCFDWBH&asc_item-id=amzn1.ideas.493P523PLG8Q&ref_=aip_sf_list_spv_ofs_d_asin'; // Add your desired URL here
      buyHereLink.target = '_blank'; // Open in a new tab
      buyHereLink.appendChild(document.createTextNode('Buy Here'));

      womenListTitle.textContent = womenClothingTitle;
      womenListTitle.appendChild(document.createElement('br')); // Add a line break
      womenListTitle.appendChild(buyHereLink);
    }else {
      womenListTitle.textContent = womenClothingTitle;
    }
    womenListTitle.className = ('clothes-text');
    womenListTitle.classList.add ('clothes');
    womenListImage.setAttribute('src', womenClothingImage);
    womenListImage.className = 'women-category';


    womenProductContainer.appendChild(womenListImage);
    womenProductContainer.appendChild(womenListTitle);


    document.getElementById('women-category').appendChild(womenProductContainer);
  }
};

category3.onload = function() {
  var response = category3.response;
  var parsedData = JSON.parse(response);

  var product = parsedData;
  console.log(product);

  for (let m in parsedData) {
    const jewelryTitle = parsedData[m].title;
    const jewelryImage = parsedData[m].image;

    const jewelryProductContainer = document.createElement('div');
    jewelryProductContainer.className = 'product-container-j';
    const jewelryListTitle = document.createElement('p');
    const jewelryListImage = document.createElement('img');

    if (m === '0') {
      // "Buy Here" link
      const buyHereLink = document.createElement('a');
      buyHereLink.href = 'https://www.1stdibs.com/jewelry/bracelets/chain-bracelets/john-hardy-legends-naga-sterling-silver-gold-dragon-bracelet/id-j_16184342/'; // Add your desired URL here
      buyHereLink.target = '_blank'; // Open in a new tab
      buyHereLink.appendChild(document.createTextNode('Buy Here'));

      jewelryListTitle.textContent = jewelryTitle;
      jewelryListTitle.appendChild(document.createElement('br')); // Add a line break
      jewelryListTitle.appendChild(buyHereLink);
    } else if (m === '1') {
      // "Buy Here" link
      const buyHereLink = document.createElement('a');
      buyHereLink.href = 'https://www.primany.net/product-page/pr2025d-b-0-19ct'; // Add your desired URL here
      buyHereLink.target = '_blank'; // Open in a new tab
      buyHereLink.appendChild(document.createTextNode('Buy Here'));

      jewelryListTitle.textContent = jewelryTitle;
      jewelryListTitle.appendChild(document.createElement('br')); // Add a line break
      jewelryListTitle.appendChild(buyHereLink); 
    } else if (m === '2') {
      // "Buy Here" link
      const buyHereLink = document.createElement('a');
      buyHereLink.href = 'https://kirijewels.com/products/caoshi-fashion-wedding-ring-set-for-women-dazzling-square-zirconia-luxury-lady-accessories-set-trendy-delicate-bridal-jewelry'; // Add your desired URL here
      buyHereLink.target = '_blank'; // Open in a new tab
      buyHereLink.appendChild(document.createTextNode('Buy Here'));

      jewelryListTitle.textContent = jewelryTitle;
      jewelryListTitle.appendChild(document.createElement('br')); // Add a line break
      jewelryListTitle.appendChild(buyHereLink); 
      
    } else if (m === '3') {
      // "Buy Here" link
      const buyHereLink = document.createElement('a');
      buyHereLink.href = 'https://kirijewels.com/products/caoshi-fashion-wedding-ring-set-for-women-dazzling-square-zirconia-luxury-lady-accessories-set-trendy-delicate-bridal-jewelry'; // Add your desired URL here
      buyHereLink.target = '_blank'; // Open in a new tab
      buyHereLink.appendChild(document.createTextNode('Buy Here'));

      jewelryListTitle.textContent = jewelryTitle;
      jewelryListTitle.appendChild(document.createElement('br')); // Add a line break
      jewelryListTitle.appendChild(buyHereLink); 
    }  
    else {
      jewelryListTitle.textContent = jewelryTitle;
    }

    jewelryListTitle.className = 'clothestext';
    jewelryListImage.setAttribute('src', jewelryImage);
    jewelryListImage.className = 'jewelry-category';

    const jewelryPrice = parsedData[m].price;
    const jewelryListPrice = document.createElement('p');
    

    jewelryProductContainer.appendChild(jewelryListImage);
    jewelryProductContainer.appendChild(jewelryListTitle);
    
    document.getElementById('jewelry-category').appendChild(jewelryProductContainer);
  }
};
  category1.send(); 
  category2.send();
  category3.send();
  category4.send();
