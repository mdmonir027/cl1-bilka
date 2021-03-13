import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./style/SideMenu.scss";

import { Drawer } from "@material-ui/core";

const SideMenu = () => {
  const [drawer, setDrawer] = useState(true);

  return (
    <div className="sideMenu">
      <div className="sideMenu__iconWrapper" onClick={() => setDrawer(true)}>
        <MenuIcon className="sideMenu__icon" />
        <p className="sideMenu__text">Menu</p>
      </div>
      <Drawer open={drawer} onClose={() => setDrawer(false)}>
        Menu Content
      </Drawer>
    </div>
  );
};

export default SideMenu;
