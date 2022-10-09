import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import defaultLayout from "./components/layouts/defaultlayout";
import { publirouter } from "./routers/index";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {publirouter.map((route, index) => {
            const Layout = route.layout === null ? Fragment : defaultLayout;
            const Page = route.component;
            console.log(Layout);
            console.log(Page);
            return (
              <Route
                key={index}
                path={route.Path}
                element={<Layout>{<Page />}</Layout>}
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
