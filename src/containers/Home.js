import React from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import { Helmet } from 'react-helmet'
import { withStyles } from '@material-ui/core/styles'
import withRoot from '../components/withRoot'
import HomePage from '../components/pages/HomePage'

const styles = {
  root: {
    flex: '1 0 100%'
  }
}

class Home extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Helmet>
          <title>{`React Material Boilerplate`}</title>
        </Helmet>
        <HomePage />
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

Home.contextTypes = {
  activePage: PropTypes.object.isRequired
}

export default compose(
  withRoot,
  withStyles(styles)
)(Home)
