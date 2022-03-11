window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbarNav").style.background = "#BF8821";
  } else {
    document.getElementById("navbarNav").style.background = "none";
  }
}


