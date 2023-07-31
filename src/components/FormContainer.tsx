import React, { ChangeEvent } from "react";

interface Props {
  inputMatrix: string;
  setInputMatrix: (value: string) => void;
  handleRotate: () => void;
}

export const FormContainer: React.FC<Props> = ({
  inputMatrix,
  setInputMatrix,
  handleRotate,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const validInputValue = inputValue.replace(/[^\[\]0-9,]/g, "");
    setInputMatrix(validInputValue);
  };

  return (
    <div className="flex items-center justify-center w-full gap-20 px-20 mx-auto mb-20 max-w-[900px]">
      <label className="text-base">Ingresar matriz</label>
      <input
        className="w-full px-4 py-2 text-base border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none max-w-[350px]"
        type="text"
        value={inputMatrix}
        onChange={handleChange}
        placeholder="Ingrese la matriz en formato JSON"
        pattern="[\[\]0-9,]*"
      />
      <button
        className="px-8 py-2 text-base text-black bg-gray-200 border-none rounded-md cursor-pointer hover:bg-gray-300"
        onClick={handleRotate}
      >
        Rotar
      </button>
    </div>
  );
};
