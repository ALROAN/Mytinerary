import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import compose from "recompose/compose";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import { fetchItineraries } from "../redux/actions/itinerariesAction";
import Activity from "../components/Activity";

//Material-ui
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  gridCard: {
    maxWidth: "90vw",
    width: "90vw",
    paddingBottom: "30px",
    // backgroundImage: linear - gradient(cornflowerblue, indigo)
  },
  card: {
    maxWidth: "90vw",
    backgroundColor: "#DDDDDD"
  },
  media: {
    maxHeight: "30vh",
    paddingTop: '20.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Itineraries = ({ fetchItineraries, itineraries, match }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  let history = useHistory();


  useEffect(() => {
    fetchItineraries(match.params.cityId);
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
    >
      <button className="backButton" onClick={() => history.goBack()}>Back</button>
      {
        itineraries.map(itinerary => {
          return (
            <Grid item key={itinerary._id} className={classes.gridCard}>
              <Card className={classes.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={itinerary.title}
                  subheader="September 14, 2016"
                />
                <CardMedia
                  className={classes.media}
                  image={itinerary.profilePic}
                  title="Contemplative Reptile"
                />
                <CardContent>{itinerary.hashtag.map((tag, index) => {
                  return (<a key={index} href="###">{tag}   </a>)
                }
                )}</CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Activity content={itinerary._id}></Activity>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          )
        })
      }
    </Grid>
  );
}


Itineraries.propTypes = {
  fetchItineraries: PropTypes.func.isRequired,
  itineraries: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  itineraries: state.itineraries.payload
});

export default compose(
  withStyles(useStyles, { withTheme: true }),
  connect(mapStateToProps, { fetchItineraries })
)(Itineraries);
