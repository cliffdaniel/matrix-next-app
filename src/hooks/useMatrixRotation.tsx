import { useState, useMemo, useCallback } from "react";

export type Matrix = number[][];

interface UseMatrixRotationHook {
  inputMatrix: string;
  setInputMatrix: React.Dispatch<React.SetStateAction<string>>;
  rotatedMatrix: Matrix;
  handleRotate: () => void;
}

const useMatrixRotation = (): UseMatrixRotationHook => {
  const [inputMatrix, setInputMatrix] = useState<string>("");
  const [rotatedMatrix, setRotatedMatrix] = useState<Matrix>([]);

  const rotateMatrix = (matrix: Matrix): Matrix => {
    const n = matrix.length;
    const result = new Array(n).fill(null).map(() => new Array(n).fill({ value: 0 }));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        result[n - 1 - j][i] = matrix[i][j];
      }
    }

    return result;
  };

  const handleRotate = useCallback(() => {
    try {
      const parsedMatrix: Matrix = JSON.parse(inputMatrix);

      if (!Array.isArray(parsedMatrix) || parsedMatrix.length === 0) {
        throw new Error("Debe ingresar una matriz válida.");
      }

      for (const row of parsedMatrix) {
        if (!Array.isArray(row) || row.length !== parsedMatrix.length) {
          throw new Error("La matriz debe ser cuadrada (NxN).");
        }
      }

      const rotated: Matrix = rotateMatrix(parsedMatrix);
      setRotatedMatrix(rotated);
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    }
  }, [inputMatrix]);

  const memoizedInputMatrix = useMemo(() => inputMatrix, [inputMatrix]);
  const memoizedHandleRotate = useCallback(handleRotate, [handleRotate]);

  return {
    inputMatrix: memoizedInputMatrix,
    setInputMatrix,
    rotatedMatrix,
    handleRotate: memoizedHandleRotate,
  };
};

export default useMatrixRotation;
