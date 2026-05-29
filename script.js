const navItems = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");

navItems.forEach(btn => {

btn.addEventListener("click", () => {

pages.forEach(page => {
page.classList.remove("active-page");
});

navItems.forEach(nav => {
nav.classList.remove("active-nav");
});

const pageId = btn.getAttribute("data-page");

document
.getElementById(pageId)
.classList.add("active-page");

btn.classList.add("active-nav");

});

});



/* =========================
BALANCE
========================= */

let visible = true;

let mainBalance = 0;
let rewardBalance = 0;

const toggleBalance =
document.getElementById("toggleBalance");

const balanceText =
document.getElementById("balanceText");

const cfaText =
document.getElementById("cfaText");

const rewardText =
document.getElementById("rewardBalance");

function updateBalances(){

if(visible){

balanceText.innerText = mainBalance;
cfaText.innerText = `≈ ${mainBalance} FCFA`;

}else{

balanceText.innerText = "••••";
cfaText.innerText = "≈ ••••";

}

rewardText.innerText =
rewardBalance + " BCC";

}

updateBalances();

toggleBalance.addEventListener("click",()=>{

visible = !visible;

if(visible){

toggleBalance.innerHTML =
'<i class="fa-regular fa-eye"></i>';

}else{

toggleBalance.innerHTML =
'<i class="fa-regular fa-eye-slash"></i>';

}

updateBalances();

});



/* =========================
DARK MODE
========================= */

const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

themeToggle.innerHTML =
'<i class="fa-solid fa-sun"></i>';

}else{

themeToggle.innerHTML =
'<i class="fa-solid fa-moon"></i>';

}

});



/* =========================
XP SYSTEM
========================= */

let xp = 0;

function updateXP(){

document.getElementById("xpFill")
.style.width = xp + "%";

document.getElementById("levelPercent")
.innerText = xp + "%";

}

updateXP();



/* =========================
COPY REFERRAL
========================= */

function copyReferralLink(){

navigator.clipboard.writeText(
"https://bccfuture.com/ref/BCC20458"
);

openModal(`

<h2>✅ Lien copié</h2>

<p style="margin-top:15px">
Votre lien de parrainage a été copié.
</p>

<button class="close-btn"
onclick="closeModal()">
Fermer
</button>

`);

}

document
.getElementById("copyReferral")
.addEventListener("click",copyReferralLink);

document
.getElementById("copyReferral2")
.addEventListener("click",copyReferralLink);



/* =========================
MODAL
========================= */

const modal =
document.getElementById("mainModal");

const modalContent =
document.getElementById("modalContent");

function openModal(content){

modal.style.display = "flex";

modalContent.innerHTML = content;

}

function closeModal(){

modal.style.display = "none";

modalContent.innerHTML = "";

if(window.currentStream){

window.currentStream
.getTracks()
.forEach(track=>track.stop());

}

}

window.closeModal = closeModal;

window.addEventListener("click",(e)=>{

if(e.target === modal){

closeModal();

}

});



/* =========================
MISSIONS
========================= */

document
.querySelectorAll(".mission-btn")
.forEach(btn=>{

btn.addEventListener("click",()=>{

openModal(`

<h2>🎯 ${btn.innerText}</h2>

<p style="margin-top:10px">
💰 Gain : 0 BCC
</p>

<p style="margin-top:10px">
⏱️ Durée : 0 min
</p>

<p style="margin-top:10px">
📋 Mission contrôlée par admin.
</p>

<button class="main-btn"
style="width:100%;margin-top:20px">

COMMENCER

</button>

<button class="close-btn"
onclick="closeModal()">

Fermer

</button>

`);

});

});



/* =========================
SEND
========================= */

document
.getElementById("sendBtn")
.addEventListener("click",()=>{

openModal(`

<h2>📤 Envoyer BCC</h2>

<input placeholder="ID BCC destinataire">

<input placeholder="Montant BCC">

<p style="margin-top:15px">
Frais : 1%
</p>

<button class="main-btn"
style="width:100%;margin-top:20px">

Confirmer

</button>

<button class="close-btn"
onclick="closeModal()">

Fermer

</button>

`);

});



/* =========================
RECEIVE
========================= */

document
.getElementById("receiveBtn")
.addEventListener("click",()=>{

openModal(`

<h2>📥 Recevoir</h2>

<div class="receive-id-box">
BCC20458
</div>

<button class="main-btn"
id="copyIdBtn"
style="width:100%;margin-top:20px">

Copier ID

</button>

<button class="close-btn"
onclick="closeModal()">

Fermer

</button>

`);

setTimeout(()=>{

const copyIdBtn =
document.getElementById("copyIdBtn");

if(copyIdBtn){

copyIdBtn.addEventListener("click",()=>{

navigator.clipboard.writeText(
"BCC20458"
);

copyIdBtn.innerText =
"ID copié ✓";

});

}

},100);

});



/* =========================
SCANNER CAMERA
========================= */

document
.getElementById("scanBtn")
.addEventListener("click",async()=>{

try{

const stream =
await navigator.mediaDevices.getUserMedia({
video:{
facingMode:"environment"
}
});

window.currentStream = stream;

openModal(`

<h2>📷 Scanner QR</h2>

<video
id="scannerVideo"
autoplay
playsinline
style="
width:100%;
height:260px;
border-radius:20px;
margin-top:20px;
background:black;
object-fit:cover;
"></video>

<p style="margin-top:15px">
Caméra active...
</p>

<button class="close-btn"
onclick="closeModal()">

Fermer

</button>

`);

const video =
document.getElementById("scannerVideo");

video.srcObject = stream;

}catch(error){

openModal(`

<h2>❌ Caméra refusée</h2>

<p style="margin-top:15px">
Autorisez la caméra pour scanner.
</p>

<button class="close-btn"
onclick="closeModal()">

Fermer

</button>

`);

}

});



/* =========================
CONVERT
========================= */

document
.getElementById("convertBtn")
.addEventListener("click",()=>{

openModal(`

<h2>🔄 Convertir</h2>

<select>

<option>Wave</option>
<option>Orange Money</option>
<option>MTN Money</option>
<option>Moov Money</option>

</select>

<input placeholder="Numéro mobile money">

<input placeholder="Montant">

<button class="main-btn"
style="width:100%;margin-top:20px">

Valider

</button>

<button class="close-btn"
onclick="closeModal()">

Fermer

</button>

`);

});



/* =========================
NOTIFICATIONS
========================= */

document
.querySelector(".notif-btn")
.addEventListener("click",()=>{

openModal(`

<h2>🔔 Notifications</h2>

<div style="
margin-top:20px;
display:flex;
flex-direction:column;
gap:15px;
">

<div class="settings-card">

<h3>
📢 ADMIN
</h3>

<p style="margin-top:10px">
Bienvenue sur BABY CASH COIN
</p>

</div>

</div>

<button class="close-btn"
onclick="closeModal()">

Fermer

</button>

`);

});



/* =========================
MISSION DU JOUR
========================= */

document
.querySelector(".center-btn")
.addEventListener("click",()=>{

openModal(`

<h2>🔥 Mission du jour</h2>

<img
src="https://i.imgur.com/8Km9tLL.png"
style="
width:100%;
height:180px;
object-fit:cover;
border-radius:20px;
margin-top:20px;
">

<p style="margin-top:15px">
Mission ajoutée par administrateur.
</p>

<button class="main-btn"
style="width:100%;margin-top:20px">

Participer

</button>

<button class="close-btn"
onclick="closeModal()">

Fermer

</button>

`);

});



/* =========================
SCRATCH CARD
========================= */

document
.getElementById("scratchCard")
.addEventListener("click",()=>{

const gains = [10,25,50,100];

const gain =
gains[
Math.floor(
Math.random()*gains.length
)
];

rewardBalance += gain;

document
.getElementById("scratchCard")
.innerHTML =
`🎉 ${gain} BCC GAGNÉS`;

updateBalances();

});



/* =========================
LEVELS
========================= */

document
.getElementById("levelBadge")
.addEventListener("click",()=>{

openModal(`

<h2>🏆 Niveaux BCC</h2>

<div style="
margin-top:20px;
display:flex;
flex-direction:column;
gap:12px;
">

<div class="badge">
🥉 Niveau 1 → 15 : BRONZE
</div>

<div class="badge">
🥈 Niveau 16 → 30 : SILVER
</div>

<div class="badge">
🥇 Niveau 31 → 45 : GOLD
</div>

<div class="badge">
💎 Niveau 46 → 50 : PREMIUM
</div>

<div class="badge">
🔥 Niveau 51 → 60 : PRO
</div>

<div class="badge">
👑 Niveau 65+ : SUPER PRO
</div>

</div>

<button class="close-btn"
onclick="closeModal()">

Fermer

</button>

`);

});



/* =========================
TRANSFER REWARD
========================= */

document
.getElementById("transferRewardBtn")
.addEventListener("click",()=>{

mainBalance += rewardBalance;

rewardBalance = 0;

updateBalances();

openModal(`

<h2>✅ Récompenses transférées</h2>

<p style="margin-top:15px">

Les récompenses ont été envoyées
vers le solde principal.

</p>

<button class="close-btn"
onclick="closeModal()">

Fermer

</button>

`);

});
