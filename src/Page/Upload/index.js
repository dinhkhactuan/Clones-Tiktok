import Header from "../../components/layouts/defaultlayout/Header";
import classNames from "classnames/bind";
import styles from "./Upload.module.scss";
import { useRef, useState } from "react";
const cx = classNames.bind(styles);
function Upload() {
  const Ref = useRef();
  const btn = useRef();
  const input = useRef();
  const fhandleSelect = () => {
    const options = Ref.current.options[Ref.current.value].text;
  };
  const data_video = () => {
    console.log(input.current.files);
    if (input.current.files) {
      console.log(btn.current);
    }
  };
  const summit_video = () => {
    console.log(btn.current);
  };
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
            <input
              ref={input}
              onChange={data_video}
              type="file"
              className={cx("upload_content-box-btn")}
            />
          </div>
          <div className={cx("upload_content-box-decrips")}>
            <div className={cx("upload_content-box-decrips_1")}>
              <div className={cx("upload_content-box-decrips_contain")}>
                <span className={cx("upload_content-box-decrips_text")}>
                  Chú thích
                </span>
                <input
                  className={cx("upload_content-box-decrips_text_input1")}
                  name={"chuthich"}
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
                <select
                  onClick={fhandleSelect}
                  ref={Ref}
                  className={cx("data_select")}
                >
                  <option value={"0"}>Công Khai</option>
                  <option value={"1"}>Bạn bè</option>
                  <option value={"2"}>Riêng tư</option>
                </select>
              </div>
              <div>
                <p>cho phép người dùng</p>
                <input
                  checked="checked"
                  type="checkbox"
                  className={cx("checkbox")}
                />{" "}
                bạn bè
                <input
                  checked="checked"
                  type="checkbox"
                  className={cx("checkbox")}
                />{" "}
                Duet
                <input
                  checked="checked"
                  type="checkbox"
                  className={cx("checkbox")}
                />{" "}
                Stitch
              </div>
              <div className={cx("upload_content-box-decrips_resolve")}>
                <button
                  className={cx("upload_content-box-decrips_resolve_btn1")}
                >
                  Hủy bỏ
                </button>
                <button
                  ref={btn}
                  onClick={summit_video}
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
