import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import style from "./style.module.scss";

export default function SignInButton() {
  const isLogged = true;

  return isLogged ? (
    <button className={style.signInButton}>
      <FaGithub color="#04d361" />
      Whermerson Cavalcante
      <FiX color="#737380" className={style.closeButton} />
    </button>
  ) : (
    <button className={style.signInButton}>
      <FaGithub color="var(--yellow-500)" />
      Sign in with Github
    </button>
  );
}
