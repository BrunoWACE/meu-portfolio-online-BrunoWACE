// src/styles.js
import styled, { keyframes } from 'styled-components';

/* NAV */
export const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 65px;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 1000;

  @media (max-width: 900px) {
    min-height: 59px;
  }

  /* MENU DE LINKS */
ul {
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 2rem; /* Espaço entre os itens */

}


  a {
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    display: inline-block;
    transition: transform 0.3s;
  }

  a:hover {
    color: #000000ff;
    transform: scale(1.1);
  }

  a.active {
    color: #14068fff;
    transform: scale(1.15);
  }

  /* HAMBÚRGUER + ÍCONE DE IDIOMA */
  .nav-left {
    font-size: 28px;
    font-weight: bold;
    display: flex;
    
  }

  .nav-icons {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .menu-icon {
    display: none; /* só aparece no mobile */
    font-size: 28px;
    cursor: pointer;
    transition: transform 0.3s;
  }

  .menu-icon:hover {
    transform: scale(1.1);
  }

  .lang-wrap {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .lang-label {
    font-weight: 500;
    font-size: 0.9rem;
  }

  .lang-icon {
    font-size: 25px;
    cursor: pointer;
    transition: transform 0.3s;
  }

  .lang-icon:hover {
    transform: scale(1.1);
    color: #14068fff;
  }

  

  /* --- RESPONSIVIDADE MOBILE --- */
  @media (max-width: 900px) {
    ul {
      position: absolute;
      top: 64px;
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(6px);
      flex-direction: column;
      gap: 20px;
      padding: 10px;
      width: 100%;
      transform: translateX(100%);
      transition: transform 0.3s ease;
    }

    ul.open {
      transform: translateX(0);
    }

    a {
    width: 100%;          /* link ocupa toda largura do li */
    text-align: left;     /* texto alinhado à esquerda */
  }

    .menu-icon {
      display: flex;
    }

    .nav-icons {
      margin-left: auto; /* força alinhamento à direita */
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    display: inline-block;
    transition: transform .3s;
  }

  a:hover { color: #000000ff; transform: scale(1.1); }

  .lang-wrap {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .lang-icon { cursor: pointer; font-size: 25px; transition: .3s; }
  .lang-icon:hover { color: #14068fff; transform: scale(1.1); }

  /* Efeito ativo */
  a.active {
    color: #14068fff;
    transform: scale(1.15);
  }

  a::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 50%;
    width: 0;
    height: 2px;
    background: #14068fff;
    transition: all 0.4s ease;
    transform: translateX(-50%);
  }

  a.active::after { width: 100%; }

  /* --- RESPONSIVIDADE --- */
  @media (max-width: 900px) {
    padding: 0 1.5rem 0 0;
    justify-content: space-between;

    ul {
      gap: 15px;
    }

    a {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 600px) {
    gap: 12px;

    ul {
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    }

    .lang-wrap {
      margin-top: 5px;
    }
  }

  @media (max-width: 400px) {
    ul {
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }

    a {
      font-size: 0.85rem;
    }
  }
`;

/* INÍCIO */
export const Container = styled.section`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  background:
    radial-gradient(750px 600px at 10% -10%, rgba(244, 114, 182, 0.25), transparent 60%),
    radial-gradient(900px 500px at 90% 40%, rgba(168, 85, 247, 0.25), transparent 55%),
    linear-gradient(150deg, #151a33 60%);

  @media (max-width: 600px) {
    padding-top: 80px;
    padding-bottom: 48px;
  }
`;


export const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center; /* já centraliza horizontalmente */
  justify-content: center;
  text-align: center;  /* garante alinhamento central em textos */
  width: 100%;         /* garante que filhos ocupem a largura */
`;


export const Title = styled.h1`
  font-size: 55px;
  font-weight: 600;

  @media (max-width: 900px) {
    font-size: 42px;
  }

  @media (max-width: 600px) {
    font-size: 38px;
  }

  @media (max-width: 400px) {
    font-size: 32px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 45px;
  font-weight: 600;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  text-align: center;
  white-space: nowrap;
  line-height: 1.2;

  /* 👇 evita que pule quando o texto muda */
  min-height: 1.3em;

  @media (max-width: 900px) {
    font-size: 28px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
    min-height: 1.4em; /* ligeiramente maior pra caber bem */
  }

  @media (max-width: 400px) {
    font-size: 15px;
    min-height: 1.5em;
  }
`;



export const P = styled.p`
  max-width: 600px;
  padding: 0 16px;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 20px;
  line-height: 1.5;

  @media (max-width: 900px) {
    font-size: 15px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }

  @media (max-width: 400px) {
    font-size: 13px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  a {
    color: inherit;
    text-decoration: none;
    transition: .3s;
    outline: none;
  }

  svg {
    font-size: 35px;
    color: #fff;
    transition: .3s;
  }

  svg:hover {
    color: #6d28d9;
    transform: scale(1.1);
  }

  @media (max-width: 600px) {
    gap: 15px;

    svg {
      font-size: 28px;
    }
  }

  @media (max-width: 400px) {
    gap: 10px;

    svg {
      font-size: 24px;
    }
  }
`;
/*EFEITO*/
const fadeItem = keyframes`
  from { opacity: 0; transform: translateY(16px); filter: blur(4px); }
  to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
`;


/* SOBRE */
export const AboutSection = styled.section`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  padding: 145px 1.5rem 64px;
  scroll-margin-top: 100px;
  background:   radial-gradient(750px 600px at 10% 40%, rgba(244, 114, 182, 0.25), transparent 45%),
    linear-gradient(150deg, #151a33 60%);
    
      @media (max-width: 900px) {
    padding: 40px 1.5rem 64px;
  }
`;

export const AboutInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }

  /* estado base - filhos invisíveis até aparecerem */
  > * {
    opacity: 0;
    transform: translateY(16px);
    filter: blur(4px);
  }

  /* Stagger quando o pai estiver .visible */
  ${AboutSection}.visible & > * {
    opacity: 0;
    animation: ${fadeItem} 1s ease forwards;
  }
  ${AboutSection}.visible & > *:nth-child(1) { animation-delay: .25s; }
  ${AboutSection}.visible & > *:nth-child(2) { animation-delay: .25s; }

`;


export const AboutTitle = styled.h2`
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  margin-bottom: 1rem;
  color: #fff;
`;

export const AboutText = styled.p`
  color: #d7d9e0;
  line-height: 1.75;
  font-size: 1.05rem;
  margin-bottom: 1rem;
  max-width: 95%; /* evita esticar demais o texto */
  letter-spacing: -0.2px; /* deixa as letras mais próximas */
`;

export const AboutBlock = styled.div`
  display: inline-flex;
  gap: .6rem;
  align-items: center;
  padding: 10px 14px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
  color: #e5e7ef;
  margin-bottom: 1rem; /* adiciona um espacinho antes dos botões */
`;

export const AboutPhoto = styled.img`
  width: 100%;
  max-width: 360px;
  aspect-ratio: 1 / 1;  /* garante quadrado mesmo antes da imagem carregar */
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 10px 40px rgba(0, 0, 0, .35);
  justify-self: center;
  background-color: rgba(255, 255, 255, 0.05); /* 👈 adiciona base neutra */

  @media (max-width: 900px) {
    margin: 0 auto 1.5rem;
    width: 250px;
    height:250px;
  }
`;


/* TECNOLOGIAS */
export const TechTitle = styled.h2`
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  margin-bottom: 2rem;
`;

export const TechIntro = styled.p`
  color: #d7d9e0;
  max-width: 500px;
  margin: 0 auto 2.5rem;
  font-size: 1.1rem;
  line-height: 1.6;
`;

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 colunas no desktop */
  gap: 2rem;
  justify-items: center;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas no tablet/mobile */
    gap: 1rem; /* espaçamento mais justo */
    
  }

  @media (max-width: 480px) {
    gap: 1rem; /* ainda menor em telas bem pequenas */
  }
`;


export const TechCard = styled.div`
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: 1.5rem 1rem;
  width: 140px;
  height: 140px;
  display: flex;
  flex-direction: column;      /* ícone em cima, texto embaixo */
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  font-weight: 500;
  font-size: 1.05rem;
  transition: all 0.3s ease;

    @media (max-width: 900px) {
     width: 140px;
     height: 140px;
     padding: 1rem;
  }

  .icon {
    font-size: 3.5rem;
    margin-bottom: 0.5rem;     /* espaçamento uniforme */
    display: block;
    transition: transform 0.3s;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(255,255,255,0.3);
    background: rgba(255,255,255,0.1);
  }

  &:hover .icon {
    transform: scale(1.15);
  }

  /* Cores personalizadas */
  .react { color: #61dafb; }
  .js { color: #f7df1e; }
  .styled { color: #db7093; }
  .css { color: #2965f1; }
  .html { color: #e44d26; }
  .node { color: #3c873a; }
  .git { color: #f1502f; }
  .ai { color: #a855f7; }
`;

export const OtherTechs = styled.div`
  margin-top: 2rem;
  h4 {
    color: #a855f7;
    margin-bottom: .5rem;
    font-size: 1.2rem;
  }
  p {
    color: #d7d9e0;
    font-size: 1rem;
    letter-spacing: 1px;
  }
`;

export const TechSection = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 55px 1.5rem 80px;
  scroll-margin-top: 100px;
  background:
    radial-gradient(750px 600px at 90% 40%, rgba(244, 114, 182, 0.25), transparent 45%),
    radial-gradient(400px 300px at 10% 40%, rgba(168, 85, 247, 0.25), transparent 55%),
    linear-gradient(150deg, #151a33 60%);
  color: #fff;
  text-align: center;

      @media (max-width: 900px) {
        background:
          radial-gradient(400px 300px at 10% 40%, rgba(168, 85, 247, 0.25), transparent 55%),
          linear-gradient(150deg, #151a33 60%);
  }



  /* 🔹 Estado base: tudo invisível */
  ${TechTitle}, ${TechIntro}, ${TechCard}, ${OtherTechs} {
    opacity: 0;
    transform: translateY(16px);
    filter: blur(4px);
  }

  /* 🔹 Quando a seção fica visível */
  &.visible ${TechTitle}, &.visible ${TechIntro} { animation: ${fadeItem} 1s ease .25s forwards; }

  &.visible ${TechCard} { animation: ${fadeItem} 1s ease .60s forwards; }

  &.visible ${OtherTechs} { animation: ${fadeItem} 1s ease .99s forwards; }
`;

/* PROJETOS */
export const ProjectTitle = styled.h2`
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  margin-bottom: 2rem;

    @media (max-width: 900px) {
    margin-bottom: 1rem;
  }
`;

export const ProjectIntro = styled.p`
  color: #d7d9e0;
  max-width: 600px;
  margin: 0 auto 2.2rem;
  font-size: 1.05rem;
  line-height: 1.6;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 900px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 1rem;
    padding-bottom: 1rem;
    scroll-behavior: smooth;

    grid-template-columns: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ProjectCard = styled.article`
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 18px;
  overflow: hidden;
  display: grid;
  grid-template-rows: auto 1fr;
  transition: transform .3s ease, border-color .3s ease, background .3s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeSlideUp 0.8s ease forwards;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(255,255,255,0.25);
    background: rgba(255,255,255,0.08);
  }

  /* Mobile: vira card de carrossel */
  @media (max-width: 900px) {
    flex: 0 0 85%;
    scroll-snap-align: start;
  }

  @keyframes fadeSlideUp {
    from {
      opacity: 0;
      transform: translateY(25px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

`;


// Grid específico para a seção de CERTIFICADOS
export const CertificateGrid = styled(ProjectGrid)`
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
  
  gap: 1.4rem;
`;

/* Card com visual diferenciado (glass leve) só para Certificados */
export const CertificateCard = styled(ProjectCard)`
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 20px;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  transition: transform .28s ease, box-shadow .28s ease, background .28s ease, border-color .28s ease;

    @media (max-width: 900px) {
    h3 { font-size: 1.25rem; margin: .2rem }
    
  }

  &:hover {
    transform: translateY(-6px) scale(1.02);
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.28);
    box-shadow: 0 10px 26px rgba(0,0,0,.28);
  }
`;

export const ProjectThumb = styled.img`
  display: block;
  width: 100%;
  height: 223px;
  object-fit: cover;
  background: #0b1020;

    @media (max-width: 900px) {
  height: 155px; 
  }
`;

export const CertificateThumb = styled(ProjectThumb)`
  height: 226px;              /* altura fixa para todas as imagens */
  //object-fit: contain;        /* mostra o certificado inteiro */
  background: rgba(255,255,255,0.03);
  border-bottom: 1px solid rgba(255,255,255,0.1);
  
  @media (max-width: 900px) {
    height: 160px;            /* menor em telas menores */
  }
`;


export const ProjectContent = styled.div`
  padding: 1.5rem;
  text-align: left;

  h3 { font-size: 1.15rem; margin: .2rem }
  p  { color: #d7d9e0;
    font-size: .98rem;
    line-height: 1.5;
    margin-bottom: .6rem;
    justify-self: unset;
    }
`;

export const ProjectTags = styled.div`
  font-size: .85rem;
  letter-spacing: .4px;
  color: #a7abbb;
  margin-bottom: .8rem;
`;

export const ProjectButtons = styled.div`
  display: flex;
  gap: .6rem;
  flex-wrap: wrap;

    @media (max-width: 900px) {
    justify-content: center; /* Centraliza os botões em telas médias */
  }

  @media (max-width: 600px) {
    flex-direction: column; /* Deixa um botão por linha */
    align-items: center;
    width: 100%;
  }
`;

export const ProjectButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: .4rem;
  padding: .55rem .85rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: .95rem;
  cursor: pointer;
  border: 1px solid transparent;
  background: ${({ variant }) => variant === 'ghost' ? 'transparent' : '#6d28d9'};
  color: #fff;
  border-color: ${({ variant }) => variant === 'ghost' ? 'rgba(255,255,255,0.25)' : 'transparent'};
  transition: .25s ease;
  text-decoration: none; /* remove linha sublinhada */
  min-width: 138px;

  svg { font-size: 1.05rem; }

  &:hover {
    transform: translateY(-2px);
    background: ${({ variant }) => variant === 'ghost' ? 'rgba(255,255,255,0.1)' : '#7c3aed'};
    border-color: ${({ variant }) => variant === 'ghost' ? 'rgba(255,255,255,0.35)' : 'transparent'};
  }
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, .45);
  }

`;

// --- AGORA sim, ProjectSection depois ---
export const ProjectSection = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 80px 1.5rem 100px;
  scroll-margin-top: 100px;
  background:
    radial-gradient(750px 600px at 15% 30%, rgba(168, 85, 247, 0.18), transparent 55%),
    radial-gradient(350px 350px at 80% 15%, rgba(71, 129, 255, 0.18), transparent 55%),
    radial-gradient(550px 420px at 85% 70%, rgba(244, 114, 182, 0.18), transparent 55%),
    linear-gradient(150deg, #151a33 60%);
  color: #fff;
  text-align: center;

     @media (max-width: 900px) {
      background:
        radial-gradient(750px 600px at 15% 30%, rgba(168, 85, 247, 0.18), transparent 55%),
        radial-gradient(550px 420px at 85% 70%, rgba(71, 129, 255, 0.18), transparent 55%),
        linear-gradient(150deg, #151a33 60%);
  }


  /* base invisível p/ fade-in */
  ${ProjectTitle}, ${ProjectIntro}, ${ProjectCard} {
    opacity: 0;
    transform: translateY(16px);
    filter: blur(4px);
  }

&.visible ${ProjectTitle},
&.visible ${ProjectIntro} {
  animation: ${fadeItem} 1s ease .25s forwards;
  }

/* entra tudo junto com leve cadência */
&.visible ${ProjectGrid} > ${ProjectCard} {
    animation: ${fadeItem} .9s ease forwards;
}
&.visible ${ProjectGrid} > ${ProjectCard}:nth-child(1) { animation-delay: .55s; }
&.visible ${ProjectGrid} > ${ProjectCard}:nth-child(2) { animation-delay: .70s; }
&.visible ${ProjectGrid} > ${ProjectCard}:nth-child(3) { animation-delay: .85s; }
&.visible ${ProjectGrid} > ${ProjectCard}:nth-child(4) { animation-delay: 1.00s; }
&.visible ${ProjectGrid} > ${ProjectCard}:nth-child(5) { animation-delay: 1.15s; }
&.visible ${ProjectGrid} > ${ProjectCard}:nth-child(6) { animation-delay: 1.30s; }
&.visible ${ProjectGrid} > ${ProjectCard}:nth-child(7) { animation-delay: 1.45s; }
&.visible ${ProjectGrid} > ${ProjectCard}:nth-child(8) { animation-delay: 1.60s; }
&.visible ${ProjectGrid} > ${ProjectCard}:nth-child(9) { animation-delay: 1.75s; }
&.visible ${ProjectGrid} > ${ProjectCard}:nth-child(10) { animation-delay: 1.90s; }
 `;

/* === CONTATO === */
// ContactSection: vira coluna e empurra o Footer
export const ContactSection = styled.section`
  position: relative;
  min-height: 90vh;
  background: linear-gradient(150deg, #151a33 60%);
  color: #fff;
  display: flex;
  flex-direction: column;
`;

export const ContactInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 70px 1.5rem 10px; /* 👈 moveu o padding pra cá */
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 3rem;
  align-items: start;
  flex: 1;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;


// Footer: estica e fica colado no fim
export const Footer = styled.footer`
  width: 100%;
  background: #0f1224; /* cor sólida combinando com o tema */
  border-top: 2px solid rgba(255,255,255,0.1);
  padding: 5px 0 25px; /* mais espaçamento em cima */
  color: #d7d9e0;
  text-align: center;
  font-size: 0.95rem;
  display: flex;
  justify-content: center;
  align-items: center;

   @media (max-width: 900px) {
    margin-top: 30px;
  }

  .footer-content {
    width: 100%;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  #FooterIcons {
    display: flex;
    justify-content: center;
    gap: 25px;

    a {
      color: #fff;
      font-size: 1.8rem;
      opacity: 0.9;
      transition: transform 0.3s, opacity 0.3s;

      &:hover {
        transform: translateY(-3px);
        opacity: 1;
        color: #a855f7;
      }
    }
  }

  .copyright {
    margin: 0;
    font-size: 0.9rem;

    b {
      color: #fff;
      font-weight: 600;
    }
  }
`;



export const ContactText = styled.div`
  h2 {
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    margin-bottom: 1.8rem;
    color: #fff;
    letter-spacing: -0.5px; /* reduz leve espaçamento */
  }

  p {
    color: #d7d9e0;
    font-size: 1.05rem;
    line-height: 1.65;
    margin-bottom: 1rem;
    max-width: 95%; /* evita esticar demais o texto */
  }

  @media (max-width: 900px) {
    p {
      max-width: 100%;
      text-align: center;
    }
  }
`;

export const ContactForm = styled.form`
  /* empilha tudo em uma coluna */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 560px;
  margin-left: auto;      /* mantém colado à direita do texto */
  width: 100%;

  input,
  textarea {
    width: 100%;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px;
    padding: 12px 16px;
    color: #fff;
    font-size: 1rem;
    outline: none;
    transition: border-color .3s, background .3s;

    &::placeholder { color: rgba(255,255,255,0.6); }
    &:focus { border-color: #a855f7; background: rgba(255,255,255,0.08); }
  }

  /* corrige autofill do Chrome */
  input:-webkit-autofill, textarea:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px rgba(255,255,255,0.05) inset !important;
    -webkit-text-fill-color: #fff !important;
    caret-color: #fff;
  }

  textarea { min-height: 160px; resize: vertical; }

  /* Corrige autofill em todos os estados (Chrome / Edge) */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 1000px rgba(255,255,255,0.05) inset !important;
  -webkit-text-fill-color: #fff !important;
  caret-color: #fff;
  transition: background-color 9999s ease-in-out 0s !important;
}

  /* botão igual aos projetos */
  button, [type="submit"] {
    align-self: flex-start;
    background: #6d28d9;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background .3s, transform .2s;

    &:hover { background: #7c3aed; transform: translateY(-2px); }
  }

  @media (max-width: 900px) {
    margin-left: 0;
    button, [type="submit"] { align-self: center; }
  }
`;

const toastIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Toast = styled.div`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 2000;
  background: rgba(34, 197, 94, 0.14);         /* verde transparente */
  border: 1px solid rgba(34, 197, 94, 0.35);    /* verde */
  color: #d1fae5;                                /* texto verdinho claro */
  backdrop-filter: blur(6px);
  border-radius: 12px;
  padding: 12px 14px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,.35);
  animation: ${toastIn} .25s ease both;
`;

export const ToastClose = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  opacity: .8;
  padding: 0 2px;
  transition: opacity .2s ease;
  &:hover { opacity: 1; }
`;



/* ANIMAÇÃO INICIO*/
export const TypeWrap = styled.span`
  display: inline-grid;
  align-items: baseline;
  grid-template-areas: 'stack';
  position: relative;
`;

export const TypeSizer = styled.span`
  grid-area: stack;
  visibility: hidden;    /* fica invisível, mas ocupa espaço */
  white-space: nowrap;
`;

const blink = keyframes`
  0%, 49%   { opacity: 1; }
  50%, 100% { opacity: 0; }
`;

export const AnimatedType = styled.span`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  min-width: 19.5ch;
  //text-align: left; Tra em uma direção
  will-change: contents;

  @media (prefers-reduced-motion: reduce) {
    min-width: auto;
  }
`;

export const Caret = styled.span`
  display: inline-block;
  width: 0.6ch;
  height: 1.1em;
  margin-left: .16rem;
  border-right: 2px solid currentColor;
  animation: ${blink} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
  }
`;