import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import "./Home.module.scss";
import Get_suggested_users_list from "../../Api/users/Get_suggested_users_list";
import Get_api_search from "../../Api/api_tiktok_search";
import Button_follow from "../../components/Button/Button_follow/Button_follow";

const cx = classNames.bind(styles);
function Home() {
  const [datas, setdatas] = useState([]);
  useEffect(() => {
    Get_suggested_users_list(1, 20).then((res) => {
      setdatas(res.data);
    });
    // Get_api_search().then((res) => console.log(res));
  }, []);
  return (
    <>
      {datas.map((data, index) => {
        return (
          <div key={index} className={cx("Home-conten-2t")}>
            <div className={cx("Home-content")}>
              <div className={cx("Home-content-containt")}>
                <div className={cx("Home-content-containt-box")}>
                  <img
                    className={cx("Home-content-containt-box-img")}
                    src={data.avatar}
                  ></img>
                </div>
                <div className={cx("Home-content-containt-decrition")}>
                  <p className={cx("Home-content-containt-decrition-text")}>
                    {data.nickname}
                  </p>
                  <span className={cx("Home-content-containt-decrition-span")}>
                    đùa tí mà căng
                  </span>
                  <span className={cx("Home-content-containt-decrition-tag")}>
                    {data.full_name}
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
                autoPlay={true}
                loop
                className={cx("Home-content-containt-video-1")}
                controls
                src={data.popular_video.file_url}
              ></video>
            </div>
            <span className={cx("defiant")}></span>
          </div>
        );
      })}
    </>
  );
}
export default Home;
