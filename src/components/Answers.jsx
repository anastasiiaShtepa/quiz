import React, { useRef } from 'react';

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort((a, b) => Math.random() - 0.5);
  }
  return (
    <ul id='answers'>
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClasses = '';
        if (answerState === 'answerd' && isSelected) {
          cssClasses = 'selected';
        }
        if (
          (answerState === 'correct' || answerState === 'wrong') &&
          isSelected
        ) {
          cssClasses = answerState;
        }
        return (
          <li key={answer} className='answer'>
            <button
              onClick={() => onSelect(answer)}
              className={cssClasses}
              disabled={answerState !== ''}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
