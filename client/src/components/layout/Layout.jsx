import { useLocation } from "react-router";
import { Outlet } from "react-router";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Sidebar from "../layout/Sidebar";

function Layout() {

  const location = useLocation();

  return (

      <div className="layout">
        <Header />

        <div className="layout-content" style={{ display: "flex" }}>
          {location.pathname === "/shop" && <Sidebar />}

          <main style={{ flex: 1 }}>
            <Outlet />
          </main>
        </div>

        <Footer />
      </div>
  )
}

export default Layout;