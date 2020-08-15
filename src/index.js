import NavBarComponent from "./navbar/navbarComponent";
import AboutUsPage from "./about-us/aboutUs";
import "./indexStyles.css";
import Icon from './images/home.jpg'


const showPage = (pageId) =>
  document.getElementById(pageId).classList.remove("d-none");

window.onload = () => {
  document.getElementById("content").classList.add("content");
  NavBarComponent.renderNavBar("content");
  AboutUsPage.renderAboutUsPage("content");
  document.getElementById("aboutUs").classList.add("d-none");
  document.getElementById("btn-about-us").addEventListener("click", () => {
    showPage("aboutUs");
  });
};
