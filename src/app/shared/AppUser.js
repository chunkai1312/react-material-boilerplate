import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  userInfo: {
    [theme.breakpoints.down('sm')]: {
      padding: `15px ${theme.spacing.unit * 2}px`
    },
    [theme.breakpoints.up('sm')]: {
      padding: `15px ${theme.spacing.unit * 3}px`
    },
    height: 135,
    backgroundColor: theme.palette.primary[50],
    backgroundImage: `url(${require('../../assets/img/bg.png')})`,
    backgroundSize: 'cover'
  },
  info: {
    position: 'relative',
    top: 15
  },
  avatar: {
    width: 48,
    height: 48
  },
  userSettingsContainer: {
    position: 'absolute',
    right: -15,
    bottom: -15
  }
})

function AppUser (props) {
  const { classes, user } = props
  return (
    <div className={classes.userInfo}>
      {user.photo
        ? <Avatar className={classes.avatar} alt="Photo" src={user.photo} />
        : <Avatar className={classes.avatar} src={user.photo}>{user.name.substr(0, 1)}</Avatar>}
      <div className={classes.info}>
        <Typography variant="body2">{user.name}</Typography>
        <Typography variant="body1">{user.email}</Typography>
      </div>
    </div>
  )
}

AppUser.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired
}

AppUser.defaultProps = {
  user: { name: 'User', email: 'user@example.com' }
}

export default withStyles(styles)(AppUser)
