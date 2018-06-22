import React from 'react'
import PropTypes from 'prop-types'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../../styles/theme'
import AppFrame from './AppFrame'

function AppWrapper (props) {
  const { children } = props
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <AppFrame>{children}</AppFrame>
    </MuiThemeProvider>
  )
}

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppWrapper
