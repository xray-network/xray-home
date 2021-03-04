import React, { useState, useEffect } from 'react'
import store from "store"

export const globalContext = React.createContext()

const Provider = (props) => {
  const [isLight, setTheme] = useState(typeof store.get('settings.isLight') === 'undefined' ? true : store.get('settings.isLight'))
  const [prices, setPrices] = useState({
    btc: 0,
    ada: 0,
  })
  useEffect(() => {
    store.set('settings.isLight', isLight)
    document.querySelector('html').setAttribute('data-theme', isLight ? 'light' : 'dark')
  }, [isLight, setTheme])

  useEffect(() => {
    fetchPrices()
    // eslint-disable-next-line
  }, [])

  const fetchPrices = () => {
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,cardano&vs_currencies=USD`)
      .then(res => res.json())
      .then((result => {
        setPrices({
          btc: result.bitcoin.usd,
          ada: result.cardano.usd,
        })
      }))
  }

  return (
    <globalContext.Provider value={{
      isLight,
      prices,
      changeTheme: () => setTheme(!isLight)
    }}>
      {props.children}
    </globalContext.Provider>
  )
}

export default ({ element }) => (
  <Provider>
    {element}
  </Provider>
)