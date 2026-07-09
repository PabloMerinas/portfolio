import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import { YinYang } from "./AllSvgs";
import BigTitlte from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};

  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 48em) {
    height: auto;
    min-height: 100vh;
    min-height: 100dvh;
    padding: 8rem 0 3rem;
  }
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  color: white;

  /* En móvil el truco de "scroll vertical mueve las tarjetas en horizontal"
     no encaja con el gesto táctil esperado (deslizar a los lados). Se
     sustituye por scroll horizontal nativo con snap. */
  @media (max-width: 48em) {
    position: relative;
    top: auto;
    left: 0;
    height: auto;
    width: 100%;
    padding: 0 1.5rem;
    box-sizing: border-box;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 1.25rem;

    & > li {
      scroll-snap-align: start;
      flex-shrink: 0;
      margin-right: 0;
    }
  }
`;
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      // En móvil las tarjetas usan scroll horizontal nativo (ver media
      // query de Main), así que el scroll vertical no debe moverlas.
      if (window.innerWidth <= 768) return;

      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (yinyang.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <div id='main-container'>
        <Box>
          <LogoComponent theme="dark" />
          <SocialIcons theme="dark" />
          <PowerButton bgColor={'white'} />

          <Main ref={ref} variants={container} initial="hidden" animate="show">
            {Work.map((d) => (
              <Card key={d.id} data={d} />
            ))}
          </Main>
          <Rotate ref={yinyang}>
            <YinYang width={80} height={80} fill={DarkTheme.text} />
          </Rotate>

          <BigTitlte text="PROYECTOS" top="10%" right="20%" />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default WorkPage;
