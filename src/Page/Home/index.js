import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import "./Home.module.scss";
import api_video from "../../api_tiktok";
import Button_follow from "../../components/Button/Button_follow/Button_follow";

const cx = classNames.bind(styles);
function Home() {
  useEffect(() => {}, []);
  return (
    <>
      {api_video.map((e) => (
        <div className={cx("Home-conten-2t")}>
          <div className={cx("Home-content")}>
            <div className={cx("Home-content-containt")}>
              <div className={cx("Home-content-containt-box")}>
                <img
                  className={cx("Home-content-containt-box-img")}
                  src={e.img}
                ></img>
              </div>
              <div className={cx("Home-content-containt-decrition")}>
                <p className={cx("Home-content-containt-decrition-text")}>
                  {e.name}
                </p>
                <span className={cx("Home-content-containt-decrition-span")}>
                  đùa tí mà căng
                </span>
                <span className={cx("Home-content-containt-decrition-tag")}>
                  {e.hagtag}
                </span>
                {true && <Button_follow>Follow</Button_follow>}
                <p className={cx("Home-content-containt-music")}>
                  <FontAwesomeIcon
                    className={cx("Home-content-containt-music-icon")}
                    icon={faMusic}
                  ></FontAwesomeIcon>
                  nhạc nền - Đà Lạt +
                </p>
              </div>
            </div>
          </div>
          <div className={cx("Home-content-containt-video")}>
            <video
              className={cx("Home-content-containt-video-1")}
              controls
              src={e.video}
              type="video/mp4"
            ></video>
          </div>
          <span className={cx("defiant")}></span>
        </div>
      ))}
    </>
  );
}
export default Home;
