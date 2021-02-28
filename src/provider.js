import React, { useState, useEffect } from 'react'
import store from "store"

export const globalContext = React.createContext()

const Provider = (props) => {
  const [isLight, setTheme] = useState(store.get('settings.isLight'))
  useEffect(() => {
    store.set('settings.isLight', isLight)
    document.querySelector('html').setAttribute('data-theme', isLight ? 'light' : 'dark')
  }, [isLight, setTheme])

  return (
    <globalContext.Provider value={{
      isLight,
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