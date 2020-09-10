import React from "react";
import {
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "40px 20px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  row: {
    backgroundColor: "#d2d8ea",
  },
}));

export default function CollapsibleList(props) {
  const classes = useStyles();

  return (
    <section>
      <div className={classes.root}>
        {props.rows.map((row, idx) => (
          <Accordion className={classes.row} id={row.Title} key={idx}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <Typography className={classes.heading}>{row.Title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{row.Description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
