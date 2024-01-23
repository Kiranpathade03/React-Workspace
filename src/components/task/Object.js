import React from 'react'
import EmojiEmotionsSharpIcon from '@mui/icons-material/EmojiEmotionsSharp';

export default function Object() {
  const cardDetail = [
    {
      "Id": 7,
      "Headers": "This template is for the cardiology department, and we are taking our valuable staff's review",
      "Footer": "Above survey is conducted by DicIt",
      Questions: [
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
          "value": 5,
          "reviewLabel": "Highly Satisfied"
        },
        {
          "value": 4,
          "reviewLabel": "Satisfied"
        },
        {
          "value": 3,
          "reviewLabel": "Average"
        },
        {
          "value": 2,
          "reviewLabel": "Poor"
        },
        {
          "value": 1,
          "reviewLabel": "Dissatisfied"
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
   
  const Clicked=(item, index)=>{
    console.log(item);
  }

  return (
    <div className='flex justify-between mx-3 mt-8'>
     <div> {cardDetail[0].Questions.map((question, index) => (
        <div key={index}>
          <p>{question}</p>
        </div>
      ))}</div>
      {/* Render answer options */}
      <div className='flex space-x-4'>
      {cardDetail[0].AnsPatternScale.map((answerOption, index) => (
        <div key={index} className=''>
          <p className=' bg-lime-500 rounded space-y-6 p-2' onClick={()=>{Clicked(answerOption, index)}}>{`${answerOption.value}: ${answerOption.reviewLabel}`} </p>
          <p className=' bg-green-400 rounded space-y-6 p-2' onClick={()=>{Clicked(answerOption, index)}}>{`${answerOption.value}: ${answerOption.reviewLabel}`}</p>
          <p className=' bg-blue-300 rounded space-y-6 p-2' onClick={()=>{Clicked(answerOption, index)}}>{`${answerOption.value}: ${answerOption.reviewLabel}`}</p>
          <p className=' bg-lime-100 rounded space-y-6 p-2' onClick={()=>{Clicked(answerOption, index)}}>{`${answerOption.value}: ${answerOption.reviewLabel}`}</p>
          <p className=' bg-red-300 rounded space-y-6 p-2' onClick={()=>{Clicked(answerOption, index)}}>{`${answerOption.value}: ${answerOption.reviewLabel}`}</p>
          <p className=' bg-lime-300 rounded space-y-6 p-2' onClick={()=>{Clicked(answerOption, index)}}>{`${answerOption.value}: ${answerOption.reviewLabel}`}</p>
          <p className=' bg-orange-200 rounded space-y-6 p-2' onClick={()=>{Clicked(answerOption, index)}}>{`${answerOption.value}: ${answerOption.reviewLabel}`}</p>
         
        </div>
      ))}
      </div>
    </div>
  );
}
