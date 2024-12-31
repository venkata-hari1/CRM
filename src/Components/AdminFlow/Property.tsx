import React from 'react'
import PropertyTable from './Table/PropertyTable'
import Header from './Header'

function Property() {
  return (
    <div>
        <Header name="Properties"/>
        <PropertyTable name="Properties"/>
    </div>
  )
}

export default Property