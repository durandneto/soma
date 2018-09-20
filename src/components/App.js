import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import { mainListItems, secondaryListItems } from './../container/listItems';
import SimpleLineChart from './../container/SimpleLineChart';
import SomaTheme from './../theme/index.js'
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';

import css from '../styles/App.css';

import LeftNav from './LeftNav.js';
import DashboardRoute from './../container';
import UsersRoute from './../container/Users';
import QueriesRoute from './../container/Queries';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


class App extends React.Component {
  state = {
    open: true,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  
  render() {
    const { classes } = this.props;

    return (
      <Router>
      <div className='root'>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar
            position="absolute"
            className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
          >
            <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  this.state.open && classes.menuButtonHidden,
                )}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap className={classes.title}>
                Dashboard Soma
              </Typography>
              <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <Input
                placeholder="Search…"
                disableUnderline
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
              <IconButton color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <PauseCircleOutlineIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          
          <LeftNav
            mainListItems={mainListItems}
            secondaryListItems={secondaryListItems} 
            open={this.state.open}
            handleDrawerClose={this.handleDrawerClose.bind(this)} />

          <main className={classes.content}>
            
              <Switch>
              <Route exact path="/" component={DashboardRoute} />
              <Route path="/users" component={UsersRoute} />
              <Route path="/queries" component={QueriesRoute} />
            </Switch>
          </main>
        </div>
      </div>
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(SomaTheme)(App);