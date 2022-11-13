/* eslint-disable jsx-a11y/anchor-is-valid */
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
                            <button className="CC-form-btn">Login</button>
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
