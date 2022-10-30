import classNames from "classnames/bind";
import styles from "./Button_follow.module.scss";
const cx = classNames.bind(styles);
function Button_follow({ children }) {
  return <span className={cx("follow")}>{children}</span>;
}
export default Button_follow;
