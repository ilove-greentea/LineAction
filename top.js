const hamburgerButton = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");

hamburgerButton.addEventListener("click", () => {
  const isExpanded = hamburgerButton.getAttribute("aria-expanded") === "true";

  hamburgerButton.setAttribute("aria-expanded", !isExpanded);

  hamburgerButton.classList.toggle("is-active");
  menu.classList.toggle("is-active");
});
// メニュー内リンクを踏んだら閉じる
const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerButton.classList.remove("is-active");
    menu.classList.remove("is-active");
    hamburgerButton.setAttribute("aria-expanded", "false");
  });
});
