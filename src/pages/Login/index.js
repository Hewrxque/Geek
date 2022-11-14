/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import IMG from '../../assets/geek.svg';
import './styles.css';

export default function Login() {
    return (
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">
                        <button style={{ backgroundColor: 'transparent', border: 'none' }}>
                            <Link to={`/`} style={{ border: 'none', color: 'white', textDecoration: 'none' }}>
                                ←
                            </Link>
                        </button>
                        <span className="login-form-title">
                            <img src={IMG} alt="Geek" />
                        </span>
                        <span className="login-form-t">E-mail</span>
                        <div className="wrap-input2">
                            <input className="input" type="email" />

                            <span className="focus-input" data-placeholder="Email"></span>
                        </div>
                        <span className="login-form-t">Senha</span>
                        <div className="wrap-input2">
                            <input className="input" type="password" />
                            <span className="focus-input" data-placeholder="Password"></span>
                        </div>
                        <div className="container-login-form-btn">
                            <button className="login-form-btn">Login</button>
                        </div>
                        <div className="text-center"></div>
                        <span className="txt1">Não possui cadastro?{'  '}</span>
                        <a style={{ color: 'white' }} href="/register">
                            Criar cadastro
                        </a>
                    </form>
                </div>
            </div>
        </div>
    );
}
