import styled from '@emotion/styled';

export function PlantList() {
  return (
    <PlantListContainer>
      <Title>My Plants</Title>
      {/* Your plant list content */}
    </PlantListContainer>
  );
}

const PlantListContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin: 16px;
`;

const Title = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 16px;
`;
