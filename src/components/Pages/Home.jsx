import React, { useEffect } from 'react';
import FunFact from '../FunFact';
import Hero from '../Hero';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import PortfolioSlider from '../Slider/PortfolioSlider';
import { pageTitle } from '../../helper';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Home() {
  pageTitle('Home');

  // Hero Social Links
  const heroSocialLinks = [
    {
      name: 'Instagram',
      links: '/',
    },
    {
      name: 'Linkedin',
links: 'https://www.linkedin.com/in/eliseu-caetano-da-silva-68a272186/',
    },
  ];

  // FunFact Data
  const funfaceData = [
    {
      title: 'Em até 12x no cartao',
      factNumber: 'R$150,00',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title="Marca de bodybuilders<br/> para bodybuilders."
        subtitle="drops unicos pra cada coleção."
        btnText="Ir para a loja"
        btnLink="/loja"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/bg_home.jpg"
      />
      {/* End Hero Section */}
      <div className="container">
        <FunFact
          variant="cs-type1"
          title="material 100% algodao a partir de:"
          data={funfaceData}
        />
      </div>
      {/* End FunFact Section */}
      {/* Start Portfolio Section */}
      <Spacing lg="50" md="50" />
      
      {/* End Portfolio Section */}
      {/* Start Service Section */}
      <Spacing lg="0" md="80" />
      <Div>
        <Div className="container">
          <SectionHeading
            title="qualidade e preço justo"
            subtitle="Ultimos drops"
            variant="cs-style1 text-center"
          />
          <Spacing lg="0" md="45" />
          <PortfolioSlider />
        </Div>
      </Div>
      {/* Start FunFact Section */}
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Qual o nosso diferencial?"
                subtitle="Entenda o processo"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <VerticalTimeline>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--teste"
                    contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                    iconStyle={{ background: '#FF4A17', color: '#FF0000', display:'flex' }}
                    icon={<h3 style={{margin: 'auto'}}>1</h3>}
                    
                  >
                    <h3 className="vertical-timeline-element-title">Estampa</h3>
                    <p>
                      Nossa equipe trabalha com as mais altas qualidades de impressão pra que as cores da camisa permaneçam vivas no uso.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--teste"
                    contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                    iconStyle={{ background: '#FF4A17', color: '#FF0000', display:'flex' }}
                    icon={<h3 style={{margin: 'auto'}}>2</h3>}
                    
                  >
                    <h3 className="vertical-timeline-element-title">Tecido</h3>
                    <p>
                      Todas as camisas são feitas em 100% algodão para se adequar a qualquer tipo de ocasião, tanto treino quanto eventos sociais.
                    </p>
                  </VerticalTimelineElement><VerticalTimelineElement
                    className="vertical-timeline-element--teste"
                    contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                    iconStyle={{ background: '#FF4A17', color: '#FF0000', display:'flex' }}
                    icon={<h3 style={{margin: 'auto'}}>3</h3>}
                    
                  >
                    <h3 className="vertical-timeline-element-title">Exclusividade</h3>
                    <p>
                      A marca trabalha com drops unicos, portanto após uma coleção ninguem tera a possibilidade de comprar a mesma camisa que a sua.
                    </p>
                  </VerticalTimelineElement><VerticalTimelineElement
                    className="vertical-timeline-element--teste"
                    contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                    iconStyle={{ background: '#FF4A17', color: '#FF0000', display:'flex' }}
                    icon={<h3 style={{margin: 'auto'}}>4</h3>}
                    
                  >
                    <h3 className="vertical-timeline-element-title">Tempo de entrega</h3>
                    <p>
                      O prazo de entrada no envio é de no maximo 3 dias, a partir disso voce já tera o seu rastreamento.
                    </p>
                  </VerticalTimelineElement>
                </VerticalTimeline>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Service Section */}



      {/* Start Awards Section */}
    </>
  );
}
