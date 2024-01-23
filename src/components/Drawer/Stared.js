import React, { useState } from 'react';

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

    const [answers, setAnswers] = useState(Array(surveyData[0].Questions.length).fill(null));
    console.log(answers);
    const handleAnswerClick = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    return (
        <div className='m-3'>
            {surveyData.map((survey, surveyIndex) => (
                <div key={surveyIndex}>
                    <h2>{survey.Headers}</h2>
                    <p>{survey.Footer}</p>
                    {survey.Questions.map((question, index) => (
                        <div key={index}>
                            <p>{question}</p>
                            <div>
                                {survey.AnsPatternScale.map((scale, scaleIndex) => (
                                    <button
                                        key={scaleIndex}
                                        onClick={() => handleAnswerClick(index, scale.value)}
                                        style={{ marginRight: '10px' }}
                                    >
                                        {scale.reviewLabel} {getEmojiForScale(scale.value)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

const getEmojiForScale = (value) => {
    // Define emojis based on the scale values
    const emojis = {
        5: '😊',
        4: '😃',
        3: '😐',
        2: '😞',
        1: '😢',
    };

    return emojis[value] || '';
};

export default Questions;
