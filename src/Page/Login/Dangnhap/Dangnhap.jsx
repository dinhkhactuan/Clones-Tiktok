import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Dangnhap.module.scss";
const cx = classNames.bind(styles);
function Dangnhap() {
  return (
    <div className={cx("dangnhap")}>
      <p className={cx("dangnhap_title")}>Đăng nhập vào TikTok</p>
      <div className={cx("dangnhap_box")}>
        <div>
          <FontAwesomeIcon></FontAwesomeIcon>
          <p>Sử dụng mã QR</p>
        </div>
      </div>
      <div className={cx("dangnhap_box")}>
        <div>
          <FontAwesomeIcon></FontAwesomeIcon>
          <p>Số điện thoại / Email / TikTok ID</p>
        </div>
      </div>
      <div className={cx("dangnhap_box")}>
        <div>
          <FontAwesomeIcon></FontAwesomeIcon>
          <p>Tiếp tục với Facebook</p>
        </div>
      </div>
      <div className={cx("dangnhap_box")}>
        <div>
          <FontAwesomeIcon></FontAwesomeIcon>
          <p>Tiếp tục với Google</p>
        </div>
      </div>
      <span>
        Bạn không có tài khoản ? <span>Đăng Ký</span>
      </span>
    </div>
  );
}
export default Dangnhap;
