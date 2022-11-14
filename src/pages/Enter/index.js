/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import IMG from '../../assets/geek.svg';
import './styles.css';

export default function Enter() {
    return (
        <div className="container">
            <div className="container-Enter">
                <div className="wrap-Enter">
                    <form className="Enter-form">
                        <span className="Enter-form-title">
                            <img src={IMG} alt="Geek" />
                        </span>

                        <div className="container-Enter-form-btn">
                            
                            <button className="Enter-form-btn">Login</button>
                        </div>
                        <div className="container-Enter-form-btn">
                            <button className="Enter-form-btn">Criar Conta</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
