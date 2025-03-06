document.addEventListener("DOMContentLoaded", function () {

    const betCode = "🖥 BET CODE - TJ1LD";
    const betText = `🇩🇰 Denmark. Superliga <br> 📌 Randers - Copenhagen <br> 🌍After the European Cup match, the guests may be better defensively, but they need to produce results in attack, as the fight for the top places in the championship continues. Perhaps the total will be high, but we'll play it safe and bet on Copenhagen⚽️ <br> 🇮🇱 Israel. Premier League <br> 📌 Maccabi Haifa - Hapoel Jerusalem <br> 🌍In Israel, both teams can score a lot. We are especially looking forward to goals from the hosts, as they need to catch up with Be'er Sheva.⚽️ <br>`;
    const betOdds = "📈 Odds/Odds - 2.41";

    const betTextElement = document.querySelector(".bet-text");
    const betOddsTextElement = document.querySelector(".bet-odds");
    const betCodeElement = document.querySelector(".bet-code");

    if (betCodeElement) betCodeElement.textContent = betCode;
    if (betTextElement) betTextElement.innerHTML = betText;
    if (betOddsTextElement) betOddsTextElement.textContent = betOdds;
});