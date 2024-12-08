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
      explanation: "Simbol H adalah singkatan dari Hidrogen."
    },
    {
      id: 2,
      question: "Berapa nomor atom karbon (C)?",
      options: ["6", "12", "8", "10"],
      correctAnswer: "6",
      explanation: "Nomor atom karbon adalah 6."
    },
    {
      id: 3,
      question: "Unsur mana yang termasuk golongan alkali?",
      options: ["Sodium (Na)", "Klorin (Cl)", "Magnesium (Mg)", "Argon (Ar)"],
      correctAnswer: "Sodium (Na)",
      explanation: "Sodium (Na) adalah unsur golongan alkali."
    },
    {
      id: 4,
      question: "Siapa yang mengemukakan teori atom pertama kali?",
      options: ["Dalton", "Thomson", "Rutherford", "Bohr"],
      correctAnswer: "Dalton",
      explanation: "John Dalton mengemukakan teori atom pertama kali."
    },
    {
      id: 5,
      question: "Apa lambang unsur besi?",
      options: ["Fe", "F", "Be", "B"],
      correctAnswer: "Fe",
      explanation: "Lambang unsur besi adalah Fe."
    },
    {
      id: 6,
      question: "Berapa massa molar dari H2O?",
      options: ["18 g/mol", "20 g/mol", "16 g/mol", "22 g/mol"],
      correctAnswer: "18 g/mol",
      explanation: "Massa molar H2O adalah 18 g/mol."
    },
    {
      id: 7,
      question: "Ikatan apa yang terjadi antara Na dan Cl dalam NaCl?",
      options: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
      correctAnswer: "Ionic",
      explanation: "Ikatan antara Na dan Cl dalam NaCl adalah ikatan ionik."
    },
    {
      id: 8,
      question: "Apa nama proses penurunan nomor oksidasi?",
      options: ["Reduksi", "Oksidasi", "Korosi", "Elektrolisis"],
      correctAnswer: "Reduksi",
      explanation: "Proses penurunan nomor oksidasi disebut reduksi."
    },
    {
      id: 9,
      question: "Berapa jumlah proton dalam atom nitrogen?",
      options: ["7", "14", "8", "6"],
      correctAnswer: "7",
      explanation: "Atom nitrogen memiliki 7 proton."
    },
    {
      id: 10,
      question: "Apa yang dimaksud dengan stoikiometri?",
      options: ["Studi tentang massa dan jumlah mol dalam reaksi kimia", "Studi tentang energi dalam reaksi kimia", "Studi tentang kecepatan reaksi", "Studi tentang keseimbangan kimia"],
      correctAnswer: "Studi tentang massa dan jumlah mol dalam reaksi kimia",
      explanation: "Stoikiometri adalah studi tentang massa dan jumlah mol dalam reaksi kimia."
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
    <div>
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
            <div className="explanations">
              {questions.map((question) => (
                <div key={question.id} className="explanation">
                  <h3>{question.question}</h3>
                  <p>Jawaban: {question.correctAnswer}</p>
                  <p>{question.explanation}</p>
                </div>
              ))}
            </div>
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
