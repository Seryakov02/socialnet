import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon, Button } from "antd";

const Sidebar = ({ login, isAuth, logout }) => {
  return (
    <div className="sidebar">
      <Menu
        style={{ width: 256, height: "100%", position: "relative" }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <Menu.Item key="1">
          <Link to="/profile">
            <Icon type="home" />
            Profile
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/im">
            <Icon type="message" />
            Message
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/users">
            <Icon type="user" />
            Users
          </Link>
        </Menu.Item>
        <div
          style={{
            width: "100%",
            height: "40px",
            background: "#f1f1f1",
            position: "absolute",
            bottom: "0"
          }}
        >
          {isAuth ? (
            <div style={{ margin: "7px 0 0 10px" }}>
              <p style={{ display: "inline", marginRight: "100px" }}>{login}</p>
              <Button type="dashed" size="small" onClick={logout}>
                Logout
              </Button>
            </div>
          ) : (
            <div style={{ margin: "8px 0 0 10px" }}>
              <Button size="small">
                <Link to="/login">Login</Link>
              </Button>
            </div>
          )}
        </div>
      </Menu>
    </div>
  );
};

export default Sidebar;
