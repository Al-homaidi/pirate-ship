document.addEventListener("DOMContentLoaded", () => {
  let sun = document.getElementById("sun");
  let moon = document.getElementById("moon");
  let sunmoon = document.getElementById("sunmoon");

  sunmoon.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    let stars = document.querySelector(".stars");
    let twinkling = document.querySelector(".twinkling");

    let Wav = document.querySelectorAll(".Wav");
    let Wave3 = document.querySelector('.Wave3');
    
    let home__ship = document.querySelector(".home__ship");
    let cloud1 = document.querySelector(".cloud1");
    let cloud2 = document.querySelector(".cloud2");
    let cloud3 = document.querySelector(".cloud3");
    let cloudimg = document.querySelectorAll(".cloud img");

    if (document.body.classList.contains("dark-mode")) {
      stars.style.display = "block";
      twinkling.style.display = "block";
      cloud1.style.display = "none";
      cloud2.style.display = "none";

      sun.style.display = "none";
      moon.style.display = "block";

      Wav.forEach((Wav) => {
        Wav.style.filter = "brightness(0.7)";
        Wav.style.animationDuration = "10s";
      });

      Wave3.style.filter = "brightness(0.7) opacity(1)";

      cloudimg.forEach((img) => {
        img.style.filter = "brightness(0.8)";
      });

      home__ship.style.filter = "brightness(0.5)";
      home__ship.style.animationDuration = "12s";
    } else {
      stars.style.display = "none";
      twinkling.style.display = "none";
      cloud1.style.display = "block";
      cloud2.style.display = "block";
      cloud3.style.display = "block";
      sun.style.display = "block";
      moon.style.display = "none";

      Wav.forEach((Wav) => {
        Wav.style.filter = "brightness(1)";
        Wav.style.animationDuration = "4s";
      });

      Wave3.style.filter = "brightness(1) opacity(0.90)";

      cloudimg.forEach((img) => {
        img.style.filter = "brightness(1)";
      });

      home__ship.style.filter = "brightness(1)";
      home__ship.style.animationDuration = "8s";
    }
  });
});
