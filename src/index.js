import NavBarComponent from './navbar/navbarComponent';
import '../src/indexStyles.css';


window.onload = function(){
  document.getElementById('content').classList.add('content');
  const navLinksCaption = ['about us', 'Menu', 'Gallery' ];
  NavBarComponent.renderNavBar('content', navLinksCaption);
 }