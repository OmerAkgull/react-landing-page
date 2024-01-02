import styles from "./iconbox.module.scss";

export default function IconBox(props) {
  return (
    <div className={`bg-primary d-flex justify-content-center align-items-center rounded ${styles.features}`}>
      {props.icon}
    </div>
  );
}

