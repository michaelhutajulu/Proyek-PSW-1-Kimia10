import React, { useState, useEffect } from "react";
import "./kuis.css";
import Navbar from '../components/Navbar';

const KuisStoikiometri = () => {
  const questions = [

    {
      question: "Serbuk magnesium yang massanya 3 gram tepat habis bereaksi dengan sejumlah serbuk belerang menghasilkan senyawa magnesium sulfida yang massanya 7 gram. Massa serbuk belerang yang bereaksi adalah ….",
      options: [
        "10 gram",
        "7 gram",
        "4 gram",
        "3 gram",
        "1 gram",
      ],
      correctAnswer: 2,
      explanation:
        "Soal tersebut didasarkan pada Hukum Kekekalan Massa (Hukum Lavoisier). Hukum kekekalan massa menyatakan bahwa: massa total zat-zat sebelum reaksi akan selalu sama dengan massa total zat-zat hasil reaksi.\n\nmassa serbuk magnesium + massa serbuk belerang = massa magnesium sulfida\n\n3 gram + massa serbuk belerang = 7 gram\n\nmassa serbuk belerang = 7 gram – 3 gram = 4 gram.",
    },

    {
      question: "Kristal iodin yang massanya 10 gram direaksikan dengan 10 gram gas hidrogen. Setelah bereaksi, ternyata didapatkan 2,5 gram gas hidrogen iodida. Massa zat yang tidak bereaksi adalah ….",
      options: [
        "(10 – 2,5) gram",
        "(10 + 2,5) gram",
        "(10 + 10) – 2,5 gram",
        "(10 + 10) + 2,5 gram",
        "(10 – 2,5) – 10 gram",
      ],
      correctAnswer: 2,
      explanation:
        "massa kristal iodin + massa gas hidrogen = massa gas hidrogen iodida\n\n10 gram + 10 gram = x + 2,5 gram\n\n x = (10 + 10) – 2,5 gram",
    },

    {
      question: "Di dalam senyawa CaS, perbandingan massa Ca : S = 5 : 4. Jika 10 gram kalsium direaksikan dengan 9 gram serbuk belerang, maka massa CaS yang dihasilkan sebanyak ….",
      options: [
        "9 gram",
        "9,5 gram",
        "10 gram",
        "18 gram",
        "19 gram",
      ],
      correctAnswer: 3,
      explanation:
        "Diketahui:\n\nperbandingan massa Ca : S = 5 : 4\nmassa Ca = 10 gram\nmassa S= 9 gram\n\nDitanyakan: massa CaS = …?\n\nJawaban:\n\nKarena perbandingan massa Ca : S = 5 : 4, maka massa yang bereaksi Ca : S = 10 : 8. Sehingga:\n\nmassa Ca : massa S = massa CaS\n\n10 gram : 8 gram = 18 gram",
    },

    {
      question: "Gas belerang dioksida direaksikan dengan gas oksigen dengan persamaan reaksi: \nSO2(g) + O2(g) → SO3(g)\n\nBila volume diukur pada suhu dan tekanan yang sama, maka perbandingan volume gas SO2 : O2 : SO3 adalah ….",
      options: [
        "1 : 1 : 1",
        "1 : 2 : 1",
        "2 : 1 : 1",
        "2 : 1 : 2",
        "3 : 2 : 1",
      ],
      correctAnswer: 3,
      explanation:
        "Hukum perbandingan volume atau hukum Gay-Lussac menyatakan bahwa gas-gas yang bereaksi dan volume gas-gas hasil reaksi bila diukur pada suhu dan tekanan sama, berbanding sebagai bilangan bulat dan sederhana.\n\nReaksi setara:\n\n2SO2(g) + O2(g) → 2SO3(g)\n\nJadi, perbandingan volume gas SO2 : O2 : SO3 = 2 : 1 : 2",
    },

    {
      question: "Jika di dalam senyawa FeS perbandingan massa Fe : S = 7 : 4, maka untuk menghasilkan 4,4 gram senyawa FeS diperlukan Fe dan S berturut-turut sebanyak ….",
      options: [
        "4,0 gram dan 0,4 gram",
        "3,7 gram dan 0,7 gram",
        "2,8 gram dan 1,6 gram",
        "3,0 gram dan 1,4 gram",
        "3,2 gram dan 1,2 gram",
      ],
      correctAnswer: 2,
      explanation:
        "Diketahui:\n\nperbandingan massa Fe : S = 7 : 4\nJumlah perbandingan = 7 + 4 = 11\nmassa FeS = 4,4 gram\n\nDitanyakan: massa Fe dan massa S = …?\n\nJawaban:\n\nMassa Fe yang diperlukan = (7/11) x 4,4 gram= 2,8 gram\nmassa S yang diperlukan = (4/11) x 4,4 gram = 1,6 gram",
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

      {/* Navbar*/ }
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

export default KuisStoikiometri;