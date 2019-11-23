import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchActivities } from "../redux/actions/activitiesActions";
import PropTypes from "prop-types";

//Material-ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


const Activity = ({ content, activities, fetchActivities }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchActivities(content);
  }, []);


  return (
    <div>
      {activities.map(activity => {
        return (
          <Card className={classes.card} key={activity._id} >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={activity.image}
                title={activity.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {activity.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
}


Activity.propTypes = {
  fetchActivities: PropTypes.func.isRequired,
  activities: PropTypes.array.isRequired
};

const mapStateProps = state => ({
  activities: state.activities.payload
});

export default connect(mapStateProps, { fetchActivities })(Activity);
