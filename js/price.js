/**
 * 金額を読み上げる（整数・円）
 * @param {number|string} amount
 */
function speakAmount(amount) {
    if (!("speechSynthesis" in window)) {
        alert("このブラウザはWeb Speech APIに対応していません。");
        return;
    }
 const value = parseInt(amount, 10);

    if (isNaN(value)) {
        return;
    }

    // 読み上げ中なら何もしない
    if (speechSynthesis.speaking) {
        return;
    }

    const utterance = new SpeechSynthesisUtterance(`${value}円`);
    utterance.lang = "ja-JP";
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    speechSynthesis.speak(utterance);
}


/**
 * 合計金額を読み上げる
 * @param {number} total
 */
function speakTotal(total) {
    if (!("speechSynthesis" in window)) return;

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(
        `ごうけい、${total}円です。`
    );

    utterance.lang = "ja-JP";
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    speechSynthesis.speak(utterance);
}