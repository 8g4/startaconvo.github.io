const topics = [
    "ceritain kisah nabi adam!",
    "bagaimana cara membongkar kulkas?",
    "jelasin sejarah majapahit dong.",
    "ajarin aku html please!",
    "nanti mau tidur berapa jam?",
    "siapa ya impostor di antara kita?",
    "kamu kerja apa?",
    "simbahmu udah mandi?",
    "kamu pilih epep atau emel?",
    "info lomba kicau mania!",
    "ulang tahun bapakmu kapan?",
    "ayo besok sepedaan",
    "boleh lihat pr bahasa inggris?",
    "kamu udah ngerjain pr mtk?",
    "tinggimu berapa cm?",
    "kamu suka nonton apa?",
    "tadi pagi kamu makan apa?",
    "kenapa bumi itu bulat?",
    "multiverse itu nyata nggak sih?",
    "NASA itu bukan CGI kan?",
    "apa yg terjadi kalo semua orang lompat?",
    "kamu smk apa sma?",
    "ayo besok mancing!",
    "whats you fav color?",
    "kamu lebih suka baca apa tulis?",
    "tadi tidur jam berapa?",
];

function showTopic() {
    const name = document.getElementById('nameInput').value;
    if (name.trim() === "") {
        alert("Please enter a name.");
        return;
    }
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    document.getElementById('topicOutput').innerHTML = `${name}, ${randomTopic}`;
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
}

function goBack() {
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page1').style.display = 'block';
}
