import style from "./HeaderCom.module.css";
import Navigation from "../Navigation/Navigation";

const HeaderCom = () => {
  return (
    <header className={style.header}>
      <h2>this is Header</h2>
      <Navigation />
    </header>
  );
};

export default HeaderCom;
