import styled from '@emotion/styled';
import { PlantItem } from './PlantItem';

export function PlantList() {
  return (
    <PlantListContainer>
      <Title>My Plants</Title>
      <PlantItem />
    </PlantListContainer>
  );
}

const PlantListContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
  margin: 16px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;
