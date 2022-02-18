import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Img } from './HeroStyles';

import Link from 'next/link';


const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Nauman Iftikhar's Portfolio.<br />
        <Img src="https://scontent.fuet2-1.fna.fbcdn.net/v/t1.6435-9/87616120_557621668294952_283279107788111872_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFxbUOIrsg4UTF5l76vFWZg5sfGzJ0fpFfmx8bMnR-kV17xkqI9bsaQdYnbSpvGpzq2XusnmjBms0zKqUHUR5RP&_nc_ohc=5fFFrh877RYAX-iYh-s&tn=ZiSOhjjRn5f7llhH&_nc_ht=scontent.fuet2-1.fna&oh=00_AT_prOZwC5GKD1H5cBjooprllQ7UtjHAE8Ofn2mZD9LuMw&oe=623545DE" />
      </SectionTitle>
      <SectionText>
        <hr />
        <h1 style={{ fontSize: '40px' }}>Hello! I am a React js Developer.</h1>
        <p> A React js Developer who started his journey with React in Feb, 2022. Still striving hard to improve my skills
          everyday. I am really passionate about React js and am polishing my skills everyday.
          <br />
          I have done some cool projects in React which I showcased on my website. Please refer to Project Section of my Web.
        </p>
      </SectionText>

      <Link href="#projects">
        <Button>
          Explore Projects
        </Button>
      </Link>

    </LeftSection>
  </Section>
);

export default Hero;