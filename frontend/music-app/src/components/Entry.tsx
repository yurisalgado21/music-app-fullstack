// import React from 'react'
import { Link } from 'react-router-dom'
import imageApp from '../assets/Black White Minimalist Logo.png'

export default function Entry() {
  return (
    <div>
        <img src={imageApp} />
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
