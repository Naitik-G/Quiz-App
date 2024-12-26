import React, { useState } from "react";

const Quiz = ({ quizData, onFinish }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === quizData[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < quizData.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onFinish(score + 1);
    }
  };

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold mb-6">{currentQuestion.question}</h2>
      <div className="space-y-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 transition w-full max-w-sm"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
