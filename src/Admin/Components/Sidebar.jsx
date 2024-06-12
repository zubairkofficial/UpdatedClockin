import React from "react";
import HelmetWrapper from "../../Config/HelmetWrapper";
import { Link, NavLink } from "react-router-dom";
function Sidebar() {
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/admin/login";
  };
  return (
    <>
      <HelmetWrapper />

      <div
        id="kt_app_sidebar"
        class="app-sidebar flex-column"
        data-kt-drawer="true"
        data-kt-drawer-name="app-sidebar"
        data-kt-drawer-activate="{default: true, lg: false}"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="225px"
        data-kt-drawer-direction="start"
        data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
      >
        <div class="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
          <a href="#">
            <img
              alt="Logo"
              src="/assets/logo.png"
              class="h-35px app-sidebar-logo-default"
              style={{ marginTop: "7%" }}
            />

            <img
              alt="Logo"
              src="/assets/logo.png"
              class="h-20px app-sidebar-logo-minimize"
            />
          </a>
        </div>
        <div class="app-sidebar-menu overflow-hidden flex-column-fluid">
          <div id="kt_app_sidebar_menu_wrapper" class="app-sidebar-wrapper">
            <div
              id="kt_app_sidebar_menu_scroll"
              class="scroll-y my-5 mx-3"
              data-kt-scroll="true"
              data-kt-scroll-activate="true"
              data-kt-scroll-height="auto"
              data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer"
              data-kt-scroll-wrappers="#kt_app_sidebar_menu"
              data-kt-scroll-offset="5px"
              data-kt-scroll-save-state="true"
              style={{ height: "428px" }}
            >
              <div
                class="menu menu-column menu-rounded menu-sub-indention fw-semibold fs-6"
                id="#kt_app_sidebar_menu"
                data-kt-menu="true"
                data-kt-menu-expand="false"
              >
                <div
                  data-kt-menu-trigger="click"
                  class="menu-item here show menu-accordion"
                >
                  <span class="menu-link">
                    <span class="menu-icon">
                      <i class="fa-solid fa-house"></i>
                    </span>
                    <span class="menu-title">
                      <NavLink
                        to="/admin/dashboard"
                        className={({ isActive }) =>
                          isActive ? "menu-link" : "menu-link"
                        }
                      >
                        Dashboard
                      </NavLink>
                    </span>
                  </span>
                </div>
                <div class="menu-item pt-5">
                  <div class="menu-content">
                    <span class="menu-heading fw-bold text-uppercase fs-7">
                      Images
                    </span>
                  </div>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  class="menu-item menu-accordion"
                >
                  <span class="menu-link">
                    <span class="menu-icon">
                      <i class="fa-sharp fa-regular fa-browser"></i>
                    </span>
                    <span class="menu-title">
                      <NavLink
                        to="/admin/home"
                        className={(isActive) =>
                          isActive ? "menu-link" : "menu-link"
                        }
                      >
                        {" "}
                        Home Screen{" "}
                      </NavLink>
                    </span>
                  </span>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  class="menu-item menu-accordion"
                >
                  <span class="menu-link">
                    <span class="menu-icon">
                      <i class="fa-sharp fa-regular fa-browser"></i>
                    </span>
                    <span class="menu-title">
                      <NavLink
                        to="/admin/download"
                        className={(isActive) =>
                          isActive ? "menu-link" : "menu-link"
                        }
                      >
                        {" "}
                        Download Screen{" "}
                      </NavLink>
                    </span>
                  </span>
                </div>
                
                <div class="menu-item pt-5">
                  <div class="menu-content">
                    <span class="menu-heading fw-bold text-uppercase fs-7">
                      Home Page Section
                    </span>
                  </div>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  class="menu-item menu-accordion"
                >
                  <span class="menu-link">
                    <span class="menu-icon">
                      <i class="fa-sharp fa-regular fa-browser"></i>
                    </span>
                    <span class="menu-title">
                      <NavLink
                        to="/admin/feature"
                        className={(isActive) =>
                          isActive ? "menu-link" : "menu-link"
                        }
                      >
                        {" "}
                        Features{" "}
                      </NavLink>
                    </span>
                  </span>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  class="menu-item menu-accordion"
                >
                  <span class="menu-link">
                    <span class="menu-icon">
                      <i class="fa-sharp fa-regular fa-browser"></i>
                    </span>
                    <span class="menu-title">
                      <NavLink
                        to="/admin/achievements"
                        className={(isActive) =>
                          isActive ? "menu-link" : "menu-link"
                        }
                      >
                        {" "}
                        Achievement{" "}
                      </NavLink>
                    </span>
                  </span>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  class="menu-item menu-accordion"
                >
                  <span class="menu-link">
                    <span class="menu-icon">
                      <i class="fa-sharp fa-regular fa-browser"></i>
                    </span>
                    <span class="menu-title">
                      <NavLink
                        to="/admin/plans"
                        className={(isActive) =>
                          isActive ? "menu-link" : "menu-link"
                        }
                      >
                        {" "}
                        Plans{" "}
                      </NavLink>
                    </span>
                  </span>
                </div>

                <div class="menu-item pt-5">
                  <div class="menu-content">
                    <span class="menu-heading fw-bold text-uppercase fs-7">
                      Home Page Content
                    </span>
                  </div>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  class="menu-item menu-accordion"
                >
                  <span class="menu-link">
                    <span class="menu-icon">
                      <i class="fa-sharp fa-regular fa-browser"></i>
                    </span>
                    <span class="menu-title">
                      <NavLink
                        to="/admin/content"
                        className={(isActive) =>
                          isActive ? "menu-link" : "menu-link"
                        }
                      >
                        {" "}
                        Hero Section{" "}
                      </NavLink>
                    </span>
                  </span>
                </div>

                <div class="menu-item pt-5">
                  <div class="menu-content">
                    <span class="menu-heading fw-bold text-uppercase fs-7">
                      FAQ Page Section
                    </span>
                  </div>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  class="menu-item menu-accordion"
                >
                  <span class="menu-link">
                    <span class="menu-icon">
                      <i class="fa-sharp fa-regular fa-browser"></i>
                    </span>
                    <span class="menu-title">
                      <NavLink
                        to="/admin/faqs"
                        className={(isActive) =>
                          isActive ? "menu-link" : "menu-link"
                        }
                      >
                        {" "}
                        FAQS{" "}
                      </NavLink>
                    </span>
                  </span>
                </div>

                
                <div class="menu-item pt-5">
                  <div class="menu-content">
                    <span class="menu-heading fw-bold text-uppercase fs-7">
                      News & Article Section
                    </span>
                  </div>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  class="menu-item menu-accordion"
                >
                  <span class="menu-link">
                    <span class="menu-icon">
                      <i class="fa-sharp fa-regular fa-browser"></i>
                    </span>
                    <span class="menu-title">
                      <NavLink
                        to="/admin/news"
                        className={(isActive) =>
                          isActive ? "menu-link" : "menu-link"
                        }
                      >
                        {" "}
                        News & Article{" "}
                      </NavLink>
                    </span>
                  </span>
                </div>

                <div class="menu-item pt-5">
                  <div class="menu-content">
                    <span class="menu-heading fw-bold text-uppercase fs-7">
                      Support Section
                    </span>
                  </div>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  class="menu-item menu-accordion"
                >
                  <span class="menu-link">
                    <span class="menu-icon">
                      <i class="fa-sharp fa-regular fa-browser"></i>
                    </span>
                    <span class="menu-title">
                      <NavLink
                        to="/admin/support"
                        className={(isActive) =>
                          isActive ? "menu-link" : "menu-link"
                        }
                      >
                        {" "}
                        Contact Us{" "}
                      </NavLink>
                    </span>
                  </span>
                </div>
                {/* <div class="menu-item pt-5">
                  <div class="menu-content">
                    <span class="menu-heading fw-bold text-uppercase fs-7">
                      Apps
                    </span>
                  </div>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="/admin/home">
                    <span class="menu-icon">
                      <i class="fa-regular fa-calendar-days"></i>
                    </span>
                    <span class="menu-title">Calendar</span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div
          class="app-sidebar-footer flex-column-auto pt-2 pb-6 px-6"
          id="kt_app_sidebar_footer"
        >
          <button
            class="btn btn-flex flex-center btn-custom btn-primary overflow-hidden text-nowrap px-0 h-40px w-100"
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            data-bs-dismiss-="click"
            data-bs-original-title="200+ in-house components and 3rd-party plugins"
            data-kt-initialized="1"
            onClick={handleLogout}
          >
            <span class="btn-label">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
