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

    const handleSubmit = (e: any) => {
        console.log(name, email, telefone, mensagem);
    };

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
    }, []);

    function scrollToTop() {
        window.scroll({top: 0, left: 0, behavior: 'smooth'});
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
                            <h1 >Gestão Contábil para a sua Empresa.</h1>
                            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            In vel nihil commodi reprehenderit consequatur perspiciatis?</p>
                            <div className='social-media' >
                                <a href='https://facebook.com/ceacontabil' target='_blank' ><i className='bi bi-facebook'></i></a>
                                <a href='https://instagram.com/ceacontabil' target='_blank' ><i className='bi bi-instagram'></i></a>
                                <a href='#' target='_blank' ><i className='bi bi-linkedin' ></i></a>
                            </div>
                        </div>
                                                
                        <form method='POST' action='https://formsubmit.co/ceacontabill@gmail.com' onSubmit={handleSubmit} data-aos='fade-left'>
                            <div className='form-field form-title'>
                                <h3>Ficou interessado?</h3>
                                <p>Tire suas dúvidas através deste formulário.</p>
                            </div>

                            <input type='hidden' name='_next' value='http://localhost:3000/send'  />
                            <input type='hidden' name='_subject' value='Novo e-mail Camilla!! [CeA - Contábil website]' />
                            <input type='hidden' name='_captcha' value='false' />

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
                                <button className='button' type='submit'>
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
                            <h2>Sobre o nosso time</h2>
                            <p>Nosso propósito é simples: queremos colocar em prática toda nossa expertise adquirida em anos de experiência 
                            e ajudar pessoas como nós, que estão buscando o sucesso da própria empresa. Nascemos com uma missão diferente dentro 
                            do mercado e apresentamos uma dinâmica de contramão através de 3 pilares fundamentais: redução da burocracia, melhoria 
                            do fluxo de trabalho e relacionamento com nossos clientes.</p>
                        </div>
                    </div>

                </section>

            <section id='servicos'>

                <div className='container-1'>
                    <div className='title-1'>
                        <h2>Nossos Serviços:</h2>
                    </div>

                    <div className='d-flex-1 wrap-1'>

                        <div className='col-service'>
                            <div className='box d-flex-1' data-aos='zoom-out-right'>
                                <div className='image'>
                                    <i className='bi bi-graph-up-arrow'></i>
                                </div>

                                <div className='description'>
                                    <h5>Legalização e Abertura de Empresas</h5>
                                    <p>A Legalização de Empresas equivale a uma sequência de processos que devem ser cumpridos para regularizar 
                                    a situação de um negócio. Esses processos de legalização podem variar, dependendo do local e da atividade que 
                                    deseja abrir.</p>
                                </div>
                            </div>

                            <div className='box d-flex-1' data-aos='zoom-out-right'>
                                <div className='image'>
                                    <i className='bi bi-briefcase-fill'></i>
                                </div>

                                <div className='description'>
                                    <h5>Contabilidade de Empresas</h5>
                                    <p>A contabilidade para empresas é um fator primordial para controlar o patrimônio, coletar dados para serem transformados 
                                    estrategicamente em procedimentos e ações que direcionam a tomada de decisão do negócio, além de ser extremamente importante 
                                    o fator de análise do lucro e prejuízo da empresa. </p>
                                </div>
                            </div>

                            <div className='box d-flex-1' data-aos='zoom-out-right'>
                                <div className='image'>
                                    <i className='bi bi-card-checklist'></i>
                                </div>

                                <div className='description'>
                                    <h5>Consultoria e Assessoria Contábil</h5>
                                    <p>
                                    A Assessoria Contábil trata-se de uma relação consistente, focada no longo prazo. Sua finalidade é diagnosticar 
                                    problemas estruturais da companhia, junto aos gestores, fornecedores, colaboradores e clientes do negócio. <br />

                                    Na Consultoria são desenvolvidos trabalhos de orientações quanto às áreas contábeis da empresa, e irá abranger: planejamento tributário; 
                                    controle e gestão financeira e orientação empresarial.
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className='col-service'>
                            <div className='box d-flex-1' data-aos='zoom-out-left'>
                                <div className='image'>
                                    <i className='bi bi-pc-display-horizontal'></i>
                                </div>

                                <div className='description'>
                                    <h5>Fiscal e DP</h5>
                                    <p>Reunimos os departamentos Contábil, Fiscal e o Departamento Pessoal para facilitar a vida dos nossos,
                                    clientes. Procuramos sempre levar o melhor serviço, no menor prazo possível para que todas as 
                                    situações do dia-a-dia se resolvam com mais facilidade e simplicidade.
                                    </p>
                                </div>
                            </div>

                            <div className='box d-flex-1' data-aos='zoom-out-left' >
                                <div className='image'>
                                    <i className='bi bi-currency-exchange'></i>
                                </div>

                                <div className='description'>
                                    <h5>Imposto de Renda</h5>
                                    <p>O imposto sobre a renda ou imposto sobre o rendimento é um tributo existente em vários países, 
                                    em que cada contribuinte, seja ele pessoa física (PF) ou pessoa jurídica (PJ). Todo cidadão é obrigado 
                                    a pagar uma certa porcentagem de sua renda para o governo. Nós fazemos declarações para pessoas físicas 
                                    (IRPF), sempre buscando facilitar a vida dos nossos clientes.
                                    </p>
                                </div>
                            </div>

                            <div className='box d-flex-1' data-aos='zoom-out-left' >
                                <div className='image'>
                                    <i className='bi bi-building'></i>
                                </div>

                                <div className='description'>
                                    <h5>MEI</h5>
                                    <p>Microempreendedor Individual (MEI) é a pessoa que trabalha por conta própria e que se legaliza como 
                                    pequeno empresário. Pensando em ajudar as pessoas a se tornarem donos dos seus negócios, nós fazemos todo 
                                    o processo para a abertura da sua empresa e além disso, orientamos você sobre impostos, tributos ou 
                                    qualquer dúvida que possa surgir.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='d-flex-1' data-aos='fade-down' data-aos-easing='linear' data-aos-duration='1500'>
                        <a href='#home' className='button'>Vamos realizar um serviço?</a>
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
                                    <p>Por que <strong>Legalizar</strong> o meu Negócio ?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>A legalização de uma empresa é <strong>fundamental</strong>, pois assim poderá aproveitar benefícios como captação 
                                    de recursos juntos as instituições financeiras como empréstimo ou financiamento, além que regularizada 
                                    poderá vender ou prestar serviços para órgãos públicos através de licitações. Para isto, você precisa 
                                    de um profissional que realize os procedimentos conforme a legislação pertinente.</p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey='1' data-aos="fade-up">
                                <Accordion.Header>
                                    <p>O que preciso <strong>saber</strong>  antes de abrir a minha <strong>Empresa</strong> ?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>1- <strong>Tenha um Plano de Negócio</strong> – O que é isso? Um documento que descreve como a empresa irá atuar e crescer 
                                    de forma planejada. No Plano de Negócio deve ter: Definição do setor e ramo de atividade, Descrição dos produtos 
                                    e serviços da empresa, Definição do público-alvo, Plano financeiro, Plano de marketing, Estudo do mercado e 
                                    análise da concorrência, entre outros;</p>

                                    <p>2- <strong>Empresa Individual ou Sociedade</strong> – Essa é uma questão que deve ser analisada com muita cautela, afinal, sociedade 
                                    é coisa séria. Se por um lado, a sociedade traz a vantagem de ter mais pessoas trabalhando, outros pontos de vista e 
                                    maior aporte financeiro; por outro lado, as sociedades podem gerar conflitos e os resultados devem ser distribuídos. 
                                    Por isso, caso decida pela sociedade, busque alguém em quem você confie e que tenha os mesmos objetivos estratégicos 
                                    que os seus;</p>

                                    <p>3- <strong>Contrate um Contador!</strong> – Ter um contador é imprescindível para o sucesso da sua empresa, afinal, esse é o profissional 
                                    que te auxiliará com toda a parte burocrática e tributária, desde a definição da natureza jurídica e regime tributário até 
                                    a elaboração do contrato social, registros e inscrições nos órgãos competentes;</p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey='2' data-aos="fade-up">
                                <Accordion.Header>
                                    <p>Por que a minha <strong>Empresa</strong> precisa de um <strong>Contador</strong> ?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>Administrar as finanças é determinante para que uma empresa permaneça no mercado e ainda atue sob as 
                                    exigências da lei e da <strong>Receita Federal</strong> . Caso contrário, o risco de fechar ou ser punida é grande. <br />
                                    Por isso, o departamento contábil é capaz de garantir à sua empresa a precisão e agilidade que os negócios 
                                    impõem, com segurança e controle para o seu gerenciamento. Ele garante segurança de informações e traz subsídios 
                                    para um bom planejamento empresarial capaz de reduzir os gastos, analisar todo o seu patrimônio e manter as contas em dia.</p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey='3' data-aos="fade-up">
                                <Accordion.Header>
                                    <p>É obrigatório o <strong>MEI</strong> ter contador ?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>O modelo <strong>MEI</strong> nada mais é do que um profissional autônomo. Dessa forma, este tem um CNPJ, ou seja, possui facilidades para a 
                                    abertura de conta bancária, pedido de empréstimos e emissão de notas fiscais, além de suas obrigações e direitos de uma pessoa 
                                    jurídica.</p>
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>

                    </div>

                </section>

                <section id='cta-end'>
                    <div className='container-1 d-flex-1 wrap-1'>
                        <div className='cta-desc' data-aos="fade-up-right">
                            <h2>SOLICITE UMA PROPOSTA</h2>
                            <p>Nosso time de consultores analisará as necessidades de sua empresa e uma proposta personalizada 
                            será apresentada.</p>
                        </div>
                        <div className='cta-2' data-aos="flip-right" >
                            <p>Organize a rotina da sua empresa para você ter mais tempo livre para gerenciar o seu negócio</p>

                            <a href='#home' className='button'>Entrar em Contato</a>

                            <span>Nossos especialistas vão entrar em contato com você ainda hoje.</span>
                        </div>
                    </div>
                </section>

            </main>


            <footer id='footer'>
                <p><a href='https://kain-portfolio.herokuapp.com/'>Kain-Dev</a> &copy; Todos os Direitos Reservados - 2022 </p>
                <p>CNPJ 39.741.680/0001-30 • TERMOS DE USO</p>
            </footer>


            <div onClick={scrollToTop} className='scroll-up-btn'>
                <i className='bi bi-chevron-up'></i>
            </div>


            <div className='wpp'>
                <a href='https://wa.me/21966236818?text=Boa%20Tarde!!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!!'><i className='bi bi-whatsapp'></i></a>
            </div>
            
        </>
    )
}