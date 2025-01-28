import { Menu } from "antd";
import type { MenuProps } from "antd";
import { items } from "./data";

export const Navbar = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <>
      <Menu
        onClick={onClick}
        style={{ width: 256, height: "100vh" }}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </>
  );
};

