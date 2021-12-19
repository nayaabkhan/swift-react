import React from 'react'

export const NavigationContext = React.createContext(false)

export default function NavigationView(child: JSX.Element) {
  return (
    // Cannot use the hook as this is a regular function.
    <NavigationContext.Provider value={true}>
      {child}
    </NavigationContext.Provider>
  )
}
