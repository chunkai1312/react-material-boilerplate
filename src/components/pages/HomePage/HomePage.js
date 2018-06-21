import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  page: {
    minHeight: '100vh',
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary[500],
    color: theme.palette.getContrastText(theme.palette.primary[500])
  },
  content: {
    paddingTop: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 8,
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing.unit * 16,
      paddingBottom: theme.spacing.unit * 16
    }
  },
  text: {
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    margin: '20px 0',
    width: '100%',
    height: '40vw',
    maxHeight: 230
  }
})

function HomePage (props) {
  const { classes } = props
  return (
    <div className={classes.page}>
      <div className={classes.content}>
        <div className={classes.logoContainer}>
          <img className={classes.logo} src={require('../../../assets/img/logo.svg')} alt="Logo" />
        </div>
        <div className={classes.text}>
          <Typography variant="display2" component="h1" color="inherit" gutterBottom>
            {'React Material Boilerplate'}
          </Typography>
          <Typography variant="headline" component="h2" color="inherit" className={classes.headline}>
            {'A bolierplate for building React/Redux applications with Material-UI'}
          </Typography>
        </div>
      </div>
    </div>
  )
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(HomePage)
