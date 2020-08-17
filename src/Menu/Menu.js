import "./menuStyles.css";

const MenuPage = (() => {
  const createMenuPageMarkUp = () => `
  <div id="menuId" class="menu-container d-none">
  <article id="menuCard1" class="menu__card">
    <img
      id="menuCardImage1"
      class="menu__card-image"
      src="../src/images/dish_1.jpg"
    />

    <div class="menu__card-info">
      <h3 id="menuCardHeader1">Dish 1</h3>

      <p id="menuCardDescription1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quod,
        repudiandae nisi autem aperiam vitae quaerat voluptatem obcaecati
        harum facere similique nesciunt reprehenderit mollitia expedita
        ullam. A tempore alias quasi!
      </p>

      <span id="menuCardGrade1" class="menu__card-grade">
        4.5 / 5 ⭐
      </span>
    </div>
  </article>

  <article id="menuCard2" class="menu__card">
    <img
      id="menuCardImage2"
      class="menu__card-image"
      src="../src/images/dish_2.jpg"
    />

    <div class="menu__card-info">
      <h3 id="menuCardHeader2">Dish 2</h3>

      <p id="menuCardDescription2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quod,
        repudiandae nisi autem aperiam vitae quaerat voluptatem obcaecati
        harum facere similique nesciunt reprehenderit mollitia expedita
        ullam. A tempore alias quasi!
      </p>

      <span id="menuCardGrade2" class="menu__card-grade">
        2.5 / 5 ⭐
      </span>
    </div>
  </article>

  <article id="menuCard3" class="menu__card">
    <img
      id="menuCardImage3"
      class="menu__card-image"
      src="../src/images/dish_3.jpg"
    />

    <div class="menu__card-info">
      <h3 id="menuCardHeader3">Dish 3</h3>

      <p id="menuCardDescription3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quod,
        repudiandae nisi autem aperiam vitae quaerat voluptatem obcaecati
        harum facere similique nesciunt reprehenderit mollitia expedita
        ullam. A tempore alias quasi!
      </p>

      <span
        id="menuCardGrade3"
        class="menu__card-grade"
        aria-valuetext="4.5"
      >
        4.0 / 5 ⭐
      </span>
    </div>
  </article>

  <article id="menuCard4" class="menu__card">
  <img
    id="menuCardImage4"
    class="menu__card-image"
    src="../src/images/dish_4.jpg"
  />

  <div class="menu__card-info">
    <h3 id="menuCardHeader4">Dish 4</h3>

    <p id="menuCardDescription4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quod,
      repudiandae nisi autem aperiam vitae quaerat voluptatem obcaecati
      harum facere similique nesciunt reprehenderit mollitia expedita
      ullam. A tempore alias quasi!
    </p>

    <span id="menuCardGrade4" class="menu__card-grade">
      3.5 / 5 ⭐
    </span>
  </div>
</article>
</div>


  <div id="modalDishInfo" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <span id="btn-close" class="close">&times;</span>
      <h2 id="menuModalHeader">Modal Header</h2>
    </div>
    <div class="modal-body">
      <img id="menuModalImage" class="modal-body__image" />
      <div class="modal-body__info">
        <p id="menuModalDescription">Modal description</p>
        <span id="menuModalGrade" class="modal-body__grade"
          >Modal grade</span
        >
      </div>
    </div>
  </div>
</div>
  `;

  const renderMenuPage = (parent) => {
    document.getElementById(parent).innerHTML += createMenuPageMarkUp();
  };

  return { 
    renderMenuPage 
  };
})();

export default MenuPage;
