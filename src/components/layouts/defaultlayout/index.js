import Header from "./Header";
import Sidebar from "./SideBar";
function defaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="content">
        <Sidebar />
        <div className="conten">{children}</div>
      </div>
    </div>
  );
}
export default defaultLayout;
