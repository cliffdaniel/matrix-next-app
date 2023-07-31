import useMatrixRotation from '../hooks/useMatrixRotation';
import { FormContainer } from '../components/FormContainer';
import { DiceContainer } from '../components/DiceContainer';

const RotatePage = () => {
  const { inputMatrix, setInputMatrix, rotatedMatrix, handleRotate } = useMatrixRotation();

  return (
    <div className="p-20">
      <FormContainer
        inputMatrix={inputMatrix}
        setInputMatrix={setInputMatrix}
        handleRotate={handleRotate}
      />
      <DiceContainer rotatedMatrix={rotatedMatrix} />
    </div>
  );
};

export default RotatePage;

