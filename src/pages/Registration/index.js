/* eslint-disable jsx-a11y/anchor-is-valid */
import IMG from '../../assets/geek.svg';
import './styles.css';

import { Link } from 'react-router-dom';

export default function Registration() {
    return (
        <div className="container">
        <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">
                        <span className="login-form-title">
                            <img src={IMG} alt="Geek" />
                        </span>
                        <span className="login-form-t">Nome completo</span>
                        <div className="wrap-input">
                            <input className="input" type="Nome completo" />

                            <span className="focus-input" data-placeholder="Nome completo"></span>
                        </div>

                        <span className="login-form-t">CPF</span>
                        <div className="wrap-input">
                            <input className="input" type="CPF" />

                            <span className="focus-input" data-placeholder="CPF"></span>
                        </div>

                        <span className="login-form-t">E-mail</span>
                        <div className="wrap-input">
                            <input className="input" type="email" />

                            <span className="focus-input" data-placeholder="Email"></span>
                        </div>

                        <span className="login-form-t">Telefone</span>
                        <div className="wrap-input">
                            <input className="input" type="Telefone" />

                            <span className="focus-input" data-placeholder="Telefone"></span>
                        </div>

                        <span className="login-form-t">Senha</span>
                        <div className="wrap-input">
                            <input className="input" type="password" />
                            <span className="focus-input" data-placeholder="Password"></span>
                        </div>
                        <div className="container-login-form-btn">
                            <button className="CC-form-btn">Criar Conta</button>
                        </div>
                    </form>
                </div>
                </div>
                </div>
    );
}
