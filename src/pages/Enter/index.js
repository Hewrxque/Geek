/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import IMG from '../../assets/geek.svg';
import './styles.css';

export default function Enter() {
    return (
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">
                        <span className="login-form-title">
                            <img src={IMG} alt="Geek" />
                        </span>

                        <div className="container-login-form-btn">
                            <button className="CC-form-btn">
                                <Link to={`/login`} style={{ border: 'none', color: 'white', textDecoration: 'none' }}>
                                    Login
                                </Link>
                            </button>
                        </div>
                        <div className="container-login-form-btn">
                            <button className="CC-form-btn">
                                <Link
                                    to={`/register`}
                                    style={{ border: 'none', color: 'white', textDecoration: 'none' }}
                                >
                                    Criar Conta
                                </Link>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
