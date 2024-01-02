import "./iconbox.module.scss";

export default function IconBox(props) {
  return (
    <div className="d-flex justify-content-center align-items-center">
      {props.icon}
    </div>
  );
}
