var loader = document.getElementsByClassName('loader')[0];
var letter = document.getElementsByClassName('letter')[0]
var loading = document.getElementById('loading');
var body = document.getElementById('body');
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
      if(t==10) {
        clearInterval(x);
        loading.style.display = 'none';
        body.style.display = 'block';
      };
    },10);
}


function color(){
  r=Math.round(Math.random()*255);
  g=Math.round(Math.random()*255);
  b=Math.round(Math.random()*255);
  return "rgb("+r+","+g+","+b+")";
}
/*
  Slidemenu
*/
(function() {
  var body = document.body
  , menu = body.getElementsByClassName('menu')[0];

  if ( typeof menu !== 'undefined' ) {
    menu.addEventListener('click', function() {
      body.className = ( body.className == 'menu-active' )? '' : 'menu-active';
    });
  }

}).call(this);

document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function(e) {
    this.classList.toggle( "active" );
  });

// Evento OncLick
var mostrar=document.getElementsByTagName("li");
console.log(mostrar);

for (var i=0;i<mostrar.length;i++){
  if (this.getAttribute=="icon-papelines"){

  }

}
