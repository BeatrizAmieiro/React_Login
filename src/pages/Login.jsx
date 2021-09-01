import './Login.css'
import React, { useState } from 'react'

export default props => 

   <div>
      <form id="login" method="POST">
         <h2>Acessar App</h2>

         <input className="Login" type="email" name="email" placeholder="✉ E-mail" required /><br />

         <input className="Login" type="password" name="senha" placeholder="✔ Senha" required /><br/>

         <button className="Botao" type="submit">Entrar</button>
      </form><br/>

      <h4>Não tenho conta!</h4>
      <button className="Botao" type="submit">Cadastrar</button>

   </div>
