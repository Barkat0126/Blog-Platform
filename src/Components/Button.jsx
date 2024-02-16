import React, { Children } from 'react'

function Button({
    Children,
    type = 'button',
    bgColor = 'bg-blue-600',
    className = '',
    ...props
}) {
  return (
    <button className={`px-4 py-3 mt-2 rounded-lg ${bgColor} ${type} ${className}`} {...props}> submit
        {Children}
    </button>
  )
}

export default Button
