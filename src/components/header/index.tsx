import React, { useEffect, useState } from 'react';

import { Container } from 'components/container/styles';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { filterCountries } from 'store/actions';

import { HeaderContainer, SwitchMode, Title, Wrapper } from './styles';

export const Header = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const dispatch = useDispatch();

  const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const goHome = () => dispatch(filterCountries('', ''));

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <HeaderContainer>
      <Container>
        <Wrapper>
          <Title onClick={goHome}>Where is the world?</Title>
          <SwitchMode onClick={changeTheme}>
            {theme === 'light' ? <IoMoon /> : <IoMoonOutline />}
            <span>{theme} Mode</span>
          </SwitchMode>
        </Wrapper>
      </Container>
    </HeaderContainer>
  );
};
