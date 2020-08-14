import NavBarComponent from './navbar/navbarComponent';
import './indexStyles.css';


window.onload = () => {
  document.getElementById('content').classList.add('content');
  const navLinksCaption = ['home', 'about us', 'Menu', 'Reviews'];
  NavBarComponent.renderNavBar('content', navLinksCaption);
};