
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

   window.addEventListener("DOMContentLoaded", () => {

    const tiles = document.querySelectorAll(".tile");

    tiles.forEach(tile => {
      

        const x = Math.random() * 80;
        const y = Math.random() * 80;

        tile.style.left = `${x}%`;
        tile.style.top = `${y}%`;

    });

});
