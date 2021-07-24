


//example: <script type="text/javascript" src="brand-asset.js"></script> in <head>
//<script type="text/javascript>ba(image_path, website_link, image_width (optionaly, height set automatic))</script>



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}



//BA
const ba = (image, link, width)=>{
  //img
  var rndm = getRandomInt(1, 1000);
  let img = document.createElement('img');
  img.className = "ba-" + rndm;
  img.src = image;
  if (width == null) {
    width = "250px"
  }
  img.style.width = width;

  if(link == "-" || link == "" || link == null) {
    document.body.append(img);
  }
  //a
  else {
    let a = document.createElement('a');
    a.href = link;
    a.title = "Brand-asset.js " + "(" + link + ")";
    a.append(img);

    document.body.append(a);
  }
}

//BASTORE
const bastore = (store, product, width)=>{
  //img
  var rndm = getRandomInt(1, 1000);
  let img = document.createElement('img');
  img.className = "bastore-" + rndm;
  switch(store) {
    case "google_play":
      img.src = "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";
      break;
    case "app_store":
      img.src = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg";
      break;
    default:
      img.src = store;
      break;
  }

  if (width == null) {
    width = "250px"
  }
  img.style.width = width;

  if(product == "-" || product == "" || product == null) {
    document.body.append(img);
  }
  else {
    //a
    let a = document.createElement('a');
    switch (store) {
      case "google_play":
        a.href = "https://play.google.com/store/apps/details?id=" + product;
        break;
      case "app_store":
        a.href = product;
        break;
      default:
        a.href = product;
        break;
    }
    a.title = "Brand-asset.js " + "(" + a.href + ")";
    a.append(img);

    document.body.append(a);
  }
}
