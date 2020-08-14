import NavBarComponent from './navbar/navbarComponent';
import AboutUsPage from './about-us/aboutUs';
import './indexStyles.css';


window.onload = () => {
  document.getElementById('content').classList.add('content');
  NavBarComponent.renderNavBar('content');
  AboutUsPage.renderAboutUsPage('content');
};