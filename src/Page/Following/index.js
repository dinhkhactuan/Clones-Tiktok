// import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Following.module.scss";
import Button_follow from "../../components/Button/Button_follow/Button_follow";
const cx = classNames.bind(styles);
function Following() {
  return (
    <div className={cx("box-item")}>
      <div className={cx("item-1", "i")}>
        <div className={cx("box-img")}>
          <img src="https://i.pinimg.com/originals/1c/1d/7b/1c1d7b5bb78ab62b5c025b22be9c2ea0.jpg"></img>
        </div>
        <div className={cx("box-user")}>
          <div className={cx("box-user-img")}>
            <img src="https://i.pinimg.com/originals/1c/1d/7b/1c1d7b5bb78ab62b5c025b22be9c2ea0.jpg"></img>
          </div>
          <div className={cx("box-decrips")}>
            <p className={cx("box-decrips-title")}>the anh 28</p>
            <p className={cx("box-decrips-children")}>
              the anh 28 entertainment
            </p>
            <button className={cx("follow-btn")}>Follow</button>
          </div>
        </div>
      </div>

      <div className={cx("item-2", "i")}>
        <div className={cx("box-img")}>
          <img src="https://i.pinimg.com/originals/1c/1d/7b/1c1d7b5bb78ab62b5c025b22be9c2ea0.jpg"></img>
        </div>
        <div className={cx("box-user")}>
          <div className={cx("box-user-img")}>
            <img src="https://i.pinimg.com/originals/1c/1d/7b/1c1d7b5bb78ab62b5c025b22be9c2ea0.jpg"></img>
          </div>
          <div className={cx("box-decrips")}>
            <p className={cx("box-decrips-title")}>the anh 28</p>
            <p className={cx("box-decrips-children")}>
              the anh 28 entertainment
            </p>
          </div>
        </div>
      </div>
      <div className={cx("item-3", "i")}>
        <div className={cx("box-img")}>
          <img src="https://i.pinimg.com/originals/1c/1d/7b/1c1d7b5bb78ab62b5c025b22be9c2ea0.jpg"></img>
        </div>
        <div className={cx("box-user")}>
          <div className={cx("box-user-img")}>
            <img src="https://i.pinimg.com/originals/1c/1d/7b/1c1d7b5bb78ab62b5c025b22be9c2ea0.jpg"></img>
          </div>
          <div className={cx("box-decrips")}>
            <p className={cx("box-decrips-title")}>the anh 28</p>
            <p className={cx("box-decrips-children")}>
              the anh 28 entertainment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Following;
