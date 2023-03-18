import { Button } from 'components/button';
import { Container } from 'components/container/styles';
import { DetailsCard } from 'components/detailsCard';
import { DetailsPageWrapper } from 'modules/details/styles';
import { useNavigate } from 'react-router-dom';

export const Details = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <Container>
      <DetailsPageWrapper>
        <Button text="Back" handleClick={goBack} />
        <DetailsCard />
      </DetailsPageWrapper>
    </Container>
  );
};
