var isAdvancedUpload = function() {
  //var div = document.createElement('div');
  //return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
  console.log(true);
  return true;
}();

window.onscroll = function() {myFunction()};

var header = document.getElementById("myNavBar");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
</s
