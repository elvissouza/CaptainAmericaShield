// Change Background in Shield Click
function changeImg() {
  var imageEnd = document.getElementById("backgroundImg");
  imageEnd.classList.toggle("minus");
}

// Modal Scripts Open Box and close/window.target close
var modal = document.getElementById("popup1");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
