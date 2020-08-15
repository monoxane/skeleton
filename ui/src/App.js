// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import { Provider, createClient } from 'urql'
import Index from './view/Index.jsx'
import '../../node_modules/carbon-components/scss/globals/scss/styles.scss'

const client = createClient({
  url: '/gql',
  requestPolicy: 'network-only',
  maskTypename: true
})

const App = () => {
  return (
    <Provider value={client}>
      <Index />
    </Provider>
  )
}

export default hot(App)
