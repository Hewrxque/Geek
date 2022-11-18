/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from 'react-router-dom';
import IMG from '../../assets/geek.svg';
import './styles.css';

export default function Register() {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="container-register">
                <div className="wrap-register">
                    <form className="register-form">
                        <button
                            onClick={() => navigate('/', { replace: true })}
                            style={{
                                backgroundColor: 'transparent',
                                border: 'none',
                                color: 'white',
                                textDecoration: 'none'
                            }}
                        >
                            ←
                        </button>
                        <span className="register-form-title">
                            <img src={IMG} alt="Geek" />
                        </span>
                        <span className="register-form-t">Nome completo</span>
                        <div className="wrap-input1">
                            <input className="input" type="Nome completo" />

                            <span className="focus-input" data-placeholder="Nome completo"></span>
                        </div>

                        <span className="register-form-t">CPF</span>
                        <div className="wrap-input1">
                            <input className="input" type="CPF" />

                            <span className="focus-input" data-placeholder="CPF"></span>
                        </div>

                        <span className="register-form-t">E-mail</span>
                        <div className="wrap-input1">
                            <input className="input" type="email" />

                            <span className="focus-input" data-placeholder="Email"></span>
                        </div>

                        <span className="register-form-t">Telefone</span>
                        <div className="wrap-input1">
                            <input className="input" type="Telefone" />

                            <span className="focus-input" data-placeholder="Telefone"></span>
                        </div>

                        <span className="register-form-t">Senha</span>
                        <div className="wrap-input1">
                            <input className="input" type="password" />
                            <span className="focus-input" data-placeholder="Password"></span>
                        </div>
                        <span className="register-form-t">Perfil</span>
                        <div className="wrap-input1">
                            <input className="input" type="Perfil" />

                            <span className="focus-input" data-placeholder="Perfil"></span>
                        </div>
                        <div className="container-register-form-btn">
                            <button onClick={() => navigate('/home', { replace: true })} className="register-form-btn">
                                Criar Conta
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
