'use client'
import {Suspense} from 'react'

const Suspense = ({children}) => {
  return (
    <Suspense>
        {children}
    </Suspense>
  )
}

export default Suspense