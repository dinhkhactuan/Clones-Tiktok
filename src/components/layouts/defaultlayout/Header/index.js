import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Dangnhap from "../../../../Page/Login/Dangnhap/Dangnhap";
import Login_email from "../../../../Page/Login/Login_email/Login_email";
import Dangky from "../../../../Page/Login/subscribe_page/subscribe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
  faMailBulk,
  faMessage,
  faUser,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Header() {
  const headerRef = useRef();
  const btnRef = useRef();
  const [check, setcheck] = useState(false);
  const [check_loggin, setcheck_loggin] = useState(false);
  const [check_subscribe, setsubscribe] = useState(false);
  const [check_user, setuser] = useState();
  const [check_user_login, setuser_login] = useState();

  useEffect(() => {
    if (check_loggin == true) {
      return setcheck(false);
    }
  }, [check_loggin]);
  const Tranfer_dangky = (res) => {
    setuser(res.data);
    console.log(res);
  };
  const Tranfer_Login = (res) => {
    setuser_login(res.data.data);
  };
  const handle = () => {
    setcheck(true);
  };
  const handles = () => {
    setcheck(false);
  };
  return (
    <div ref={headerRef} className={cx("wapper")}>
      {check_loggin && (
        <Login_email
          Tranfer_Login={Tranfer_Login}
          setcheck={setcheck}
          setsubscribe={setsubscribe}
          setcheck_loggin={setcheck_loggin}
        />
      )}
      {check_subscribe && (
        <Dangky
          Tranfer_dangky={Tranfer_dangky}
          setcheck={setcheck}
          setsubscribe={setsubscribe}
        />
      )}
      {check && (
        <Dangnhap
          setcheck={setcheck}
          setsubscribe={setsubscribe}
          check_login={setcheck_loggin}
          btnicon={handles}
        />
      )}

      <Link to="/">
        <div className={cx("logo")}>
          <img
            className={cx("logo-tiktok")}
            src="https://parentzone.org.uk/sites/default/files/styles/parent_zone_hero/public/2022-03/TikTok_Card.png?itok=v6OwxDiT"
          ></img>
        </div>
      </Link>
      <div className={cx("search")}>
        <input
          className={cx("search-video")}
          placeholder="Tìm kiếm tài khoản và video"
        ></input>
        <button className={cx("btn-close")}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <FontAwesomeIcon className={cx("btn-load")} icon={faSpinner} />
        <button className={cx("search_btn")}>
          <FontAwesomeIcon
            className={cx("icon-search")}
            icon={faMagnifyingGlass}
          ></FontAwesomeIcon>
        </button>
      </div>
      <div className={cx("active")}>
        <Link to="/upload" className={cx("active-text")}>
          <span>
            <FontAwesomeIcon
              className={cx("icon-add")}
              icon={faPlus}
            ></FontAwesomeIcon>
            Tải lên
          </span>
        </Link>

        {/* <button ref={btnRef} onClick={handle} className={cx("button-login")}>
          Đăng Nhập
        </button> */}
        {check_user_login || check_user ? (
          <div className={cx("user")}>
            <div className={cx("user_container")}>
              <Link to={"/profile"}>
                <div className={cx("user_container_img")}>
                  <img src="https://files.fullstack.edu.vn/f8-tiktok/users/12/630267617ae40.jpg" />
                </div>
              </Link>
              <div className={cx("user_container_box_option")}>
                <div className={cx("user_container_option")}>
                  <Link to={"/profile"}>
                    <p className={cx("user_container_option_text")}>
                      Xem hồ sơ
                    </p>
                  </Link>
                  <p className={cx("user_container_option_text")}>Nhận xu</p>
                  <p className={cx("user_container_option_text")}>Live</p>
                  <p className={cx("user_container_option_text")}>Cài đặt</p>
                  <p className={cx("user_container_option_text")}>
                    Phản hồi và trợ giúp ?
                  </p>
                  <p className={cx("user_container_option_text")}>Chế độ tối</p>
                  <p className={cx("user_container_option_text")}>Đăng xuất</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <button ref={btnRef} onClick={handle} className={cx("button-login")}>
            Đăng Nhập
          </button>
        )}

        {false && (
          <>
            <button className={cx("btn-icon-message")}>
              <FontAwesomeIcon icon={faMessage} />
            </button>
            <button className={cx("btn-icon-mailbox")}>
              <FontAwesomeIcon icon={faMailBulk} />
            </button>
            <button className={cx("btn-icon-user")}>
              <FontAwesomeIcon icon={faUser} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
export default Header;
