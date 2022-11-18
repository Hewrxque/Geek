/* eslint-disable jsx-a11y/anchor-is-valid */
import IMG from '../../assets/geek.svg';
import './styles.css';

export default function Home() {
    return (
        <div className="container">
            <div className="container-Home">
                <div className="wrap-Home">
                    <form className="Home-form" style={{ height: '100%', width: '100%' }}>
                        <span
                            className="Home-form-title"
                            style={{ display: 'flex', position: 'absolute', height: '80px' }}
                        >
                            <img src={IMG} alt="Geek" />
                        </span>

                        <div
                            style={{
                                display: 'flex',
                                width: '100%',
                                height: '100%',
                                whiteSpace: 'normal',
                                flexFlow: 'row wrap',
                                flexWrap: 'wrap',   
                                alignItems: 'center'
                            }}
                        >
                            <div className="container-Home-form-btn" style={{ padding: '5px' }}>
                                <button className="Home-form-btn">Eventos</button>
                            </div>
                            <div className="container-Home-form-btn" style={{ padding: '5px' }}>
                                <button className="Home-form-btn">Feed</button>
                            </div>
                            <div className="container-Home-form-btn" style={{ padding: '5px' }}>
                                <button className="Home-form-btn">Menu</button>
                            </div>
                            <div className="container-Home-form-btn" style={{ padding: '5px' }}>
                                <button className="Home-form-btn">Perfil</button>
                            </div>
                            <div className="container-Home-form-btn" style={{ padding: '5px' }}>
                                <button className="Home-form-btn">Sair</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
