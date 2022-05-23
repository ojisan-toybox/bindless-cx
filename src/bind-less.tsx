import classNames from "classnames/bind";
import styles from "./bind-less.module.css";
import cx from "classnames";

export const Bindless = ({ hoge, fuga }: { hoge: boolean; fuga: boolean }) => {
  let className = cx({
    [styles.base]: true,
    [styles.inProgress]: hoge,
    [styles.error]: fuga,
  });
  return <button className={className}>Bindless</button>;
};
