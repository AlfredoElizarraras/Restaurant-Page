import './homeStyles.css';
import homeImageSrc from '../images/home.jpg';

const HomePage = (() => {
  const createHomePageElement = () => {
    // create returning element and child elements
    const homeIdContainer = document.createElement('div');
    const homeImage = document.createElement('img');
    const homeInfo = document.createElement('div');
    const homeTitle = document.createElement('h1');
    const homeButtonForMenu = document.createElement('button');

    // assign id's
    homeIdContainer.id = 'homeId';
    homeImage.id = 'homeImage';
    homeButtonForMenu.id = 'btn-home-menu';

    // assign classes
    homeIdContainer.classList.add('home');
    homeIdContainer.classList.add('page');
    homeImage.classList.add('home__image');
    homeInfo.classList.add('home__info');
    homeTitle.classList.add('home__title');
    homeButtonForMenu.classList.add('home__button');

    // assign values
    homeTitle.innerHTML = 'Restaurant Page';
    homeButtonForMenu.innerHTML = 'START EATING';
    homeImage.src = homeImageSrc;

    // append elements to containers
    homeInfo.append(homeTitle);
    homeInfo.append(homeButtonForMenu);
    homeIdContainer.append(homeInfo);
    homeIdContainer.append(homeImage);

    return homeIdContainer;
  };

  const renderHomePage = (parent) => {
    document.getElementById(parent).appendChild(createHomePageElement());
  };

  return {
    renderHomePage,
  };
})();

export default HomePage;
