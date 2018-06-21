import React from 'react'
import PropTypes from 'prop-types'
import find from 'lodash/find'
import AppWrapper from './layout/AppWrapper'
import InfoIcon from '@material-ui/icons/Info'

const pages = [{
  pathname: '/',
  displayNav: false,
  title: false
}, {
  pathname: '/about',
  title: 'About',
  icon: InfoIcon
}]

function findActivePage (currentPages, match) {
  const activePage = find(currentPages, page => match.path === page.pathname)
  return activePage
}

function withRoot (Component) {
  class WithRoot extends React.Component {
    getChildContext () {
      const { match } = this.props
      return {
        pages,
        activePage: findActivePage(pages, match)
      }
    }

    render () {
      return (
        <AppWrapper>
          <Component {...this.props} />
        </AppWrapper>
      )
    }
  }

  WithRoot.propTypes = {
    match: PropTypes.object.isRequired
  }

  WithRoot.childContextTypes = {
    pages: PropTypes.array,
    activePage: PropTypes.object
  }

  return WithRoot
}

export default withRoot
