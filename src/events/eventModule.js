import * as helpers from "./helpers";
import NavBarComponent from './navbar/navbarComponent';
import AboutUsPage from './about-us/aboutUs';
import HomePage from './home/home';
import MenuPage from './Menu/Menu';
import './indexStyles.css';

const EventModule = (() => {
  const addTabButtonsClickEvent = () => {
    document.getElementById("btn-about-us").addEventListener("click", () => {
      helpers.hideElementsByClass(".page");
      helpers.showElement("aboutUsId");
    });
    document.getElementById("btn-home").addEventListener("click", () => {
      helpers.hideElementsByClass(".page");
      helpers.showElement("homeId");
    });
    document.getElementById("btn-menu").addEventListener("click", () => {
      helpers.hideElementsByClass(".page");
      helpers.showElement("menuId");
    });
    document.getElementById("btn-home-menu").addEventListener("click", () => {
      helpers.hideElementsByClass(".page");
      helpers.showElement("menuId");
    });
  };

  const addMenuCardsClickEvent = () => {
    document.querySelectorAll(".menu__card").forEach((item) => {
      item.addEventListener("click", () => {
        const currentCard = window.event.currentTarget;
        document.getElementById("menuModalImage").src = document.getElementById(
          currentCard.id.replace("menuCard", "menuCardImage")
        ).src;
        document.getElementById(
          "menuModalHeader"
        ).innerHTML = document.getElementById(
          currentCard.id.replace("menuCard", "menuCardHeader")
        ).innerHTML;
        document.getElementById(
          "menuModalDescription"
        ).innerHTML = document.getElementById(
          currentCard.id.replace("menuCard", "menuCardDescription")
        ).innerHTML;
        document.getElementById(
          "menuModalGrade"
        ).innerHTML = document.getElementById(
          currentCard.id.replace("menuCard", "menuCardGrade")
        ).innerHTML;
        helpers.hideElementsByClass(".menu__card");
        helpers.showElement("modalDishInfo");
      });
    });
  };

  const addModalDishInfoEvents = () => {
    document.getElementById("btn-close").onclick = () => {
      helpers.hideElement("modalDishInfo");
      helpers.displayElementsByClass(".menu__card");
    };

    window.onclick = (event) => {
      const modal = document.getElementById("modalDishInfo");
      if (event.target === modal) {
        helpers.hideElement("modalDishInfo");
        helpers.displayElementsByClass(".menu__card");
      }
    };
  };

  const addEvents = () => {
    addTabButtonsClickEvent();
    addMenuCardsClickEvent();
    addModalDishInfoEvents();
  };

  const pageLoad = () => {
    window.onload = () => {
      const mainDiv = document.querySelector("#content");
      mainDiv.classList.add("content");
      NavBarComponent.renderNavBar("content");
      AboutUsPage.renderAboutUsPage("content");
      HomePage.renderHomePage("content");
      MenuPage.renderMenuPage("content");
      addEvents();
    };
  };

  return {
    pageLoad,
  };
})();

export default EventModule;
