import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SomaTheme from './../theme/index.js'

class UsersContainer extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      	<React.Fragment>
            <div className={classes.appBarSpacer} />
            <Typography variant="display1" gutterBottom>
              Queries
            </Typography>
            
      	</React.Fragment>
    );
  }
}

UsersContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(SomaTheme)(UsersContainer);