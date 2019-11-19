import React from "react";
import { connect } from "react-redux";
import { fetchItineraries } from "../redux/actions/itinerariesAction";
import compose from "recompose/compose";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Activity from "../components/Activity";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: "60vw"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

class Itineraries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchItineraries(this.props.match.params.cityId);
  }
  render() {
    const { classes } = this.props;

    const itineraries = this.props.itineraries.payload;

    return (
      <div className={classes.root}>
        {itineraries.map(itinerary => (
          <ExpansionPanel key={itinerary._id}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                {itinerary.title}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <Activity content={itinerary._id}></Activity>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </div>
    );
  }
}

Itineraries.propTypes = {
  fetchItineraries: PropTypes.func.isRequired,
  itineraries: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  itineraries: state.itineraries
});

export default compose(
  withStyles(useStyles, { withTheme: true }),
  connect(mapStateToProps, { fetchItineraries })
)(Itineraries);
