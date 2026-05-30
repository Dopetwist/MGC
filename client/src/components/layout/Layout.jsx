import { useLocation } from "react-router";
import { Outlet } from "react-router";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import FilterSidebar from "../shop/FilterSidebar";
import Chat from "../animation/Chat";

function Layout({ cart, filters, setFilters, allProducts }) {

  const location = useLocation();

  return (

      <div className="layout">
        <Header cart={cart} />

        <div className="layout-content" style={{ display: "flex" }}>
          {location.pathname === "/shop" && <FilterSidebar filters={filters} setFilters={setFilters} allProducts={allProducts} />}

          <main style={{ flex: 1 }}>
            <Outlet />
            <Chat />
          </main>
        </div>

        <Footer />
      </div>
  )
}

export default Layout;