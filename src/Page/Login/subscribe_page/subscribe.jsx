import { useRef } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faClose } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./subscribe.module.scss";
import Post_register from "../../../Api/Auth/Post_Register_user";
import { useState } from "react";
const cx = classNames.bind(styles);
function Dangky({ setsubscribe, setcheck }) {
  const Email = useRef();
  const Password = useRef();
  const CheckPass = useRef();
  useEffect(() => {}, []);
  const postdata = () => {
    const email = Email.current.value;
    const password = Password.current.value;
    const checkpass = CheckPass.current.value;
    Post_register(email, password, checkpass).then((data) => console.log(data));
  };
  return (
    <div className={cx("subscribe")}>
      <div className={cx("subscribe_box")}>
        <div className={cx("subscribe_container")}>
          <FontAwesomeIcon
            onClick={() => {
              setcheck(true);
              setsubscribe(false);
            }}
            className={cx("faArrowLeft")}
            icon={faArrowLeft}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            onClick={() => {
              setsubscribe(false);
            }}
            className={cx("faClose")}
            icon={faClose}
          ></FontAwesomeIcon>
        </div>
        <div className={cx("subscribe_content")}>
          <span className={cx("subscribe_content_subscribe")}>Đăng ký</span>
          <div className={cx("subscribe_content_lable")}>
            <label>Đăng ký bằng email</label>
          </div>
          <input name="email" ref={Email} placeholder="Email của bạn" />
          <label>Nhập mật khẩu của bạn</label>
          <input
            name="password"
            ref={Password}
            placeholder="Nhập mật khẩu gồm 6 chữ số"
          />
          <label>Xác nhận lại mật khẩu</label>
          <input
            name="checkpass"
            ref={CheckPass}
            placeholder="Xác nhận lại mật khẩu"
          />
          <p>Đăng ký với Mật khẩu</p>
          <button onClick={postdata}>Đăng ký</button>
          <span className={cx("darw")}></span>
          <span className={cx("des")}>
            Bạn đã có tài khoản ?{" "}
            <span className={cx("des_dk")}>Đăng nhập</span>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Dangky;
