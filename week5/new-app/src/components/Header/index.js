import React, { useState, useEffect, memo, useMemo } from "react";
import { Layout, Menu, Dropdown, Avatar, Button } from "antd";
import { useLocation, Link, useNavigate } from "react-router-dom";
import URLS from "@/src/enums/urls";
import AUTH_GETTERS from "@/src/store/modules/Auth/getters";
import AUTH_ACTIONS from "@/src/store/modules/Auth/actions";
import ACTION_TYPES from "@/src/store/types/action-types";
import { UserOutlined, PoweroffOutlined } from "@ant-design/icons";
import {
  privateHeaderMenuConfig,
  publicHeaderMenuConfig,
} from "@/src/utils/generateHeader";
import { isEmpty } from "lodash";
import { useStore, useDispatch } from "react-redux";
import getResponsive from "@/src/utils/getResponsive";
import asyncLocalStorage from "@/src/utils/asyncLocalStorage";

const { Header } = Layout;

const ListMenu = () => {
  const store = useStore();
  const isGranted = !isEmpty(AUTH_GETTERS.loginToken(store.getState()));
  const menu = useMemo(
    () => (isGranted ? privateHeaderMenuConfig : []),
    [isGranted]
  );

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [currentPath, setCurrentPath] = useState("");
  const findMenu = menu.find((item) => item.key === pathname);

  useEffect(() => {
    if (findMenu) {
      setCurrentPath(findMenu.key);
    }
  }, [findMenu]);

  const handleClick = (e) => {
    if (e.key === "button_logout") {
      asyncLocalStorage.setItem("token", "").then(() => {
        navigate(URLS.AUTH);
      });
    } else {
      navigate(e.key);
    }
  };
  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[currentPath]}
      style={{
        background: "transparent",
        border: "none",
        width: "60%",
      }}
      mode="horizontal"
      items={menu}
    />
  );
};

const AvatarMenu = () => {
  const store = useStore();
  const profileInfoDataProfilePicture = "https://joeschmoe.io/api/v1/random";
  const isGranted = !isEmpty(AUTH_GETTERS.loginToken(store.getState()));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authLogout = dispatch(AUTH_ACTIONS[ACTION_TYPES.POST_AUTH_LOGOUT]());

  const handleClick = (e) => {
    if (e.key === "button_logout") {
      authLogout().then(() => {
        navigate(URLS.AUTH);
      });
    } else {
      navigate(e.key);
    }
  };
  const menuItems = [
    {
      key: URLS.DETAILS,
      icon: <UserOutlined />,
      label: "My Profile",
    },
    {
      key: "button_logout",
      icon: <PoweroffOutlined />,
      label: "Logout",
    },
  ];
  const userMenu = (
    <Menu
      onClick={handleClick}
      style={{
        border: "none",
      }}
      items={menuItems}
    />
  );

  return (
    <div>
      {isGranted ? (
        <Dropdown
          placement="bottomRight"
          trigger={["click"]}
          overlay={userMenu}
        >
          <Avatar
            src={profileInfoDataProfilePicture}
            size={"large"}
            style={{
              marginLeft: "1rem",
              cursor: "pointer",
            }}
          />
        </Dropdown>
      ) : (
        <></>
      )}
    </div>
  );
};

const AuthMenu = () => {
  const store = useStore();
  const isGranted = !isEmpty(AUTH_GETTERS.loginToken(store.getState()));
  const menu = useMemo(
    () => (isGranted ? [] : publicHeaderMenuConfig),
    [isGranted]
  );
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      {!isGranted &&
        menu.map((item, index) => (
          <Button
            key={index}
            type="primary"
            block
            ghost={!(item.key === pathname)}
            style={{ width: getResponsive(5) }}
            onClick={() => {
              navigate(item.key);
            }}
          >
            {item.label}
          </Button>
        ))}
    </>
  );
};

const HeaderWrapper = memo(() => {
  const gcoSettingLogo =
    "https://www.clipartmax.com/png/full/293-2933428_its-a-girl-banner-clip-art.png";
  return (
    <Header
      style={{
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
      }}
      className="Header"
    >
      {!!gcoSettingLogo && (
        <div
          style={{
            width: "8rem",
            height: "100%",
            display: "flex",
            alignItems: "center",
            paddingTop: "0.6rem",
            paddingBottom: "0.6rem",
          }}
        >
          <Link
            to={URLS.HOME}
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              style={{
                height: "2.4rem",
                objectFit: "contain",
                cursor: "pointer",
              }}
              src={gcoSettingLogo}
            />
          </Link>
        </div>
      )}
      <div
        style={{
          display: "flex",
          height: "100%",
          flexDirection: "row",
          flex: 1,
        }}
      >
        <ListMenu />
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: getResponsive(0.8),
            marginLeft: getResponsive(0.8),
          }}
        >
          <AuthMenu />
          <AvatarMenu />
        </div>
      </div>
    </Header>
  );
});

export default HeaderWrapper;
