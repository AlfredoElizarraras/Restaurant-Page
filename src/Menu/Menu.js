import './menuStyles.css';
import dish1 from '../images/dish_1.jpg';
import dish2 from '../images/dish_2.jpg';
import dish3 from '../images/dish_3.jpg';
import dish4 from '../images/dish_4.jpg';

const MenuPage = (() => {
  const createMenuCardElement = (number, grade, image) => {
    // create main container and child elements
    const menuCardContainer = document.createElement('article');
    const menuCardImage = document.createElement('img');
    const menuCardInfo = document.createElement('div');
    const menuCardHeader = document.createElement('h3');
    const menuCardDescription = document.createElement('p');
    const menuCardGrade = document.createElement('span');

    // assign Id's
    menuCardContainer.id = `menuCard${number}`;
    menuCardImage.id = `menuCardImage${number}`;
    menuCardHeader.id = `menuCardHeader${number}`;
    menuCardDescription.id = `menuCardDescription${number}`;
    menuCardGrade.id = `menuCardGrade${number}`;

    // assign classes
    menuCardContainer.classList.add('menu__card');
    menuCardImage.classList.add('menu__card-image');
    menuCardInfo.classList.add('menu__card-info');
    menuCardGrade.classList.add('menu__card-grade');

    // assign values
    menuCardHeader.innerHTML = `Dish ${number}`;
    menuCardDescription.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quod, repudiandae nisi autem aperiam vitae quaerat voluptatem obcaecati harum facere similique nesciunt reprehenderit mollitia expedita ullam. A tempore alias quasi!';
    menuCardGrade.innerHTML = ` ${grade} / 5 ⭐`;
    menuCardImage.src = image;

    // append to containers
    menuCardInfo.append(menuCardHeader);
    menuCardInfo.append(menuCardDescription);
    menuCardInfo.append(menuCardGrade);
    menuCardContainer.append(menuCardImage);
    menuCardContainer.append(menuCardInfo);

    return menuCardContainer;
  };

  const createModalElement = () => {
    // create main element and childs
    const modalDishInfoContainer = document.createElement('div');
    const modalContent = document.createElement('div');
    const modalContentHeader = document.createElement('div');
    const modalContentBody = document.createElement('div');
    const modalContentHeaderCloseButton = document.createElement('span');
    const modalContentHeaderTitle = document.createElement('h2');
    const modalContentBodyImage = document.createElement('img');
    const modalContentBodyInfo = document.createElement('div');
    const modalContentBodyInfoDescription = document.createElement('p');
    const modalContentBodyInfoGrade = document.createElement('span');

    // assign Id's
    modalDishInfoContainer.id = 'modalDishInfo';
    modalContentHeaderCloseButton.id = 'btn-close';
    modalContentHeaderTitle.id = 'menuModalHeader';
    modalContentBodyImage.id = 'menuModalImage';
    modalContentBodyInfoDescription.id = 'menuModalDescription';
    modalContentBodyInfoGrade.id = 'menuModalGrade';

    // assign classes
    modalDishInfoContainer.classList.add('modal');
    modalDishInfoContainer.classList.add('d-none');
    modalContent.classList.add('modal-content');
    modalContentHeader.classList.add('modal-header');
    modalContentHeaderCloseButton.classList.add('close');
    modalContentBody.classList.add('modal-body');
    modalContentBodyImage.classList.add('modal-body__image');
    modalContentBodyInfo.classList.add('modal-body__info');
    modalContentBodyInfoGrade.classList.add('modal-body__grade');

    // assign values
    modalContentHeaderCloseButton.innerHTML = '&times';

    // append to containers
    modalContentHeader.append(modalContentHeaderCloseButton);
    modalContentHeader.append(modalContentHeaderTitle);
    modalContentBody.append(modalContentBodyImage);
    modalContentBodyInfo.append(modalContentBodyInfoDescription);
    modalContentBodyInfo.append(modalContentBodyInfoGrade);
    modalContentBody.append(modalContentBodyInfo);
    modalContent.append(modalContentHeader);
    modalContent.append(modalContentBody);
    modalDishInfoContainer.append(modalContent);

    return modalDishInfoContainer;
  };

  const createMenuPageElement = () => {
    // create main container and child elements.
    const menuIdContainer = document.createElement('div');
    const card1 = createMenuCardElement(1, 4.5, dish1);
    const card2 = createMenuCardElement(2, 4.2, dish2);
    const card3 = createMenuCardElement(3, 4.6, dish3);
    const card4 = createMenuCardElement(4, 3.5, dish4);

    // assign Id's
    menuIdContainer.id = 'menuId';

    // assign classes
    menuIdContainer.classList.add('menu-container');
    menuIdContainer.classList.add('page');
    menuIdContainer.classList.add('d-none');

    // append to containers
    menuIdContainer.append(card1);
    menuIdContainer.append(card2);
    menuIdContainer.append(card3);
    menuIdContainer.append(card4);

    return menuIdContainer;
  };

  const renderMenuPage = (parent) => {
    const parentElement = document.getElementById(parent);
    parentElement.append(createMenuPageElement());
    parentElement.append(createModalElement());
  };

  return {
    renderMenuPage,
  };
})();

export default MenuPage;
