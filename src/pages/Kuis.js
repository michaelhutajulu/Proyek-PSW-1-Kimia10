import React, { useState, useEffect } from "react";
import "./kuis.css";
import Navbar from '../components/Navbar';

const Kuis = () => {
  const questions = [

    {
      question: "Reaksi manakah yang tidak dapat berlangsung dalam keadaan standar?",
      options: [
        "Fe+2 + Xn -> Fe + Zn+2",
        "Pb+2 + Fe -> Pb + Fe+2",
        "Sn+2 + Zn -> Sn + Zn+2",
       " Zn+2 + Pb -> Pb+2 + Z",
      ],
      correctAnswer: 0,
      explanation:
        "Untuk mengetahui jawabannya, buatlah urutan dari Eo kecil ke Eo besar dan reaksi yang terjadi harus searah anak panah. Urutan Zn -> Fe -> Sn -> Pb. Dari keempat reaksi tersebut, reaksi yang berlawanan arah dengan anak panah adalah reaksi keempat saja. Jadi, jawabannya adalah D.",
    },

    {
      question: "Manakah reaksi berikut yang bukan termasuk reaksi redoks?",
      options: [
        "Zn + 2 H2SO4 -> ZnSO4 + H2",
        "2 CrO22- + 2H+ -> Cr2O72- + H2O",
        "CU2 + Ni -> Cu + Ni2+",
       "C3H8 + 5 O2 -> 3 CO2 + 4 H2O",
      ],
      correctAnswer: 0,
      explanation:
      "Pada pilihan A, C, dan D semuanya terdapat atomik (biloks nol) yang membentuk senyawanya. Ada biloks positif dan negatif yang menandakan adanya perubahan yang berarti reaksi redoks.Sementara pada pilihan B, biloks pada CrO42- sebesar +6 dan pada Cr2O72- sebesar +6 tidak ada perubahan biloks sehingga bukan termasuk reaksi redoks. Maka, jawabannya adalah B.",
 
    },

    {
      question: "Apa yang dimaksud dengan reaksi redoks?",
      options: [
        "Reaksi yang melibatkan transfer elektron",
        "Reaksi yang menghasilkan gas",
        "Reaksi yang memerlukan katalis",
        "Reaksi pembakaran sederhana",
      ],
      correctAnswer: 0,
      explanation:
        "Reaksi redoks adalah reaksi yang melibatkan perpindahan elektron, di mana oksidasi dan reduksi terjadi secara bersamaan.",
    },
    {
      question: "Pada reaksi 2Mg + O₂ → 2MgO, apa yang teroksidasi?",
      options: ["Mg", "O₂", "MgO", "Tidak ada"],
      correctAnswer: 0,
      explanation:
        "Dalam reaksi tersebut, magnesium (Mg) kehilangan elektron sehingga mengalami oksidasi.",
    },

    {
      question: "Di antara larutan-larutan berikut, larutan yang termasuk dalam larutan basa adalah",
      options: [
        "C2H5OH",
        "CH3COOH",
        "HCl",
       "NaOH ",
      ],
      correctAnswer: 0,
      explanation:
        "Menurut Arrhenius basa adalah spesi yang dapat melepaskan ion OH- dalam air.Reaksi ionisasi NaOH: NaOH (aq) → Na+(aq) + OH-(aq)",
    },

    {
      question: "i antara spesi berikut, yang tidak berlaku sebagai asam Bronsted-Lowry adalah",
      options: [
        "NH4",
        "H20",
        "HC03",
       " CO3^2-",
      ],
      correctAnswer: 0,
      explanation:
        "Berdasarkan teori Bronsted-Lowry, asam didefinisikan sebagai pendonor 1 ion H+ pada basa dan basa didefinisikan sebagai penerima 1 ion H+ dari asam.Spesi yang tidak memiliki atom H tidak dapat berperan sebagai pendonor H+, oleh karena itu spesi yang tidak berlaku sebagai asam Bronsted-Lowrialah D. CO3^2-",
    },
    {
      question: "Indikator lakmus merah jika dicelupkan pada larutan basa akan berubah menjadi warna",
      options: [
        "Merah",
        "Biru",
        "Orange",
       " Tidak berwarna",
      ],
      correctAnswer: 0,
      explanation:
        "Kertas lakmus merah akan berubah menjadi biru jika dicelupkan larutan basa.Kertas lakmus biru akan berubah menjadi merah jika dicelupkan larutan asam.",
    },
    {
      question: "Zat di bawah ini yang dapat memerahkan kertas lakmus adalah",
      options: [
        "NaOH",
        "Ca(OH)2",
        " CH3COOH",
       "C2H50H ",
      ],
      correctAnswer: 0,
      explanation:
        "Kertas lakmus biru akan berubah menjadi merah jika dicelupkan larutan asam:NaOH : basa Ca(OH)2 : basa CH3COOH : asam CO(NH2)2 : non elektrolit C2H5OH : non elektrolit",
        
    },
    {
      question: "Salah satu tipe koloid berikut ini yang terdiri atas fase terdispersi padat dalam medium pendispersi gas yaitu",
      options: [
        "Gel",
        "Emulsi padat",
        "Sol padat",
       " Aerosol padat",
      ],
      correctAnswer: 0,
      explanation:
        "Aerosol padat terdiri atas fase padat dalam gas, gel terdiri atas fasa cair dalam padat, sol padat terdiri atas fase padat dalam padat, buih padat terdiri atas fasa gas dalam padat, dan emulsi padat terdiri atas fasa cair dalam padat. Emulsi padat merupakan nama lain dari gel.",
    },
    {
      question: "Sepuluh gram urea CO(NH2)2 dilarutkan dalam 90 mL air. Bila tekanan uap jenuh air pada suhu 25 derajat celcius adalah 62 mmHG, maka tekanan uap larutan urea tersebut adalah",
      options: [
        "2 mmHG",
        "30 mmHG",
        "31 mmHG",
       " 60 mmHG",
      ],
      correctAnswer: 0,
      explanation:
        "n CO(NH2)2 = gr/Mr = 10 gr/60 gr/mol = 0,16 mol => n H2O = gr/Mr = 90 gr/18 gr/mol = 5 mol => Xp = np/nt+np = 5 mol/(5+0,16)mol = 0,968 P = Xp . Po =>  P = 0,968 . 62 mmHg = 60 mmHg",
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

export default Kuis;
