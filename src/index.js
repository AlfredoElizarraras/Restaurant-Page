import NavBarComponent from "./navbar/navbarComponent";
import AboutUsPage from "./about-us/aboutUs";
import HomePage from "./home/home"
import "./indexStyles.css";


const showPage = (pageId) =>
  document.getElementById(pageId).classList.remove("d-none");

window.onload = () => {
  document.getElementById("content").classList.add("content");
  NavBarComponent.renderNavBar("content");
  AboutUsPage.renderAboutUsPage("content");
  HomePage.renderHomePage("content");
  document.getElementById("btn-about-us").addEventListener("click", () => {
    showPage("aboutUs");
  });
  document.getElementById("btn-home").addEventListener("click", () => {
    showPage("homeId");
  });
};
