var loader = document.getElementsByClassName('loader')[0];
var letter = document.getElementsByClassName('letter')[0]
var loading = document.getElementById('loading');
var content = document.getElementById('content');
window.onload = load;
function load(){
  incLoader();
}

function incLoader() {
    var t = 0;
    var x = setInterval( function() {
      t++;
      var colorFijo = color()
      loader.style.color = colorFijo;
      loader.style.fontSize = "250px";
      loader.innerHTML = t+ '%' ; 
      if(t==100) {
        clearInterval(x);
        loading.style.display = 'none';
        content.style.display = 'block';
      };
    },100);
}


function color(){
  r=Math.round(Math.random()*255);
  g=Math.round(Math.random()*255);
  b=Math.round(Math.random()*255);
  return "rgb("+r+","+g+","+b+")";
}
