  document.addEventListener("DOMContentLoaded", function() {

    const music = document.getElementById("bg-music");
    const button = document.getElementById("musicBtn");

    button.addEventListener("click", function() {

      if (music.paused) {
        music.play();
        button.innerHTML = "si quieres puedes pausarla un poco (ni te imaginas como se llama la canción xd)";
        button.classList.remove("btn-danger");
        button.classList.add("btn-dark");
      } else {
        music.pause();
        button.innerHTML = "O si quieres puedes ponerla d nuevo";
        button.classList.remove("btn-dark");
        button.classList.add("btn-danger");
      }

    });

  });


    // Establecer volumen al 30%
  document.getElementById('bg-music').volume = 0.2;