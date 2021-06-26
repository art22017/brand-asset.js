function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}

var example = ["Example", "http://samsung.com", "icons/Samsung_Logo.svg"]
var example1 = ["Example", "http://samsung.com", "icons/Samsung_Logo.svg"]

var stores = ["icons/google-play.png", "icons/app-store.svg"]
var gp = "https://play.google.com/store/apps/details?id=";
var as;

//ba(company_name, width); встроеные компании
//bacstm(company_name, logo, site, width); добавление своей компании
//bastrore(store_name[gp, as,], product, width) магазины приложений

const ba = (s, w)=>{
    var rndm = getRandomInt(1, 1000);
    let img = document.createElement('img');
    img.className = rndm;
    img.src = s[2];
    img.alt = "";
    if (w == null) {
      w = "250px"
    }
    img.style.width = w;

    let a = document.createElement('a');
    a.href = s[1];
    a.title = s[0] + " (" + s[1] + ")";
    a.append(img);

    document.body.append(a);
}


const bacstm = (s, l, u, w)=>{
  var rndm = getRandomInt(1, 1000);
  let img = document.createElement('img');
  img.className = rndm;
  img.src = l;
  img.alt = "";
  if (w == null) {
    w = "250px"
  }
  img.style.width = w;

  let a = document.createElement('a');
  a.href = u;
  a.title = s + " (" + l + ")";
  a.append(img);

  document.body.append(a);
}

const bastore = (s, p, w)=>{
  var rndm = getRandomInt(1, 1000);
  let img = document.createElement('img');
  img.className = rndm;
  if (s == gp) {
    img.src = stores[0];
  }
  else if (s == as) {
    img.src = stores[1];
  }
  img.alt = "";
  if (w == null) {
    w = "250px"
  }
  img.style.width = w;

  let a = document.createElement('a');
  if (s == gp) {
    a.href = gp + p
  }
  else if (s == as) {
    a.href = p
  }
  a.title = s + " (" + a.href + ")";
  a.append(img);

  document.body.append(a);
}
