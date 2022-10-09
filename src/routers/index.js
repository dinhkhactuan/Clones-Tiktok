import Home from "../Page/Home";
import Following from "../Page/Following";
import Profine from "../Page/Profine";
import Upload from "../Page/Upload";
export const publirouter = [
  { Path: "/", component: Home },
  { Path: "/Following", component: Following },
  { Path: "/profice", component: Profine },
  { Path: "/upload", component: Upload, layout: null },
];
export const privaterouter = [];
