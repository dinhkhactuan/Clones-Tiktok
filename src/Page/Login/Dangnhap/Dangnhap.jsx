import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import {
  faCircleXmark,
  faQrcode,
  faUser,
  faFaceFrown,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Dangnhap.module.scss";
const cx = classNames.bind(styles);
function Dangnhap({ close, btnicon, check_login, setsubscribe, setcheck }) {
  return (
    <>
      <div className={cx("Dangnhap")}>
        <div className={cx("dangnhap")}>
          <p className={cx("dangnhap_title")}>Đăng nhập vào TikTok</p>
          <FontAwesomeIcon
            className={cx("dangnhap_icon")}
            onClick={close || btnicon}
            icon={faCircleXmark}
          ></FontAwesomeIcon>
          <div className={cx("dangnhap_box")}>
            <div>
              <p>
                {" "}
                <FontAwesomeIcon icon={faQrcode}></FontAwesomeIcon>Sử dụng mã QR
              </p>
            </div>
          </div>
          <div
            className={cx("dangnhap_box")}
            onClick={() => {
              check_login(true);
            }}
          >
            <div>
              <p>
                {" "}
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>Số điện thoại /
                Email / TikTok ID
              </p>
            </div>
          </div>
          <div className={cx("dangnhap_box")}>
            <div>
              <p>
                {" "}
                <FontAwesomeIcon icon={faFaceFrown}></FontAwesomeIcon>Tiếp tục
                với Facebook
              </p>
            </div>
          </div>
          <div className={cx("dangnhap_box")}>
            <div>
              <FontAwesomeIcon></FontAwesomeIcon>
              <p>Tiếp tục với Google</p>
            </div>
          </div>
          <span className={cx("dangnhap_box_span")}>
            Bạn không có tài khoản ?{" "}
            <span
              onClick={() => {
                setsubscribe(true);
                setcheck(false);
              }}
              className={cx("dangnhap_box_span_dangky")}
            >
              Đăng Ký
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
export default Dangnhap;
