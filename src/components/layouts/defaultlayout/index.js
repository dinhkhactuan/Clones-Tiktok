import Header from "./Header";
import Sidebar from "./SideBar";
import classNames from "classnames/bind";
import styles from "./defaultLayout.module.scss";
import "./defaultLayout.module.scss";

const cx = classNames.bind(styles);
function defaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={cx("body")}>
        <div className={cx("content")}>
          <Sidebar />
          <div className={cx("conten")}>{children}</div>
        </div>
      </div>
    </div>
  );
}
export default defaultLayout;
