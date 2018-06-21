import React from 'react'
// import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppContent from '../../layout/AppContent'

const styles = theme => ({
  // TODO
})

function AboutPage () {
  return (
    <AppContent>About Page</AppContent>
  )
}

AboutPage.propTypes = {
  // classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AboutPage)
