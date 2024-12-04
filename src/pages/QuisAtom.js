import React, { useState, useEffect } from "react";
import "./QuisAtom.css";
import Navbar from '../components/Navbar';

const QuisAtom = () => {
  const questions = [
    {
      question: "Siapa penemu teori atom modern?",
      options: ["Dalton", "Thomson", "Rutherford", "Bohr"],
      answer: "Dalton",
      explanation: "John Dalton memperkenalkan teori atom modern pada tahun 1803.",
    },
    {
      question: "Apa partikel penyusun atom?",
      options: ["Elektron, Proton, Neutron", "Elektron dan Proton saja", "Neutron saja", "Proton saja"],
      answer: "Elektron, Proton, Neutron",
      explanation: "Atom terdiri dari elektron, proton, dan neutron.",
    },
    {
      question: "Apa nama model atom yang dikembangkan oleh Rutherford?",
      options: ["Model Roti Kismis", "Model Planetary", "Model Gelombang", "Model Atom Bohr"],
      answer: "Model Planetary",
      explanation: "Model Rutherford menggambarkan atom seperti tata surya (model planetary).",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !isAnswered) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isAnswered) {
      handleAnswer(null); // Timeout scenario
    }
  }, [timeLeft, isAnswered]);

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
    setIsAnswered(true);

    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setTimeLeft(15);
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="logo-section">
          <img src="/logo192.png" alt="Chem10thguide Logo" className="logo" />
          <h1 className="website-name">Chem10thguide</h1>
        </div>
      </header>

      {/* Navbar */}
      <Navbar />
    <div className="quiz-app">
      <h1>Kuis Teori Atom</h1>
      {currentQuestion < questions.length ? (
        <div className="quiz-container">
          <div className="timer">Waktu Tersisa: {timeLeft} detik</div>
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option ${
                  isAnswered
                    ? option === questions[currentQuestion].answer
                      ? "correct"
                      : option === selectedAnswer
                      ? "wrong"
                      : ""
                    : ""
                }`}
                onClick={() => handleAnswer(option)}
                disabled={isAnswered}
              >
                {option}
              </button>
            ))}
          </div>
          {isAnswered && (
            <div className="explanation">
              <p>
                {selectedAnswer === questions[currentQuestion].answer
                  ? "Benar!"
                  : "Salah!"}
              </p>
              <p>{questions[currentQuestion].explanation}</p>
              <button onClick={nextQuestion}>Pertanyaan Berikutnya</button>
            </div>
          )}
        </div>
      ) : (
        <div className="result">
          <h2>Hasil Kuis</h2>
          <p>Skor Anda: {score} dari {questions.length}</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default QuisAtom;
