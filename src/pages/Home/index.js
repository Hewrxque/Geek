/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from 'react-router-dom';
import IMG from '../../assets/geek.svg';
import './styles.css';

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="container-Home">
                <span
                    className="Home-form-title"
                    style={{
                        display: 'flex',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        height: '80px',
                        margin: '15px'
                    }}
                >
                    <img src={IMG} alt="Geek" onClick={() => navigate('/home')} />
                </span>
                <form className="Home-form" style={{ height: '100%', width: '100%', padding: '50px' }}>
                    <div
                        style={{
                            display: 'flex',
                            position: 'relative',
                            width: '100%',
                            justifyContent: 'center',
                            flexFlow: 'row wrap',
                            alignItems: 'center'
                        }}
                    >
                        <button className="Home-form-btn" onClick={() => navigate('/subscription')}>
                            Inscrição
                        </button>
                        <button className="Home-form-btn">Feed</button>
                        <button className="Home-form-btn">Parceiros</button>
                        <button className="Home-form-btn" onClick={() => navigate('/', { replace: true })}>
                            Sair
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
