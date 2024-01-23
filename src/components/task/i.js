import React, { useState } from 'react';

const CardComponent = () => {
  const [disabledCards, setDisabledCards] = useState(Array(5).fill(false));

  const handleCardClick = (index) => {
    const newDisabledCards = disabledCards.map((_, i) => i !== index);
    setDisabledCards(newDisabledCards);
  };

  return (
    <div>
      {disabledCards.map((isDisabled, index) => (
        <div
          key={index}
          onClick={() => handleCardClick(index)}
          style={{
            border: '1px solid #000',
            padding: '10px',
            margin: '10px',
            cursor: 'pointer',
            backgroundColor: isDisabled ? '#ccc' : '#fff',
          }}
        >
          Card {index + 1}
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
