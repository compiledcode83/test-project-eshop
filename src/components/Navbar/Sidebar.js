import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { Drawer, Button, List, ListItem } from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  togglerButton: {
    marginTop: "10px",
  },
});

export default function Sidebar(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}>
      <List>
        {props.categories.map((text, index) => (
          <a
            href={`/categories/${text}?sortBy=newest&filterBy=null&value=null`}
            key={index}>
            <ListItem button>{text}</ListItem>
          </a>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {
        <React.Fragment key={"left"}>
          <Button
            variant="contained"
            className={classes.togglerButton}
            onClick={toggleDrawer("left", true)}>
            <DehazeIcon />
          </Button>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}>
            {list("left")}
          </Drawer>
        </React.Fragment>
      }
    </div>
  );
}
