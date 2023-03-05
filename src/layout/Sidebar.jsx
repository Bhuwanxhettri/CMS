import { Layout, Menu, theme } from "antd";
import React, { Children, useState } from "react";
const { Content, Footer, Sider } = Layout;
import Header from "./Header";
import "../css/style.css";
import { Link } from "react-router-dom";
import {
  DesktopOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  QuestionCircleOutlined,
  DashboardOutlined,
  MessageOutlined,
  PieChartOutlined,
  UsergroupDeleteOutlined,
  ReadOutlined,
  FieldTimeOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const collapsed = useSelector((state) => state.sidebar.collapsed);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout hasSider>
      <Header />
      <Sider
        width={211}
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          backgroundColor: "white",
        }}
      >
        {collapsed && (
          <>
            <div
              style={{
                backgroundColor: "#7571F9",
                height: "5rem",
                width: "77px",
              }}
              className=" position-fixed"
            >
              <div className="brand-logo ">
                <h2
                  style={{ color: "white", fontFamily: "serif" }}
                  className=" p-4"
                >
                  C
                </h2>
              </div>
            </div>
            <div className="side-link" style={{ marginTop: "80px" }}>
              <div className="list-group">
                <Link
                  style={{
                    fontSize: "16px",
                    fontWeight: "blod",
                    color: "black",
                  }}
                  className="pl-4 py-3 list-group-item-action "
                >
                  <span style={{ fontSize: "15px" }} className="px-2">
                    <DashboardOutlined />
                  </span>
                </Link>
                <Link
                  style={{
                    fontSize: "16px",
                    fontWeight: "blod",
                    color: "black",
                  }}
                  className="pl-4 py-3 list-group-item list-group-item-action "
                >
                  <span style={{ fontSize: "15px" }} className="px-2">
                    <CalendarOutlined />
                  </span>
                </Link>
                <Link
                  style={{
                    fontSize: "16px",
                    fontWeight: "blod",
                    color: "black",
                  }}
                  className="pl-4 py-3 list-group-item list-group-item-action "
                >
                  <span style={{ fontSize: "15px" }} className="px-2">
                    <AppstoreOutlined />
                  </span>
                </Link>
                <Link
                  style={{
                    fontSize: "16px",
                    fontWeight: "blod",
                    color: "black",
                  }}
                  className="pl-4 py-3 list-group-item list-group-item-action "
                >
                  <span style={{ fontSize: "15px" }} className="px-2">
                    <FieldTimeOutlined />
                  </span>
                </Link>
                <Link
                  style={{
                    fontSize: "16px",
                    fontWeight: "blod",
                    color: "black",
                  }}
                  className="pl-4 py-3 list-group-item list-group-item-action "
                >
                  <span style={{ fontSize: "15px" }} className="px-2">
                    <ReadOutlined />
                  </span>
                </Link>
                <Link
                  style={{
                    fontSize: "16px",
                    fontWeight: "blod",
                    color: "black",
                  }}
                  className="pl-4 py-3 list-group-item list-group-item-action "
                >
                  <span style={{ fontSize: "15px" }} className="px-2">
                    <MessageOutlined />
                  </span>
                </Link>
                <Link
                  style={{
                    fontSize: "16px",
                    fontWeight: "blod",
                    color: "black",
                  }}
                  className="pl-4 py-3 list-group-item list-group-item-action "
                >
                  <span style={{ fontSize: "15px" }} className="px-2">
                    <UsergroupDeleteOutlined />
                  </span>
                </Link>
                <Link
                  style={{
                    fontSize: "16px",
                    fontWeight: "blod",
                    color: "black",
                  }}
                  className="pl-4 py-3 list-group-item list-group-item-action "
                >
                  <span style={{ fontSize: "15px" }} className="px-2">
                    <PieChartOutlined />
                  </span>
                </Link>
                <Link
                  style={{
                    fontSize: "16px",
                    fontWeight: "blod",
                    color: "black",
                  }}
                  className="pl-4 py-3 list-group-item list-group-item-action "
                >
                  <span style={{ fontSize: "15px" }} className="px-2">
                    <QuestionCircleOutlined />
                  </span>
                </Link>
                <Link
                  style={{
                    fontSize: "16px",
                    fontWeight: "blod",
                    color: "black",
                  }}
                  className="pl-4 py-3 list-group-item list-group-item-action "
                >
                  <span style={{ fontSize: "15px" }} className="px-2">
                    <PoweroffOutlined />
                  </span>
                </Link>
              </div>
            </div>
          </>
        )}

        {!collapsed && (
          <>
            <div className="nav-header position-fixed">
              <div className="brand-logo ">
                <h2
                  style={{ color: "white", fontFamily: "serif" }}
                  className=" p-4"
                >
                  C R M
                </h2>
              </div>
            </div>
            <div className="side-link" style={{ marginTop: "80px" }}>
              <div className="list-group">
                <Link
                  style={{
                    fontSize: "16px",
                    fontWeight: "blod",
                    color: "black",
                  }}
                  to="/dashboard"
                  className="pl-4 py-3 list-group-item-action "
                >
                  <span style={{ fontSize: "15px" }} className="px-2">
                    <DashboardOutlined />
                  </span>
                  Dashboard
                </Link>
                <Link
                  style={{
                    fontSize: "16px",
                    fontWeight: "blod",
                    color: "black",
                  }}
                  className="pl-4 py-3 list-group-item list-group-item-action "
                >
                  <span style={{ fontSize: "15px" }} className="px-2">
                    <CalendarOutlined />
                  </span>
                  Events
                </Link>
                <Link
                  style={{
                    fontSize: "16px",
                    fontWeight: "blod",
                    color: "black",
                  }}
                  className="pl-4 py-3 list-group-item list-group-item-action "
                >
                  <span style={{ fontSize: "15px" }} className="px-2">
                    <AppstoreOutlined />
                  </span>
                  Projects
                </Link>
                <Link
                  style={{
                    fontSize: "16px",
                    fontWeight: "blod",
                    color: "black",
                  }}
                  className="pl-4 py-3 list-group-item list-group-item-action "
                >
                  <span style={{ fontSize: "15px" }} className="px-2">
                    <FieldTimeOutlined />
                  </span>
                  Tasks
                </Link>
                <Link
                  style={{
                    fontSize: "16px",
                    fontWeight: "blod",
                    color: "black",
                  }}
                  className="pl-4 py-3 list-group-item list-group-item-action "
                >
                  <span style={{ fontSize: "15px" }} className="px-2">
                    <ReadOutlined />
                  </span>
                  Notes
                </Link>
                <Link
                  style={{
                    fontSize: "16px",
                    fontWeight: "blod",
                    color: "black",
                  }}
                  className="pl-4 py-3 list-group-item list-group-item-action "
                >
                  <span style={{ fontSize: "15px" }} className="px-2">
                    <MessageOutlined />
                  </span>
                  Message
                </Link>
                <Link
                  style={{
                    fontSize: "16px",
                    fontWeight: "blod",
                    color: "black",
                  }}
                  className="pl-4 py-3 list-group-item list-group-item-action "
                >
                  <span style={{ fontSize: "15px" }} className="px-2">
                    <UsergroupDeleteOutlined />
                  </span>
                  Team
                </Link>

                <Link
                  style={{
                    fontSize: "16px",
                    fontWeight: "blod",
                    color: "black",
                  }}
                  className="pl-4 py-3 list-group-item list-group-item-action "
                >
                  <span style={{ fontSize: "15px" }} className="px-2">
                    <PieChartOutlined />
                  </span>
                  Reports
                </Link>
                <Link
                  style={{
                    fontSize: "16px",
                    fontWeight: "blod",
                    color: "black",
                  }}
                  className="pl-4 py-3 list-group-item list-group-item-action "
                >
                  <span style={{ fontSize: "15px" }} className="px-2">
                    <QuestionCircleOutlined />
                  </span>
                  Help & Support
                </Link>

                <Link
                  style={{
                    fontSize: "16px",
                    fontWeight: "blod",
                    color: "black",
                  }}
                  className="pl-4 py-3 list-group-item list-group-item-action "
                >
                  <span style={{ fontSize: "15px" }} className="px-2">
                    <PoweroffOutlined />
                  </span>
                  Logout
                </Link>
              </div>
            </div>
          </>
        )}
      </Sider>
    </Layout>
  );
};
export default Sidebar;
