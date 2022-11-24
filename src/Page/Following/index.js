import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Following.module.scss";
import Dangnhap from "../Login/Dangnhap/Dangnhap";
import Get_api_follow from "../../Api/Follow/Get_api_follow";
const cx = classNames.bind(styles);
function Following() {
  const [check, setcheck] = useState(false);
  const [Data, setData] = useState([]);
  useEffect(() => {
    Get_api_follow(1).then((data) => console.log(data));
  }, []);
  return (
    <div className={cx("box-container")}>
      {check && <Dangnhap />}
      {Data.map((res) => (
        <div className={cx("box-item")}>
          <div className={cx("item-1", "i")}>
            <div className={cx("box-img")}>
              <img src={res.avatar}></img>
            </div>
            <div className={cx("box-user")}>
              <div className={cx("box-user-img")}>
                <img src={res.avatar}></img>
              </div>
              <div className={cx("box-decrips")}>
                <p className={cx("box-decrips-title")}>the anh 28</p>
                <p className={cx("box-decrips-children")}>
                  the anh 28 entertainment
                </p>

                <button
                  onClick={() => {
                    setcheck(true);
                  }}
                  className={cx("follow-btn")}
                >
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Following;
