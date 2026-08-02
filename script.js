const text =
"Hey, Nae. 🌸 I wanted to make something instead of just sending another message. It's nothing fancy, but I hope this little website makes you smile for a bit. 🍵";

let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}

typeWriter();

const startBtn = document.getElementById("startBtn");
const cards = document.getElementById("cards");

startBtn.onclick = () => {
    cards.classList.remove("hidden");
    startBtn.style.display = "none";
};

const messages = [

    "🎵 Music says a lot about a person. I'm still curious about the songs you never get tired of listening to. Maybe you'll let me borrow a few for my playlist someday. 🎧",

    "🍵 Since you like matcha, I feel like I need to find the best matcha café one day. We can see if it actually lives up to the hype. 😌",

    "😂 Fun fact: This website took me way longer than I expected. Every time I fixed one thing, I somehow broke another. But I wanted to make something instead of sending another ordinary message.",

    "☕ Hopefully one day we'll get to hang out, grab coffee... or matcha, obviously. I think it'd be nice getting to know you outside of our chats. 🌿",

    "🌸 Every time I see something pink now, it somehow reminds me of you. I guess your favorite color is becoming a little memorable for me too.",

    "💖 Secret unlocked!<br><br>I don't really have a huge confession hiding here.<br><br>I just wanted to make something that was a little more thoughtful than a simple 'hi.' You're someone I genuinely enjoy talking to, and I figured you were worth the effort.<br><br>If this little website made you smile even once, then I'd say all the debugging was worth it. 🌸🍵"

];

function showMessage(number) {

    const box = document.getElementById("messageBox");

    box.style.opacity = 0;

    setTimeout(() => {

        box.innerHTML = messages[number];

        box.style.opacity = 1;

    }, 250);

}