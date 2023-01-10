var responsiveSlider = function() {

    var slider = document.getElementById("first-slide");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slide-wrap");
    var count = 1;
    var items = 6;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    
    window.addEventListener('resize', function() {
      sliderWidth = slider.offsetWidth;
    });
    
    var prevSlide = function() {
      if(count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = 1) {
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
    };
    
    var nextSlide = function() {
      if(count < 6) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = items) {
        slideList.style.left = "0px";
        count = 1;
      }
    };
    
    next.addEventListener("click", function() {
      nextSlide();
    });
    
    prev.addEventListener("click", function() {
      prevSlide();
    });
    
    setInterval(function() {
      nextSlide()
    }, 6000);
    
    };



var bestRateResponsiveSlider = function() {

    var slider = document.getElementById("first-slide");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("second-slide-wrap");
    var count = 1;
    var items = 6;
    var prev = document.getElementById("second-prev");
    var next = document.getElementById("second-next");
      
    window.addEventListener('resize', function() {
      sliderWidth = slider.offsetWidth;
    });
      
    var prevSlide = function() {
      if(count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = 1) {
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
    };
      
    var nextSlide = function() {
      if(count < 6) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = items) {
        slideList.style.left = "0px";
        count = 1;
      }
    };
      
    next.addEventListener("click", function() {
      nextSlide();
    });
      
    prev.addEventListener("click", function() {
      prevSlide();
    });
      
    setInterval(function() {
      nextSlide()
    }, 7000);
  }
      

    var bestIssekaiResponsiveSlider = function() {

      var slider = document.getElementById("first-slide");
      var sliderWidth = slider.offsetWidth;
      var slideList = document.getElementById("third-slide-wrap");
      var count = 1;
      var items = 6;
      var prev = document.getElementById("third-prev");
      var next = document.getElementById("third-next");
        
      window.addEventListener('resize', function() {
        sliderWidth = slider.offsetWidth;
      });
        
      var prevSlide = function() {
        if(count > 1) {
          count = count - 2;
          slideList.style.left = "-" + count * sliderWidth + "px";
          count++;
        }
        else if(count = 1) {
          count = items - 1;
          slideList.style.left = "-" + count * sliderWidth + "px";
          count++;
        }
      };
        
      var nextSlide = function() {
        if(count < 6) {
          slideList.style.left = "-" + count * sliderWidth + "px";
          count++;
        }
        else if(count = items) {
          slideList.style.left = "0px";
          count = 1;
        }
      };
        
      next.addEventListener("click", function() {
        nextSlide();
      });
        
      prev.addEventListener("click", function() {
        prevSlide();
      });
        
      setInterval(function() {
        nextSlide()
      }, 8000);
        
    }

      window.onload = function() {
      bestRateResponsiveSlider(), responsiveSlider(),bestIssekaiResponsiveSlider()
      }

      function showVideo(videoId) {
        var player = document.getElementById('player');
        player.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
        document.getElementById('video-window').style.display = 'block';
    }

    function showContent(contentDirection) {
      var direction = document.getElementsByClassName('platform' + contendDirection)
      direction.src = 
      document.getElementsByClassName('first-panel').style.display = 'block'; 

    }

    var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}