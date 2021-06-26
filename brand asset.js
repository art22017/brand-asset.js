function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

var samsung = ["Samsung", "http://samsung.com"]

const ba = (s, h, w)=>{
  if (s == samsung)
  {
    var rndm = getRandomInt(1, 1000);
    let img = document.createElement('img');
    img.className = rndm;
    img.src = "icons/Samsung_Logo.svg";
    img.alt = "";
    img.style.widht = w;
    img.style.height = h;

    let a = document.createElement('a');
    a.href = s[1];
    a.title = s[0] + " (" + s[1] + ")";
    a.append(img);

    document.body.append(a);
  }
}
ba(samsung, '100px', '100px');
