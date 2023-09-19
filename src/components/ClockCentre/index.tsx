import { useEffect } from 'react';
import styled from 'styled-components';
import ClockHand from '../ClockHand';
import { useSelector, useDispatch } from 'react-redux';
import { updateCurrentTime, TimeStateInterface } from '../../redux/time';

const ClockOuterCentre = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5vw;
  height: 5vw;
  border-radius: 50%;
  background-color: #225db5;
  position: relative;
  left: 12.5vw;
  top: 12.5vw;
  flex-direction: column;
  position: relative;
`;

const ClockCentre = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5vw;
  height: 2.5vw;
  border-radius: 50%;
  background-color: #ffffff;
  position: relative;
  left: 13.7vw;
  top: 8.7vw;
  flex-direction: column;
  position: relative;
`;

const index = () => {
  const dispatch = useDispatch();
  const timeData = useSelector(
    (state: TimeStateInterface) => state.timeSlice?.currentTime
  );

  // Update the current time every second using useEffect by running the updateCurrentTime reducer
  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(updateCurrentTime()); // Dispatch the action with the new timestamp
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [dispatch]);

  // Format the time as hours, minutes, and seconds.
  // If timeData is undefined, default to 0 degrees.
  const seconds = timeData ? (timeData.getSeconds() / 60) * 360 : 0; // Calculates angle of second hand
  const minutes = timeData ? (timeData.getMinutes() / 60) * 360 : 0; // Calculates angle of minute hand
  const hours = timeData
    ? (((timeData.getHours() % 12) + minutes / 360) * 360) / 12
    : 0; // Additional calculation to get angle of hour hand rather than it always pointing to the exact hour

  return (
    <>
      <ClockOuterCentre>
        <ClockHand
          handWidth={0.4}
          handHeight={10}
          handColour="#ff950a"
          handAngle={minutes}
        />
        <ClockHand
          handWidth={0.8}
          handHeight={7}
          handColour="#ff950a"
          handAngle={hours}
        />
        <ClockHand
          handWidth={0.2}
          handHeight={12}
          handColour="#ffffff"
          handAngle={seconds}
        />
      </ClockOuterCentre>
      <ClockCentre />
    </>
  );
};

export default index;
