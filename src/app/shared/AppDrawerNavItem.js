import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const styles = theme => ({
  item: theme.mixins.gutters({
    borderRadius: 0,
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shortest
    }),
    '&:hover': {
      textDecoration: 'none'
    }
  }),
  activeItem: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium
  },
  activeIcon: {
    color: theme.palette.primary.main
  }
})

function AppDrawerNavItem (props) {
  const { classes, href, title, active, onClick } = props
  return (
    <ListItem
      button
      disableRipple
      component={Link}
      to={href}
      href={href}
      className={classNames(classes.item, { [classes.activeItem]: active })}
      onClick={onClick}
    >
      <ListItemIcon className={classNames({ [classes.activeIcon]: active })}>
        <props.icon />
      </ListItemIcon>
      <ListItemText disableTypography primary={title} />
    </ListItem>
  )
}

AppDrawerNavItem.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.oneOfType([ PropTypes.string, PropTypes.bool ]),
  href: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func
}

AppDrawerNavItem.defaultProps = {
  active: false
}

export default withStyles(styles)(AppDrawerNavItem)
