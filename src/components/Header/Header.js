import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <div>
    <Container>
      <Div1>
          <Link href="/">
              <a style={{display:"flex", alignItems:"center", color:'white', marginBottom:"20px"}}>
                  <DiCssdeck size="3rem "/> <Span>Nauman Iftikhar</Span>
              </a>
          </Link>
      </Div1>
      <Div2>
            <li>
              <Link href="#projects">
                  <NavLink>Projects</NavLink>
              </Link>
            </li>

            <li>
              <Link href="#tech">
                  <NavLink>Technologies</NavLink>
              </Link>
            </li>

            <li>
              <Link href="#about">
                  <NavLink>About</NavLink>
              </Link>
            </li>

            <li>
              <Link href="#contact">
                  <NavLink>Contact Me</NavLink>
              </Link>
            </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/NaumanSatti">
          <AiFillGithub size="3rem"/>
        </SocialIcons>

        <SocialIcons href="https://pk.linkedin.com/in/nauman-iftikhar-satti-889a181a5?trk=public_profile_browsemap_profile-result-card_result-card_full-click">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>

        <SocialIcons href="https://www.facebook.com/nauman.iftikharsatti">
          <AiFillFacebook size="3rem"/>
        </SocialIcons>

        <SocialIcons href="https://www.instagram.com/naumaniftikharsatti/">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
  </div>
);

export default Header;
