import './homeStyles.css';

const HomePage = (() => {
  const createHomePageMarkUp = () => `
  <div id="homeId" class="home page">
  <img class="home__image" src="../src/images/home.jpg"/>
  <div class="home__info">
    <h2 class="home__title">Restaurant Page</h2>
    <button id="btn-home-menu" class="home__button">START EATING</button>
  </div>
</div>
  `;

  const renderHomePage = (parent) => {
    document.getElementById(parent).innerHTML += createHomePageMarkUp();
  };

  return {
    renderHomePage,
  };
})();

export default HomePage;
