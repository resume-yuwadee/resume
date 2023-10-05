function toggleHam(x) {
    x.classList.toggle("change");
    console.log("test ");
    let myMenu = document.getElementById('myMenu');
    if (myMenu.className === 'menu'){console.log("test 1");
        myMenu.className += ' menu-active';
    } else {console.log("test 2");
        myMenu.className = 'menu';
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var scrollLink = document.getElementById("scrollButton");
    if (scrollLink) {
        scrollLink.addEventListener("click", function (event) {
            event.preventDefault();
            var targetDiv = document.getElementById("targetDiv");
            if (targetDiv) {
                var targetOffset = targetDiv.offsetTop;
                window.scrollTo({
                    top: targetOffset,
                    behavior: "smooth"
                });
            }
        });
    }
});


  