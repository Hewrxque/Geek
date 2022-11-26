/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IMG from '../../assets/geek.svg';
import './styles.css';

import { validate } from 'gerador-validador-cpf';
import axios from 'axios';

import {API_BASE_URL} from '../../constants';

import Toast from '../../util/toast';

export default function Register() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        nome: '',
        cpf: '',
        telefone: '',
        senha: '',
        email: ''
    });

    async function RegisterReq(data) {
        const testaCPF = validate(apenasNumeros(data.cpf));
        if (!testaCPF) {
            Toast.error('Digite um cpf válido');
            return;
        }

        const dataToSave = {
            nome:  removeNumeros(removeCaracteres(data.nome.toUpperCase())),
            cpf: apenasNumeros(data.cpf),
            telefone: apenasNumeros(data.telefone),
            senha: data.senha,
            email: data.email
        }

        await axios.post(`${API_BASE_URL}/users/register`, {
                ...dataToSave
            })
            .then(function (response) {
                if(response.status !== 200){
                    Toast.error(response.data.message)
                }
                Toast.sucess(response.data.message);
                navigate('/login', { replace: true })
            })
            .catch(function (error) {
                Toast.error(error.response.data.message);
            });
    }

    const maskCPF = (value) => {
        return value
            .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
            .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1'); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
    };

    const apenasNumeros = (texto) => {
        return texto.replace(/\D/g, '');
    };

    const mudarValorCPF = (cpfText) => {
        const cpf = apenasNumeros(cpfText);
        setData({ ...data, cpf: maskCPF(cpf) });
    };

    const maskTelefone = (texto) => {
        return texto
            .replace(/\D/g, '') //Remove tudo o que não é dígito
            .replace(/^(\d\d)(\d)/g, '($1) $2') //Coloca parênteses em volta dos dois primeiros dígitos
            .replace(/(\d{5})(\d)/, '$1-$2') //Coloca hífen entre o quarto e o quinto dígitos
            .replace(/(-\d{4})\d+?$/, '$1');
    };

    const removeCaracteres = (texto) => {
        return texto.replace(/[&/\\#,+$~%!„'":*‚^¤?<>|ª{«»§}©®™]/g, '');
    };

    const mudarValorEmail = (emailText) => {
        const email = removeCaracteres(emailText);
        setData({ ...data, email });
    };

    const removeNumeros = (texto) => {
        return texto.replace(/[0-9]/g, '');
    };

    const mudarValorNome = (texto) => {
        const nome = removeNumeros(removeCaracteres(texto.toUpperCase()));
        setData({ ...data, nome: nome.toUpperCase() });
    };

    return (
        <div className="container">
            <div className="container-register">
                <div className="wrap-register">
                    <form className="register-form" action="#">
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
                            <input
                                className="input"
                                type="text"
                                value={data.nome.toUpperCase()}
                                onChange={(e) => mudarValorNome(e.target.value)}
                            />
                        </div>

                        <span className="register-form-t">CPF</span>
                        <div className="wrap-input1">
                            <input
                                className="input"
                                type="text"
                                value={data.cpf}
                                onChange={(e) => mudarValorCPF(e.target.value)}
                            />
                        </div>

                        <span className="register-form-t">E-mail</span>
                        <div className="wrap-input1">
                            <input
                                className="input"
                                type="email"
                                value={data.email}
                                onChange={(e) => mudarValorEmail(e.target.value)}
                            />
                        </div>

                        <span className="register-form-t">Celular</span>
                        <div className="wrap-input1">
                            <input
                                className="input"
                                type="Telefone"
                                value={data.telefone}
                                onChange={(e) => setData({ ...data, telefone: maskTelefone(e.target.value) })}
                            />
                        </div>

                        <span className="register-form-t">Senha</span>
                        <div className="wrap-input1">
                            <input
                                className="input"
                                type="password"
                                value={data.senha}
                                onChange={(e) => setData({ ...data, senha: e.target.value })}
                            />
                        </div>
                        <div className="container-register-form-btn">
                            <button onClick={() => RegisterReq()} className="register-form-btn">
                                Criar Conta
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
