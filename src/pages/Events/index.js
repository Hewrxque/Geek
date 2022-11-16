/* eslint-disable jsx-a11y/anchor-is-valid */
import IMG from '../../assets/geek.svg';
import './styles.css';

export default function Events() {
    return (
        <div className="container">
            <div className="container-Events">
             
                    <form className="Events-form">
                        <span className="Events-form-title">
                            <img src={IMG} alt="Geek" />
                        </span>
                      
                        <div className="Events-form-t">
                           Eventos
                           </div>   
                       
                        <div className="container-Events-form-btn">
                            <button className="Events-form-btn"><form className="Events-form">
                        <span className="Events-form-title">
                            <img src={IMG} alt="Geek" />
                        </span>Visitante
                       
                        </form></button>
                        </div>
                      
                    </form>
                </div>
            </div>
    
    );
}
