import Home from "../Page/Home";
import Following from "../Page/Following";
import Profine from "../Page/Profine";
import Upload from "../Page/Upload";
import Dangky from "../Page/Login/Dangky/Dangky";
import Dangnhap from "../Page/Login/Dangnhap/Dangnhap";
export const publirouter = [
  { Path: "/", component: Home },
  { Path: "/Following", component: Following },
  { Path: "/profice", component: Profine },
  { Path: "/upload", component: Upload, layout: null },
  { Path: "/Subscribe", component: Dangky, layout: null },
  { Path: "/Login", component: Dangnhap, layout: null },
];
export const privaterouter = [];
