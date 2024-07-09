import React from "react";
import HelmetWrapper from "../../Config/HelmetWrapper";
function Header() {
  return (
    <>
      <HelmetWrapper />
      <div
        id="kt_app_header"
        class="app-header "
        data-kt-sticky="true"
        data-kt-sticky-activate="{default: true, lg: true}"
        data-kt-sticky-name="app-header-minimize"
        data-kt-sticky-offset="{default: '200px', lg: '0'}"
        data-kt-sticky-animation="false"
      >
        <div
          class="app-container  container-fluid d-flex align-items-stretch justify-content-between "
          id="kt_app_header_container"
        >
          <div
            class="d-flex align-items-center d-lg-none ms-n3 me-1 me-md-2"
            title="Show sidebar menu"
          >
            <div
              class="btn btn-icon btn-active-color-primary w-35px h-35px"
              id="kt_app_sidebar_mobile_toggle"
            >
              <i class="ki-duotone ki-abstract-14 fs-2 fs-md-1">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>{" "}
            </div>
          </div>

          <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
            <a href="../index.html" class="d-lg-none">
              <img
                alt="Logo"
                src="../assets/media/logos/default-small.svg"
                class="h-30px"
              />
            </a>
          </div>

          <div
            class="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
            id="kt_app_header_wrapper"
          >
            <div
              class="app-header-menu app-header-mobile-drawer align-items-stretch"
              data-kt-drawer="true"
              data-kt-drawer-name="app-header-menu"
              data-kt-drawer-activate="{default: true, lg: false}"
              data-kt-drawer-overlay="true"
              data-kt-drawer-width="250px"
              data-kt-drawer-direction="end"
              data-kt-drawer-toggle="#kt_app_header_menu_toggle"
              data-kt-swapper="true"
              data-kt-swapper-mode="{default: 'append', lg: 'prepend'}"
              data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}"
            >
              <div
                class="
                menu 
                menu-rounded  
                menu-column 
                menu-lg-row 
                my-5 
                my-lg-0 
                align-items-stretch 
                fw-semibold
                px-2 px-lg-0
                  "
                id="kt_app_header_menu"
                data-kt-menu="true"
              >
                <div
                  data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                  data-kt-menu-placement="bottom-start"
                  class="menu-item here show menu-here-bg menu-lg-down-accordion me-0 me-lg-2"
                >
                  <a href="#" className="mt-4 md:mt-8 lg:mt-12 bg-[#FF7A50] hover:bg-orange-700  font-bold py-2 px-4 rounded-xl duration-300" style={{color:"white"}}>Dashboard</a>
                  {/* <span class="menu-link">
                    <span class="menu-title">Dashboards</span>
                    <span class="menu-arrow d-lg-none"></span>
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
