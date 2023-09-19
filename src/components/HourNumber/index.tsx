import styled from 'styled-components';

interface HourNumberInterface {
  hour: number;
  position: {
    x: number;
    y: number;
  };
}

// We use prop values within our styled component
const HourNumber = styled.div<HourNumberInterface>`
  color: ${({ hour }) =>
    hour % 3 === 0
      ? '#1c56b4'
      : '#6dabe7'}; // Quarter hours are a different colour
  position: absolute;
  left: ${({ position }) =>
    `${position.x}vw`}; // Uses the position.x prop to calculate position based on users view width
  top: ${({ position }) =>
    `${position.y}vw`}; // Uses the position.y prop to calculate position based on users view width
  user-select: none;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Index = ({ hour, position }: HourNumberInterface) => {
  return (
    <HourNumber hour={hour} position={position}>
      {hour}
    </HourNumber>
  );
};

export default Index;
