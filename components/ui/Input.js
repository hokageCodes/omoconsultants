import React from 'react'

export default function Input(props) {
  return (
    <input
      className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
      {...props}
    />
  )
}
