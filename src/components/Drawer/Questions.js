import React, { useState } from 'react';
import imogi1 from './care.png'
import Box from '@mui/material/Box'
import MiniDrawer from './MiniDrawer';
import love from '../assets/Questionemoji/love.png'
import Statisfied from '../assets/Questionemoji/starisfied.png'
const Questions = () => {
  const surveyData = [

    {
      "Id": 7,
      "Headers": "This template is for cardiology department and we are taking our valuable staff's review",
      "Footer": "Above survey is conducted by DicIt",
      "Questions": [
        "1) How satisfied are you with the overall performance of the cardiology department?",
        "2) Rate the responsiveness of the cardiology department staff to your needs or concerns.",
        "3) How would you rate the cleanliness and comfort of the cardiology department facilities?",
        "4) Rate the professionalism and courtesy of the cardiology department team.",
        "5) How satisfied are you with the information provided to you about your cardiac health?",
        "6) Rate the clarity of communication from the cardiology department regarding your medical condition.",
        "7) How would you rate the waiting time for appointments and procedures in the cardiology department?",
        "8) Rate the effectiveness of the treatments and interventions provided by the cardiology department.",
        "9) How satisfied are you with the accessibility of the cardiology department for scheduling appointments?",
        "10) Rate your overall experience with the cardiology department."
      ],
      "HasConclusionQuestions": true,
      "AnswerType": "Star",
      "AnsPatternScale": [
        {
          "value": 1,
          "reviewLabel": "Highly Satisfied",
          "color":"#7FFFD4",
          "image":love
        },
        {
          "value": 2,
          "reviewLabel": "Satisfied",
          "color":"#FFFACD",
          "image":Statisfied

        },
        {
          "value": 3,
          "reviewLabel": "Average",
          "color":"#F8F8FF"
        },
        {
          "value": 4,
          "reviewLabel": "Poor",
          "color":"#FFDEAD"
        },
        {
          "value": 5,
          "reviewLabel": "Dissatisfied",
          "color":"#FFC0CB",
        
        }
      ],
      "conclusionQuestionAns": {
        "conclusionAnswers": [
          "Yes",
          "May be Yes",
          "Not sure",
          "No"
        ],
        "conclusionQuestion": "Are you recommended"
      }
    }

  ];

  const [answers, setAnswers] = useState(Array(surveyData[0].Questions.length).fill(null));
  console.log(answers);
  const handleAnswerClick = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <MiniDrawer/>
        <Box component="main" sx={{ flexGrow: 1 }}>
        <div className='m-8 mt-24  p-2 border rounded'>
          {surveyData.map((survey, surveyIndex) => (
            <div key={surveyIndex} >
              <p className='bg-sky-300 p-2 rounded'>{survey.Footer}</p>
              {survey.Questions.map((question, index) => (
                <div key={index} className='flex justify-between '>
                  <p>{question}</p>
 
                  <div style={{ display: 'flex', marginBottom: '10px' }} className='gap-3'>
                    {survey.AnsPatternScale.map((scale, scaleIndex) => (

                      <button
                        key={scaleIndex}
                        onClick={() => handleAnswerClick(index, scale.value)}

                      >
                        <p style={{backgroundColor:scale.color}} className='rounded p-1'>  <img className='w-10' src={scale.image}/> </p>
                        {scale.reviewLabel}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        </Box>
      </Box>
    </div>
  );
};
// const getEmojiForScale = (value) => {
//   // Define emojis based on the scale values
//   const emojis = {
//     1: '😊',
//     2: '😃',
//     3: '😐',
//     4: '😞',
//     5: love,
//   };

//   return emojis[value] || '';
// };



export default Questions;
