import React from 'react'
import SubDivisao from './SubDivisao'

import styles from '../styles/Linha.module.css'

export default function Linha(props) {
  return (
    <div className={styles.linha}>
      <SubDivisao preta={props.preta} />
      <SubDivisao preta={!props.preta} />
      <SubDivisao preta={props.preta} />
      <SubDivisao preta={!props.preta} />
      <SubDivisao preta={props.preta} />
      <SubDivisao preta={!props.preta} />
      <SubDivisao preta={props.preta} />
      <SubDivisao preta={!props.preta} />
    </div>
  )
}
