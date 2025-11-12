import {
  Container, Content, Nav, P, SocialIcons, SubTitle, Title,
  AboutSection, AboutInner, AboutTitle, AboutText, AboutPhoto, AboutBlock,
  TechSection, TechTitle, TechIntro, TechGrid, TechCard, OtherTechs,
  ProjectSection, ProjectTitle, ProjectIntro, ProjectGrid,
  ProjectCard, ProjectThumb, ProjectContent, ProjectTags, CertificateGrid, CertificateCard, CertificateThumb,
  ProjectButtons, ProjectButton, ContactSection, ContactInner, ContactText, ContactForm, Footer, AnimatedType, Caret
} from './styles';
import ParticlesBackground from './ParticlesBackground';
import { IoLanguage } from 'react-icons/io5';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import useScrollFadeIn from './hooks/useScrollFadeIn';
import { FaReact, FaCss3Alt, FaHtml5, FaNodeJs, FaGitAlt, FaBrain } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiStyledcomponents } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { FaDownload } from "react-icons/fa";
import { useState, useEffect, useCallback } from 'react';
import { Toast, ToastClose } from './styles';
import { FiSend } from "react-icons/fi";
import { FaBars, FaTimes } from 'react-icons/fa';



function App() {
  const { ref: aboutRef, isVisible } = useScrollFadeIn({ once: false });
  const { ref: techRef, isVisible: techVisible } = useScrollFadeIn({ once: false });
  const { ref: projRef, isVisible: projVisible } = useScrollFadeIn({ once: false });
  const { ref: certRef, isVisible: certVisible } = useScrollFadeIn({ once: false });
  const [menuOpen, setMenuOpen] = useState(false);



  // Estado para alternar entre Português e Inglês
  const [isEnglish, setIsEnglish] = useState(false);

  const [activeSection, setActiveSection] = useState('Inicio');


  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  // limpa a msg custom quando o usuário digita
  const handleInput = useCallback((e) => {
    e.target.setCustomValidity('');
  }, []);

  // define msg custom conforme o idioma
  const handleInvalid = useCallback((e) => {
    const el = e.target;

    if (el.validity.valueMissing) {
      el.setCustomValidity(isEnglish ? 'Please fill out this field.' : 'Preencha este campo.');
    }
  }, [isEnglish]);


  const NAV_OFFSET = 60;

  const handleNavClick = async (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    if (document.fonts?.ready) await document.fonts.ready;
    await new Promise(requestAnimationFrame);
    const y = Math.max(0, el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET);
    window.scrollTo({ top: Math.round(y), behavior: 'smooth' });
    history.replaceState(null, '', `#${id}`);
  };

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    document.documentElement.lang = isEnglish ? "en" : "pt";
  }, [isEnglish]);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const handleScroll = () => {
      let current = '';
      const scrollY = window.scrollY + 200; // offset pra não trocar antes da hora

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // executa ao carregar
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Enviar e-mail pelo Web3form
  const handleContactSubmit = useCallback(async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const fd = new FormData(form);

    // Adiciona chave de acesso e outros campos obrigatórios do Web3Forms
    fd.append("access_key", "e20bb307-0736-4b96-b9af-49c83e1c3470");
    fd.append(
      "subject",
      isEnglish ? "New contact from portfolio" : "Novo contato do portfólio"
    );
    fd.append("from_name", "Bruno Dev Portfolio");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();
      console.log("Resposta do Web3Forms:", data);

      if (data.success) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3500);
        form.reset();

        const el = document.getElementById("Contato");
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 60;
          window.scrollTo({ top: Math.max(0, Math.round(top)), behavior: "smooth" });
        }
      } else {
        console.error("Erro Web3Forms:", data);
        alert(
          isEnglish
            ? "Error sending the message. Please try again."
            : "Erro ao enviar a mensagem. Tente novamente."
        );
      }
    } catch (err) {
      console.error(err);
      alert(
        isEnglish
          ? "Error sending the message. Please try again."
          : "Erro ao enviar a mensagem. Tente novamente."
      );
    }
  }, [isEnglish]);

  // ANIMAÇÃO INICIO CÓDIGO JS + REACT
  const roles = isEnglish
    ? ["Full Stack Developer", "Front-End Developer", "Back-End Developer"]
    : ["Programador Full Stack", "Programador Front-End", "Programador Back-End"];


  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // >>> Ajuste aqui (em ms) – deixa bem mais lento e legível
  const TYPING_MS = 70;   // digitar
  const DELETING_MS = 50;   // apagar
  const PAUSE_FULL = 1200;  // pausa quando termina a palavra
  const PAUSE_EMPTY = 700;  // pausa antes da próxima palavra

  useEffect(() => {
    const current = roles[roleIndex] || "";

    // define o delay desta "batida"
    let delay;
    if (!isDeleting && displayText === current) {
      delay = PAUSE_FULL;
      // prepara para apagar na próxima batida
      const t = setTimeout(() => setIsDeleting(true), delay);
      return () => clearTimeout(t);
    }
    if (isDeleting && displayText === "") {
      delay = PAUSE_EMPTY;
      const t = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }, delay);
      return () => clearTimeout(t);
    }

    // digita ou apaga um caractere
    delay = isDeleting ? DELETING_MS : TYPING_MS;
    const t = setTimeout(() => {
      const nextLen = displayText.length + (isDeleting ? -1 : 1);
      setDisplayText(current.slice(0, Math.max(0, nextLen)));
    }, delay);

    return () => clearTimeout(t);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <>
      <Nav>
        {/* Container de ícones: hambúrguer + idioma */}
        <div className="nav-icons">
          {/* Ícone do menu para mobile */}
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Label de idioma + ícone */}
          
        </div>

        {/* Menu de links */}
        <ul className={menuOpen ? "open" : ""}>
          {[
            { id: "Inicio", en: "Home", br: "Início" },
            { id: "Sobre", en: "About", br: "Sobre" },
            { id: "Tecnologias", en: "Technologies", br: "Tecnologias" },
            { id: "Projetos", en: "Projects", br: "Projetos" },
            { id: "Certificados", en: "Certificates", br: "Certificados" },
            { id: "Contato", en: "Contact", br: "Contato" },
          ].map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  handleNavClick(e, link.id);
                  setMenuOpen(false);
                }}
                className={activeSection === link.id ? "active" : ""}
                aria-label={isEnglish ? link.en : link.br}
              >
                {isEnglish ? link.en : link.br}
              </a>
            </li>
          ))}
        </ul>

        <div className="lang-wrap">
            <p className="lang-label">{isEnglish ? "EN" : "BR"}</p>
            <IoLanguage
              className="lang-icon"
              onClick={toggleLanguage}
              title={isEnglish ? "Change Language" : "Mudar idioma"}
              aria-label={isEnglish ? "Change Language" : "Mudar idioma"}
            />
          </div>
      </Nav>

      {/* Início */}
      <Container id="Inicio">
        <ParticlesBackground />
        <Content>
          <Title>Bruno Alves Ferreira</Title>
          <SubTitle>
            <span>{isEnglish ? "Web Developer" : "Desenvolvedor WEB"}</span>
            <span>|</span>
            <AnimatedType aria-live="polite">
              {displayText}<Caret aria-hidden="true" />
            </AnimatedType>
          </SubTitle>

          <P>
            {isEnglish
              ? "My journey as a developer is guided by a desire to learn and innovate, transforming code into connections between people and technology."
              : "Minha jornada como desenvolvedor é guiada pela vontade de aprender e inovar, transformando código em conexões entre pessoas e tecnologia."}
          </P>
          <SocialIcons>
            <a aria-label="LinkedIn de Bruno" href="https://www.linkedin.com/in/brunowace-ferreira/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a aria-label="Enviar e-mail para Bruno" href="mailto:contato@brunodev-ferreira.com.br"><MdEmail /></a>
            <a aria-label="GitHub de Bruno" href="https://github.com/BrunoWACE" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </SocialIcons>
        </Content>
      </Container>

      {/* Sobre */}
      <AboutSection id="Sobre" ref={aboutRef} className={isVisible ? "visible" : ""}>
        <AboutInner>
          <AboutPhoto loading='lazy' src="/BrunoLinkedin.png" alt="Foto de Bruno Alves Ferreira" width={360} height={360} />
          <div>
            <AboutTitle>{isEnglish ? "About Me" : "Sobre Mim"}</AboutTitle>
            <AboutText>
              {isEnglish ? (
                <>
                  Hello, I’m <strong>Bruno Alves Ferreira</strong>, a Web Developer focused on Front-End.
                  I’m currently studying <strong>Systems Analysis and Development</strong> at <strong>Estácio</strong>,
                  and deepening my skills in <strong>Web Development</strong> through the <strong>DevClub</strong> bootcamp.
                </>
              ) : (
                <>
                  Olá, sou <strong>Bruno Alves Ferreira</strong>, Desenvolvedor Web com foco em Front-End.
                  Curso <strong>Análise e Desenvolvimento de Sistemas</strong> pela <strong>Estácio</strong> e me aprofundo em
                  <strong> Desenvolvimento Web</strong> através do bootcamp - <strong>DevClub</strong>.
                </>
              )}
            </AboutText>

            <AboutText>
              {isEnglish ? (
                <>
                  I have hands-on experience in developing <strong>responsive websites, </strong>
                  <strong>landing pages</strong>, and <strong>modern interfaces</strong>,
                  always prioritizing usability, performance, and clean code practices.
                </>
              ) : (
                <>
                  Tenho experiência prática no desenvolvimento de <strong>sites responsivos </strong>,
                  <strong>landing pages</strong> e <strong>interfaces modernas</strong>,
                  sempre priorizando usabilidade, performance e boas práticas de código.
                </>
              )}
            </AboutText>

            <AboutBlock>
              {isEnglish ? (
                <>Current focus: React, JavaScript, styled-components, AI, n8n, and UI/UX best practices.</>
              ) : (
                <>Foco atual: React, JavaScript, styled-components, IA, n8n e boas práticas de UI/UX.</>
              )}
            </AboutBlock>

            <ProjectButtons style={{ marginTop: '1.5rem' }}>
              <ProjectButton
                as="a"
                href="/Bruno Alves Ferreira_Desenvolvedor Web.pdf"
                download
                style={{ fontSize: '1rem', minWidth: '190px' }}
              >
                <FaDownload /> {isEnglish ? 'Download Resume' : 'Baixar Currículo'}

              </ProjectButton>

            </ProjectButtons>

          </div>
        </AboutInner>
      </AboutSection>

      {/* Tecnologias */}
      <TechSection
        id="Tecnologias"
        ref={techRef}
        className={techVisible ? "visible" : ""}
      >
        <TechTitle>
          {isEnglish ? 'Technologies' : 'Tecnologias'}
        </TechTitle>

        <TechIntro>
          {isEnglish
            ? 'The tools that power my projects and reflect my journey as a developer.'
            : 'As ferramentas que impulsionam meus projetos e refletem minha jornada como desenvolvedor.'}
        </TechIntro>


        <TechGrid>
          <TechCard><FaReact className="icon react" />React</TechCard>
          <TechCard><IoLogoJavascript className="icon js" />JavaScript</TechCard>
          <TechCard><SiStyledcomponents className="icon styled" />Styled Components</TechCard>
          <TechCard><FaCss3Alt className="icon css" />CSS3</TechCard>
          <TechCard><FaHtml5 className="icon html" />HTML5</TechCard>
          <TechCard><FaNodeJs className="icon node" />Node.js</TechCard>
          <TechCard><FaGitAlt className="icon git" />Git</TechCard>
          <TechCard>
            <FaBrain className="icon ai" />
            {isEnglish ? 'Artificial Intelligence' : 'Inteligência Artificial'}
          </TechCard>
        </TechGrid>

        <OtherTechs>
          <h4>{isEnglish ? 'Other Technologies' : 'Outras Tecnologias'}</h4>
          <p>Express • Vite • Yarn • Prisma • API REST • JSON • MongoDB • N8N</p>
        </OtherTechs>
      </TechSection>

      {/* === Seção Projetos === */}
      <ProjectSection
        id="Projetos"
        ref={projRef}
        className={projVisible ? "visible" : ""}
      >
        <ProjectTitle>
          {isEnglish ? 'Projects' : 'Projetos'}
        </ProjectTitle>

        <ProjectIntro>
          {isEnglish
            ? 'Real applications that showcase my proficiency as a Web Developer, covering everything from interface architecture and UI/UX principles to API integration and e-commerce solutions.'
            : 'Aplicações reais que evidenciam minha proficiência como Desenvolvedor Web, abrangendo desde a arquitetura da interface e princípios de UI/UX até a integração com APIs e soluções de e-commerce.'}
        </ProjectIntro>


        <ProjectGrid>
          {/* Card 1 */}
          <ProjectCard>
            <ProjectThumb loading='lazy' src="/ImgSorteadorOnline.png" alt="Meu Sorteador Online" />
            <ProjectContent>
              <h3>{isEnglish ? 'My Online Number Picker' : 'Meu Sorteador Online'}</h3>
              <p>
                {isEnglish ? (
                  <>
                    This application randomly generates a number with a modern look and responsive design.
                    It was created to practice and strengthen <strong>JavaScript programming logic</strong>.
                    More than just a number picker, this project is a hands-on exercise in <strong>logical reasoning</strong> and <strong>DOM manipulation</strong>,
                    developed as part of my studies.
                    <br />
                    <br />
                  </>
                ) : (
                  <>
                    Este aplicativo sorteia um número aleatório com um visual moderno e design responsivo.
                    Criado com o propósito de praticar e consolidar a <strong>lógica de programação em JavaScript</strong>.
                    Mais do que um simples sorteador, este projeto é um exercício prático de <strong>raciocínio lógico</strong> e <strong>manipulação de DOM</strong>,
                    desenvolvido como parte dos meus estudos.
                    <br />
                    <br />
                  </>
                )}
              </p>

              <ProjectTags>#JavaScript #CSS3 #HTML5</ProjectTags>
              <ProjectButtons>
                <ProjectButton as="a" href="https://brunowace.github.io/meu-sorteador-online/" target="_blank" rel="noopener noreferrer" title="Meu Sorteador Online">
                  <FiExternalLink /> {isEnglish ? 'View Project' : 'Ver Projeto'}

                </ProjectButton>
                <ProjectButton as="a" href="https://github.com/BrunoWACE/meu-sorteador-online?tab=readme-ov-file" target="_blank" rel="noopener noreferrer" variant="ghost">
                  <FaGithub /> {isEnglish ? 'Code' : 'Código'}

                </ProjectButton>
              </ProjectButtons>
            </ProjectContent>
          </ProjectCard>

          {/* Card 2 */}
          <ProjectCard>
            <ProjectThumb loading='lazy' src="/ImgJokenPO.png" alt="Game JokenPÔ" />
            <ProjectContent>
              <h3>Game - JokenPÔ</h3>
              <p>
                {isEnglish ? (
                  <>
                    Rock, Paper, Scissors game inspired by Japanese culture, featuring modern visuals and a responsive design.<br />
                    Created to practice and strengthen JavaScript programming logic.
                    More than just a simple game, this project is a hands-on exercise in logical reasoning and DOM manipulation,
                    developed as part of my studies. <br />
                    <br />
                  </>
                ) : (
                  <>
                    Jogo de Jokenpô (Pedra, Papel e Tesoura), inspirado na cultura japonesa com toques visuais modernos e design responsivo.
                    Criado com o propósito de praticar e consolidar a lógica de programação em JavaScript.
                    Mais do que um simples jogo, este projeto é um exercício prático de raciocínio lógico e manipulação de DOM, desenvolvido como parte dos meus estudos.
                  </>
                )}
              </p>


              <ProjectTags>#JavaScript #CSS3 #HTML5</ProjectTags>
              <ProjectButtons>
                <ProjectButton as="a" href="https://brunowace.github.io/meu-game-de-jokenpo/" target="_blank" rel="noopener noreferrer" title="Game - JokenPÔ">
                  <FiExternalLink /> {isEnglish ? 'View Project' : 'Ver Projeto'}

                </ProjectButton>
                <ProjectButton as="a" href="https://github.com/BrunoWACE/meu-game-de-jokenpo?tab=readme-ov-file" target="_blank" rel="noopener noreferrer" variant="ghost">
                  <FaGithub /> {isEnglish ? 'Code' : 'Código'}

                </ProjectButton>
              </ProjectButtons>
            </ProjectContent>
          </ProjectCard>

          {/* Card 3 */}
          <ProjectCard>
            <ProjectThumb loading='lazy' src="/ImgConversorOnline.png" alt="Conversor de Moedas Online" />
            <ProjectContent>
              <h3>{isEnglish ? 'Online Currency Converter' : 'Conversor de Moedas Online'}</h3>
              <p>
                {isEnglish ? (
                  <>
                    Real-time currency conversion project built with JavaScript and a public exchange rate API.
                    Fully responsive and featuring a modern design, this project was created to practice DOM manipulation, event handling,
                    conditional logic, and API calls using <strong>fetch()</strong> — all in a useful and visually appealing application.
                    <br />
                    <br />

                  </>
                ) : (
                  <>
                    Projeto de conversão de moedas em tempo real usando JavaScript e API pública de câmbio,
                    totalmente responsivo e com visual moderno. Este projeto foi criado para praticar a manipulação de DOM,
                    eventos, lógica condicional e chamadas de API com <strong>fetch()</strong> — tudo isso em uma aplicação útil e com interface responsiva e moderna.
                    <br />
                    <br />

                  </>
                )}
              </p>

              <ProjectTags>#API #JavaScript #CSS3 #HTML5</ProjectTags>
              <ProjectButtons>
                <ProjectButton as="a" href="https://brunowace.github.io/conversor-de-moedas/" target="_blank" rel="noopener noreferrer" title="Conversor de Moedas Online">
                  <FiExternalLink /> {isEnglish ? 'View Project' : 'Ver Projeto'}

                </ProjectButton>
                <ProjectButton as="a" href="https://github.com/BrunoWACE/conversor-de-moedas?tab=readme-ov-file" target="_blank" rel="noopener noreferrer" variant="ghost">
                  <FaGithub /> {isEnglish ? 'Code' : 'Código'}

                </ProjectButton>
              </ProjectButtons>
            </ProjectContent>
          </ProjectCard>

          {/* Card 4 */}
          <ProjectCard>
            <ProjectThumb loading='lazy' src="/ImgSiteDeJP.png" alt="Site - Benkyou Now Online" />
            <ProjectContent>
              <h3>Website - Benkyou Now Online</h3>
              <p>
                {isEnglish ? (
                  <>
                    Website developed for the language school <strong>Benkyou Now Online</strong>, specialized in teaching the Japanese language.
                    The project was built with a focus on <strong>performance</strong>, <strong>responsiveness</strong>, and <strong>user experience</strong>.
                    The platform was integrated with the <strong>Hotmart</strong> payment system, ensuring transaction security and easy access to courses.
                    <br />
                    <br />

                  </>
                ) : (
                  <>
                    Website desenvolvido para a escola de idiomas <strong>Benkyou Now Online</strong>, especializada no ensino da língua japonesa.
                    O projeto foi construído com foco em <strong>performance</strong>, <strong>responsividade</strong> e <strong>experiência do usuário</strong>.
                    A plataforma foi integrada ao sistema de pagamentos da <strong>Hotmart</strong>, garantindo segurança nas transações e facilidade de acesso aos cursos.
                    <br />
                    <br />
                  </>
                )}
              </p>

              <ProjectTags>#JavaScript #CSS3 #HTML5</ProjectTags>
              <ProjectButtons>
                <ProjectButton as="a" href="https://benkyounowonline.com.br" target="_blank" rel="noopener noreferrer" title="Website - Benkyou Now Online">
                  <FiExternalLink /> {isEnglish ? 'View Project' : 'Ver Projeto'}

                </ProjectButton>
              </ProjectButtons>
            </ProjectContent>
          </ProjectCard>
        </ProjectGrid>
      </ProjectSection>

      {/* === SEÇÃO CERTIFICADOS === */}
      <ProjectSection
        id="Certificados"
        ref={certRef}
        className={certVisible ? "visible" : ""}
      >
        <ProjectTitle>
          {isEnglish ? 'Certificates' : 'Certificados'}
        </ProjectTitle>

        <ProjectIntro>
          {isEnglish
            ? 'Each certificate represents the mastery of essential technologies and practices that strengthen my performance as a Web Developer.'
            : 'Cada certificado representa o domínio de tecnologias e práticas essenciais que fortalecem minha atuação como Desenvolvedor Web.'}
        </ProjectIntro>

        <CertificateGrid id="Certificate">
          {/* Certificado 1 */}
          <CertificateCard>
            <CertificateThumb
              loading="lazy"
              src="/01Certificado.png"
              alt={isEnglish ? "Certificate - HTML5" : "Certificado - HTML5"}
            />
            <ProjectContent>
              <h3>{isEnglish ? 'Certificate - HTML5' : 'Certificado - HTML5'}</h3>
              <br />
              <p>
                {isEnglish
                  ? <>Issued by <strong>DevClub</strong> • <strong>2025</strong></>
                  : <>Emitido por <strong>DevClub</strong> • <strong>2025</strong></>}
              </p>
              <ProjectTags>#HTML5</ProjectTags>

              <ProjectButtons>
                <ProjectButton
                  as="a"
                  href="https://aulas.devclub.com.br/verify/7938877997145f50818a0d0c7cde192cc9496890"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={isEnglish ? 'View Credential' : 'Exibir Credencial'}
                  style={{ fontSize: '1rem', minWidth: '175px' }}
                >
                  <FiExternalLink /> {isEnglish ? 'View Credential' : 'Exibir Credencial'}
                </ProjectButton>
              </ProjectButtons>
            </ProjectContent>
          </CertificateCard>

          {/* Certificado 2 */}
          <CertificateCard>
            <CertificateThumb
              loading="lazy"
              src="/02Certificado.png"
              alt={isEnglish ? 'Certificate - CSS3' : 'Certificado - CSS3'}
            />
            <ProjectContent>
              <h3>{isEnglish ? 'Certificate - CSS3' : 'Certificado - CSS3'}</h3>
              <br />
              <p>
                {isEnglish
                  ? <>Issued by <strong>DevClub</strong> • <strong>2025</strong></>
                  : <>Emitido por <strong>DevClub</strong> • <strong>2025</strong></>}
              </p>
              <ProjectTags>#CSS3</ProjectTags>

              <ProjectButtons>
                <ProjectButton
                  as="a"
                  href="https://aulas.devclub.com.br/verify/8642351e2621dbd2b6035f2ab6fcf9884d12a735"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={isEnglish ? "View certificate" : "Ver certificado"}
                  style={{ fontSize: '1rem', minWidth: '175px' }}
                >
                  <FiExternalLink /> {isEnglish ? 'View Credential' : 'Exibir Credencial'}
                </ProjectButton>
              </ProjectButtons>
            </ProjectContent>
          </CertificateCard>

          {/* Certificado 3 */}
          <CertificateCard>
            <CertificateThumb
              loading="lazy"
              src="/03Certificado.png"
              alt={isEnglish ? 'Certificate - git & GitHub' : 'Certificado - git & GitHub'}
            />
            <ProjectContent>
              <h3>{isEnglish ? 'Certificate - git & GitHub' : 'Certificado - git & GitHub'}</h3>
              <br />
              <p>
                {isEnglish
                  ? <>Issued by <strong>DevClub</strong> • <strong>2025</strong></>
                  : <>Emitido por <strong>DevClub</strong> • <strong>2025</strong></>}
              </p>
              <ProjectTags>#git #GitHub</ProjectTags>

              <ProjectButtons>
                <ProjectButton
                  as="a"
                  href="https://aulas.devclub.com.br/verify/c10be78ab5eaf87512ee837d32f71c9c3eaa446f"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={isEnglish ? "View certificate" : "Ver certificado"}
                  style={{ fontSize: '1rem', minWidth: '175px' }}
                >
                  <FiExternalLink /> {isEnglish ? 'View Credential' : 'Exibir Credencial'}
                </ProjectButton>
              </ProjectButtons>
            </ProjectContent>
          </CertificateCard>

          {/* Certificado 4 */}
          <CertificateCard>
            <CertificateThumb
              loading="lazy"
              src="/04Certificado.png"
              alt={isEnglish ? 'Certificate - JavaScript' : 'Certificado - Javascript'}
            />
            <ProjectContent>
              <h3>{isEnglish ? 'Certificate - JavaScript' : 'Certificado - Javascript'}</h3>
              <br />
              <p>
                {isEnglish
                  ? <>Issued by <strong>DevClub</strong> • <strong>2025</strong></>
                  : <>Emitido por <strong>DevClub</strong> • <strong>2025</strong></>}
              </p>
              <ProjectTags>#JavaScript</ProjectTags>

              <ProjectButtons>
                <ProjectButton
                  as="a"
                  href="https://aulas.devclub.com.br/verify/c53ef755caba1d483f02fc5fa65e9f7e3487fb8c"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={isEnglish ? "View certificate" : "Ver certificado"}
                  style={{ fontSize: '1rem', minWidth: '175px' }}
                >
                  <FiExternalLink /> {isEnglish ? 'View Credential' : 'Exibir Credencial'}
                </ProjectButton>
              </ProjectButtons>
            </ProjectContent>
          </CertificateCard>

          {/* Certificado 5 */}
          <CertificateCard>
            <CertificateThumb
              loading="lazy"
              src="/05Certificado.png"
              alt={isEnglish ? 'Certificate - Node' : 'Certificado - Node'}
            />
            <ProjectContent>
              <h3>{isEnglish ? 'Certificate - Node' : 'Certificado - Node'}</h3>
              <br />
              <p>
                {isEnglish
                  ? <>Issued by <strong>DevClub</strong> • <strong>2025</strong></>
                  : <>Emitido por <strong>DevClub</strong> • <strong>2025</strong></>}
              </p>
              <ProjectTags>#Node</ProjectTags>

              <ProjectButtons>
                <ProjectButton
                  as="a"
                  href="https://aulas.devclub.com.br/verify/35ed9678beace3ce824db27f8dbccfdd80f8774a"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={isEnglish ? "View certificate" : "Ver certificado"}
                  style={{ fontSize: '1rem', minWidth: '175px' }}
                >
                  <FiExternalLink /> {isEnglish ? 'View Credential' : 'Exibir Credencial'}
                </ProjectButton>
              </ProjectButtons>
            </ProjectContent>
          </CertificateCard>

          {/* Certificado 6 */}
          <CertificateCard>
            <CertificateThumb
              loading="lazy"
              src="/06Certificado.png"
              alt={isEnglish ? 'Certificate - JavaScript Advanced' : 'Certificado - JavaScript Avançado'}
            />
            <ProjectContent>
              <h3>{isEnglish ? 'Certificate - JavaScript Advanced' : 'Certificado - JavaScript Avançado'}</h3>
              <p>
                {isEnglish
                  ? <>Issued by <strong>DevClub</strong> • <strong>2025</strong></>
                  : <>Emitido por <strong>DevClub</strong> • <strong>2025</strong></>}
              </p>
              <ProjectTags>#JavaScriptAdvanced</ProjectTags>

              <ProjectButtons>
                <ProjectButton
                  as="a"
                  href="https://aulas.devclub.com.br/verify/2e0584450983e791a15c9072c67bae7114c6633b"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={isEnglish ? "View certificate" : "Ver certificado"}
                  style={{ fontSize: '1rem', minWidth: '175px' }}

                >
                  <FiExternalLink /> {isEnglish ? 'View Credential' : 'Exibir Credencial'}
                </ProjectButton>
              </ProjectButtons>
            </ProjectContent>
          </CertificateCard>

          {/* Certificado 7 */}
          <CertificateCard>
            <CertificateThumb
              loading="lazy"
              src="/07Certificado.png"
              alt={isEnglish ? 'Certificate - Project Nike Air' : 'Certificado - Projeto Nike Air'}
            />
            <ProjectContent>
              <h3>{isEnglish ? 'Certificate - Project Nike Air' : 'Certificado - Projeto Nike Air'}</h3>
              <br />
              <p>
                {isEnglish
                  ? <>Issued by <strong>DevClub</strong> • <strong>2025</strong></>
                  : <>Emitido por <strong>DevClub</strong> • <strong>2025</strong></>}
              </p>
              <ProjectTags>#HTML5 #CSS3 #JavaScript</ProjectTags>

              <ProjectButtons>
                <ProjectButton
                  as="a"
                  href="https://aulas.devclub.com.br/verify/970516c7d82dff36c1a082d06bfba500a9b19462"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={isEnglish ? "View certificate" : "Ver certificado"}
                  style={{ fontSize: '1rem', minWidth: '175px' }}
                >
                  <FiExternalLink /> {isEnglish ? 'View Credential' : 'Exibir Credencial'}
                </ProjectButton>
              </ProjectButtons>
            </ProjectContent>
          </CertificateCard>


        </CertificateGrid>
      </ProjectSection>


      {/* === SEÇÃO CONTATO === */}
      <ContactSection id="Contato">
        <ContactInner>
          <ContactText>
            <h2>{isEnglish ? 'Get in Touch' : 'Entre em Contato'}</h2>

            <p>
              {isEnglish
                ? <>If you’re looking for a <strong>dedicated professional</strong> passionate about technology, whether for <strong>freelance projects</strong>, partnerships, or new opportunities, feel free to send your message using the form beside.</>
                : <>Se você procura um <strong>profissional comprometido</strong> e apaixonado por tecnologia, seja para <strong>projetos freelancers</strong>, parcerias ou oportunidades de trabalho, envie sua mensagem pelo formulário ao lado.</>}

            </p>

            <p>
              {isEnglish
                ? 'I will get back to you as soon as possible.'
                : 'Retornarei o mais breve possível.'}
            </p>
          </ContactText>


          {/* === FORMULÁRIO DE CONTATO === */}
          <ContactForm onSubmit={handleContactSubmit} noValidate>
            {/* Honeypot anti-bot */}
            <input type="text" name="_honey" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />
            {/* (opcional) já adicionamos no handler, mas pode deixar aqui também */}
            <input type="hidden" name="_captcha" value="false" />

            <input
              type="text"
              name="name"
              placeholder={isEnglish ? "Enter your full name" : "Digite seu nome completo"}
              autoComplete="name"
              required
              onInvalid={handleInvalid}
              onInput={handleInput}
            />

            <input
              type="email"
              name="email"
              placeholder={isEnglish ? "Enter your email address" : "Digite seu e-mail"}
              autoComplete="email"
              required
              onInvalid={handleInvalid}
              onInput={handleInput}
            />

            <input
              type="text"
              name="subject"
              placeholder={isEnglish ? "Enter the subject" : "Digite o assunto"}
              autoComplete="on"
              required
              onInvalid={handleInvalid}
              onInput={handleInput}
            />

            <textarea
              name="message"
              rows="5"
              placeholder={isEnglish ? "Write your message here" : "Digite o motivo do contato"}
              required
              onInvalid={handleInvalid}
              onInput={handleInput}
            />

            <ProjectButton as="button" type="submit" style={{ fontSize: '1.05rem', minWidth: '207px' }}>
              <FiSend /> {isEnglish ? 'Send Message' : 'Enviar Mensagem'}
            </ProjectButton>
          </ContactForm>


        </ContactInner>
        <Footer>
          <div className="footer-content">
            <SocialIcons id="FooterIcons">
              <a aria-label="LinkedIn de Bruno" href="https://www.linkedin.com/in/brunowace-ferreira/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a aria-label="Enviar e-mail para Bruno" href="mailto:contato@brunodev-ferreira.com.br"><MdEmail /></a>
              <a aria-label="GitHub de Bruno" href="https://github.com/BrunoWACE" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </SocialIcons>

            <p className="copyright">
              &copy; <b>{isEnglish ? '2025 BrunoWACE. All rights reserved.' : '2025 BrunoWACE. Todos os direitos reservados.'}</b>
            </p>
          </div>
        </Footer>


      </ContactSection>


      {showToast && (
        <Toast role="status" aria-live="polite">
          ✅ {isEnglish ? 'Message sent successfully!' : 'Mensagem enviada com sucesso!'}
          <ToastClose
            onClick={() => setShowToast(false)}
            aria-label={isEnglish ? 'Close alert' : 'Fechar alerta'}
          >
            ×
          </ToastClose>
        </Toast>
      )}


    </>
  );
}

export default App;
