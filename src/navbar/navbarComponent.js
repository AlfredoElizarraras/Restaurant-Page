import "./navBarStyles.css";

const NavBarComponent = (() => {
  const createTabMarkUp = (caption) => {
    let captionId = caption.toLowerCase().replace(" ", "-");
    return `<div id="${captionId}-id" class="navbar__tab-item">
    <a href="#${captionId}-section">${caption}</a>
    </div>`;
  };

  const validObjectHelper = (object) => {
    return object === "" || object === null || object === undefined;
  };

  const createNavSection = () => {
    let navSection = document.createElement("div");
    navSection.classList.add("navbar__tab-container");
    return navSection;
  };

  const addTabLinksToNavSection = (nav, childs) => {
    if (validObjectHelper(nav) || validObjectHelper(childs))
      return createNavSection();

    nav.innerHTML = childs;
    return nav;
  };

  const createTabLinks = (tabCaptions) => {
    if (validObjectHelper(tabCaptions)) return "";

    let returnTemplate = "";
    if (Array.isArray(tabCaptions)) {
      for (let tabCaption = 0; tabCaption < tabCaptions.length; tabCaption++) {
        let element = tabCaptions[tabCaption];

        if (returnTemplate === "") {
          returnTemplate = createTabMarkUp(element);
        } else {
          returnTemplate += createTabMarkUp(element);
        }
      }
    } else {
      returnTemplate = createTabMarkUp(tabCaptions);
    }

    return returnTemplate;
  };

  const createNavBar = () => {
    let navbar = document.createElement("nav");
    navbar.id = 'nav'
    navbar.classList.add("navbar");
    return navbar;
  };

  const addNavSectionsToNavBar = () => {

  };

  const renderNavBar = (parent, tabsLinksCaption) => {
    const navbar = createNavBar();
    const navSection = createNavSection();
    const tabsLinks = createTabLinks(tabsLinksCaption);

    document.getElementById(parent).appendChild(addTabLinksToNavSection(navSection, tabsLinks));
  };

  return {
    renderNavBar,
    parent,
  };
})();

export default NavBarComponent;
