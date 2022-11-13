/* eslint-disable jsx-a11y/anchor-is-valid */
import IMG from '../../assets/geek.svg';
import './styles.css';

export default function Home() {
    return (
        <div className="container">
            <div className="container-Home">
                <div className="wrap-Home">
                    <form className="Home-form">
                        <span className="Home-form-title">
                            <img src={IMG} alt="Geek" />
                        </span>

                        <div className="container-Home-form-btn">
                            <button className="Home-form-btn">Eventos</button>
                        </div>
                        <div className="container-Home-form-btn">
                            <button className="Home-form-btn">Feed</button>
                        </div>
                        <div className="container-Home-form-btn">
                            <button className="Home-form-btn">Menu</button>
                        </div>
                        <div className="container-Home-form-btn">
                            <button className="Home-form-btn">Perfil</button>
                        </div>
                        <div className="container-Home-form-btn">
                            <button className="Home-form-btn">Sair</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
