import { ButtonStyled, Svg, Text } from './styles';

type ButtonType = {
  text: string;
  handleClick: () => void;
};

export const Button = ({ text, handleClick }: ButtonType) => {
  return (
    <ButtonStyled onClick={handleClick}>
      <Svg />
      <Text>{text}</Text>
    </ButtonStyled>
  );
};
