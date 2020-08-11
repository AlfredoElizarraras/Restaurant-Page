const NavBarComponent = (parent, title) => {
  let _privateVariable = 0;
  const privateFunction = (arg) => {
    _privateVariable += arg;
  };
  const publicFunction = (argument) => {
    console.log(`Private variable count: ${privateFunction(1)}`);
    console.log(argument);
  };
  return {
    publicFunction,
  };
};

export default NavBarComponent;
