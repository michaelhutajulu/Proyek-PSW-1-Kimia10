import React from 'react';
import Navbar from '../components/Navbar';

const ReaksiRedoks = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo-section">
          <img src="/logo192.png" alt="Chem10thguide Logo" className="logo" />
          <h1 className="website-name">Chem10thguide</h1>
        </div>
      </header>
      <Navbar />
    <div className="page-container">
      <h2>Reaksi Redoks</h2>
      <section>
          <h3>Reaksi Redoks</h3>
          <p>Apa itu reaksi redoks? Reaksi redoks adalah singkatan dari reaksi reduksi dan oksidasi yang berlangsung pada proses elektrokimia. Boleh dibilang, reaksi redoks adalah singkatan dari reaksi reduksi dan oksidasi.Reaksi redoks adalah proses kimia yang melibatkan transfer elektron antara dua zat, di mana satu zat mengalami oksidasi dan zat lainnya mengalami reduksi. </p>
        <p>Dalam reaksi redoks, zat yang mengalami oksidasi disebut reduktor karena memberikan elektron, sedangkan zat yang mengalami reduksi disebut oksidator karena menerima elektron. Contohnya adalah reaksi antara logam seng (Zn) dan ion tembaga (Cu²⁺), di mana Zn teroksidasi menjadi Zn²⁺ dengan melepaskan elektron, dan Cu²⁺ tereduksi menjadi logam Cu dengan menerima elektron. Reaksi redoks memainkan peran penting dalam berbagai proses alami dan teknologi, seperti fotosintesis, respirasi, dan pembangkitan energi dalam baterai.</p>
        <p>Berikut pengertian dari kedua istilah tersebut.</p>
        </section>
        
        <section>
          <h3>Pengertian Reduksi</h3>
          <p>Reduksi adalah reaksi yang mengalami penurunan bilangan oksidasi dan kenaikan elektron. Dapat dikatakan bahwa reduksi adalah reaksi dimana suatu zat kehilangan oksigen.</p>
          <p>Reduksi sering kali melibatkan pelepasan oksigen dari suatu zat atau pengikatan hidrogen oleh zat tersebut.   Sebagai contoh, dalam reaksi Fe₂O₃ + 3CO → 2Fe + 3CO₂, besi oksida (Fe₂O₃) mengalami reduksi menjadi besi (Fe) karena kehilangan atom oksigen. Sementara itu, karbon monoksida (CO) bertindak sebagai reduktor, memberikan elektron selama reaksi berlangsung. Proses reduksi ini penting dalam berbagai bidang, seperti metalurgi untuk ekstraksi logam dan biokimia dalam respirasi seluler. </p>
        </section>
        
        <section>
          <h3>Pengertian Oksidasi</h3>
          <p>Oksidasi adalah reaksi yang mengalami peningkatan bilangan oksidasi dan penurunan elektron. Dapat dikatakan bahwa oksidasi adalah reaksi dimana suatu zat mengikat oksigen.</p>
        <p>  Dalam reaksi ini, bilangan oksidasi (tingkat oksidasi) zat yang terlibat meningkat. Reaksi oksidasi biasanya berpasangan dengan reaksi reduksi, karena elektron yang hilang oleh satu zat harus diterima oleh zat lain.</p>
        
        </section>

        <section>
          <h4>Contoh Reaksi</h4>
          <p>Perhatikan contoh reaksi berikut ini:</p>
          <img src="reaksi redoks.png" alt="Contoh Reaksi Redoks" />
          <p>Bagaimana penjelasan reaksi oksidasi dan reduksi pada contoh di atas? Besi (III) oksida (<em>Fe₂O₃</em>) mengalami reduksi karena kehilangan atom oksigen dan berubah menjadi besi (<em>2Fe</em>). Adapun karbon monoksida (<em>3CO</em>) mengalami reaksi oksidasi karena mengikat atom oksigen dan berubah menjadi karbon dioksida (<em>3CO₂</em>).</p>
        </section>

        <section>
          <h3>Konsep Bilangan Oksidasi</h3>
          <p>Konsep reaksi redoks yang melibatkan perpindahan elektron ini hanya bisa terjadi pada senyawa ionik aja, sedangkan senyawa kovalen tidak. Oleh karena itu, muncul konsep redoks yang ketiga, yaitu berdasarkan perubahan bilangan oksidasi (biloks).

Bilangan oksidasi adalah muatan positif dan negatif pada suatu atom. Unsur yang biloksnya positif, biasanya merupakan atom-atom unsur logam, seperti Na, Fe, Mg, Ca, dan unsur logam lainnya. Sementara itu, unsur yang biloksnya negatif, biasanya atom-atom unsur nonlogam, seperti O, Cl, F, dan unsur nonlogam lainnya. Berdasarkan konsep perubahan bilangan oksidasi, reaksi reduksi adalah reaksi yang mengalami penurunan bilangan oksidasi. Sedangkan reaksi oksidasi adalah reaksi yang mengalami kenaikan bilangan oksidasi.</p>
<p>Terdapat delapan aturan dalam menentukan bilangan oksidasi suatu atom yang harus Sobat ketahui, antara lain adalah sebagai berikut.</p>
          </section>
          <section>
            <h3>1. Bilangan oksidasi unsur bebas dalam bentuk atom dan molekul adalah 0.</h3>
            <p>Contoh: bebas berbentuk atom</p>
            <p>C, Ca, Cu, Na, Fe, Al, Ne = 0</p>
            <img src="reaksiredoks2.jpg" alt="Bilangan oksidasi" />

          </section>
          <section>
            <p>2. Bilangan oksidasi ion monoatom (1 atom) dan poliatom (lebih dari 1 atom) sesuai dengan jenis muatan ionnya.</p>
            <p>Bilangan oksidasi ion monoatom Na+, Mg2+, dan Al3+ berturut-turut adalah +1, +2, dan +3.</p>
           <p>Bilangan oksidasi ion poliatom NH4+, SO42-, dan PO43- berturut-turut adalah +1, -2, dan -3.</p>
            <img src="monoatom.png" alt="Bilangan oksidasi" />

          </section>
          <section>
            <p>3. Bilangan oksidasi unsur pada golongan logam IA, IIA, dan IIIA sesuai dengan golongannya.</p>
            <p>IA = H, Li, Na, K, Rb, Cs, Fr = +1.</p>
            <p>Contoh: Bilangan oksidasi Na dalam senyawa NaCl adalah +1.</p>
            <p>IA = Be, Mg, Ca, Sr, Ba, Ra = +2.</p>
            <p>Contoh: Bilangan oksidasi Mg dalam senyawa MgSO2 adalah +2.</p>
            <p>IIA = B, Al, Ga, In, Tl = +3</p>
            <p>Contoh: Bilangan oksidasi Al dalam senyawa Al2O3 adalah +3.</p>
            <img src="logam.png" alt="Bilangan oksidasi" />

          </section>
          <section>
            <p>4. Bilangan oksidasi unsur golongan transisi (golongan B) lebih dari satu.</p>
            <p>Bilangan oksidasi Au = +1 dan +3.</p>
            <p>Bilangan oksidasi Sn = +3 dan +4.</p> 
           <img src="transissi.png" alt="Bilangan oksidasi" />

          </section>
          <section>
            <p>5. Jumlah bilangan oksidasi unsur-unsur yang membentuk ion = jumlah muatannya.</p>
            <p>NH4+ = +1 </p>
            <img src="ion.png" alt="Bilangan oksidasi" />

          </section>

          <section>
            <p>6. Jumlah bilangan oksidasi unsur-unsur yang membentuk senyawa = 0.</p>
            <p> H2O = 0</p>


            <img src="senyawa.png" alt="Bilangan oksidasi" />

          </section>
          <section>
            <p>7. Bilangan oksidasi hidrogen (H) bila berikatan dengan logam = -1. Bila H berikatan dengan non-logam = +1.</p>
            <p>Biloks H dalam AlH3 = -1. </p>
            

          </section>
          <section>
            <p>8. Bilangan oksidasi oksigen (O) dalam senyawa proksida = -1. Bilangan oksidasi O dalam senyawa non-peroksida = -2.</p>
            <p>Biloks O dalam BaO2 = -1.

</p>
            

          </section>
          <section>
  <h3>Konsep Reaksi Redoks Berdasarkan Pengikatan dan Pelepasan Oksigen</h3>
  <p>
    Pada awalnya, sekitar abad ke-18, konsep reaksi oksidasi dan reduksi didasarkan atas penggabungan unsur atau senyawa dengan oksigen membentuk oksida, dan pelepasan oksigen dari senyawa.
  </p>
  <p>Adapun yang dimaksud dengan reaksi reduksi dan oksidasi adalah sebagai berikut:</p>
  <ul>
    <li><strong>Reduksi</strong>: Reaksi pelepasan oksigen dari suatu senyawa.</li>
    <li><strong>Reduktor</strong>:
      <ul>
        <li>Zat yang menarik oksigen pada reaksi reduksi.</li>
        <li>Zat yang mengalami reaksi oksidasi.</li>
      </ul>
    </li>
    <p>Contoh:</p>
    <ul>
      <li>Reduksi Fe₂O₃ oleh CO: Fe₂O₃ + 3CO → 2Fe + 3CO₂</li>
      <li>Reduksi Cr₂O₃ oleh Al: Cr₂O₃ + 2Al → 2Cr + Al₂O₃</li>
    </ul>
    <li><strong>Oksidasi</strong>: Reaksi pengikatan (penggabungan) oksigen oleh suatu zat.</li>
    <li><strong>Oksidator</strong>:
      <ul>
        <li>Sumber oksigen pada reaksi oksidasi.</li>
        <li>Zat yang mengalami reduksi.</li>
      </ul>
    </li>
    <p>Contoh:</p>
    <ul>
      <li>Oksidasi Fe oleh O₂: 4Fe + 3O₂ → 2Fe₂O₃</li>
      <li>Pemanggangan ZnS: 2ZnS + 3O₂ → 2ZnO + 2SO₂</li>
    </ul>
  </ul>
</section>

<section>
  <h3>Konsep Reaksi Redoks Berdasarkan Pelepasan dan Penerimaan Elektron</h3>
  <p>
    Reaksi oksidasi dan reduksi ternyata bukan hanya melibatkan oksigen, melainkan juga melibatkan elektron. Memasuki abad ke-20, para ahli melihat suatu karakteristik mendasar dari reaksi oksidasi dan reduksi yang ditinjau dari ikatan kimianya, yaitu adanya serah terima elektron.
  </p>
  <ul>
    <li><strong>Reduksi</strong>: Reaksi pengikatan elektron.</li>
    <li><strong>Reduktor</strong>:
      <ul>
        <li>Zat yang melepaskan elektron.</li>
        <li>Zat yang mengalami oksidasi.</li>
      </ul>
    </li>
    <p>Contoh:</p>
    <ul>
      <li>Cl₂ + 2e⁻ → 2Cl⁻</li>
      <li>Ca²⁺ + 2e⁻ → Ca</li>
    </ul>
    <li><strong>Oksidasi</strong>: Reaksi pelepasan elektron.</li>
    <li><strong>Oksidator</strong>:
      <ul>
        <li>Zat yang mengikat elektron.</li>
        <li>Zat yang mengalami reduksi.</li>
      </ul>
    </li>
    <p>Contoh:</p>
    <ul>
      <li>K → K⁺ + e⁻</li>
      <li>Cu → Cu²⁺ + 2e⁻</li>
    </ul>
  </ul>
</section>

<section>
  <h3>Konsep Reaksi Redoks Berdasarkan Pertambahan dan Penurunan Bilangan Oksidasi</h3>
  <p>
    Reaksi redoks adalah reaksi yang ditandai dengan terjadinya perubahan bilangan oksidasi (biloks) dari atom unsur sebelum dan sesudah reaksi.
  </p>
  <h4>Bilangan Oksidasi</h4>
  <p>
    Bilangan oksidasi atau biloks adalah muatan yang dimiliki oleh atom jika elektron valensinya cenderung tertarik ke atom lain yang berikatan dengannya dan memiliki keelektronegatifan lebih besar.
  </p>
  <p>Aturan penentuan bilangan oksidasi antara lain sebagai berikut:</p>
  <ul>
    <li>Jumlah bilangan oksidasi atom dalam unsur bebas sama dengan 0 (nol).</li>
    <p>Contoh: Na, Fe, H₂, P₄, dan S₈ sama dengan 0 (nol).</p>
    <li>Jumlah bilangan oksidasi ion monoatom sama dengan muatan ionnya.</li>
    <p>Contoh:</p>
    <ul>
      <li>Ion Na⁺ = +1</li>
      <li>Ion Mg²⁺ = +2</li>
      <li>Ion Br⁻ = -1</li>
    </ul>
    <li>Jumlah bilangan oksidasi semua atom dalam senyawa netral sama dengan 0 (nol).</li>
    <p>Contoh: NaCl (+1) + (-1) = 0</p>
    <li>Jumlah bilangan oksidasi semua atom dalam ion poliatomik sama dengan muatan ionnya.</li>
    <p>Contoh: Ion NO₃⁻ = -1</p>
  </ul>
</section>
<section>
  <h3>Metode Perubahan Bilangan Oksidasi</h3>
  <ol>
    <li>Setarakan atom-atom yang mengalami perubahan biloks.</li>
    <li>Tentukan biloks unsur-unsur tersebut dan tentukan perubahannya.</li>
    <li>Samakan kedua perubahan biloks.</li>
    <li>Tentukan jumlah muatan di ruas kiri dan kanan.</li>
    <li>
      Samakan muatan dengan cara:
      <ul>
        <li>a. Jika suasana asam: tambahkan ion H⁺ sebanyak perbedaan muatan.</li>
        <li>b. Jika suasana basa: tambahkan ion OH⁻ sebanyak perbedaan muatan.</li>
      </ul>
    </li>
    <li>Samakan atom hidrogen di ruas kiri dan kanan dengan cara menambahkan H₂O.</li>
  </ol>
  <p>Contoh:</p>
  <p>
    Setarakan reaksi berikut: CuS + NO₃⁻ → Cu²⁺ + S + NO (suasana asam)
  </p>
  <p><strong>Penyelesaian:</strong></p>
  {}
</section>
<section>
  
  <div>
    <p>
      <strong>Reaksi:</strong> Bi₂O₃ + ClO⁻ → BiO₃⁻ + Cl⁻
    </p>
    <p>
      <strong>Oksidasi:</strong> <br />
      <span>
        Bi₂O₃ + ClO⁻ → BiO₃⁻ + Cl⁻
      </span>
      <br />
      <span style={{ color: "orange" }}>+3 → +6</span> (Oksidasi) <br />
      <span style={{ color: "blue" }}>+1 → -1</span> (Reduksi)
    </p>

    <p>
      <strong>Langkah Oksidasi:</strong> <br />
      O: 6OH⁻ + Bi₂O₃ → 2BiO₃⁻ + 3H₂O + 4e⁻ (×1)
    </p>
    <p>
      <strong>Langkah Reduksi:</strong> <br />
      R: 2e⁻ + H₂O + ClO⁻ → Cl⁻ + 2OH⁻ (×2)
    </p>

    <p>
      <em>Keterangan:</em> <br />
      <span style={{ color: "orange" }}>Selisih 4</span> menunjukkan perubahan elektron yang disesuaikan.
    </p>
  </div>
</section>


<section>
  <h3>Metode Setengah Reaksi
    </h3>
  <ol>
    <li>Tuliskan persamaan setengah reaksi reduksi dan setengah reaksi oksidasi.</li>
    <li>Setarakan unsur-unsur yang mengalami perubahan biloks.</li>
    <li>
      Tambahkan satu molekul H₂O:
      <ul>
        <li>a. Pada yang kelebihan atom O, jika reaksi berlangsung dalam suasana basa.</li>
        <li>a. Pada yang kekurangan atom O, jika reaksi berlangsung dalam suasana asam.</li>
      </ul>
    </li>
    <li>
      Setarakan atom hidrogen dengan ion H⁺, jika suasana asam, atau dengan ion OH⁻, jika suasana basa.
    </li>
    <li>Setarakan muatan dengan penambahan elektron.</li>
    <li>Jumlahkan kedua persamaan setengah reaksi dengan menyamakan elektron.</li>
  </ol>
  <p>Contoh:</p>
  <p>
    Setarakan reaksi berikut: Bi₂O₃ + ClO⁻ → BiO₃⁻ + Cl⁻ (suasana basa)
  </p>
  <p><strong>Penyelesaian:</strong></p>
  {}
</section>
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
      {/* Reaksi */}
      <text x="50" y="30" fontSize="18" fontWeight="bold">
        Bi₂O₃ + ClO⁻ → BiO₃⁻ + Cl⁻
      </text>

      {/* oksidasi */}
      <line x1="110" y1="35" x2="110" y2="90" stroke="orange" strokeWidth="2" />
      <text x="120" y="60" fontSize="14" fill="orange">
        Oksidasi
      </text>

      {/* reduksi */}
      <line x1="270" y1="35" x2="270" y2="90" stroke="blue" strokeWidth="2" />
      <text x="280" y="60" fontSize="14" fill="blue">
        Reduksi
      </text>

      {/* Reaksi oksidasi */}
      <text x="50" y="120" fontSize="16" fontWeight="bold">
        O: 6OH⁻ + Bi₂O₃ → 2BiO₃⁻ + 3H₂O + 4e⁻
      </text>
      <line x1="80" y1="140" x2="80" y2="180" stroke="orange" strokeWidth="2" />
      <text x="90" y="160" fontSize="14" fill="orange">
        Selisih 4
      </text>

      {/* Reduksi */}
      <text x="50" y="220" fontSize="16" fontWeight="bold">
        R: 2e⁻ + H₂O + ClO⁻ → Cl⁻ + 2OH⁻
      </text>
      <line x1="80" y1="240" x2="80" y2="280" stroke="blue" strokeWidth="2" />
      <text x="90" y="260" fontSize="14" fill="blue">
        Selisih 2
      </text>

      {}
      <text x="50" y="320" fontSize="16" fontWeight="bold">
        O: 6OH⁻ + Bi₂O₃ → 2BiO₃⁻ + 3H₂O + 4e⁻
      </text>
      <line x1="340" y1="315" x2="390" y2="315" stroke="red" strokeWidth="2" />
      <text x="400" y="320" fontSize="14" fill="red">
        ×1
      </text>

      {}
      <text x="50" y="370" fontSize="16" fontWeight="bold">
        R: (×2)
      </text>
    </svg>

      
    </div>
    </div>
  );
};

export default ReaksiRedoks;
