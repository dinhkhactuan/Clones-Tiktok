import classNames from "classnames/bind";
import styles from "./Header.module.scss";
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
  return (
    <header className={cx("wapper")}>
      {/* <div className={cx("wapper-1")}> */}
      <div className={cx("logo")}>
        <img
          className={cx("logo-tiktok")}
          src="https://parentzone.org.uk/sites/default/files/styles/parent_zone_hero/public/2022-03/TikTok_Card.png?itok=v6OwxDiT"
        ></img>
      </div>
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
        <span className={cx("active-text")}>
          <FontAwesomeIcon
            className={cx("icon-add")}
            icon={faPlus}
          ></FontAwesomeIcon>
          Tải lên
        </span>
        <button className={cx("btn-icon-message")}>
          <FontAwesomeIcon icon={faMessage} />
        </button>
        <button className={cx("btn-icon-mailbox")}>
          <FontAwesomeIcon icon={faMailBulk} />
        </button>
        <button className={cx("btn-icon-user")}>
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
      {/* </div> */}
    </header>
  );
}
export default Header;
