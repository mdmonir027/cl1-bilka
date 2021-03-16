import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./style/SideMenu.scss";
import MenuList from "./MenuList";

import CloseIcon from "@material-ui/icons/Close";
import { Drawer } from "@material-ui/core";

const SideMenu = () => {
  const [drawer, setDrawer] = useState(false);

  return (
    <div className="sideMenu">
      <div className="sideMenu__iconWrapper" onClick={() => setDrawer(true)}>
        <MenuIcon className="sideMenu__icon" />
        <p className="sideMenu__text">Menu</p>
      </div>
      <Drawer open={drawer} onClose={() => setDrawer(false)}>
        <div className="sideMenu__drawer">
          <div className="menuList__header">
            <h4 className="menuList__headerTitle">Categories</h4>
            <CloseIcon
              className="menuList__closeIcon"
              onClick={() => setDrawer(false)}
            />
          </div>
          <MenuList />
        </div>
      </Drawer>
    </div>
  );
};

export default SideMenu;
