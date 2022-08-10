import React from 'react'

const Btn = ({className = '', icon = 'play_arrow', children, ...props}) => (
    <button className={`btn--play ${className}`} {...props}>
      {children 
        ? children
        : <i class={`fa fa-${icon}`}/>
      }
    </button>
  )

export default Btn