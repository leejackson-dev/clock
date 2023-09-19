import styled from 'styled-components';

interface ClockHandInterface {
  handWidth: number;
  handHeight: number;
  handColour: string;
  handAngle: number;
}

// We use prop values within our styled component
const ClockHand = styled.div<ClockHandInterface>`
  width: ${({ handWidth }) => `${handWidth}vw`};
  min-height: ${({ handHeight }) =>
    `${handHeight}vw`}; // Using vw to make hands responsive
  background-color: ${({ handColour }) => handColour};
  transform: ${({ handAngle }) =>
    `translate(-50%) rotate(${handAngle}deg)`}; // Rotates hand
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform-origin: bottom;
`;

const index = ({
  handWidth,
  handHeight,
  handColour,
  handAngle,
}: ClockHandInterface) => {
  return (
    <ClockHand
      handWidth={handWidth}
      handHeight={handHeight}
      handColour={handColour}
      handAngle={handAngle}
    />
  );
};

export default index;
