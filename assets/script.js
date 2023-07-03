function toggleMode() {
  // switch do botão
  const html = document.documentElement
  html.classList.toggle("light")

  // switch de imagem
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    // com o ligh mode ativado
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  
}
