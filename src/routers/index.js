import Home from "../Page/Home";
import Following from "../Page/Following";
import Profile from "../Page/Profile";
import Upload from "../Page/Upload";

export const publirouter = [
  { Path: "/", component: Home },
  { Path: "/Following", component: Following },
  { Path: "/profile", component: Profile },
  { Path: "/upload", component: Upload, layout: null },
];
export const privaterouter = [];
