window.addEventListener('DOMContentLoaded', function() {
    showContent();
  });
  
  function showContent(galleryline) {
    var gallerylineA = document.getElementById("gallerylineA");
    var gallerylineB = document.getElementById("gallerylineB");
  
    // 내용 숨김
    gallerylineA.style.display = "none";
    gallerylineB.style.display = "none";
  
    // 선택한 내용 보이기
    if (galleryline === "A") {
          gallerylineA.style.display = "block";
    } else if (galleryline === "B") {
          gallerylineB.style.display = "block";
    }
  }



window.onmousemove = e => {
  const mouseX = e.clientX,
        mouseY = e.clientY;
  
  const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;
  
  const maxX = gallery.offsetWidth - window.innerWidth,
        maxY = gallery.offsetHeight - window.innerHeight;
  
  const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1;
  
        gallery.animate({
    transform: `translate(${panX}px, ${panY}px)`
  }, {
    duration: 4000,
    fill: "forwards",
    easing: "ease"
  })
}

function change_btn(e) {
    var btns = document.querySelectorAll(".buttonA");
    var btns2 = document.querySelectorAll(".buttonB");
    
    btns.forEach(function (btn, i) {
      if (e.currentTarget == btn) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
    console.log(e.currentTarget);

    btns2.forEach(function (btn2, i) {
        if (e.currentTarget == btn2) {
          btn2.classList.add("active");
        } else {
          btn2.classList.remove("active");
        }
      });
      console.log(e.currentTarget);
  }


  window.addEventListener("DOMContentLoaded", () => {

    const tiles = document.querySelectorAll(".tile_text_first");

    tiles.forEach(tile => {
      

        const x = Math.random() * 80;
        const y = Math.random() * 80;

        tile.style.left = `${x}%`;
        tile.style.top = `${y}%`;

    });

});

  window.addEventListener("DOMContentLoaded", () => {

    const tiles = document.querySelectorAll(".tile_text_last");

    tiles.forEach(tile => {

        const x = Math.random() * 80;
        const y = Math.random() * 80;

        tile.style.left = `${x}%`;
        tile.style.top = `${y}%`;

    });

});