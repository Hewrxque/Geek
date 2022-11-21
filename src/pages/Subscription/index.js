/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from 'react-router-dom';
import IMG from '../../assets/geek.svg';
import QR from '../../assets/Visitante.png';
import './styles.css';

export default function Subscription() {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="container-Subscription">
                <div className="wrap-Subscription">
                    <form className="Subscription-form" style={{ height: '100%', width: '100%' }}>
                        <span
                            className="Subscription-form-title"
                            style={{ display: 'flex', position: 'absolute', height: '80px' }}
                        >
                            <img src={IMG} alt="Geek" />
                        </span>

                        <div className="Subscription-form-t">
                            <span className="txt1">Inscrição</span>
                        </div>

                        <form className="Enter-form">
                            <span className="Enter-form-title">
                                <img src={QR} alt="Visitante" />
                            </span>

                            <div className="Subscription-form-t2">
                                <span className="txt1">Visitante</span>
                            </div>
                            <div className="Subscription-form-t2">
                                <span className="txt1"> n° ########</span>
                            </div>

                            <div
                                onClick={() => navigate('/', { replace: true })}
                                className="container-Subscription-form-btn"
                                style={{ padding: '5px' }}
                            ></div>
                        </form>
                    </form>
                </div>
            </div>
        </div>
    );
}
