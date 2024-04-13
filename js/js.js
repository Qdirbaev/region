function saveScrollPosition() {
  sessionStorage.setItem('scrollPosition', window.scrollY);
}

function restoreScrollPosition() {
  var scrollPosition = sessionStorage.getItem('scrollPosition');
  if (scrollPosition !== null) {
      window.scrollTo(0, parseInt(scrollPosition));
      sessionStorage.removeItem('scrollPosition');
  }
}
window.addEventListener('beforeunload', saveScrollPosition);

const navPics = document.querySelectorAll(".nav__box-pic");
navPics.forEach(function(navPic) {
  navPic.addEventListener('mouseenter', function(event) {
    const navTarget = event.target
    const navText = navTarget.nextElementSibling;
    const navText2 = navText.nextElementSibling;
    navText.style.display = "none"
    navText2.style.display = "block"
  });

  navPic.addEventListener('mouseleave', function(event) {
    const currentPic = event.target
    const navText = currentPic.nextElementSibling;
    const navText2 = navText.nextElementSibling;
    navText.style.display = "block"
    navText2.style.display = "none"
  });
});

const burgerBtn = document.querySelector(".header__burger")
burgerBtn.addEventListener('click', function(){
  burgerBtn.classList.toggle("active")
  document.querySelector(".header__burger-show").classList.toggle("active")
})