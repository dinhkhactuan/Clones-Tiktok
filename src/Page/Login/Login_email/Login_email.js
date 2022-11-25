import { useRef, useState } from "react";
import styles from "./Login_email.module.scss";
import classNames from "classnames/bind";
import { faArrowLeft, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Post_Login from "../../../Api/Auth/Post_Login_user";
const cx = classNames.bind(styles);
function Login_email({
  setcheck,
  setcheck_loggin,
  setsubscribe,
  Tranfer_Login,
}) {
  const [user, setUser] = useState();
  const Email = useRef();
  const Password = useRef();

  const OnLogin = () => {
    const email = Email.current.value;
    const password = Password.current.value;
    if (email == "") {
      return console.log("vui lòng nhập email của bạn");
    }
    if (password == "") {
      return console.log("vui lòng nhập password của bạn");
    }
    Post_Login(email, password).then((res) => {
      Tranfer_Login(res);
      setUser(res.data.data);
      setcheck_loggin(false);
    });
  };
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
            <label>Email</label>
            <span>Đăng nhập bằng email hoặc TikTok ID</span>
          </div>
          <input ref={Email} placeholder="email của bạn" />
          <input
            type="password"
            ref={Password}
            placeholder="Nhập mật khẩu gồm 6 chữ số"
          />
          <p>Đăng nhập với Mật khẩu</p>
          <button onClick={OnLogin}>Đăng nhập</button>
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
