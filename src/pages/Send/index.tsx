import { useEffect } from "react";
import { Link } from "react-router-dom";
import './index.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const img = require('../../assets/logo-no-bg.png');

export default function Send() {

    useEffect(() => {
        AOS.init();
    }, []);



    return(
        <>
            <div className='container send-page d-flex justify-content-center align-items-center '>
                <div className="row wrap-1" >
                    <div className="col my-4 d-flex justify-content-center"
                        data-aos="fade-right" 
                        data-aos-offset="300" 
                        data-aos-easing="ease-in-sine">

                            <img src={img} className='img-fluid' alt="" />
                    </div>

                    <div className="col m-auto d-flex flex-column"
                        data-aos="fade-left">

                            <div className="thank">
                                <h2>Obrigado!</h2>
                                <p>Muito obrigado pelo contato, nossa equipe retornará o mais rápido possível.</p>
                            </div>

                            <div className="thank justify-content-start d-flex">
                                <Link to="/">
                                    <button className="button"> <i className="bi bi-box-arrow-in-left"></i> Voltar para a página inicial </button>
                                </Link>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}