import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Import Navbar
import './Soal.css';

const Soal = () => {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      question: "Apa nama unsur kimia dengan simbol H?",
      options: ["Helium", "Hidrogen", "Hafnium", "Holmium"],
      correctAnswer: "Hidrogen",
    },
    {
      id: 2,
      question: "Berapa nomor atom karbon (C)?",
      options: ["6", "12", "8", "10"],
      correctAnswer: "6",
    },
    {
      id: 3,
      question: "Unsur mana yang termasuk golongan alkali?",
      options: ["Sodium (Na)", "Klorin (Cl)", "Magnesium (Mg)", "Argon (Ar)"],
      correctAnswer: "Sodium (Na)",
    },
  ];

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({
      ...answers,
      [questionId]: answer,
    });
  };

  const calculateScore = () => {
    let newScore = 0;
    questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setShowResult(true);
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo-section">
          <img src="/logokimia.png" alt="Chem10thguide Logo" className="logo" />
          <h1 className="website-name">Chem10thguide</h1>
        </div>
      </header>
      <Navbar />

      <div className="soal-container">
        <h1 className="soal-title">Soal Kimia</h1>
        {!showResult ? (
          <div className="questions">
            {questions.map((question) => (
              <div key={question.id} className="question-card">
                <h3 className="question-text">{question.question}</h3>
                <div className="options">
                  {question.options.map((option, index) => (
                    <label key={index} className="option-label">
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option}
                        onChange={() => handleAnswerChange(question.id, option)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <button className="submit-btn" onClick={calculateScore}>
              Submit Jawaban
            </button>
          </div>
        ) : (
          <div className="result">
            <h2>Hasil</h2>
            <p>
              Kamu menjawab <strong>{score}</strong> dari {questions.length} soal dengan benar!
            </p>
            <button className="reset-btn" onClick={() => window.location.reload()}>
              Coba Lagi
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Soal;
