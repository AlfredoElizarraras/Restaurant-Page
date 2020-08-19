import NavBarComponent from './navbar/navbarComponent';
import AboutUsPage from './about-us/aboutUs';
import HomePage from './home/home';
import MenuPage from './Menu/Menu';
import EventModule from './events/eventModule';
import './indexStyles.css';

window.onload = () => {
  const mainDiv = document.querySelector('#content');
  mainDiv.classList.add('content');
  NavBarComponent.renderNavBar('content');
  AboutUsPage.renderAboutUsPage('content');
  HomePage.renderHomePage('content');
  MenuPage.renderMenuPage('content');
  EventModule.addEvents();
};
