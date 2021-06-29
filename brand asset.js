


var example = ["Example", "http://google.com", "icons/Google.svg"]
var example_store = ["Google Play","https://play.google.com/store/apps/details?id=", "icons/google-play.png"]





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
  img.src = s[2];
  img.alt = "";
  if (w == null) {
    w = "250px"
  }
  img.style.width = w;

  let a = document.createElement('a');
  a.href = s[1] + p;
  a.title = s[0] + " (" + a.href + ")";
  a.append(img);

  document.body.append(a);
}

const bastore_cstm = (s, r, p, l, w)=>{
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
  a.href = r + p;
  a.title = s + " (" + a.href + ")";
  a.append(img);

  document.body.append(a);
}
