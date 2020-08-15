import "./aboutUsStyles.css";

const AboutUsPage = (() => {
  const createAboutUsPageMarkUp = () => `
    <div id="aboutUs" class="about-us d-none">
    <article class="about-us__page">
      <img id="about-us-image" src="../src/images/about-us.jpg"/>
      
      <div class="about-us__info">
        <h2 class="about-us__title">About us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aliquid qui sint placeat tempora aperiam ducimus, odit cum omnis expedita minus accusantium! Debitis fugiat numquam officia eveniet nostrum ut et.</p>
      </div>
    </article>
  </div>
    `;

  const renderAboutUsPage = (parent) => {
    document.getElementById(parent).innerHTML += createAboutUsPageMarkUp();
  };

  return {
    renderAboutUsPage,
  };
})();

export default AboutUsPage;
