import React, { useEffect, useState } from 'react';

import { Container } from 'components/container/styles';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

import { HeaderContainer, SwitchMode, Title, Wrapper } from './styles';

export const Header = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <HeaderContainer>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <SwitchMode onClick={changeTheme}>
            {theme === 'light' ? <IoMoon /> : <IoMoonOutline />}
            <span>{theme} Theme</span>
          </SwitchMode>
        </Wrapper>
      </Container>
    </HeaderContainer>
  );
};
