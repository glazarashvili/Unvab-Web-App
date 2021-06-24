import React from 'react';
import CardItem from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles({
  root: {
    width: 345,
    margin: '0px 20px',
    boxShadow: 'none',
  },
  media: {
    height: 220,
    opacity: 1,

    '&:hover': {
      transition: '0.5s ease-in',
      opacity: 0.8
   },
  },
  textContent: {
    padding: '20px',
    height: 'fit-content',
  },

  h2: {
    fontSize: 21,
    fontWieght: 'bold',
    fontFamily: 'Playfair Display,serif',
    color: '#171717',
    fontWeight: 700
  },

  paragraph: {
    fontSize: 14,
    fontFamily: 'Work Sans',
    color: '#171717',
    padding: 5
  }
});

const Card = ({ title, date, description, image }) => {

  const classes = useStyles()

  return (
    <CardItem className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Nature Pic"
        />
        <CardContent className={classes.textContent}>
          <Typography className={classes.h2} gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography className={classes.paragraph} variant="body2" color="textSecondary" component="p">
            {date}
          </Typography>
          <Typography  className={classes.paragraph} variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardItem>
  );
}

export default Card;