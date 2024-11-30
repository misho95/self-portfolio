import Logo from "./logo";

const Header = () => {
  return (
    <header className="p-5 flex justify-between">
      <Logo />
      <span>menu</span>
    </header>
  );
};

export default Header;
