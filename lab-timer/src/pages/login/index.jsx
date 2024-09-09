import { Button } from "../../components/button";
import { useState, useContext } from "react";
import { UsuarioContext } from "../../contexts/usuarios"

import './login.css'

export function LoginPage() {

    const { usuarios } = useContext(UsuarioContext)

    const [usuarioLogin, setUsuarioLogin] = useState({
        email: "",
        senha: "",
        msgErro: ""
    })


    function realizarLogin(usuarioLogin) {
        const email = usuarioLogin.email;
        const senha = usuarioLogin.senha;

        const usuario = usuarios.find(user => user.email == email && user.senha == senha);

        if (usuario) {
            localStorage.setItem("isAutenticado", true)
            window.location.href = "/" 
            setUsuarioLogin({ ...usuarioLogin, msgErro: "false" })

        } else {
            setUsuarioLogin({ ...usuarioLogin, msgErro: "true" })
        }
    }

    return (
        <>
            <div className="loginContainer">
                <div className="loginConteudo">
                    <form className="formLogin">
                        <div className="campoLogin">
                            <label htmlFor="emailLogin">Email</label>
                            <input className="inputLogin" type="email" placeholder="digite seu email"
                                onChange={(e) => setUsuarioLogin({ ...usuarioLogin, email: e.target.value })}
                            />

                        </div>

                        <div className="campoLogin">
                            <label htmlFor="senhaLogin">Senha</label>
                            <input className="inputLogin" type="password" placeholder="digite sua senha"
                                onChange={(e) => setUsuarioLogin({ ...usuarioLogin, senha: e.target.value })}
                            />
                        </div>

                        {usuarioLogin.msgErro == "true" && <div className="erroLogin">Usuário ou senha inválidos</div>}


                        <Button type='button' onClick={() => realizarLogin(usuarioLogin)}> Entrar </Button>


                    </form>
                </div>

            </div>


        </>
    )

}
