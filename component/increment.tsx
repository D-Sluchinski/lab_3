import React from 'react';
import { Button } from 'react-native';

interface IncrementButtonProps {
  onIncrement: () => void;
}

const IncrementButton: React.FC<IncrementButtonProps> = ({ onIncrement }) => {
  return <Button title="Increment" onPress={onIncrement} />;
};

export default IncrementButton;
