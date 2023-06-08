import React from 'react'

export default function Estilo(props) {
  return (
    <di>
      <h1 style={{
        color: props.numero >= 0 ? '#2D2' : '#D22',
      }}>
        Estilo
      </h1>
    </di>
  )
}
