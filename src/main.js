window.onload  = function () {
    let  gap = 0;

    let   carousel = document.getElementById("carousel"),
           content = document.getElementById("content"),
           next = document.getElementById("next"),
           prev = document.getElementById("prev"),
           width = carousel.offsetWidth;
    //condition for sliding right side and to display or not the next button//
    if (next) {
      next.addEventListener("click", e => {
        carousel.scrollBy(width, 0);
        if (carousel.scrollWidth !== 0) {
          prev.style.display = "flex";
        }
        if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
          next.style.display = "none";
        }
      });
    }
    //condition for sliding left side and to display or not the previous button//
    if (prev) {
      prev.addEventListener("click", e => {
        carousel.scrollBy(-(width), 0);
        if (carousel.scrollLeft - width - gap <= 0) {
          prev.style.display = "none";
        }
        if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
          next.style.display = "flex";
        }
      });
    }
    //Whenever we resize the window it will change the width of carousel//
    window.onresize = function() {
      if (carousel) {  
      window.addEventListener("resize", e => (width = carousel.offsetWidth));
      console.log(width);
    }
    }
  }
