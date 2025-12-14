function checkName() {
  const input = document.getElementById("nameInput").value
    .trim()
    .toLowerCase();

  const music = document.getElementById("bgMusic");

  if (input === "bea") {
    document.getElementById("page-one").classList.add("fade-out");

    setTimeout(() => {
      document.getElementById("page-one").classList.add("hidden");
      document.getElementById("page-two").classList.remove("hidden");
      document.getElementById("page-two").classList.add("fade-in");

      music.volume = 0.3;
      music.play().catch(() => {
        console.log("Autoplay blocked until user interaction");
      });
    }, 600);
  } else {
    window.location.href = "not-bea.html";
  }
}
