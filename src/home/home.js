import "./homeStyles.css";

const HomePage = (() => {
  const createHomePageMarkUp = () => `
  <div id="homeId" class="home d-none">
  <img class="home__image" src="../src/images/home.jpg"/>
  <div class="home__info">
    <h2 class="home__title">Restaurant Page</h2>
    <button class="home__button">Start eating</button>
  </div>
</div>
  `;

  const renderHomePage = (parent) => {
    document.getElementById(parent).innerHTML += createHomePageMarkUp();
  };

  return {
    renderHomePage,
  }
})();

export default HomePage;
