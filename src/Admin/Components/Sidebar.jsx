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
              class="h-51px app-sidebar-logo-default"
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
              style={{height: "calc(100vh - 170px)"}}
              class="scroll-y my-5 mx-3"
              data-kt-scroll="true"
              data-kt-scroll-activate="true"
              data-kt-scroll-height="auto"
              data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer"
              data-kt-scroll-wrappers="#kt_app_sidebar_menu"
              data-kt-scroll-offset="5px"
              data-kt-scroll-save-state="true"
              // style={{ height: "428px" }}
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
                    <span class="menu-title">
                      <NavLink
                        to="/admin/dashboard"
                        className={({ isActive }) =>
                          isActive ? 'text-orange-500 hover:text-orange-500' : 'text-white hover:text-primary'
                        }
                      >
                        <i class="fa-solid fa-house pr-5"></i>
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
                  class="menu-item here show menu-accordion"
                >
                  <span class="menu-link">
                    <span class="menu-title">
                      <NavLink
                        to="/admin/home"
                        className={({ isActive }) =>
                          isActive ? 'text-orange-500 hover:text-orange-500' : 'text-white hover:text-primary'
                        }
                      >
                        <i className="fa-sharp fa-regular fa-browser pr-5"></i>
                        Home Screen
                      </NavLink>

                    </span>
                  </span>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  class="menu-item here show menu-accordion"
                >
                  <span class="menu-link">
                    <span class="menu-title">
                      <NavLink
                        to="/admin/download"
                        className={({ isActive }) =>
                          isActive ? 'text-orange-500 hover:text-orange-500' : 'text-white hover:text-primary'
                        }
                      >
                        <i class="fa-light fa-download pr-5"></i>
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
                  class="menu-item menu-accordion here show"
                >
                  <span class="menu-link">
                    <span class="menu-title">
                      <NavLink
                        to="/admin/feature"
                        className={({ isActive }) =>
                          isActive ? 'text-orange-500 hover:text-orange-500' : 'text-white hover:text-primary'
                        }
                      >
                        <i class="fa-solid fa-shield-check pr-5"></i>
                        Features{" "}
                      </NavLink>
                    </span>
                  </span>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  class="menu-item menu-accordion here show"
                >
                  <span class="menu-link">
                    <span class="menu-title">
                      <NavLink
                        to="/admin/achievements"
                        className={({ isActive }) =>
                          isActive ? 'text-orange-500 hover:text-orange-500' : 'text-white hover:text-primary'
                        }
                      >
                        <i class="fa-solid fa-badge-check pr-5"></i>
                        Achievement{" "}
                      </NavLink>
                    </span>
                  </span>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  class="menu-item menu-accordion here show"
                >
                  <span class="menu-link">
                    <span class="menu-title">
                      <NavLink
                        to="/admin/plans"
                        className={({ isActive }) =>
                          isActive ? 'text-orange-500 hover:text-orange-500' : 'text-white hover:text-primary'
                        }
                      >
                        <i class="fa-solid fa-circle-dollar pr-5"></i>
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
                  class="menu-item menu-accordion here show"
                >
                  <span class="menu-link">
                    <span class="menu-title">
                      <NavLink
                        to="/admin/content"
                        className={({ isActive }) =>
                          isActive ? 'text-orange-500 hover:text-orange-500' : 'text-white hover:text-primary'
                        }
                      >
                        <i class="fa-solid fa-house-blank pr-5"></i>
                        Home Page{" "}
                      </NavLink>
                    </span>
                  </span>
                </div>


                <div
                  data-kt-menu-trigger="click"
                  class="menu-item menu-accordion here show"
                >
                  <span class="menu-link">
                    <span class="menu-title">
                      <NavLink
                        to="/admin/stat"
                        className={({ isActive }) =>
                          isActive ? 'text-orange-500 hover:text-orange-500' : 'text-white hover:text-primary'
                        }
                      >
                        <i class="fa-sharp fa-solid fa-chart-simple pr-5"></i>
                        Stat Section{" "}
                      </NavLink>
                    </span>
                  </span>
                </div>


                <div
                  data-kt-menu-trigger="click"
                  class="menu-item menu-accordion here show"
                >
                  <span class="menu-link">
                    <span class="menu-title">
                      <NavLink
                        to="/admin/footer"
                        className={({ isActive }) =>
                          isActive ? 'text-orange-500 hover:text-orange-500' : 'text-white hover:text-primary'
                        }
                      >
                        <i class="fa-duotone fa-link-simple pr-5"></i>
                        Footer Section{" "}
                      </NavLink>
                    </span>
                  </span>
                </div>

                <div class="menu-item pt-5">
                  <div class="menu-content">
                    <span class="menu-heading fw-bold text-uppercase fs-7">
                      Download Page Section
                    </span>
                  </div>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  class="menu-item menu-accordion here show"
                >
                  <span class="menu-link">
                    <span class="menu-title">
                      <NavLink
                        to="/admin/downloadsection"
                        className={({ isActive }) =>
                          isActive ? 'text-orange-500 hover:text-orange-500' : 'text-white hover:text-primary'
                        }
                      >
                        <i class="fa-light fa-download pr-5"></i>
                        Download Section{" "}
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
                  class="menu-item menu-accordion here show"
                >
                  <span class="menu-link">
                    <span class="menu-title">
                      <NavLink
                        to="/admin/faqs"
                        className={({ isActive }) =>
                          isActive ? 'text-orange-500 hover:text-orange-500' : 'text-white hover:text-primary'
                        }
                      >
                        <i class="fa-solid fa-square-question pr-5"></i>
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
                  class="menu-item menu-accordion here show"
                >
                  <span class="menu-link">
                    <span class="menu-title">
                      <NavLink
                        to="/admin/news"
                        className={({ isActive }) =>
                          isActive ? 'text-orange-500 hover:text-orange-500' : 'text-white hover:text-primary'
                        }
                      >
                        <i class="fa-sharp fa-solid fa-newspaper pr-5"></i>
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
                  class="menu-item menu-accordion here show"
                >
                  <span class="menu-link">
                    <span class="menu-title">
                      <NavLink
                        to="/admin/support"
                        className={({ isActive }) =>
                          isActive ? 'text-orange-500 hover:text-orange-500' : 'text-white hover:text-primary'
                        }
                      >
                        <i class="fa-regular fa-headset pr-5"></i>
                        Contact Us{" "}
                      </NavLink>
                    </span>
                  </span>
                </div>

                <div class="menu-item pt-5">
                  <div class="menu-content">
                    <span class="menu-heading fw-bold text-uppercase fs-7">
                      Privacy Page
                    </span>
                  </div>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  class="menu-item menu-accordion here show"
                >
                  <span class="menu-link">
                    <span class="menu-title">
                      <NavLink
                        to="/admin/privacy"
                        className={({ isActive }) =>
                          isActive ? 'text-orange-500 hover:text-orange-500' : 'text-white hover:text-primary'
                        }
                      >
                        <i class="fa-solid fa-shield-halved pr-5"></i>
                        Privacy & Policy{" "}
                      </NavLink>
                    </span>
                  </span>
                </div>


                <div class="menu-item pt-5">
                  <div class="menu-content">
                    <span class="menu-heading fw-bold text-uppercase fs-7">
                      Term Page
                    </span>
                  </div>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  class="menu-item menu-accordion here show"
                >
                  <span class="menu-link">
                    <span class="menu-title">
                      <NavLink
                        to="/admin/term"
                        className={({ isActive }) =>
                          isActive ? 'text-orange-500 hover:text-orange-500' : 'text-white hover:text-primary'
                        }
                      >
                        <i class="fa-solid fa-question pr-5"></i> 
                        Term & Condition{" "}
                      </NavLink>
                    </span>
                  </span>
                </div>

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
