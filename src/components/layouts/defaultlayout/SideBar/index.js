import classNames from "classnames/bind";
import styles from "./SideBar.module.scss";
import "./SideBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserGroup,
  faCamera,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function sidebar() {
  return (
    <div className={cx("Side-Bar")}>
      <div className={cx("Side-Bar-menu")}>
        <p className={cx("Side-Bar-text")}>
          <FontAwesomeIcon className={cx("icon-menu")} icon={faHome} />
          Dành cho bạn
        </p>
        <p className={cx("Side-Bar-text")}>
          <FontAwesomeIcon
            className={cx("icon-menu")}
            icon={faUserGroup}
          ></FontAwesomeIcon>
          Đang follow
        </p>
        <p className={cx("Side-Bar-text")}>
          <FontAwesomeIcon
            className={cx("icon-menu")}
            icon={faCamera}
          ></FontAwesomeIcon>{" "}
          LIVE
        </p>
      </div>
      <span className={cx("defiant")}></span>
      <div className={cx("Side-Bar-users")}>
        <p className={cx("Side-Bar-users-text")}>Tài khoản được đề xuất</p>
        <div className={cx("Side-Bar-users-content")}>
          <div className={cx("Side-Bar-users-content-box")}>
            <img
              className={cx("Side-Bar-users-content-img")}
              src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1665558000&x-signature=5YrbYkBtX6T346oBqd1MLmA5HYg%3D"
            ></img>
          </div>
          <div>
            <p className={cx("Side-Bar-users-content-text")}>
              Thế anh 28 Entertainment
            </p>
            <p
              className={cx(
                "Side-Bar-users-content-text2",
                "Side-Bar-users-content-text"
              )}
            >
              Thế anh 28 Entertainment
            </p>
          </div>
        </div>
      </div>
      <span className={cx("defiant")}></span>
      <div className={cx("Side-Bar-users")}>
        <p className={cx("Side-Bar-users-text")}>Các Tài khoản đang follow</p>
        <div className={cx("Side-Bar-users-content")}>
          <div className={cx("Side-Bar-users-content-box")}>
            <img
              className={cx("Side-Bar-users-content-img")}
              src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1665558000&x-signature=5YrbYkBtX6T346oBqd1MLmA5HYg%3D"
            ></img>
          </div>
          <div>
            <p className={cx("Side-Bar-users-content-text")}>
              Thế anh 28 Entertainment
            </p>
            <p
              className={cx(
                "Side-Bar-users-content-text2",
                "Side-Bar-users-content-text"
              )}
            >
              Thế anh 28 Entertainment
            </p>
          </div>
        </div>
      </div>
      <span className={cx("defiant")}></span>
      <div className={cx("Side-Bar-tag")}>
        <p>Khám Phá</p>
        <div className={cx("Side-Bar-tag-box")}>
          <span className={cx("Side-Bar-tag-box-text")}>
            <FontAwesomeIcon
              className={cx("Side-Bar-tag-box-text-icon")}
              icon={faTag}
            />{" "}
            mtp
          </span>
        </div>
      </div>
    </div>
  );
}
export default sidebar;
