import './aboutUsStyles.css';
import aboutUsImageSrc from '../images/about-us.jpg';

const AboutUsPage = (() => {
  const createAboutUsPageElement = () =>{
    // create returning element and child elements

    const aboutUsIdContainer = document.createElement('div');
    const aboutUsArticle = document.createElement('article');
    const aboutUsImage = document.createElement('img');
    const aboutUsInfo = document.createElement('div');
    const aboutUsTitle = document.createElement('h2');
    const aboutUsDescription = document.createElement('p');

    // assign id's
    aboutUsIdContainer.id = 'aboutUsId';
    aboutUsImage.id = 'about-us-image';

    // assign classes
    aboutUsIdContainer.classList.add('about-us');
    aboutUsIdContainer.classList.add('page');
    aboutUsIdContainer.classList.add('d-none');
    aboutUsArticle.classList.add('about-us__page');
    aboutUsInfo.classList.add('about-us__info');
    aboutUsTitle.classList.add('about-us__title');

    // assign values
    aboutUsTitle.innerHTML = 'About Us';
    aboutUsDescription.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aliquid qui sint placeat tempora aperiam ducimus, odit cum omnis expedita minus accusantium! Debitis fugiat numquam officia eveniet nostrum ut et.';
    aboutUsImage.src = aboutUsImageSrc;

    // append elements to containers
    aboutUsInfo.append(aboutUsTitle);
    aboutUsInfo.append(aboutUsDescription);
    aboutUsArticle.append(aboutUsImage);
    aboutUsArticle.append(aboutUsInfo);
    aboutUsIdContainer.append(aboutUsArticle);

    return aboutUsIdContainer;
  };

  const renderAboutUsPage = (parent) => {
    document.getElementById(parent).appendChild(createAboutUsPageElement());
  };

  return {
    renderAboutUsPage,
  };
})();

export default AboutUsPage;
