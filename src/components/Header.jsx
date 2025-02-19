import AppButtons from "./AppButtons";

const Header = () => {
  return (
    <header >
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
      <img src="/img/marmaladesoftwares_transparent.png" className="h-10 sm:h-12" alt="Marmalade Softwares Logo"/>
      <h1 className="text-center text-white py-2 sm:py-4 text-3xl sm:text-5xl font-semibold font-pixel">Marmalade_Softwares</h1>
      <AppButtons/ >
      </div>
    </header>
  );
};

export default Header;
