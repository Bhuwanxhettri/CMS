import React, { useEffect, useState } from "react";
import "../css/style.css";
import {
  MenuOutlined,
  SearchOutlined,
  MailOutlined,
  BellOutlined,
  UserOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { toggleCollapsed } from "../features/sidebar/collapsed";
import { Link } from "react-router-dom";
const Header = () => {
  const collapsed = useSelector((state) => state.sidebar.collapsed);
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    setDisplay(!display);
    setTimeout(() => {
      setDisplay(false);
    }, 6000);
  };
  useEffect(() => {}, [display]);
  return (
    <div>
      <div
        className={
          collapsed
            ? `header header-nonCollapsed position-fixed shadow-sm`
            : `header header-Collapsed position-fixed shadow-sm`
        }
      >
        <div className="header-content clearfix">
          <div className="nav-control">
            <div className="hamburger">
              <button
                onClick={() => {
                  dispatch(toggleCollapsed());
                }}
                style={{ cursor: "pointer" }}
                className="input-group-text bg-transparent border-0 pr-2 pr-sm-3"
              >
                <MenuOutlined style={{ fontSize: "23px" }} />
              </button>
            </div>
          </div>
          <div className="header-left">
            <div className="input-group icons">
              <div className="input-group-prepend">
                <span
                  className="input-group-text bg-transparent border-0 pr-2 pr-sm-3"
                  id="basic-addon1"
                >
                  <SearchOutlined />
                </span>
              </div>
              <input
                type="search"
                className="form-control"
                placeholder="Search Dashboard"
                aria-label="Search Dashboard"
              />
              <div className="drop-down d-md-none">
                <form action="#">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="header-right">
            <ul className="clearfix">
              <li className="icons dropdown">
                <a href="javascript:void(0)" data-toggle="dropdown">
                  <MailOutlined />
                  <span className="badge gradient-1 badge-pill badge-primary">
                    3
                  </span>
                </a>
                <div className="drop-down animated fadeIn dropdown-menu">
                  <div className="dropdown-content-heading d-flex justify-content-between">
                    <span className="">3 New Messages</span>
                  </div>
                  <div className="dropdown-content-body">
                    <ul>
                      <li className="notification-unread">
                        <a href="javascript:void()">
                          <img
                            className="float-left mr-3 avatar-img"
                            src="images/avatar/1.jpg"
                            alt=""
                          />
                          <div className="notification-content">
                            <div className="notification-heading">
                              Saiful Islam
                            </div>
                            <div className="notification-timestamp">
                              08 Hours ago
                            </div>
                            <div className="notification-text">
                              Hi Teddy, Just wanted to let you ...
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="notification-unread">
                        <a href="javascript:void()">
                          <img
                            className="float-left mr-3 avatar-img"
                            src="images/avatar/2.jpg"
                            alt=""
                          />
                          <div className="notification-content">
                            <div className="notification-heading">
                              Adam Smith
                            </div>
                            <div className="notification-timestamp">
                              08 Hours ago
                            </div>
                            <div className="notification-text">
                              Can you do me a favour?
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void()">
                          <img
                            className="float-left mr-3 avatar-img"
                            src="images/avatar/3.jpg"
                            alt=""
                          />
                          <div className="notification-content">
                            <div className="notification-heading">
                              Barak Obama
                            </div>
                            <div className="notification-timestamp">
                              08 Hours ago
                            </div>
                            <div className="notification-text">
                              Hi Teddy, Just wanted to let you ...
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void()">
                          <img
                            className="float-left mr-3 avatar-img"
                            src="images/avatar/4.jpg"
                            alt=""
                          />
                          <div className="notification-content">
                            <div className="notification-heading">
                              Hilari Clinton
                            </div>
                            <div className="notification-timestamp">
                              08 Hours ago
                            </div>
                            <div className="notification-text">Hello</div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="icons dropdown">
                <a href="javascript:void(0)" data-toggle="dropdown">
                  <BellOutlined />
                  <span className="badge badge-pill gradient-2 badge-primary">
                    3
                  </span>
                </a>
                <div className="drop-down animated fadeIn dropdown-menu dropdown-notfication">
                  <div className="dropdown-content-heading d-flex justify-content-between">
                    <span className="">2 New Notifications</span>
                  </div>
                  <div className="dropdown-content-body">
                    <ul>
                      <li>
                        <a href="javascript:void()">
                          <span className="mr-3 avatar-icon bg-success-lighten-2">
                            <i className="icon-present" />
                          </span>
                          <div className="notification-content">
                            <h6 className="notification-heading">
                              Events near you
                            </h6>
                            <span className="notification-text">
                              Within next 5 days
                            </span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void()">
                          <span className="mr-3 avatar-icon bg-danger-lighten-2">
                            <i className="icon-present" />
                          </span>
                          <div className="notification-content">
                            <h6 className="notification-heading">
                              Event Started
                            </h6>
                            <span className="notification-text">
                              One hour ago
                            </span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void()">
                          <span className="mr-3 avatar-icon bg-success-lighten-2">
                            <i className="icon-present" />
                          </span>
                          <div className="notification-content">
                            <h6 className="notification-heading">
                              Event Ended Successfully
                            </h6>
                            <span className="notification-text">
                              One hour ago
                            </span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void()">
                          <span className="mr-3 avatar-icon bg-danger-lighten-2">
                            <i className="icon-present" />
                          </span>
                          <div className="notification-content">
                            <h6 className="notification-heading">
                              Events to Join
                            </h6>
                            <span className="notification-text">
                              After two days
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="icons dropdown d-none d-md-flex">
                <a
                  href="javascript:void(0)"
                  className="log-user"
                  data-toggle="dropdown"
                >
                  <span>English</span>
                  <i className="fa fa-angle-down f-s-14" aria-hidden="true" />
                </a>
                <div className="drop-down dropdown-language animated fadeIn dropdown-menu">
                  <div className="dropdown-content-body">
                    <ul>
                      <li>
                        <a href="javascript:void()">English</a>
                      </li>
                      <li>
                        <a href="javascript:void()">Dutch</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="icons dropdown">
                <div
                  className="user-img c-pointer position-relative"
                  onClick={() => {
                    toggleDisplay();
                  }}
                >
                  <span className="activity active" />
                  <img
                    src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
                    height={40}
                    width={40}
                    alt="profileImg"
                  />
                </div>
                <div
                  style={{ display: `${display ? "block" : "none"}` }}
                  className="drop-down dropdown-profile dropdown-menu"
                >
                  <div className="dropdown-content-body">
                    <ul>
                      <li
                        onClick={() => {
                          toggleDisplay();
                        }}
                      >
                        <Link to="/profile">
                          <UserOutlined className="" /> <span>Profile</span>
                        </Link>
                      </li>
                      {/* <li>
                        <Link to="/profile">
                          <UserOutlined className="" /> <span>Profile</span>
                        </Link>
                      </li>
                      <hr className="my-2" />
                      <li>
                        <Link to="/profile">
                          <UserOutlined className="" /> <span>Profile</span>
                        </Link>
                      </li> */}
                      <li
                        onClick={() => {
                          toggleDisplay();
                        }}
                      >
                        <Link to="/profile">
                          <PoweroffOutlined />

                          <span> {""}Logout</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
