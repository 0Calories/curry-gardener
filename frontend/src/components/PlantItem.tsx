import styled from '@emotion/styled';
import { PiPottedPlantBold } from 'react-icons/pi';

export function PlantItem() {
  return (
    <PlantItemContainer>
      <PlantHeader>
        <PiPottedPlantBold size={36} />
        <PlantName>Plant #1</PlantName>
      </PlantHeader>
    </PlantItemContainer>
  );
}

const PlantItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 20px;
  background-color: #1a1a1a;
  border-radius: 8px;
  margin: 16px;
`;

const PlantHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PlantName = styled.h3`
  margin-left: 0.5em;
`;
