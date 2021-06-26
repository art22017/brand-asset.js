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

var samsung = ["Samsung", "http://samsung.com"]

const ba = (s, w)=>{
  if (s == samsung)
  {
    var rndm = getRandomInt(1, 1000);
    let img = document.createElement('img');
    img.className = rndm;
    img.src = "icons/Samsung_Logo.svg";
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
}
