import { useRef } from "react";
import styles from "./Login_email.module.scss";
import classNames from "classnames/bind";
import { faArrowLeft, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const cx = classNames.bind(styles);
function Login_email({ setcheck, setcheck_loggin, setsubscribe }) {
  return (
    <div className={cx("Login_email")}>
      <div className={cx("Login_email_box")}>
        <div className={cx("Login_email_container")}>
          <FontAwesomeIcon
            onClick={() => {
              setcheck_loggin(false);
              setcheck(true);
            }}
            className={cx("faArrowLeft")}
            icon={faArrowLeft}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            onClick={() => {
              setcheck_loggin(false);
            }}
            className={cx("faClose")}
            icon={faClose}
          ></FontAwesomeIcon>
        </div>
        <div className={cx("Login_email_content")}>
          <span className={cx("Login_email_content_Dangnhap")}>Đăng nhập</span>
          <div className={cx("Login_email_content_lable")}>
            <label>Điện thoại</label>
            <span>Đăng nhập bằng email hoặc TikTok ID</span>
          </div>
          <input placeholder="số điện thoại" />
          <input placeholder="Nhập mã gồm 6 chữ số" />
          <p>Đăng nhập với Mật khẩu</p>
          <button>Đăng nhập</button>
          <span className={cx("darw")}></span>
          <span className={cx("des")}>
            Bạn không có tài khoản ?{" "}
            <span
              onClick={() => {
                setsubscribe(true);
                setcheck_loggin(false);
              }}
              className={cx("des_dk")}
            >
              Đăng Ký
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Login_email;
