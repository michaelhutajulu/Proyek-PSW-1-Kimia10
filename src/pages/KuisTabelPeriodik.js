import React, { useState, useEffect } from "react";
import "./kuis.css";
import Navbar from '../components/Navbar';

const KuisTabelPeriodik = () => {
  const questions = [
    {
      question: "Suatu atom dengan nomor atom 53 dan massa atom 127 mengandung…",
      options: [
        "53 elektron, 74 proton",
        "53 elektron, 127 proton",
        "53 proton, 74 elektron",
        "53 elektron, 74 neutron",
        "74 neutron, 127 proton",
      ],
      correctAnswer: 3,
      explanation:
        "Atom 53X127 memiliki proton: 53, elektron: 53, dan neutron (127 - 53 = 74). Jawabannya: D.",
    },
    {
      question:
        "Kalau Atom X yang nomor atomnya 19 dituliskan konfigurasi elektronnya, maka atom itu memiliki ciri-ciri…",
      options: [
        "Elektron valensinya adalah 9 valensinya adalah 1",
        "Elektron valensinya adalah 1 valensinya adalah 1",
        "Elektron valensinya adalah 7 valensinya adalah 1",
        "Elektron valensinya adalah 2 valensinya adalah 2",
        "Elektron valensinya adalah 7 valensinya adalah 2",
      ],
      correctAnswer: 1,
      explanation:
        "Konfigurasi elektron 19X: 1s2 2s2 2p6 3s2 3p6 4s1. Elektron valensinya adalah: 1, dan valensinya adalah: 1. Jawaban: B.",
    },
    {
      question:
        "Suatu atom memiliki elektron terakhir dengan bilangan kuantum n=4, l=2, m=-1, s=1/2. Jumlah elektron yang tidak berpasangan dalam atom tersebut adalah….",
      options: ["1", "2", "3", "4", "5"],
      correctAnswer: 2,
      explanation:
        "n = 4, l = 2, m = -1, s = -1/2. Elektron terluar adalah 4d7. Setelah digambarkan dalam diagram orbital, jumlah elektron yang tidak berpasangan adalah 3. Jawaban: C.",
    },
    {
      question:
        "Bilangan kuantum elektron terakhir dari atom logam divalen M adalah n=3, l=2, m=-2, s=-1/2. Bila sebanyak 5,6 gram M tepat bereaksi dengan 0,1 mol asam sulfat, maka jumlah neutron yang terkandung dalam atom M adalah…",
      options: ["65", "45", "35", "30", "18"],
      correctAnswer: 3,
      explanation:
        "Reaksi: M2+ + H2SO4 → MSO4 + H2 (0,1 mol). Mol M2+ = 0,1. Ar M2+ = massa/mol = 5,6/0,1 = 56 gram/mol. Nomor massa = Ar = 56. Nomor atomnya adalah 26. Neutron: nomor massa - nomor atom = 56 - 26 = 30. Jawaban: D.",
    },
    {
      question: "Ion X-2 mempunyai konfigurasi elektron 2.8.8. Nomor atom unsur X adalah….",
      options: ["16", "17", "18", "19", "20"],
      correctAnswer: 0,
      explanation:
        "Ion X2-: 2)8)8. Atom X: 2)8)6. Maka nomor atomnya: 16. Jawaban: A.",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(15);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (timer > 0 && !showResult) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else if (timer === 0 && !showResult) {
      handleSubmit();
    }
  }, [timer, showResult]);

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    const question = questions[currentQuestion];
    if (selectedOption === question.correctAnswer) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setShowResult(false);
      setTimer(15);
    } else {
      alert(`Kuis selesai! Skor Anda: ${score}/${questions.length}`);
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo-section">
          <img src="/logo192.png" alt="Chem10thguide Logo" className="logo" />
          <h1 className="website-name">Chem10thguide</h1>
        </div>
      </header>

      {/* Navbar */}
      <Navbar />

      <div className="kuis-container">
        <div className="question-container">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option-btn ${
                  selectedOption === index ? "selected" : ""
                }`}
                onClick={() => handleOptionSelect(index)}
                disabled={showResult}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div className="timer">Waktu Tersisa: {timer} detik</div>
        {showResult && (
          <div className="result">
            {selectedOption === questions[currentQuestion].correctAnswer ? (
              <p className="correct">Jawaban Anda Benar!</p>
            ) : (
              <p className="incorrect">Jawaban Anda Salah.</p>
            )}
            <p className="explanation">
              Pembahasan: {questions[currentQuestion].explanation}
            </p>
            <button onClick={handleNext} className="next-btn">
              {currentQuestion < questions.length - 1
                ? "Soal Berikutnya"
                : "Selesai"}
            </button>
          </div>
        )}
        {!showResult && (
          <button onClick={handleSubmit} className="submit-btn">
            Submit Jawaban
          </button>
        )}
      </div>
    </div>
  );
};

export default KuisTabelPeriodik;