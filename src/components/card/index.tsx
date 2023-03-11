import { CardWrapper, Title, Image, Description, Subtitle } from './styles';

export const Card = () => {
  return (
    <CardWrapper>
      <Image />
      <Description>
        <Title>Germany</Title>
        <Subtitle>Population:</Subtitle>
        <Subtitle>Region:</Subtitle>
        <Subtitle>Capital:</Subtitle>
      </Description>
    </CardWrapper>
  );
};
