import { useLocation } from "react-router";
import { Outlet } from "react-router";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import FilterSidebar from "../shop/FilterSidebar";

function Layout({ filters, setFilters }) {

  const location = useLocation();

  return (

      <div className="layout">
        <Header />

        <div className="layout-content" style={{ display: "flex" }}>
          {location.pathname === "/shop" && <FilterSidebar filters={filters} setFilters={setFilters} />}

          <main style={{ flex: 1 }}>
            <Outlet />
          </main>
        </div>

        <Footer />
      </div>
  )
}

export default Layout;