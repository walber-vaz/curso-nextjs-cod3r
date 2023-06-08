import React from 'react'

import styles from '../styles/SubDivisao.module.css'

export default function SubDivisao(props) {
  return (
    <div
      style={{
        backgroundColor: props.preta ? '#000000' : '#FFFFFF'
      }}
      className={styles.subdivisao}
    ></div>
  )
}
