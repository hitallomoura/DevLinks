function toogleMode() {
    const body = document.body;
    const switchButton = document.querySelector("#switch button")
    const img = document.querySelector("#profile img");

    const isLight = body.classList.toggle("light");

    if (isLight) {
      switchButton.style.animation = "slide-right 0.4s forwards";
    } else {
      switchButton.style.animation = "slide-left 0.4s forwards";
    }

    if (body.classList.contains("light")) {
        img.setAttribute('src', './assets/avatar-light.png')
    } else {
        img.setAttribute("src", "./assets/avatar.png");
    }
}