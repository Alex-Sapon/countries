import styled from 'styled-components';

export const ControlsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 250px;
  padding-top: 130px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 450px) {
    padding-top: 110px;
  }
`;
