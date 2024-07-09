import styles from "./h1.module.css";

function TodoHeading() {
  return <h1 className={`${styles["heading"]}`}>To-do app</h1>;
}

export default TodoHeading;
