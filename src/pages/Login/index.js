/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IMG from '../../assets/geek.svg';
import Toast from '../../util/toast';
import './styles.css';

export default function Login() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        email: '',
        senha: ''
    });

    async function LoginReq() {
        
        if (data.email === '') {
            Toast.error('É necessário digitar um email');
            return;
        }

        if (data.senha === '') {
            Toast.error('É necessário digitar uma senha');
            return;
        }

        if (data.senha.length < 8 || data.senha.length > 18) {
            Toast.error('Use uma senha com pelo menos 8 caracteres :D');
            return;
        }

        const dataToLogin = {
            email: data.email,
            senha: data.senha
        };

        await axios
            .post(`http://3.215.218.8/api/v1/auth/login`, {
                ...dataToLogin
            })
            .then(function (response) {
                if (response.status !== 200) {
                    Toast.error(response.data.message);
                }
                Toast.sucess(`Bem vindo, ${response.data.data.nome ?? 'é muito bom te ver aqui'}!`);
                navigate('/home');
            })
            .catch(function (error) {
                Toast.error(error.response.data.message);
            });
    }
    const removeCaracteres = (texto) => {
        return texto.replace(/[&/\\#,+$~%!„'":*‚^¤?<>|ª{«»§}©®™]/g, '');
    };

    const mudarValorEmail = (emailText) => {
        const email = removeCaracteres(emailText);
        setData({ ...data, email });
    };

    return (
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <div className="login-form">
                        <form className="login-form" action="#">
                            <button
                                onClick={() => navigate('/')}
                                style={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    color: 'white',
                                    textDecoration: 'none'
                                }}
                            >
                                ←
                            </button>
                            <span className="login-form-title">
                                <img src={IMG} alt="Geek" />
                            </span>
                            <span className="login-form-t">E-mail</span>
                            <div className="wrap-input1">
                                <input
                                    className="input"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => mudarValorEmail(e.target.value)}
                                />
                            </div>
                            <span className="login-form-t">Senha</span>
                            <div className="wrap-input1">
                                <input
                                    className="input"
                                    type="password"
                                    value={data.senha}
                                    onChange={(e) => setData({ ...data, senha: e.target.value })}
                                />
                            </div>
                        </form>
                        <div className="container-login-form-btn">
                            <button onClick={() => LoginReq()} className="login-form-btn">
                                Login
                            </button>
                        </div>
                        <div className="text-center"></div>
                        <span className="txt1">Não possui cadastro?{'  '}</span>
                        <a style={{ color: 'white' }} onClick={() => navigate('/register', { replace: true })}>
                            Criar cadastro
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
