import React from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import { Helmet } from 'react-helmet'
import { withStyles } from '@material-ui/core/styles'
import withRoot from '../components/withRoot'
import AboutPage from '../components/pages/AboutPage'

const styles = {
  root: {
    flex: '1 0 100%'
  }
}

class About extends React.Component {
  render () {
    const { classes } = this.props
    const { activePage } = this.context
    return (
      <div className={classes.root}>
        <Helmet>
          <title>{`${activePage.title} | React Material Boilerplate`}</title>
        </Helmet>
        <AboutPage />
      </div>
    )
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
}

About.contextTypes = {
  activePage: PropTypes.object.isRequired
}

export default compose(
  withRoot,
  withStyles(styles)
)(About)
