import './homeStyles.css';
import homeImage from '../images/home.jpg';

const HomePage = (() => {
  const createHomePageMarkUp = () => `
  <div id="homeId" class="home page">
  <img id="homeImage" class="home__image"/>
  <div class="home__info">
    <h2 class="home__title">Restaurant Page</h2>
    <button id="btn-home-menu" class="home__button">START EATING</button>
  </div>
</div>
  `;

  const addImage = () => {
    document.getElementById('homeImage').src = homeImage;
  };

  const renderHomePage = (parent) => {
    document.getElementById(parent).innerHTML += createHomePageMarkUp();
    addImage();
  };

  return {
    renderHomePage,
  };
})();

export default HomePage;
