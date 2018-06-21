import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Drawer from '@material-ui/core/Drawer'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Divider from '@material-ui/core/Divider'
import Hidden from '@material-ui/core/Hidden'
import AppTitle from './AppTitle'
import AppUser from './AppUser'
import AppDrawerNavItem from './AppDrawerNavItem'

const styles = theme => ({
  paper: {
    width: 250,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
    borderRight: 0
  }
})

// iOS is hosted on high-end devices. We can enable the backdrop transition without
// dropping frames. The performance will be good enough.
// So: <SwipeableDrawer disableBackdropTransition={false} />
const iOS = /iPad|iPhone|iPod/.test(window.navigator.userAgent)

function AppDrawer (props, context) {
  const { classes, className, disablePermanent, mobileOpen, onClose, onOpen } = props
  const pages = context.pages.filter(page => page.displayNav !== false)

  const drawer = (
    <div className={classes.nav}>
      <AppTitle onIconClick={onClose} />
      <AppUser />
      <Divider />
      <List>
        {pages.map((page, index) => (
          <AppDrawerNavItem
            key={index}
            title={page.title}
            icon={page.icon}
            href={page.pathname}
            onClick={props.onClose}
            active={page.pathname === context.activePage.pathname}
          />
        ))}
      </List>
    </div>
  )

  return (
    <div className={className}>
      <Hidden lgUp={!disablePermanent}>
        <SwipeableDrawer
          classes={{
            paper: classNames(classes.paper, 'algolia-drawer')
          }}
          disableBackdropTransition={!iOS}
          variant="temporary"
          open={mobileOpen}
          onOpen={onOpen}
          onClose={onClose}
          ModalProps={{
            keepMounted: true
          }}
        >
          {drawer}
        </SwipeableDrawer>
      </Hidden>
      {disablePermanent ? null : (
        <Hidden mdDown implementation="css">
          <Drawer
            classes={{
              paper: classes.paper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      )}
    </div>
  )
}

AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  disablePermanent: PropTypes.bool.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired
}

AppDrawer.contextTypes = {
  pages: PropTypes.array.isRequired,
  activePage: PropTypes.object.isRequired
}

export default withStyles(styles)(AppDrawer)
