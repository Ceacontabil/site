import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.scss';
import Accordion from 'react-bootstrap/Accordion';
const image = require('../../assets/time-contabilidade.jpg');

export default function Home() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
        AOS.init();
        window.addEventListener('scroll', function(){
            const nav: any = this.document.querySelector('.navbar-1');
            nav.classList.toggle('sticky', window.scrollY > 20);
        })
    
        window.addEventListener('scroll', function(){
            const btn_top: any = this.document.querySelector('.scroll-up-btn');
            btn_top.classList.toggle('show', window.scrollY > 60);
        })
        console.log(process.env.PUBLIC_URL+'/enviado');
    }, []);

    function scrollToTop() {
        window.scroll({top: 0, left: 0, behavior: 'smooth'});
    }

    function redirectToSend(){
        setTimeout(() => {
            window.location.href = 'https://https://ceacontabil.github.io/site/enviado'
        }, 1200)
    }
    
    return(
        
        <>
            <header className='navbar-1'>
                <div className='container-1 d-flex-1 wrap-1'>
                    <div className='logo-1'>
                        <div></div>
                    </div>
                    <nav className='d-flex-1 wrap-1'>
                        <div className='d-flex-1 numbers'>
                            <i className='bi bi-whatsapp'></i>
                            <p><strong>Comercial</strong> :</p>
                            <span>(21) 96623-6818</span>
                        </div>

                        <div className='d-flex-1 numbers'>
                            <i className='bi bi-whatsapp'></i>
                            <p><strong>Comercial</strong>:</p>
                            <span>(21) 99124-1773</span>
                        </div>
                    </nav>
                </div>
            </header>

            <main>

                <section id='home' className='home d-flex-1'>
                    <div className='container-1 d-flex-1 wrap-1' data-aos='fade-down-right'>
                        <div className='intro'>
                            <h1>Tudo o que voc?? precisa em um s?? lugar.</h1>
                            <p>Muito mais do que um escrit??rio de Contabilidade, auxiliamos voc?? a economizar tempo para focar nas 
                               atividades chaves do seu neg??cio com confian??a e tranquilidade.</p>
                            <div className='social-media' >
                                <a href='https://facebook.com/ceacontabil' rel="noreferrer" target='_blank' ><i className='bi bi-facebook'></i></a>
                                <a href='https://instagram.com/ceacontabil' rel="noreferrer" target='_blank' ><i className='bi bi-instagram'></i></a>
                                <a href='https://linkedin.com/in/ceacontabil' rel="noreferrer" target='_blank' ><i className='bi bi-linkedin' ></i></a>
                            </div>
                        </div>
                                                
                        <form method='POST' action='https://formsubmit.co/ceacontabil@gmail.com' data-aos='zoom-in'>
                            <div className='form-field form-title'>
                                <h3>Ficou interessado?</h3>
                                <p>Tire suas d??vidas atrav??s deste formul??rio.</p>
                            </div>
                            
                            <input type='hidden' name='_subject' value='Novo e-mail Camilla!! [CeA - Cont??bil website]' />
                            <input type='hidden' name='_captcha' value='false' />
                            <input type='hidden' name='_next' value='/site/enviado/ '/>

                            <div className='form-field d-flex-1'>
                                <div className='icon-field'>
                                    <i className='bi bi-person-fill'></i>
                                </div>
                                <input type='text' name='name' value={name} onChange={(e: any) => setName(e.target.value)} required /> 
                                <label>Nome*</label>
                            </div>

                            <div className='form-field d-flex-1'>
                                <div className='icon-field'>
                                    <i className='bi bi-envelope-check-fill'></i>
                                </div>
                                <input type='text' name='email' value={email} onChange={(e: any) => setEmail(e.target.value)} required />
                                <label>E-mail*</label>
                            </div>

                            <div className='form-field d-flex-1'>
                                <div className='icon-field'>
                                    <i className='bi bi-telephone-fill'></i>
                                </div>
                                <input type='number' name='telefone' value={telefone} onChange={(e: any) => setTelefone(e.target.value)} required />
                                <label>Celular*</label>
                            </div>

                            <div className='form-field d-flex-1'>
                                <div className='icon-field'>
                                    <i className='bi bi-chat-right-text-fill'></i>
                                </div>
                                <textarea className='msg' rows={2} name='mensagem' value={mensagem} onChange={(e: any) => setMensagem(e.target.value)} required />
                                <label>Digite a sua mensagem aqui...*</label>
                            </div>

                            <div className='form-field d-flex-1'>
                                <button className='button' type='submit' onClick={redirectToSend}>
                                    <i className='bi bi-send-check-fill'></i>
                                    <span>Enviar</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </section>

                <section id='sobre'>

                    <div className='d-flex-1 container-1 wrap-1' data-aos='fade-down-right'>
                        <div className='co-1'>
                            <figure >
                                <img src={image} alt='Equipe da empresa' />
                            </figure>
                                
                        </div>

                        <div className='co-2' data-aos='zoom-in-up'>
                            <h2>Miss??o, Vis??o e Valores</h2>
                            <p> <strong> MISS??O - </strong> Nosso prop??sito ?? simples: colocamos em pr??tica todo nosso conhecimento adquirido em prol do
                                 sucesso e crescimento dos nossos clientes e parceiros. Temos uma miss??o diferenciada dentro do mercado,  
                                atrav??s de 3 pilares fundamentais: redu????o da burocracia, melhoria do fluxo de trabalho e relacionamento 
                                com nossos clientes.</p>
                            <p> <strong> VIS??O - </strong> Auxiliar, orientar e executar, de forma simples e pontual. </p>
                            <p> <strong> VALORES - </strong> Temos um compromisso em fazer um trabalho com transpar??ncia e profissionalismo.</p>
                        </div>
                    </div>

                </section>

            <section id='servicos'>

                <div className='container-1'>
                    <div className='title-1'>
                        <h2>Nossos Servi??os:</h2>
                    </div>

                    <div className='d-flex-1 wrap-1'>

                        <div className='col-service'>
                            <div className='box d-flex-1' data-aos="zoom-in-up" >
                                <div className='image'>
                                    <i className='bi bi-graph-up-arrow'></i>
                                </div>

                                <div className='description'>
                                    <h5>Legaliza????o e Abertura de Empresas</h5>
                                    <p>A Legaliza????o de Empresas equivale a uma sequ??ncia de processos que devem ser cumpridos para regularizar 
                                    a situa????o de um neg??cio. Esses processos de legaliza????o podem variar, dependendo do local e da atividade que 
                                    deseja abrir.</p>
                                </div>
                            </div>

                            <div className='box d-flex-1' data-aos="zoom-in-up" >
                                <div className='image'>
                                    <i className='bi bi-briefcase-fill'></i>
                                </div>

                                <div className='description'>
                                    <h5>Contabilidade de Empresas</h5>
                                    <p>A contabilidade para empresas ?? um fator primordial para controlar o patrim??nio, coletar dados para serem transformados 
                                    estrategicamente em procedimentos e a????es que direcionam a tomada de decis??o do neg??cio, al??m de ser extremamente importante 
                                    o fator de an??lise do lucro e preju??zo da empresa. </p>
                                </div>
                            </div>

                            <div className='box d-flex-1' data-aos="zoom-in-up">
                                <div className='image'>
                                    <i className='bi bi-card-checklist'></i>
                                </div>

                                <div className='description'>
                                    <h5>Consultoria e Assessoria Cont??bil</h5>
                                    <p>
                                    A Assessoria Cont??bil trata-se de uma rela????o consistente, focada no longo prazo. Sua finalidade ?? diagnosticar 
                                    problemas estruturais da companhia, junto aos gestores, fornecedores, colaboradores e clientes do neg??cio. <br />

                                    Na Consultoria s??o desenvolvidos trabalhos de orienta????es quanto ??s ??reas cont??beis da empresa, e ir?? abranger: planejamento tribut??rio; 
                                    controle e gest??o financeira e orienta????o empresarial.
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className='col-service'>
                            <div className='box d-flex-1' data-aos="zoom-in-up">
                                <div className='image'>
                                    <i className='bi bi-pc-display-horizontal'></i>
                                </div>

                                <div className='description'>
                                    <h5>Fiscal e DP</h5>
                                    <p>Reunimos os departamentos Cont??bil, Fiscal e o Departamento Pessoal para facilitar a vida dos nossos 
                                       clientes. Procuramos sempre levar o melhor servi??o, no menor prazo poss??vel para que todas as 
                                       situa????es do dia-a-dia se resolvam com mais facilidade e simplicidade.
                                    </p>
                                </div>
                            </div>

                            <div className='box d-flex-1' data-aos="zoom-in-up" >
                                <div className='image'>
                                    <i className='bi bi-currency-exchange'></i>
                                </div>

                                <div className='description'>
                                    <h5>Imposto de Renda</h5>
                                    <p>O imposto sobre a renda ou imposto sobre o rendimento ?? um tributo existente em v??rios pa??ses. N??s fazemos 
                                       declara????es para pessoas f??sicas <strong>(IRPF)</strong>, sempre buscando facilitar a vida dos nossos clientes
                                    </p>
                                </div>
                            </div>

                            <div className='box d-flex-1' data-aos="zoom-in-up" >
                                <div className='image'>
                                    <i className='bi bi-building'></i>
                                </div>

                                <div className='description'>
                                    <h5>MEI</h5>
                                    <p>Microempreendedor Individual (MEI) ?? a pessoa que trabalha por conta pr??pria e que se legaliza como 
                                    pequeno empres??rio. Pensando em ajudar as pessoas a se tornarem donos dos seus neg??cios, n??s fazemos todo 
                                    o processo para a abertura da sua empresa e al??m disso, orientamos voc?? sobre impostos, tributos ou 
                                    qualquer d??vida que possa surgir.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='d-flex-1' >
                        <a href='#home' className='button'>Vamos realizar um servi??o?</a>
                    </div>
                </div>

            </section>

                <section id='perguntas'>
                    <div className='title-1'>
                        <h2>Perguntas Frequentes</h2>
                    </div>

                    <div className='accordion-container'>

                        <Accordion>

                            <Accordion.Item eventKey='0' data-aos="fade-up">
                                <Accordion.Header>
                                    <p>Por que <strong>Legalizar</strong> o meu Neg??cio ?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>A legaliza????o de uma empresa ?? <strong>fundamental</strong>, pois assim poder?? aproveitar benef??cios como capta????o 
                                    de recursos juntos as institui????es financeiras como empr??stimo ou financiamento, al??m que regularizada 
                                    poder?? vender ou prestar servi??os para ??rg??os p??blicos atrav??s de licita????es. Para isto, voc?? precisa 
                                    de um profissional que realize os procedimentos conforme a legisla????o pertinente.</p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey='1' data-aos="fade-up">
                                <Accordion.Header>
                                    <p>O que preciso <strong>saber</strong>  antes de abrir a minha <strong>Empresa</strong> ?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>1- <strong>Tenha um Plano de Neg??cio</strong> ??? O que ?? isso? Um documento que descreve como a empresa ir?? atuar e crescer 
                                    de forma planejada. No Plano de Neg??cio deve ter: Defini????o do setor e ramo de atividade, Descri????o dos produtos 
                                    e servi??os da empresa, Defini????o do p??blico-alvo, Plano financeiro, Plano de marketing, Estudo do mercado e 
                                    an??lise da concorr??ncia, entre outros;</p>

                                    <p>2- <strong>Empresa Individual ou Sociedade</strong> ??? Essa ?? uma quest??o que deve ser analisada com muita cautela, afinal, sociedade 
                                    ?? coisa s??ria. Se por um lado, a sociedade traz a vantagem de ter mais pessoas trabalhando, outros pontos de vista e 
                                    maior aporte financeiro; por outro lado, as sociedades podem gerar conflitos e os resultados devem ser distribu??dos. 
                                    Por isso, caso decida pela sociedade, busque algu??m em quem voc?? confie e que tenha os mesmos objetivos estrat??gicos 
                                    que os seus;</p>

                                    <p>3- <strong>Contrate um Contador!</strong> ??? Ter um contador ?? imprescind??vel para o sucesso da sua empresa, afinal, esse ?? o profissional 
                                    que te auxiliar?? com toda a parte burocr??tica e tribut??ria, desde a defini????o da natureza jur??dica e regime tribut??rio at?? 
                                    a elabora????o do contrato social, registros e inscri????es nos ??rg??os competentes;</p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey='2' data-aos="fade-up">
                                <Accordion.Header>
                                    <p>Por que a minha <strong>Empresa</strong> precisa de um <strong>Contador</strong> ?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>Administrar as finan??as ?? determinante para que uma empresa permane??a no mercado e ainda atue sob as 
                                    exig??ncias da lei e da <strong>Receita Federal</strong> . Caso contr??rio, o risco de fechar ou ser punida ?? grande. <br />
                                    Por isso, o departamento cont??bil ?? capaz de garantir ?? sua empresa a precis??o e agilidade que os neg??cios 
                                    imp??em, com seguran??a e controle para o seu gerenciamento. Ele garante seguran??a de informa????es e traz subs??dios 
                                    para um bom planejamento empresarial capaz de reduzir os gastos, analisar todo o seu patrim??nio e manter as contas em dia.</p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey='3' data-aos="fade-up">
                                <Accordion.Header>
                                    <p>?? obrigat??rio o <strong>MEI</strong> ter contador ?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>O modelo <strong>MEI</strong> nada mais ?? do que um profissional aut??nomo. Dessa forma, este tem um CNPJ, ou seja, possui facilidades para a 
                                    abertura de conta banc??ria, pedido de empr??stimos e emiss??o de notas fiscais, al??m de suas obriga????es e direitos de uma pessoa 
                                    jur??dica.</p>
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>

                    </div>

                </section>

                <section id='cta-end'>
                    <div className='container-1 d-flex-1 wrap-1'>
                        <div className='cta-desc' data-aos="fade-up-right">
                            <h2>SOLICITE UMA PROPOSTA</h2>
                            <p>Nosso time de consultores analisar?? as necessidades de sua empresa e uma proposta personalizada 
                            ser?? apresentada.</p>
                        </div>
                        <div className='cta-2' data-aos="flip-right" >
                            <p>Organize a rotina da sua empresa para voc?? ter mais tempo livre para gerenciar o seu neg??cio</p>

                            <button onClick={scrollToTop} className='button'>Entrar em Contato</button>

                            <span>Nossos especialistas v??o entrar em contato com voc?? ainda hoje.</span>
                        </div>
                    </div>
                </section>

            </main>


            <footer id='footer'>
                <p><a href='https://kain-portfolio.herokuapp.com/'>Kain-Dev</a> &copy; Todos os Direitos Reservados - 2022 </p>
                <p>CNPJ 39.741.680/0001-30 ??? TERMOS DE USO</p>
            </footer>


            <div onClick={scrollToTop} className='scroll-up-btn'>
                <i className='bi bi-chevron-up'></i>
            </div>


            <div className='wpp'>
                <a href='https://wa.me/21966236818?text=Boa%20Tarde!!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20servi??os!!'><i className='bi bi-whatsapp'></i></a>
            </div>
            
        </>
    )
}
