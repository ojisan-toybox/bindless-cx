import classNames from "classnames/bind";
import styles from "./submit-button.module.css";

let cx = classNames.bind(styles);

export const SubmitButton = ({
  hoge,
  fuga,
}: {
  hoge: boolean;
  fuga: boolean;
}) => {
  let className = cx({
    base: true,
    inProgress: hoge,
    error: fuga,
  });
  return <button className={className}>aaaaaaa</button>;
};
