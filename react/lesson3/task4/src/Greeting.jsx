import React from 'react';

const Greeting = (props) => {
  const userYears = Math.floor(
    (new Date() - props.userData.birthDate) / 1000 / 60 / 60 / 24 / 365
  );
  return (
    <div className='greeting'>{`My name is ${props.userData.firstName} ${props.userData.lastName}. I'm ${userYears} years old`}</div>
  );
};

export default Greeting;
