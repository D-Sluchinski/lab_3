import React from 'react';
import { Button, TouchableOpacity } from 'react-native';

type DecrementProps = {value: number; setValue: (value: number) => void};

const Decrement: React.FC<DecrementProps> = ({value, setValue}) => {

    const handleDecrement =() => {
        setValue(value-1);
    }


  return (
  <TouchableOpacity>
    <Button title="Decrement" onPress={handleDecrement} />
  </TouchableOpacity>
  );
}

export default Decrement;
