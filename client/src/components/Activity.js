import React from "react";
import { connect } from "react-redux";
import { fetchActivities } from "../redux/actions/activitiesActions";
import PropTypes from "prop-types";

class Activity extends React.Component {
  state = {};

  componentDidMount = () => {
    this.props.fetchActivities(this.props.content);
    console.log(this.props.content);
  };

  render() {
    const activities = this.props.activities.payload;

    return (
      <div>
        {activities.map(activity => {
          return (
            <div key={activity._id}>
              <img src={activity.image} alt="Cal Boter" />
              <div> {activity.title} </div>
            </div>
          );
        })}
      </div>
    );
  }
}

Activity.propTypes = {
  fetchActivities: PropTypes.func.isRequired,
  activities: PropTypes.object.isRequired
};

const mapStateProps = state => ({
  activities: state.activities
});

export default connect(mapStateProps, { fetchActivities })(Activity);
