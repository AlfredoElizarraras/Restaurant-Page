import NavBarComponent from './navbar/navbarComponent';


window.onload = function(){   
  NavBarComponent.renderNavBar('nav', ['about us', 'Menu', 'Gallery' ]);
  NavBarComponent.renderNavBar('nav', ['reviews', 'Reservation', 'Contact']);
 }