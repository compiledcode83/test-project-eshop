import React from "react";
import "./MultipleCards.css";
import {
  Paper,
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: "0 4px",
    backgroundColor: "#e6e6e6",
  },
  media: {
    height: 140,
  },
  root: {
    display: "flex",
    padding: "15px",
    minWidth: "fit-content",
  },
});

export default function MultipleCards(props) {
  const classes = useStyles();

  return (
    <>
      <h4>Recommended</h4>
      <Paper elevation={5} square className={classes.root}>
        {props.contents.map((info, idx) => (
          <Card className={classes.card} key={idx}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={info}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Paper>
    </>
  );
}
