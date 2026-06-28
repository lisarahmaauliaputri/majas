// FUNGSI UNTUK MENGATUR STATE NAVIGASI AKTIF
function setActiveNav(element) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        // Kembalikan semua tombol ke warna putih transparan awal
        link.className = "nav-link text-sm font-bold px-5 py-2.5 rounded-full text-white bg-transparent hover:bg-slate-800 transition duration-200";
    });
    // Ubah tombol yang dipilih menjadi biru solid
    element.className = "nav-link text-sm font-bold px-5 py-2.5 rounded-full text-white bg-indigo-600 shadow-md transition duration-200";
}

const allModules = {
    perbandingan: [
        { question: '1. "Rumah tua itu diam seribu bahasa menentang badai yang menerpa." Majas apa ini?', options: ["Metafora", "Asosiasi", "Personifikasi", "Hiperbola"], correct: "Personifikasi", explanation: "Diam seribu bahasa adalah sifat makhluk hidup yang dipinjamkan ke rumah tua." },
        { question: '2. "Dia dikenal sebagai buaya darat yang pandai memikat wanita." Frasa \'buaya darat\' bermajas...', options: ["Metafora", "Personifikasi", "Asosiasi", "Hiperbola"], correct: "Metafora", explanation: "Metafora menyandingkan julukan kiasan langsung tanpa kata hubung pembanding." },
        { question: '3. "Kedua sahabat karib itu memiliki wajah yang mirip bak pinang dibelah dua." Bermajas...', options: ["Hiperbola", "Asosiasi", "Metafora", "Personifikasi"], correct: "Asosiasi", explanation: "Terdapat kata hubung pembanding eksplisit yaitu kata \'bak\'." },
        { question: '4. "Jeritan tangis anak kelaparan itu mengiris-ngiris hati setiap orang." Kalimat lebay ini bermajas...', options: ["Metafora", "Personifikasi", "Hiperbola", "Asosiasi"], correct: "Hiperbola", explanation: "Hiperbola melebih-lebihkan fakta (tangisan mengiris fisik hati manusia)." },
        { question: '5. "Rumput tetangga selalu terlihat lebih hijau dibanding rumput sendiri." Idiom populer ini bermajas...', options: ["Metafora", "Asosiasi", "Personifikasi", "Hiperbola"], correct: "Metafora", explanation: "Menggunakan kiasan situasi secara tidak langsung untuk membandingkan kenyataan hidup." },
        { question: '6. "Ombak berkejaran di sepanjang bibir pantai seiring hembusan badai." Majas yang tepat...', options: ["Personifikasi", "Metafora", "Hiperbola", "Asosiasi"], correct: "Personifikasi", explanation: "Kata \'berkejaran\' meminjamkan perilaku dinamis manusia kepada ombak." },
        { question: '7. "Bapak itu membanting tulang demi menyekolahkan anaknya hingga perguruan tinggi." Bermajas...', options: ["Personifikasi", "Hiperbola", "Metafora", "Asosiasi"], correct: "Hiperbola", explanation: "Membanting tulang diartikan bekerja sangat keras, diekspresikan secara hiperbolis." },
        { question: '8. "Senyuman manis gadis itu bagaikan embun pagi yang menyejukkan jiwa." Menggunakan majas...', options: ["Metafora", "Personifikasi", "Asosiasi", "Hiperbola"], correct: "Asosiasi", explanation: "Asosiasi/Simile selalu ditandai kata pembanding seperti kata \'bagaikan\'." },
        { question: '9. "Waktu adalah uang, gunakanlah kesempatan tersebut sebaik mungkin." Konstruksi ini bermajas...', options: ["Metafora", "Hiperbola", "Personifikasi", "Asosiasi"], correct: "Metafora", explanation: "Menyamakan kedudukan \'waktu\' langsung senilai dengan \'uang\' (Metafora)." },
        { question: '10. "Matahari pagi intip dari balik jendela kamar, menyuruhku bergegas bangun." Bermajas...', options: ["Metafora", "Hiperbola", "Asosiasi", "Personifikasi"], correct: "Personifikasi", explanation: "Aktivitas \'mengintip\' merupakan tindakan makhluk hidup yang dipasangkan ke matahari." }
    ],
    sindiran: [
        { question: '1. "Rapi sekali tulisanmu, sampai-sampai tidak ada seorang pun yang bisa membacanya." Bermajas...', options: ["Ironi", "Sinisme", "Sarkasme", "Paradoks"], correct: "Ironi", explanation: "Ironi memuji secara halus terlebih dahulu, lalu menjatuhkan berdasarkan fakta asli." },
        { question: '2. "Sudahlah, bicaramu itu hanya janji manis kosong yang tak akan pernah terwujud!" Bermajas...', options: ["Ironi", "Sinisme", "Sarkasme", "Litotes"], correct: "Sinisme", explanation: "Sinisme menyindir langsung secara sinis berdasar ketidaknyamanan emosi tanpa makian." },
        { question: '3. "Enyah kau dari sini, dasar manusia tak berguna yang menyusahkan!" Sindiran kasar ini bermajas...', options: ["Ironi", "Sinisme", "Sarkasme", "Litotes"], correct: "Sarkasme", explanation: "Sarkasme menggunakan diksi makian yang kasar, tajam, dan langsung menusuk perasaan." },
        { question: '4. "Kamu rajin sekali ya, jam sebelas siang baru bangun dari tidurmu." Sindiran ini bermajas...', options: ["Ironi", "Sinisme", "Sarkasme", "Paradoks"], correct: "Ironi", explanation: "Menyebut orang telat bangun dengan sebutan \'rajin\' merupakan bentuk ironi klasik." },
        { question: '5. "Untuk apa punya harta melimpah jika sedekah seribu perak saja kau gemetar kelaparan?" Bermajas...', options: ["Ironi", "Sinisme", "Sarkasme", "Litotes"], correct: "Sinisme", explanation: "Sindiran terang-terangan mencemooh sifat pelit target dengan lugas." },
        { question: '6. "Apakah tidak ada otak di kepalamu sehingga instruksi mudah ini saja gagal total?!" Bermajas...', options: ["Ironi", "Sinisme", "Sarkasme", "Litotes"], correct: "Sarkasme", explanation: "Menyerang bagian intelektual secara kasar dengan nada membentak adalah ciri sarkasme." },
        { question: '7. "Suaramu merdu sekali bak kaset kusut, membuat kepalaku pusing mendengar melodi itu." Bermajas...', options: ["Ironi", "Sinisme", "Sarkasme", "Paradoks"], correct: "Ironi", explanation: "Memuji \'merdu\' disusul ejekan \'bak kaset kusut\' bertolak belakang secara ironi." },
        { question: '8. "Aku tidak butuh bantuan dari tangan kotormu yang penuh tipu muslihat itu." Sindiran ini bermajas...', options: ["Ironi", "Sinisme", "Sarkasme", "Litotes"], correct: "Sinisme", explanation: "Langsung melabeli bantuan orang secara sinis (tangan kotor penuh tipu muslihat)." },
        { question: '9. "Jangan bertingkah sok suci di depanku jika kelakuan aslimu bejat laksana iblis!" Bermajas...', options: ["Ironi", "Sinisme", "Sarkasme", "Litotes"], correct: "Sarkasme", explanation: "Penggunaan makian ekstrem disamakan dengan iblis termasuk kategori sarkasme lisan." },
        { question: '10. "Kota ini bersih sekali ya, sampah menumpuk menyumbat aliran selokan utama." Bermajas...', options: ["Ironi", "Sinisme", "Sarkasme", "Paradoks"], correct: "Ironi", explanation: "Menyebut kota bersih padahal faktanya penuh sampah menumpuk." }
    ],
    pertentangan: [
        { question: '1. "Terimalah bingkisan kecil yang tiada harga nilainya ini dari kami." Modus merendah ini bermajas...', options: ["Paradoks", "Litotes", "Hiperbola", "Pleonasme"], correct: "Litotes", explanation: "Sengaja mengecilkan nilai pemberian (tiada harga nilai) demi etika kesopanan." },
        { question: '2. "Gadis belia itu merasa kesepian di tengah riuh pikuk pesta yang meriah." Bermajas...', options: ["Litotes", "Paradoks", "Antitesis", "Hiperbola"], correct: "Paradoks", explanation: "Paradoks mempertemukan situasi bertentangan di satu momen (merasa kesepian di tengah pesta meriah)." },
        { question: '3. "Silakan singgah sejenak ke gubuk reot milik keluarga kami yang miskin ini." Bermajas...', options: ["Paradoks", "Antitesis", "Litotes", "Hiperbola"], correct: "Litotes", explanation: "Menyebut rumah sendiri gubuk reot agar terlihat rendah hati adalah ciri litotes." },
        { question: '4. "Meskipun fisiknya terlihat lemah, namun semangat juangnya sekeras baja." Kalimat ini mengandung...', options: ["Litotes", "Paradoks", "Pleonasme", "Repetisi"], correct: "Paradoks", explanation: "Mempertentangkan fisik yang lemah dengan kekuatan abstrak mental baja." },
        { question: '5. "Mobil mewah keluaran eropa terbaru ini adalah hasil tabungan kecil saya." Bermajas...', options: ["Litotes", "Paradoks", "Hiperbola", "Antitesis"], correct: "Litotes", explanation: "Mengecilkan nominal tabungan padahal sanggup membeli mobil sport mewah eropa." },
        { question: '6. "Negara agraris ini tergolong kaya raya, namun rakyat pelosok mati kelaparan." Bermajas...', options: ["Litotes", "Paradoks", "Pleonasme", "Repetisi"], correct: "Paradoks", explanation: "Kondisi kontras makro-mikro: Negara kaya melimpah tetapi rakyatnya kelaparan." },
        { question: '7. "Pencapaian luar biasa ini diperoleh berkat usaha secuil dari manusia bodoh seperti saya." Bermajas...', options: ["Litotes", "Paradoks", "Hiperbola", "Antitesis"], correct: "Litotes", explanation: "Labeling diri sendiri bodoh dengan usaha secuil adalah upaya merendahkan diri ala litotes." },
        { question: '8. "Di luar ia tertawa gembira, padahal batin lubuk hatinya menangis darah." Bermajas...', options: ["Litotes", "Paradoks", "Antitesis", "Hiperbola"], correct: "Paradoks", explanation: "Kontradiksi ekspresi lahiriah (tertawa gembira) dengan kondisi batin asli (menangis darah)." },
        { question: '9. "Uang jajan pemberian ayah yang tak seberapa ini cukup untuk membeli laptop baru." Bermajas...', options: ["Litotes", "Paradoks", "Hiperbola", "Repetisi"], correct: "Litotes", explanation: "Menyebut modal beli laptop baru sebagai nominal tak seberapa." },
        { question: '10. "Es balok kutub utara itu terasa membakar kulit tubuhnya karena saking dinginnya." Bermajas...', options: ["Litotes", "Paradoks", "Hiperbola", "Pleonasme"], correct: "Paradoks", explanation: "Dinginnya es diposisikan memicu sensasi membakar tubuh secara paradoks." }
    ],
    penegasan: [
        { question: '1. "Setelah mendengar putusan tersebut, dia langsung melangkah turun ke bawah." Bermajas...', options: ["Repetisi", "Pleonasme", "Antiklimaks", "Klimaks"], correct: "Pleonasme", explanation: "Mubazir kata. Aktivitas \'turun\' logikanya pasti mengarah ke jalur bawah." },
        { question: '2. "Cinta itu sabar, cinta itu murah hati, cinta itu memaafkan kesalahan." Bermajas...', options: ["Pleonasme", "Repetisi", "Klimaks", "Antiklimaks"], correct: "Repetisi", explanation: "Kata \'cinta itu\' di-copy-paste berulang guna menegaskan arti filosofisnya." },
        { question: '3. "Saya melihat dengan mata kepala saya sendiri pembajakan akun digital itu." Bermajas...', options: ["Pleonasme", "Repetisi", "Klimaks", "Antiklimaks"], correct: "Pleonasme", explanation: "Pleonasme karena klausul \'melihat\' mutlak memakai perangkat mata kepala sendiri." },
        { question: '4. "Kita wajib belajar, belajar, dan belajar sepanjang hayat dikandung badan." Bermajas...', options: ["Pleonasme", "Repetisi", "Klimaks", "Antiklimaks"], correct: "Repetisi", explanation: "Pengulangan kata beruntun \'belajar\' ditujukan sebagai bentuk penegasan mutlak." },
        { question: '5. "Seluruh siswa disuruh mundur ke belakang untuk merapikan barisan upacara." Bermajas...', options: ["Repetisi", "Pleonasme", "Klimaks", "Antiklimaks"], correct: "Pleonasme", explanation: "Diksi \'mundur\' maknanya searah dengan area \'ke belakang\' sehingga mubazir kata." },
        { question: '6. "Dialah penolongku, dialah pelindungku, dialah sandaran hidupku saat sulit." Bermajas...', options: ["Pleonasme", "Repetisi", "Klimaks", "Antiklimaks"], correct: "Repetisi", explanation: "Struktur pengulangan kata \'dialah\' di awal klausa secara beruntun." },
        { question: '7. "Buru-buru burung itu terbang membubung tinggi naik ke atas langit." Bermajas...', options: ["Repetisi", "Pleonasme", "Klimaks", "Antiklimaks"], correct: "Pleonasme", explanation: "Frasa \'naik ke atas\' adalah bentuk pleonasme karena naik tidak pernah ke bawah." },
        { question: '8. "Sampai kapan pun, kamu, kamu, dan hanya kamu yang bertahta di hatiku." Bermajas...', options: ["Pleonasme", "Repetisi", "Klimaks", "Antiklimaks"], correct: "Repetisi", explanation: "Kata ganti penunjuk \'kamu\' diulang tiga kali berturut-turut untuk penegasan rasa." },
        { question: '9. "Silakan masuk ke dalam ruangan ujian bagi peserta yang nomornya genap." Bermajas...', options: ["Repetisi", "Pleonasme", "Klimaks", "Antiklimaks"], correct: "Pleonasme", explanation: "Kata \'masuk\' maknanya sejalan dengan arah menuju \'ke dalam\'." },
        { question: '10. "Yang kita butuhkan saat ini adalah kerja keras, kerja keras, dan kerja keras bersama!" Bermajas...', options: ["Pleonasme", "Repetisi", "Klimaks", "Antiklimaks"], correct: "Repetisi", explanation: "Frasa \'kerja keras\' ditegaskan lewat repetisi pengulangan kalimat." }
    ],
    full: [
        { question: '1. "Angin malam memeluk tubuhku yang sedang menggigil kedinginan." Bermajas...', options: ["Metafora", "Personifikasi", "Hiperbola", "Litotes"], correct: "Personifikasi", explanation: "Aktivitas memeluk adalah tindakan makhluk hidup yang dipasangkan pada objek angin." },
        { question: '2. "Wah, bersih sekali bajumu, sampai noda lumpur cokelat tertempel merata!" Bermajas...', options: ["Ironi", "Sinisme", "Sarkasme", "Paradoks"], correct: "Ironi", explanation: "Menyindir noda lumpur kotor di baju dengan pujian \'bersih sekali\'." },
        { question: '3. "Gajinya puluhan juta per bulan, namun batinnya selalu merasa miskin." Bermajas...', options: ["Litotes", "Paradoks", "Pleonasme", "Repetisi"], correct: "Paradoks", explanation: "Kontradiksi nominal pendapatan melimpah berbanding rasa miskin secara psikologis." },
        { question: '4. "Pencuri sialan itu akhirnya digiring masuk ke dalam sel tahanan." Bermajas...', options: ["Repetisi", "Pleonasme", "Klimaks", "Antiklimaks"], correct: "Pleonasme", explanation: "Pleonasme karena aktivitas \'masuk\' tujuannya pasti tertuju \'ke dalam\'." },
        { question: '5. "Hatiku hancur berkeping-keping melihat kau bersanding dengannya di pelaminan." Bermajas...', options: ["Personifikasi", "Metafora", "Hiperbola", "Asosiasi"], correct: "Hiperbola", explanation: "Ungkapan hancur berkeping-keping mendramatisir realita secara berlebihan." },
        { question: '6. "Enyah kau dari hadapanku, dasar manusia parasit tak berguna!" Bermajas...', options: ["Ironi", "Sinisme", "Sarkasme", "Paradoks"], correct: "Sarkasme", explanation: "Makian langsung menggunakan diksi kasar (parasit tak berguna) merupakan ciri sarkasme." },
        { question: '7. "Buku adalah jendela dunia yang menghubungkan pemikiran antargenerasi." Bermajas...', options: ["Metafora", "Personifikasi", "Asosiasi", "Litotes"], correct: "Metafora", explanation: "Menyamakan kedudukan buku secara instan setara dengan julukan kiasan \'jendela dunia\'." },
        { question: '8. "Sambutlah persembahan tarian alakadarnya dari kami yang miskin ilmu ini." Bermajas...', options: ["Paradoks", "Litotes", "Hiperbola", "Repetisi"], correct: "Litotes", explanation: "Merendahkan kualitas penampilan/diri demi kesopanan sosial termasuk etika litotes." },
        { question: '9. "Kita harus berani, berani menegakkan keadilan, berani melawan kezaliman!" Bermajas...', options: ["Pleonasme", "Repetisi", "Klimaks", "Ironi"], correct: "Repetisi", explanation: "Pengulangan kata tugas \'berani\' di awal klausa secara beruntun ditujukan untuk penegasan." },
        { question: '10. "Kedua anak kembar yang terpisah belasan tahun itu mirip bak pinang dibelah dua." Bermajas...', options: ["Metafora", "Personifikasi", "Asosiasi", "Hiperbola"], correct: "Asosiasi", explanation: "Asosiasi/Simile ditandai penggunaan instrumen kata hubung konjungsi pembanding yaitu \'bak\'." },
        { question: '11. "Aroma masakan ibu menggoda selera makanku untuk segera ke meja makan." Bermajas...', options: ["Metafora", "Personifikasi", "Litotes", "Pleonasme"], correct: "Personifikasi", explanation: "Aktivitas \'menggoda\' adalah perilaku sadar makhluk hidup yang dilekatkan pada aroma masakan." },
        { question: '12. "Rajin benar adikmu, jam sepuluh siang begini tempat tidurnya belum dibersihkan." Bermajas...', options: ["Ironi", "Sinisme", "Sarkasme", "Paradoks"], correct: "Ironi", explanation: "Ironi menyindir dengan cara memuji hal positif (rajin) untuk menyatakan fakta sebaliknya." },
        { question: '13. "Di luar dia tampak tersenyum ceria, padahal hatinya remuk redam." Bermajas...', options: ["Litotes", "Paradoks", "Pleonasme", "Repetisi"], correct: "Paradoks", explanation: "Dua emosi berlawanan dipadukan serentak (tersenyum ceria vs hatinya remuk redam)." },
        { question: '14. "Pengendara motor itu diminta petugas untuk mundur ke belakang." Bermajas...', options: ["Repetisi", "Pleonasme", "Ironi", "Hiperbola"], correct: "Pleonasme", explanation: "Mubazir kata karena gerakan \'mundur\' sudah pasti mengarah ke posisi \'ke belakang\'." },
        { question: '15. "Kebaikanmu sedalam samudra, takkan mampu kubalas hingga akhir hayat." Bermajas...', options: ["Personifikasi", "Metafora", "Hiperbola", "Asosiasi"], correct: "Hiperbola", explanation: "Menganalogikan kebaikan sedalam samudra tergolong ungkapan bombastis hiperbola." },
        { question: '16. "Sudah tahu kalah, untuk apa kau terus membela argumen bodohmu itu?!" Bermajas...', options: ["Ironi", "Sinisme", "Sarkasme", "Litotes"], correct: "Sinisme", explanation: "Sinisme adalah sindiran langsung yang sinis dan mencemooh tanpa menggunakan basa-basi pujian." },
        { question: '17. "Pahlawan itu gugur di medan perang sebagai bunga bangsa yang harum namanya." Bermajas...', options: ["Metafora", "Personifikasi", "Asosiasi", "Hiperbola"], correct: "Metafora", explanation: "Frasa \'bunga bangsa\' adalah metafora langsung untuk menyebut pahlawan yang gugur." },
        { question: '18. "Gubuk reyot di tepi sawah inilah tempat berlindung kami dari hujan." Bermajas...', options: ["Paradoks", "Litotes", "Hiperbola", "Pleonasme"], correct: "Litotes", explanation: "Litotes digunakan untuk merendahkan hati dengan menyebut tempat tinggalnya gubuk reyot." },
        { question: '19. "Hancur, hancur, dan hancur sudah harapanku untuk kuliah tahun ini." Bermajas...', options: ["Pleonasme", "Repetisi", "Ironi", "Paradoks"], correct: "Repetisi", explanation: "Kata \'hancur\' diulang tiga kali berturut-turut untuk menegaskan keputusasaan." },
        { question: '20. "Langkahnya sangat cepat laksana kilat yang menyambar di malam hari." Bermajas...', options: ["Metafora", "Personifikasi", "Asosiasi", "Hiperbola"], correct: "Asosiasi", explanation: "Perbandingan eksplisit yang menggunakan kata hubung pembanding yaitu kata \'laksana\'." },
        { question: '21. "Jeritan minta tolong korban kebakaran itu meruntuhkan pertahanan mentalku." Bermajas...', options: ["Metafora", "Personifikasi", "Hiperbola", "Litotes"], correct: "Hiperbola", explanation: "Ungkapan \'meruntuhkan pertahanan mental\' mengekspresikan kesedihan mendalam secara hiperbolis." },
        { question: '22. "Suaramu merdu sekali seperti kaset kusut, membuat gendang telingaku sakit." Bermajas...', options: ["Ironi", "Sinisme", "Sarkasme", "Paradoks"], correct: "Ironi", explanation: "Memuji suaranya merdu padahal kenyataannya mengganggu pendengaran (seperti kaset kusut)." },
        { question: '23. "Negara ini swasembada pangan, tetapi jutaan warganya kekurangan gizi." Bermajas...', options: ["Litotes", "Paradoks", "Pleonasme", "Repetisi"], correct: "Paradoks", explanation: "Paradoks karena mempertemukan dua realita makro-mikro yang saling bertolak belakang." },
        { question: '24. "Saksi mata melihat terdakwa berjalan melangkah naik ke atas panggung." Bermajas...', options: ["Repetisi", "Pleonasme", "Ironi", "Hiperbola"], correct: "Pleonasme", explanation: "Pleonasme karena tindakan \'naik\' secara logika bahasa pastilah mengarah \'ke atas\'." },
        { question: '25. "Keadilan harus ditegakkan, keadilan harus diperjuangkan, keadilan milik semua!" Bermajas...', options: ["Pleonasme", "Repetisi", "Klimaks", "Antiklimaks"], correct: "Repetisi", explanation: "Frasa \'keadilan harus\' dan kata \'keadilan\' diulang di awal klausa sebagai bentuk penegasan." }
    ]
};

let activeQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedModuleKey = '';

const moduleSelectionEl = document.getElementById("module-selection");
const quizBoxEl = document.getElementById("quiz-box");
const resultBoxEl = document.getElementById("result-box");
const quizTitleEl = document.getElementById("quiz-title");
const progressEl = document.getElementById("progress");
const progressBarEl = document.getElementById("progress-bar");
const questionEl = document.getElementById("question");
const optionsContainerEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtnEl = document.getElementById("next-btn");
const finalScoreEl = document.getElementById("final-score");

function selectModule(moduleKey) {
    selectedModuleKey = moduleKey;
    activeQuestions = allModules[moduleKey];
    
    let titles = { 
        perbandingan: "Kuis Majas Perbandingan", 
        sindiran: "Kuis Majas Sindiran", 
        pertentangan: "Kuis Majas Pertentangan", 
        penegasan: "Kuis Majas Penegasan", 
        full: "Ujian Campuran Full Majas (25 Soal)" 
    };
    quizTitleEl.innerText = titles[moduleKey];

    moduleSelectionEl.classList.add("hidden");
    quizBoxEl.classList.remove("hidden");
    resultBoxEl.classList.add("hidden");

    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = activeQuestions[currentQuestionIndex];
    
    progressEl.innerText = `Soal ${currentQuestionIndex + 1} dari ${activeQuestions.length}`;
    const percentage = ((currentQuestionIndex + 1) / activeQuestions.length) * 100;
    progressBarEl.style.width = `${percentage}%`;

    questionEl.innerText = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.className = "w-full text-left px-5 py-4 rounded-xl border border-slate-200 font-semibold text-slate-700 transition duration-200 hover:bg-slate-50 hover:border-slate-300 cursor-pointer";
        button.addEventListener("click", () => selectAnswer(button, option));
        optionsContainerEl.appendChild(button);
    });
}

function resetState() {
    nextBtnEl.classList.add("hidden");
    feedbackEl.classList.add("hidden");
    optionsContainerEl.innerHTML = "";
}

function selectAnswer(selectedButton, choice) {
    let currentQuestion = activeQuestions[currentQuestionIndex];
    const allButtons = optionsContainerEl.querySelectorAll("button");
    
    allButtons.forEach(btn => {
        btn.disabled = true;
        btn.classList.remove("hover:bg-slate-50", "cursor-pointer");
    });

    if (choice === currentQuestion.correct) {
        score++;
        selectedButton.className = "w-full text-left px-5 py-4 rounded-xl border-2 border-emerald-500 bg-emerald-50 text-emerald-900 font-bold";
        feedbackEl.innerHTML = `✨ <b>Benar!</b> — ${currentQuestion.explanation}`;
        feedbackEl.className = "mt-5 p-4 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-sm";
    } else {
        selectedButton.className = "w-full text-left px-5 py-4 rounded-xl border-2 border-rose-500 bg-rose-50 text-rose-900 font-bold";
        feedbackEl.innerHTML = `🧐 <b>Kurang Tepat!</b> <br>Jawaban benar: <span class="underline">${currentQuestion.correct}</span>.<br class="mt-2">${currentQuestion.explanation}`;
        feedbackEl.className = "mt-5 p-4 rounded-xl bg-rose-50 text-rose-800 border border-rose-200 text-sm";
    }
    
    feedbackEl.classList.remove("hidden");
    
    if (currentQuestionIndex + 1 === activeQuestions.length) {
        nextBtnEl.innerText = "Lihat Hasil Akhir 🏁";
    } else {
        nextBtnEl.innerText = "Lanjut Soal Berikutnya ➡️";
    }
    nextBtnEl.classList.remove("hidden");
}

nextBtnEl.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < activeQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quizBoxEl.classList.add("hidden");
    resultBoxEl.classList.remove("hidden");
    let finalScore = Math.round((score / activeQuestions.length) * 100);
    finalScoreEl.innerText = `${finalScore}/100`;
}

function restartQuiz() {
    selectModule(selectedModuleKey);
}

function backToMenu() {
    moduleSelectionEl.classList.remove("hidden");
    quizBoxEl.classList.add("hidden");
    resultBoxEl.classList.add("hidden");
}