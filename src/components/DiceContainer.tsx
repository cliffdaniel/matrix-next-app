import React from "react";

interface Props {
  rotatedMatrix: number[][];
}

export const DiceContainer: React.FC<Props> = ({ rotatedMatrix }) => {
  const renderDice = (matrix: number[][]) => {
    try {
      const parsedMatrix = JSON.parse(JSON.stringify(matrix));
      if (!Array.isArray(parsedMatrix) || parsedMatrix.length === 0) {
        return null;
      }

      const numRows = parsedMatrix.length;
      const numCols = parsedMatrix[0].length;

      const filledMatrix = parsedMatrix
        .slice(0, numRows)
        .map((row) => [
          ...row.slice(0, numCols),
          ...Array(numCols - row.length).fill(null),
        ]);

      return (
        <div className="flex flex-col flex-wrap justify-center">
          {filledMatrix.map((row, rowIndex) => (
            <div className="flex m-0" key={`row-${rowIndex}`}>
              {row.map((value, colIndex) => (
                <div
                  className="flex items-center justify-center m-0 font-bold border-2 border-gray-700 w-[100px] h-[100px]"
                  key={`dice-${rowIndex}-${colIndex}`}
                >
                  {value}
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    } catch (error) {
      return null;
    }
  };

  return (
    <div className="flex justify-center gap-30">
      <div className="flex flex-col flex-wrap justify-center">
        {renderDice(rotatedMatrix)}
      </div>
    </div>
  );
};
