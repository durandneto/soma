import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SimpleLineChart from './SimpleLineChart';
import QueryTable from './QueryTable';
import SomaTheme from './../theme/index.js'

class Dashboard extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      	<React.Fragment>
            <div className={classes.appBarSpacer} />
            <Typography variant="display1" gutterBottom>
              Queries criadas X Queries executadas
            </Typography>
            <Typography component="div" className={classes.chartContainer}>
              <SimpleLineChart />
            </Typography>
            <QueryTable />
      	</React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(SomaTheme)(Dashboard);