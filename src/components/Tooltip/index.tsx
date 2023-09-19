import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { TimeStateInterface } from '../../redux/time';

// Styled component for the Tooltip
const Tooltip = styled.div`
  width: 100px;
  height: 20px;
  background-color: #2dffc4;
  position: absolute;
  pointer-events: none;
  padding: 10px;
  display: flex;
  place-items: center;
  place-content: center;
  border-radius: 5px;
`;

const Index = () => {
  const timeData = useSelector(
    (state: TimeStateInterface) => state.timeSlice?.currentTime
  );

  // State to track the position of the Tooltip
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    // Attempt to get the Tooltip element by its ID
    const tooltipElement = document.getElementById('tooltip');

    if (tooltipElement) {
      // Event handler for mouse movement
      const handleMouseMove = (e: { clientX: number; clientY: number }) => {
        const x = e.clientX + 5; // Add 5 to make it top right of cursor
        const y = e.clientY - 39; // Add 5 to make it top right of cursor
        // Update the Tooltip position based on mouse coordinates
        setTooltipPosition({ top: y, left: x });
      };

      // Event handler for mouse entering the Tooltip
      const handleMouseEnter = () => {
        // Display the Tooltip when the mouse enters
        tooltipElement.style.display = 'block';
      };

      // Event handler for mouse leaving the Tooltip
      const handleMouseLeave = () => {
        // Hide the Tooltip when the mouse leaves
        tooltipElement.style.display = 'none';
      };

      // Add event listeners for mouse movement, enter, and leave
      document.addEventListener('mousemove', handleMouseMove);
      tooltipElement.addEventListener('mouseenter', handleMouseEnter);
      tooltipElement.addEventListener('mouseleave', handleMouseLeave);

      // Clean up event listeners when the component unmounts
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        tooltipElement.removeEventListener('mouseenter', handleMouseEnter);
        tooltipElement.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  // Get the values from timeData. If timeData is undefined, default to 0
  const hours = timeData ? timeData.getHours() : 0;
  // Add a 0 if the value is under 10 (So it reads 9:07:21)
  const minutes = timeData
    ? timeData.getMinutes().toString().padStart(2, '0')
    : '00';
  // Add a 0 if the value is under 10 (So it reads 9:07:01)
  const seconds = timeData
    ? timeData.getSeconds().toString().padStart(2, '0')
    : '00';

  // Determine whether it's AM or PM
  const period = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  const hours12 = hours % 12 || 12;

  const formattedTime = `${hours12}:${minutes}:${seconds} ${period}`;

  return (
    <>
      <Tooltip
        id="tooltip"
        style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
      >
        {formattedTime}
      </Tooltip>
    </>
  );
};

export default Index;
