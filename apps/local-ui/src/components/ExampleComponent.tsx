import React from 'react';

interface ExampleComponentProps {
  text: string;
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({ text }) => {
  return <div>{text}</div>;
};

export default ExampleComponent;