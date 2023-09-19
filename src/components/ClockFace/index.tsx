import styled from 'styled-components';
import HourNumber from '../HourNumber';
import ClockCentre from '../ClockCentre';
import { hourPositionHandler } from '../../utils/hourPositionHandler';
import Tooltip from '../Tooltip';
import { useState } from 'react';

const ClockFace = styled.div`
  width: 30vw;
  height: 30vw;
  border-radius: 50%;
  -webkit-box-shadow: 0px 0px 87px 0px rgba(45, 255, 196, 0.56);
  -moz-box-shadow: 0px 0px 87px 0px rgba(45, 255, 196, 0.56);
  box-shadow: 0px 0px 87px 0px rgba(45, 255, 196, 0.56);
`;

const ClockHours = styled.div`
  // Hour numbers are slightly off, so this adjusts them
  position: relative;
  left: -8px;
  top: -10px;
`;

const index = () => {
  // Creates an array of numbers to use as the 12 hours on the clock
  const hours = Array.from({ length: 12 }, (_, index) => index + 1);

  // State to track whether the mouse is over the ClockFace
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    // onMouse events to track the users cursor and update the isMouseOver state if it is over the Clock face
    <ClockFace
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <ClockHours>
        {hours.map((hour) => (
          <HourNumber
            key={hour}
            hour={hour}
            position={hourPositionHandler(hour)}
          />
        ))}
      </ClockHours>
      <ClockCentre />
      {/* Show Tooltip if mouse is over Clock */}
      {isMouseOver && <Tooltip />}
    </ClockFace>
  );
};

export default index;
