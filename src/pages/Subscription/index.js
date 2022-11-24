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
            <span
                    className="Home-form-title"
                    style={{
                        display: 'flex',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        height: '80px',
                        margin: "15px"
                    }}
                >
                    <img src={IMG} alt="Geek" onClick={() => navigate('/home')} />
                    <div className="Subscription-form-t">
                        <div style={{ display: 'flex', marginLeft: '100px' }}>
                            <button
                                onClick={() => navigate('/home')}
                                style={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    color: 'white',
                                    textDecoration: 'none'
                                }}
                            >
                                ←
                            </button>
                            <div style={{ marginLeft: '1rem' }}></div>
                            <span className="txt1">Inscrição</span>
                        </div>
                    </div>
                </span>
               
                <form className="Subscription-form" style={{ height: '100%', width: '100%' }}>
                    

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
    );
}
