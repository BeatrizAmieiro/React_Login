import './Cadastro.css'
import React from 'react'

export default props => 
   <div>
      <form id="login" method="POST">
         <h2>Acessar App</h2>

         <input className="Cadastro" type="text" name="nome" placeholder="♙ Nome de usuário" required /><br />

         <input className="Cadastro" type="email" name="email" placeholder="✉ E-mail" required /><br />

         <input className="Cadastro" type="password" name="senha" placeholder="✔ Senha" required /><br />
         
         <input className="Cadastro" type="password" name="senha2" placeholder="✔ Repita sua senha" required /><br />

         <button className="Cadast_Login" type="submit" value="Criar Conta">Criar Conta</button>
      </form><br />
   </div>