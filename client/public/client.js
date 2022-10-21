function reveal() {
  var reveals = document.querySelectorAll(".main-form");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    if (elementTop < windowHeight + 200) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener("scroll", window.reveal);