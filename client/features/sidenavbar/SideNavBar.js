import React, { useState } from "react";
import {
  List,
  ListSubheader,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import { Link } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const SideNavBar = ({setShowSideBar}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <><div >
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
          >Menu
          </ListSubheader>
        }
      >
        <ListItemButton>
          <Link to="/allproducts">
            <span onClick={()=> setShowSideBar(false)}>
            <ListItemText primary="All Products" />
            </span>
          </Link>
        </ListItemButton>

        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Shop by Genre" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <Link to="/genre/rpg">
                <span onClick={()=> setShowSideBar(false)}>
                <ListItemText primary="RPG" />
                </span>
              </Link>
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <Link to="/genre/fighting">
                <span onClick={()=> setShowSideBar(false)}>
                <ListItemText primary="Fighting" />
                </span>
              </Link>
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <Link to="/genre/action">
                <span onClick={()=> setShowSideBar(false)}>
                <ListItemText primary="Action" />
                </span>
              </Link>
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
            <span onClick={()=> setShowSideBar(false)}>
              <Link to="/genre/sports">
                
                <ListItemText primary="Sports" />
                
              </Link>
              </span>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      </div>
    </>
  );
};

export default SideNavBar;
