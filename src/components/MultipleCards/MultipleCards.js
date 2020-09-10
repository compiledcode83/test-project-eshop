import React from "react";
import {
  Paper,
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    width: "25%",
    margin: "0 4px",
    backgroundColor: "#e6e6e6",
  },
  media: {
    height: 150,
    cursor: "auto",
  },
  root: {
    display: "flex",
    padding: "15px",
  },
});

export default function MultipleCards(props) {
  const classes = useStyles();

  return (
    <>
      <h4>{props.Txt}</h4>
      <Paper elevation={5} square className={classes.root}>
        {props.Imgs.map((info, idx) => (
          <Card className={classes.card} key={idx}>
            <CardActionArea>
              <CardMedia className={classes.media} image={info} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.content[idx].Name} / {props.content[idx].Brand}
                </Typography>
                <Typography gutterBottom variant="h6" component="h4">
                  Price: {props.content[idx].Price} EGP
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link
                to={`/categories/${props.content[idx].Category}/item/${props.content[idx].ItemId}`}>
                Learn More
              </Link>
            </CardActions>
          </Card>
        ))}
      </Paper>
    </>
  );
}
