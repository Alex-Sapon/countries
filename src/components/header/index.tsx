import React, { useEffect } from 'react';

import { Container } from 'components/container/styles';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { filterCountries, changeTheme } from 'store/actions';
import { selectAppTheme } from 'store/selectors';

import { HeaderContainer, SwitchMode, Title, Wrapper } from './styles';

export const Header = () => {
  const theme = useSelector(selectAppTheme);

  const dispatch = useDispatch();

  const handleChangeTheme = () => dispatch(changeTheme());

  const goHome = () => dispatch(filterCountries('', ''));

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <HeaderContainer>
      <Container>
        <Wrapper>
          <Title onClick={goHome}>Where is the world?</Title>
          <SwitchMode onClick={handleChangeTheme}>
            {theme === 'light' ? <IoMoon /> : <IoMoonOutline />}
            <span>{theme} Mode</span>
          </SwitchMode>
        </Wrapper>
      </Container>
    </HeaderContainer>
  );
};
