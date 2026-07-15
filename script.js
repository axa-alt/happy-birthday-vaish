// ==========================================
// ELEMENT
// ==========================================

const game = document.getElementById("game");
const letters = [

{
    title: "🎀 From Vertika",
    message: `Heyyy vaish!

HAPPIEST 18 BIRTHDAYYY BABY 😭❤️

LOVE YOU SOO MUCH ❤️

We literally saw each other grow 🥹

And it's soo cute. I highly wish for your happiness and health.

I hope you find the best people ahead and may you achieve soo much. 🫶

I can't even express my love for you like this, but yess, I'm really grateful that I have a best friend to whom I'm the best friend too. 🤏😋

You slay the whole time, kindly stop feeling so bad about yourself.

And I LOVE YOU SOO MUCH AND OUR FRIENDSHIP OF ALL THESE YEARS.

HAPPIEST BIRTHDAY AGAIN 🫶

— Vikii🤍`
},

{
    title: "🌸 From Rahim",
    message: `Happiest 18th Birthday, Vaishnavii!! 🤍

You're finally 18, and this is such a huge accomplishment!!

Even though we only became friends in Class 11, it honestly feels like you've been part of my life for much longer.

Having someone like you made my school years so much better and so much more memorable.

Through all the school stress and everything else, having you by my side is something I'll always appreciate.

As you turn 18, may God continue to guide you as this new chapter of your life begins. ^^

I pray for endless happiness, success, and beautiful memories ahead.

Thank you once again for being such an important part of my 11th and 12th grade journey. I hope our friendship continues to grow, even when life gets busy.

Enjoy your day, and once again...

Happy 18th Birthday, Vaishnavii! ♡♡`
},
{
    title: "⚡ From Tejas",
    message: `Though you're stupid, immature, and naive... you still care... and that quality of yours is what makes you somewhat decent...

You're my younger sister... and yet you boss around. The only reason I let you is because you're my younger sister... so be grateful... as I am to you. Even though you're a pain... it's just not the same without you...

So keep in mind not to let your thoughts consume you when everything feels overwhelming. You can always come to me, but then you'll have to listen to understand, not just to argue...

Be the strong young adult (you're 18 now... so yeah... no more kids, iykwim) and capable woman you are...

Just learn to respect your elders and have some reverence towards life and everything it has to offer...

Happy Birthday... chhoti behen...

May Devi's grace be upon you at all times, and may you always find fulfilment and happiness within yourself. 🙏✨`
},
{
    title: "💜 From Axa",
    message: `Happy 18th Birthday, babe. 🤍

It's honestly so crazy that you're finally 18. It feels like just yesterday we were laughing over the smallest things, stressing over school, and making memories that I'll never forget. Watching you grow into the amazing person you are today has been such a privilege.

Thank you for being someone I can always count on—for your kindness, your patience, your laughter, and for simply being you. You've made so many ordinary days feel special without even realizing it. I hope you know just how loved and appreciated you are by everyone lucky enough to have you in their life, especially me.

As you step into adulthood, I pray this new chapter brings you endless happiness, good health, exciting opportunities, and the courage to chase every dream that's been living in your heart. There will be challenges along the way, but I know you'll overcome them because you're stronger and more capable than you give yourself credit for.

Never lose your beautiful heart, your smile, or the light you bring into people's lives. Keep believing in yourself, keep growing, and keep being unapologetically you.

Thank you for all the memories we've made together. I can't wait to make so many more—celebrating milestones, laughing until we cry, and being there for each other through every season of life.

Here's to your next chapter, to new adventures, and to the incredible person you're becoming.

Happy 18th Birthday once again. May God bless you abundantly today and always. I love you so much, and I'll always be cheering you on.

Happy Birthday, Vaish. 🫶🎉

— Axa 🤍`
}
];

let openedLetters = [];
let unlockedPhoto = false;
let unlockedCake = false;
let unlockedFinal = false;

// ==========================================
// GAME DATA
// ==========================================



const photos = [

    "images/photo1.jpeg",
    "images/photo2.jpeg",
    "images/photo3.jpeg",
    "images/photo4.jpeg",
    "images/photo5.jpeg",
    "images/photo6.jpeg",
    "images/photo7.jpeg",
    "images/photo8.jpeg",
    "images/photo9.jpeg",
    "images/photo10.jpeg",
    "images/photo11.jpeg",
    "images/photo12.jpeg",
    "images/photo13.jpeg",
    "images/photo14.jpeg",
    "images/photo15.jpeg"

];

let currentPhoto = 0;



// ==========================================
// GAME STATE
// ==========================================




// ==========================================
// START
// ==========================================

showStartScreen();

// ==========================================
// SCREENS
// ==========================================
function changeScreen(html, callback){

    game.innerHTML = html;

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

    if(callback){

        callback();

    }

}


// ==========================================
// START SCREEN
// ==========================================
function getProgress(){

    let progress = 0;

    if(openedLetters.length === letters.length)
        progress += 25;

    if(unlockedPhoto)
        progress += 25;

    if(unlockedCake)
        progress += 25;

    if(unlockedFinal)
        progress += 25;

    return progress;

}

function showStartScreen(){

    changeScreen(`

        <h1>

            Vaish<br>
            Turns 18

        </h1>

        <p class="subtitle">

            A little birthday adventure made with love ♡

            <br><br>

            Complete every chapter to uncover your final surprise.

        </p>

        <button id="startBtn">

            Start Adventure ✨

        </button>

    `, () => {

        document
            .getElementById("startBtn")
            .addEventListener("click", startLoading);

    });

}
// ==========================================
// LOADING
// ==========================================

function startLoading(){

    changeScreen(`

        <h1>Preparing Your Birthday...</h1>

        <div class="loading-bar">

            <div id="progressBar"></div>

        </div>

        <p id="loadingText" class="subtitle">

            Please wait...

        </p>

    `, () => {

        const bar = document.getElementById("progressBar");
        const text = document.getElementById("loadingText");

        const messages = [

            "🎂 Baking the birthday cake...",
            "💌 Gathering heartfelt letters...",
            "📸 Looking through old memories...",
            "🎀 Wrapping everything with love...",
            "✨ Adding a little magic...",
            "💜 Happy Birthday, Vaish."

        ];

        let index = 0;

        const interval = setInterval(() => {

            text.textContent = messages[index];

            bar.style.width = ((index + 1) / messages.length) * 100 + "%";

            index++;

            if(index === messages.length){

                clearInterval(interval);

                setTimeout(showMenu,700);

            }

        },700);

    });

}
function showMenu(){

    changeScreen(`

        <h1>Welcome Back, Vaish 💜</h1>

        <p class="subtitle">

            Every birthday tells a story.

            Complete each chapter to reach the ending.

        </p>

        <div class="progress-container">

            <div
                class="progress-fill"
                style="width:${getProgress()}%;">

            </div>

        </div>

        <p class="subtitle">

            ${getProgress()}% Complete

        </p>

        <div class="chapter-grid">

            <div class="chapter-card" id="lettersCard">

                <div class="chapter-icon">💌</div>

                <h2>Chapter One</h2>

                <span>Letters from friends</span>

            </div>

            <div class="chapter-card ${unlockedPhoto ? "" : "locked"}" id="photoCard">

                <div class="chapter-icon">📸</div>

                <h2>Chapter Two</h2>

                <span>Memories</span>

            </div>

            <div class="chapter-card ${unlockedCake ? "" : "locked"}" id="cakeCard">

                <div class="chapter-icon">🎂</div>

                <h2>Chapter Three</h2>

                <span>Make a Wish</span>

            </div>

            <div class="chapter-card ${unlockedFinal ? "" : "locked"}" id="finalCard">

                <div class="chapter-icon">💜</div>

                <h2>Chapter Four</h2>

                <span>The Final Letter</span>

            </div>

        </div>

    `, () => {

        

        if(unlockedPhoto){

            document.getElementById("photoCard")
                .addEventListener("click", showPhotoRoll);

        }

        if(unlockedCake){

            document.getElementById("cakeCard")
                .addEventListener("click", showCake);

        }

        if(unlockedFinal){

            document.getElementById("finalCard")
                .addEventListener("click", showFinalLetter);

        }

    });
    document
.getElementById("lettersCard")
.addEventListener("click",showLetters);

}
function showLetters(){

    changeScreen(`

        <h1>💌 Friend Letters</h1>

        <p class="subtitle">
            Click an envelope to read it.
        </p>

        <div class="letter-grid">

            ${letters.map((letter,index)=>`

                <div
                    class="envelope"
                    data-id="${index}">

                    ${
                        openedLetters.includes(index)
                        ? "📬"
                        : "💌"
                    }

                </div>

            `).join("")}

        </div>

        <p class="subtitle">

            ${openedLetters.length}/${letters.length}
            Letters Opened

        </p>

        <button id="backBtn">

            ← Back

        </button>

    `,()=>{

        document
        .querySelectorAll(".envelope")
        .forEach(envelope=>{

            envelope.addEventListener("click",()=>{

                openLetter(
                    Number(envelope.dataset.id)
                );

            });

        });

        document
        .getElementById("backBtn")
        .addEventListener("click",showMenu);

    });

}

function openLetter(index){

    if(!openedLetters.includes(index)){

        openedLetters.push(index);

    }

    if(openedLetters.length === letters.length){

        unlockedPhoto = true;

    }

    changeScreen(`

        <h1>${letters[index].title}</h1>

        <div class="note-card">

            <p style="white-space:pre-line;">

                ${letters[index].message}

            </p>

        </div>

        ${
            openedLetters.length === letters.length

            ?

            `

            <p class="complete">

                💜 Chapter Complete!

                <br>

                Photo Roll Unlocked.

            </p>

            `

            :

            ""

        }

        <button id="backBtn">

            ← Back

        </button>

    `,()=>{

        document
            .getElementById("backBtn")
            .addEventListener("click",showLetters);

    });

}

function showPhotoRoll(){

    changeScreen(`

        <h1>📸 Photo Roll</h1>

        <img
            src="${photos[currentPhoto]}"
            class="photo"
            alt="Memory">

        <p class="photo-counter">

            ${currentPhoto + 1} / ${photos.length}

        </p>

            
           <div class="photo-buttons">

    <button
        id="prevBtn"
        ${currentPhoto === 0 ? "disabled" : ""}>

        ← Previous

    </button>

    <button id="nextBtn">

        ${currentPhoto === photos.length - 1
            ? "Finish →"
            : "Next →"}

    </button>

</div>

        </div>

        <button id="menuBtn">

            ← Menu

        </button>

    `,()=>{

        document
            .getElementById("prevBtn")
            .addEventListener("click",previousPhoto);

        document
            .getElementById("nextBtn")
            .addEventListener("click",nextPhoto);

        document
            .getElementById("menuBtn")
            .addEventListener("click",showMenu);

    });

}
function previousPhoto(){

    if(currentPhoto > 0){

        currentPhoto--;

    }

    showPhotoRoll();

}
function nextPhoto(){

    if(currentPhoto < photos.length - 1){

        currentPhoto++;

        showPhotoRoll();

        return;

    }

    unlockedCake = true;

    showPhotoComplete();

}
function showPhotoComplete(){

    changeScreen(`

        <h1>📸</h1>

        <h2>

            Every picture tells a story.

        </h2>

        <p class="subtitle">

            Thank you for walking through these memories.

            <br><br>

            But birthdays aren't complete without making a wish...

        </p>

        <button id="continueBtn">

            🎂 Continue

        </button>

    `,()=>{

        document
            .getElementById("continueBtn")
            .addEventListener("click",showCake);

    });

}
let candlesBlown = 0;

function showCake(){

    candlesBlown = 0;

    changeScreen(`

        <h1>🎂 Make A Birthday Wish</h1>

        <p class="subtitle">

            Close your eyes.

            <br><br>

            Think of one wish.

            <br><br>

            When you're ready...

        </p>

        <div class="cake">

            <div class="candles">

                ${Array.from({length:18},(_,i)=>`

                    <div class="candle" data-id="${i}">

                        <div class="flame"></div>

                    </div>

                `).join("")}

            </div>

            <div class="layer layer3">

                <div class="frosting"></div>

            </div>

            <div class="layer layer2">

                <div class="frosting"></div>

            </div>

            <div class="layer layer1">

                <div class="frosting"></div>

            </div>

        </div>

       <p id="wishText" class="subtitle">

    ✨ Every wish deserves to be believed in.

</p>

<button id="blowBtn">

    🕯 Blow Out Candles

</button>

<br><br>

<button
    id="letterUnlock"
    style="display:none;">

    💜 Open My Letter

</button>

    `,()=>{

        document
.getElementById("blowBtn")
.addEventListener("click",blowCandles);

    });

}
function blowCandles(){

    const candles =
        document.querySelectorAll(".candle");

    const wishText =
        document.getElementById("wishText");

    const button =
        document.getElementById("letterUnlock");

    const blowBtn =
        document.getElementById("blowBtn");

    blowBtn.disabled = true;

    candles.forEach((candle,index)=>{

        setTimeout(()=>{

            candle.classList.add("out");

        }, index * 120);

    });

    setTimeout(()=>{

        unlockedFinal = true;

        wishText.innerHTML = `
            ✨ Keep believing in impossible things.
            <br><br>
            💜 Your wish has been heard.
        `;

        button.style.display = "inline-block";

        setTimeout(()=>{

            button.classList.add("show");
button.addEventListener(
    "click",
    showFinalLetter
);
        }, 50);

    }, candles.length * 120 + 300);

}
function showFinalLetter(){

    unlockedFinal = true;

    changeScreen(`

        <h1 class="letter-title">

            💜 One Last Letter

        </h1>

        <div class="final-letter">

            <p>

                <strong>Eighteen.</strong>

                <br>

                It's such a funny age because everyone celebrates it like you've finally arrived somewhere. Overnight you're supposed to become an adult. You're handed responsibilities, expectations, paperwork, and people start speaking to you differently, as if a single birthday could reorganize an entire soul.

                <br>

                But I don't think eighteen is about becoming someone new.

                <br>

                I think it's about finally meeting the person who's been quietly growing inside you all along.

                <br>

                There will be days this year when you'll feel impossibly behind. You'll watch people your age seem like they have everything figured out, their careers, relationships, dreams, identities. You'll wonder if you're wasting time. You'll compare your beginning to someone else's middle.

                <br>

                Please don't.

                <br>

                Life has this strange way of making everyone look like they're moving at the same speed when, in reality, we're all walking through completely different landscapes. Some people are climbing mountains. Some are crossing oceans. Some are just learning how to stand after a storm. None of those journeys are more meaningful than the others.

                <br>

                I hope eighteen teaches you that your timeline is not something to apologize for.

                <br>

                I hope you stop shrinking yourself to fit rooms that were never built for you.

                <br>

                I hope you make mistakes that become stories instead of regrets.

                <br>

                I hope you learn that changing your mind isn't failure, it's proof that you're paying attention to yourself.

                <br>

                I hope you realize that growing up isn't losing the little girl inside you.

                It's becoming the kind of person she would have felt safe with.

                <br>

                People will tell you adulthood is about becoming tougher.

                I think they're only half right.

                <br>

                The strongest people I've ever known are the ones who never let the world convince them that kindness was weakness.

                Stay soft.

                Stay curious.

                Stay the person who notices when someone is sitting alone.

                Stay the person who laughs too hard at stupid jokes.

                Stay the person who still believes beautiful things are worth making.

                <br>

                The world has enough people trying to seem important.

                <br>

                <strong>Be someone who makes people feel important.</strong>

                <br>

                One day you'll look back at this version of yourself and you'll notice things you can't see today. You'll realize you were braver than you gave yourself credit for. Kinder than you knew. More resilient than you felt. The chapters you thought were ruining your story will become the paragraphs that made it worth reading.

                <br>

                Isn't that beautiful?

                <br>

                We only understand our lives in reverse, but we have to live them forward.

                <br>

                So here's my wish for you...

                <br>

                May you chase things that make your eyes light up instead of things that only look impressive from far away.

                <br>

                May you never confuse productivity with purpose.

                <br>

                May you have the courage to leave places that make you feel small.

                <br>

                May you find friendships that feel like home, and become that kind of home for other people too.

                <br>

                May your heart stay open even after disappointment.

                <br>

                May you remember that being loved has nothing to do with being perfect.

                <br>
                And on the days you forget who you are and there will be days like that, I hope you remember this:

                <br>

                <strong>You have never been behind.</strong>

                <br>

                <strong>You have never been too much.</strong>

                <br>

                <strong>You have never needed to earn the right to take up space in this world.</strong>

                <br>

                You simply needed time to become yourself.

                <br>

                Happy 18th birthday.

                <br>

                Thank you for existing exactly as you are.

                Thank you for every conversation, every laugh, every memory we've accidentally turned into something we'll probably talk about years from now.

                My life is infinitely better because you happened to walk into it.

                <br>

                Here's to eighteen, not as the year you become an adult, but as the year you give yourself permission to become fully, unapologetically you.

                <br>

                And if life ever gets loud, confusing, or overwhelming, I hope a tiny part of you remembers this letter and smiles.

                <br>

                Because no matter how much the years change you, I'll always be cheering for the person you've always been becoming.

            </p>

            <hr class="letter-line">

            <p class="signature">

                Happy Birthday, Vaish. 🤍

                <br><br>

                — Axa

            </p>

        </div>

        <button id="endingBtn">

            ✨ Finish

        </button>

    `,()=>{

    
document
    .getElementById("endingBtn")
    .addEventListener("click",()=>{

        changeScreen(`

            <h1>🤍</h1>

            <p class="subtitle">
                Thank you for reading.
            </p>

        `);

        setTimeout(showEnding,2000);

    });

});

}
function showEnding(){

    changeScreen(`

        <h1>🤍</h1>

        <h2>

            Happy 18th Birthday, Vaish.

        </h2>

        <p class="subtitle">

            Thank you for taking this little journey.

            <br><br>

            I hope that whenever life feels loud,
            uncertain, or overwhelming,
            you remember that you're loved,
            you're enough,
            and you're becoming exactly who you're meant to be.

            <br><br>

            Thank you for existing.
Made with love,
overthinking,
and way too many late nights.

♡
P.S.

If you're reading this years from now...

I hope life has been kind to you.
            <br><br>

            With all my love,

            <br><br>

            — Axa 🤍

        </p>

        <button id="memoriesBtn">

            ♡ Relive the Memories

        </button>

        <br><br>

        <button id="restartBtn" class="secondary-btn">

            ↺ Start From the Beginning

        </button>

    `,()=>{

        document
            .getElementById("memoriesBtn")
            .addEventListener("click",()=>{

                currentPhoto = 0;
                showMenu();

            });

        document
            .getElementById("restartBtn")
            .addEventListener("click",()=>{

                openedLetters = [];

                unlockedPhoto = false;
                unlockedCake = false;
                unlockedFinal = false;

                currentPhoto = 0;
                candlesBlown = 0;

                showStartScreen();

            });

    });

}

// ==========================================
// FLOATING FAIRY LIGHTS
// ==========================================

const decorations = document.getElementById("decorations");

for(let i = 0; i < 25; i++){

    const light = document.createElement("div");

    light.className = "fairy-light";

const size = 4 + Math.random() * 8;

light.style.width = size + "px";
light.style.height = size + "px";
    light.style.left = Math.random() * 100 + "vw";

    light.style.top = Math.random() * 100 + "vh";

    light.style.animationDelay = Math.random() * 8 + "s";

    light.style.animationDuration = (6 + Math.random() * 6) + "s";

    decorations.appendChild(light);

}