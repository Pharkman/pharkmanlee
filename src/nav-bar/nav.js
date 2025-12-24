const menuIcon = document.getElementsByClassName("menu-icon")
const menu = document.getElementsByClassName("menu")

console.log("hello world + 50")

 menuIcon.addEventListener("click", () => {
    menu.classList.toggle("visible"); // Toggle a class on the menu
  });
