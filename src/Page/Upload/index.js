import Header from "../../components/layouts/defaultlayout/Header";
import classNames from "classnames/bind";
import styles from "./Upload.module.scss";
import { useRef, useState } from "react";
const cx = classNames.bind(styles);
function Upload() {
  return (
    <div>
      <Header />
      <div className={cx("upload_content")}>
        <p className={cx("upload_content_title")}>Tải video lên</p>
        <p className={cx("upload_content_des")}>
          Đăng video vào tài khoản của bạn
        </p>
        <div className={cx("upload_content-box")}>
          <div className={cx("upload_content-box-file")}>
            <img src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/cloud-icon1.ecf0bf2b.svg"></img>
            <p className={cx("upload_content-box-text", "text")}>
              Chọn video để tải lên
            </p>
            <p className={cx("upload_content-box-text1", "text")}>
              Hoặc kéo và thả tập tin
            </p>
            <p className={cx("upload_content-box-text1", "text")}>
              MP4 hoặc WebM
            </p>
            <p className={cx("upload_content-box-text1", "text")}>
              Độ phân giải 720x1280 trở lên
            </p>
            <p className={cx("upload_content-box-text1", "text")}>
              Tối đa 10 phút
            </p>
            <p className={cx("upload_content-box-text1", "text")}>
              Nhỏ hơn 2 GB
            </p>
            <button className={cx("upload_content-box-btn")}>
              Chọn tập tin
            </button>
          </div>
          <div className={cx("upload_content-box-decrips")}>
            <div className={cx("upload_content-box-decrips_1")}>
              <div className={cx("upload_content-box-decrips_contain")}>
                <span className={cx("upload_content-box-decrips_text")}>
                  Chú thích
                </span>
                <input
                  className={cx("upload_content-box-decrips_text_input1")}
                ></input>
              </div>
              <div className={cx("upload_content-box-decrips_contain")}>
                <span className={cx("upload_content-box-decrips_text")}>
                  Ảnh bìa
                </span>
                <input
                  className={cx("upload_content-box-decrips_text_input")}
                  disabled
                ></input>
              </div>
              <div className={cx("upload_content-box-decrips_contain")}>
                <select>
                  <option>Công Khai</option>
                  <option>Bạn bè</option>
                  <option>Riêng tư</option>
                </select>
              </div>
              <div className={cx("upload_content-box-decrips_resolve")}>
                <button
                  className={cx("upload_content-box-decrips_resolve_btn1")}
                >
                  Hủy bỏ
                </button>
                <button
                  className={cx("upload_content-box-decrips_resolve_btn2")}
                >
                  Đăng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Upload;
