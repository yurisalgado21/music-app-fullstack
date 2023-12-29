// import React from 'react'
import { Link } from 'react-router-dom'

export default function Acesso() {
  return (
    <div>
        <h1>Music App</h1>
        <br />
        <label>
            Crie sua conta:
            <br />
            <Link to="/user">Inscreva-se</Link>
        </label>
        <br />
        <label>
            Já possui uma conta ?
            <br />
            <Link to="/login">Faça seu login</Link>
        </label>
    </div>
  )
}
