import classNames from "classnames/bind";
import styles from "./Button_login.module.scss";
const cx = classNames.bind(styles);
function Button_login({ children }) {
  return (
    <div>
      <span className={cx("defiant")}></span>
      <div className={cx("button")}>
        <p className={cx("button-text")}>
          Đăng nhập để follow các tác giả, thích video và xem bình luận.
        </p>
        <button className={cx("button-login")}>{children}</button>
      </div>
    </div>
  );
}
export default Button_login;
