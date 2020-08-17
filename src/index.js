import NavBarComponent from './navbar/navbarComponent';
import AboutUsPage from './about-us/aboutUs';
import HomePage from './home/home';
import MenuPage from './Menu/Menu';
import './indexStyles.css';


const showPage = (pageId) => document.getElementById(pageId).classList.remove('d-none');

window.onload = () => {
  document.getElementById('content').classList.add('content');
  NavBarComponent.renderNavBar('content');
  AboutUsPage.renderAboutUsPage('content');
  HomePage.renderHomePage('content');
  MenuPage.renderMenuPage('content');
  // #region events
  document.getElementById('btn-about-us').addEventListener('click', () => {
    showPage('aboutUs');
  });
  document.getElementById('btn-home').addEventListener('click', () => {
    showPage('homeId');
  });
  document.getElementById('btn-menu').addEventListener('click', () => {
    showPage('menuId');
  });

  const displayMenuItems = () => {
    modal.style.display = "none";
    document.getElementById("menuCard1").style.display = "flex";
    document.getElementById("menuCard2").style.display = "flex";
    document.getElementById("menuCard3").style.display = "flex";
    document.getElementById("menuCard4").style.display = "flex";
  };

  // When the users clicks a menu item, it hides all menu items and show the modal.
  document.querySelectorAll(".menu__card").forEach((item) => {
    item.addEventListener("click", (event) => {
      modal.style.display = "block";
      const currentCard = window.event.currentTarget;
      console.log(currentCard.id);
      document.getElementById(
        "menuModalImage"
      ).src = document.getElementById(
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
      document.getElementById("menuCard1").style.display = "none";
      document.getElementById("menuCard2").style.display = "none";
      document.getElementById("menuCard3").style.display = "none";
      console.log(window.event.currentTarget);
    });
  });

  // When the user clicks on <span> (x), close the modal
  document.getElementById("btn-close").onclick = function () {
    displayMenuItems();
  };

  // When the user clicks anywhere outside of the modal, close it
  var modal = document.getElementById("modalDishInfo");
  window.onclick = function (event) {
    if (event.target == modal) {
      displayMenuItems();
    }
  };
  // #endregion events
};
