import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Divider from '@material-ui/core/Divider';
import SomaTheme from './../theme/index.js'

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import DraftsIcon from '@material-ui/icons/Drafts';
import PeopleIcon from '@material-ui/icons/People';
import DashboardIcon from '@material-ui/icons/Dashboard';

import { Link } from 'react-router-dom'

const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {},
  icon: {},
});

class LeftNav extends React.Component {
  render() {
    const {  mainListItems, secondaryListItems, classes } = this.props;
    return (
        <Drawer
            variant="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.props.open 
              	&& classes.drawerPaperClose),
            }}
            open={this.props.open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={this.props.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <MenuList>
		        <MenuItem component={Link} to={'/'} className={classes.menuItem}>
		          <ListItemIcon className={classes.icon}>
		            <DashboardIcon />
		          </ListItemIcon>
		          <ListItemText classes={{ primary: classes.primary }} inset primary="Dashboard" />
		        </MenuItem>
		        <MenuItem className={classes.menuItem}  component={Link} to={'/queries'}>
		          <ListItemIcon className={classes.icon}>
		            <AddToQueueIcon />
		          </ListItemIcon>
		          <ListItemText  classes={{ primary: classes.primary }} inset primary="Queries" />
		        </MenuItem>
		        <MenuItem  className={classes.menuItem}  component={Link} to={'/users'}>
		          <ListItemIcon className={classes.icon}>
		            <PeopleIcon />
		          </ListItemIcon>
		          <ListItemText classes={{ primary: classes.primary }} inset primary="Usuários" />
		        </MenuItem>
		      </MenuList>
        </Drawer>
    );
  }
}

LeftNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(SomaTheme)(LeftNav);