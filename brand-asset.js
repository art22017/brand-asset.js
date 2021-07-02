


var example = ["http://google.com", "g.svg"]



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}



//BA
const ba = (image, link, width)=>{
    var rndm = getRandomInt(1, 1000);
    let img = document.createElement('img');
    img.className = "ba-" + rndm;
    img.src = image;
    if (width == null) {
      width = "250px"
    }
    img.style.width = width;

    let a = document.createElement('a');
    a.href = link;
    a.title = "Brand-asset.js " + "(" + link + ")";
    a.append(img);

    document.body.append(a);
}