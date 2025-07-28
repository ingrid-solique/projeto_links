function toggleMode() {
  const html = document.documentElement

  // troca classe
  html.classList.toggle("light")

  //susbtituir a imagem
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("scr", "./assets/avatar-light.png")
  } else {
    img.setAttribute("scr", "./assets/avatar.png")
  }
}
