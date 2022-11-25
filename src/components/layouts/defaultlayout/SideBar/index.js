import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./SideBar.module.scss";
import Button_login from "../../../Button/Button_login/Button_login";
import Dangnhap from "../../../../Page/Login/Dangnhap/Dangnhap";
import Get_suggested_users_list from "../../../../Api/users/Get_suggested_users_list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserGroup,
  faCamera,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function Sidebar() {
  const [check, setcheck] = useState(false);
  const [active, setactive] = useState(true);
  const [data, setadata] = useState([]);
  const home = useRef();
  const follow = useRef();
  useEffect(() => {
    Get_suggested_users_list(1, 10).then((data) => setadata(data.data));
  }, []);
  const u = () => {
    setactive(!active);
  };
  const t = () => {
    setactive(active);
  };
  const handle = () => {
    setcheck(true);
  };
  const handles = () => {
    setcheck(false);
  };

  return (
    <>
      {check && <Dangnhap close={handles} />}
      <div className={cx("Side-Bar")}>
        <div className={cx("Side-Bar-menu")}>
          <Link
            ref={home}
            onClick={u}
            className={cx("Side-Bar-text1", { active })}
            to="/"
          >
            <p className={cx("Side-Bar-text")}>
              <FontAwesomeIcon className={cx("icon-menu")} icon={faHome} />
              Dành cho bạn
            </p>
          </Link>
          <Link
            ref={follow}
            onClick={t}
            className={cx("Side-Bar-text1", { active })}
            to="/Following"
          >
            <p className={cx("Side-Bar-text")}>
              <FontAwesomeIcon
                className={cx("icon-menu")}
                icon={faUserGroup}
              ></FontAwesomeIcon>
              Đang follow
            </p>
          </Link>

          <p className={cx("Side-Bar-text", "live_hover")}>
            <FontAwesomeIcon
              className={cx("icon-menu")}
              icon={faCamera}
            ></FontAwesomeIcon>{" "}
            LIVE
          </p>
        </div>
        {true && (
          <Button_login check={check} click={handle}>
            Đăng nhập
          </Button_login>
        )}
        <span className={cx("defiant")}></span>
        {data.map((data, index) => (
          <div className={cx("Side-Bar-users")}>
            <p className={cx("Side-Bar-users-text")}>Tài khoản được đề xuất</p>
            <div className={cx("Side-Bar-users-content")}>
              <div className={cx("Side-Bar-users-content-box")}>
                <img
                  className={cx("Side-Bar-users-content-img")}
                  src={data.avata}
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
        ))}
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
    </>
  );
}
export default Sidebar;
