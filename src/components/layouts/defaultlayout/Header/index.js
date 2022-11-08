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
  faL,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Header() {
  const headerRef = useRef();
  const btnRef = useRef();
  const [check, setcheck] = useState(false);
  const [check_loggin, setcheck_loggin] = useState(false);
  const [check_subscribe, setsubscribe] = useState(false);
  useEffect(() => {
    if (check_loggin == true) {
      return setcheck(false);
    }
  }, [check_loggin]);
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
          setcheck={setcheck}
          setsubscribe={setsubscribe}
          setcheck_loggin={setcheck_loggin}
        />
      )}
      {check_subscribe && (
        <Dangky setcheck={setcheck} setsubscribe={setsubscribe} />
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

        <button ref={btnRef} onClick={handle} className={cx("button-login")}>
          Đăng Nhập
        </button>

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
