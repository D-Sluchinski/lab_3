<<<<<<< Updated upstream
=======
import React from 'react';
import { Button } from 'react-native';
>>>>>>> Stashed changes

interface DecrementButtonProps {
  onDecrement: () => void;
}

<<<<<<< Updated upstream
// const decrementing = () => {

//     const [num, setNumber] = useState();
    
// }
=======
const DecrementButton: React.FC<DecrementButtonProps> = ({ onDecrement }) => {
  return <Button title="Decrement" onPress={onDecrement} />;
};

export default DecrementButton;
>>>>>>> Stashed changes
