import './aboutUsStyles.css';
import aboutUsImage from '../images/about-us.jpg';

const AboutUsPage = (() => {
  const createAboutUsPageMarkUp = () => `
    <div id="aboutUsId" class="about-us page d-none">
    <article class="about-us__page">
      <img id="about-us-image"/>
      
      <div class="about-us__info">
        <h2 class="about-us__title">About us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aliquid qui sint placeat tempora aperiam ducimus, odit cum omnis expedita minus accusantium! Debitis fugiat numquam officia eveniet nostrum ut et.</p>
      </div>
    </article>
  </div>
    `;

  const addImage = () => {
    document.getElementById('about-us-image').src = aboutUsImage;
  };

  const renderAboutUsPage = (parent) => {
    document.getElementById(parent).innerHTML += createAboutUsPageMarkUp();
    addImage();
  };

  return {
    renderAboutUsPage,
  };
})();

export default AboutUsPage;
