
// Firebase SDK v9 (Modular)
import { increment } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { doc, getDoc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";


const usernames = [
  "Dee Nial", "Paige Turner", "General Specific", "Major Major", "Anita Bath",  "Bread Pitt",
   "Lord of the Fries",  "Bill Board", "Justin Time", "Al Dente", "Sue Flay",
   "All E. Gator", "Professional Procrastinator", "Java the Hutt", "Major Minor",
   "Bubble Wrap King", "Bear Minimum", "Ambitious Sloth", "Caffeine Dependent", "Procrastination Specialist",
   "Sudo MakeMeASandwich", "Syntax Terror", "Nacho Problem"
];

const trash = [
   "Sounds like my toaster having an existential crisis. 🍞",
  "😖 Sounds like my smoke detector's angry cousin.",
  "🎺 My ears tried to file a complaint.",
  "💀 I think I just lost a braincell. Thank you.",
  "🔊 My dog is now deaf. Thanks for that.",
  "🌪️ This feels like musical chaos in a blender.",
  "😵 Nope. Not even a little. Nope.",
  "🚪 Let me just show myself out...",
  "👻 Haunted sound—literally haunting me now.",
  "🎪 This is peak 'what were they thinking' energy.",
  "⚠️ Warning: Ears may not recover. 🆘",
  "📱 Even Spotify's AutoTune feature quit.",
  "🧠 I can feel my IQ dropping with each note.",
  "😱 Plot twist: It gets worse.",
  "💔 My heart breaks for this album. Literally.",
  "🗑️ Even the trash can said 'No thank you.'",
  "🎓 This is what they play in music torture rooms.",
  "🧪 This is the control group for 'What NOT to do.'",
  "🚨 My ears are filing a lawsuit. 📋",
  "🎯 Missed the mark. By a lot.",
  "🔥 Not the good kind of fire. More like a dumpster fire.",
  "🎸 Someone needs to return that guitar.",
  "📉 The graph of my enjoyment just went to zero.",
  "🌋 Eruption of regret detected.",
  "⚡ Struck by lightning of bad taste.",
  "💥 This exploded... not in a good way.",
  "🦠 Contagious level of bad. Stay away.",
  "🧟 Zombie mode activated from hearing this.",
  "🎭 Tragic, not tragic-beautiful. Just tragic.",
  "🚂 Derailed train of musical expectations.",
  "🕷️ Got caught in a web of sound... a bad web.",
  "🧲 Repelling listeners since day one.",
  "🪤 Trap album—literally trapping my ears.",
  "💉 Need a cure for this album.",
  "🎨 Picasso would be confused. Then angry.",
  "📞 Your musical taste called... it's disappearing.",
  "🧬 This DNA tested as 'absolutely not.'",
  "🎯 The only target here is my patience (now gone).",
  "🌑 Darker than a black hole of sound.",
  "⛓️ Chained to this regret for life.",
  "🪓 Slicing through my eardrums like a hot knife.",
  "🧨 Explosive disappointment incoming.",
  "🎪 Circus of horrors: the album.",
  "🌀 Swirling vortex of acoustic nightmare.",
  "☢️ Radioactive levels of bad.",
  "🧲 Repels listeners at maximum strength.",
  "🚀 This crashed and burned on the launchpad.",
  "🎢 A rollercoaster to regret town.",
  "🧛 Vampiric energy—sucking the joy out of the room."
]

const lit = [
   "Mozart would be proud. 🎼",
  "🔥 That's on fire! Fleet Foxes just dropped some heat!",
  "🎉 You just made the album even cooler!",
  "🌟 What a hot take! The band is surely blushing now.",
  "🥇 Your taste is elite!",
  "🚀 Blasting off to good vibes!",
  "😎 Sunglasses on for this brilliance.",
  "🤣 Too good! Can't stop grooving.",
  "💃 Fancy a dance? This is album gold.",
  "🐦 Even the foxes are grooving.",
  "🏄 You're riding the ultimate wave of music.",
  "🎤 Mic drop! You know what's up.",
  "🍕 This album is as good as pizza.",
  "🦊 The fox approves of your vibes!",
  "🍀 Lucky pick! Instant good mood unlocked.",
  "🙌 High five through the screen!",
  "🤩 Awestruck reaction. The crowd goes wild!",
  "🥳 Let the party begin!",
  "✨ You've awakened the music gods.",
  "👑 Royalty confirmed. Crown acquired.",
  "🎸 *Chef's kiss* for this musical masterpiece.",
  "🌈 This is rainbow-level amazing.",
  "💎 Diamonds can't compete with your taste.",
  "🚁 Taking vibes to the next level.",
  "⚡ Electric energy detected!",
  "🎯 Bullseye! Perfect taste incoming.",
  "🏆 Hall of fame material right here.",
  "🌟 You just made the album cooler than it already was.",
  "🔮 I see a future of good music choices for you.",
  "🎊 Confetti cannons are firing in your honor!",
  "💫 Stellar choice, my friend.",
  "🚢 Smooth sailing through the best vibes.",
  "🎭 Oscar-worthy reaction to this album.",
  "🌺 Blooming with musical appreciation here.",
  "🎪 Step right up to the greatest album show!",
  "⭐ Five stars, A+, 10/10, perfection.",
  "🛸 Aliens confirm: this is peak Earth music.",
  "🎓 You graduated with honors in good taste.",
  "🌅 Beautiful sunrise of music appreciation.",
  "💝 Love at first listen confirmed!"
]

const meh = [
   "Like elevator music, but with feelings. 🛗",
  "😏 It's giving... mid. Very mid energy.",
  "🤐 I see you're playing it safe. Respect.",
  "👀 This one's for when you're 'meh' about it.",
  "🙃 Not bad, not great—just *there*.",
  "🎻 The world's tiniest violin plays for you.",
  "😑 Shrug simulator activated. 💤",
  "📻 Fine choice for a dentist waiting room.",
  "🌧️ It's like background music for your Tuesday.",
  "🍚 As vanilla as it gets, but hey, vanilla's fine.",
  "🎯 Participation trophy vibes. Nice try!",
  "😴 This one put me to sleep... in a good way? 🤔",
  "🧊 Lukewarm take detected.",
  "🚗 Solid roadtrip album material.",
  "👎 Not a villain, just... forgettable.",
  "🎲 Roll the dice on this one.",
  "🤷 Your reaction was basically a shrug emoji.",
  "📝 Added to the 'maybe later' playlist. 😌",
  "🌫️ Vibes are... *checks notes* ...meh.",
  "🪜 Heard it, didn't hate it, moving on.",
  "📺 Perfect for background TV watching.",
  "☕ It's like coffee without the caffeine boost.",
  "🧩 Just another piece of the puzzle.",
  "🛑 Stopped just short of great.",
  "⏸️ Pause button energy right here.",
  "🎢 Not quite a roller coaster, more of a merry-go-round.",
  "🌊 Waves are calm today, very calm.",
  "🎨 The artist tried. I'll give them that.",
  "📊 Rating: middle of the graph.",
  "🚶 Walking through music territory here.",
  "🎪 Good for background noise at a party.",
  "🧦 Cozy, like a warm sock. Just... a sock.",
  "🏃 Didn't run from it, but didn't chase it either.",
  "🌤️ Partly cloudy with a chance of 'meh'.",
  "🎯 Hit the target, but not the bullseye.",
  "📚 It's a chapter, not a novel.",
  "🐢 Moving at a steady, unremarkable pace.",
  "💾 Saved to 'revisit never' folder.",
  "🚲 Pedaling along without much excitement.",
  "🌾 Growing on me... very, very slowly.",
  "🎬 Plot twist: there wasn't one."
]

const firebaseConfig = {
  apiKey: "AIzaSyCA8_Q_0W9Mm3a62z9hc8eELR9BBEV2eDw",
  authDomain: "albumofthemonth-39061.firebaseapp.com",
  projectId: "albumofthemonth-39061",
  storageBucket: "albumofthemonth-39061.firebasestorage.app",
  messagingSenderId: "454136393557",
  appId: "1:454136393557:web:323713330ce55e748c89dc",
  measurementId: "G-DC217JZC6R"
};

function flashScreenWithMessage(message) {
  const flash = document.createElement('div');
  flash.className = 'flash-animation';
  document.body.appendChild(flash);

  const msg = document.getElementById('reactionMessage');
  msg.textContent = message;
  msg.style.display = 'block';

  setTimeout(() => {
    msg.style.display = 'none';
    document.body.removeChild(flash);
  }, 1500); // match animation duration
}


adoreBtn.addEventListener('click', () => {
  const msg = lit[Math.floor(Math.random() * lit.length)];
  document.getElementById('reactionMessage').textContent = msg;
  document.getElementById('reactionMessage').style.display = "block";
});
mehBtn.addEventListener('click', () => {
  const msg = meh[Math.floor(Math.random() * meh.length)];
  document.getElementById('reactionMessage').textContent = msg;
  document.getElementById('reactionMessage').style.display = "block";
});
badBtn.addEventListener('click', () => {
  const msg = bad[Math.floor(Math.random() * bad.length)];
  document.getElementById('reactionMessage').textContent = msg;
  document.getElementById('reactionMessage').style.display = "block";
});


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


async function saveVisitor() {
  const visitorId = getVisitorId();
  const timestamp = new Date().toISOString();

  await setDoc(doc(db, "visitors", visitorId), {
    firstVisit: timestamp
  }, { merge: true });
}

saveVisitor();
const commentForm = document.getElementById("commentForm");
const commentInput = document.getElementById("commentInput");
const commentList = document.getElementById("commentList");


// Username input removed; nothing to load

commentForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const text = commentInput.value.trim();
  if (!text) return;
  // Use assigned username from user-info
  const username = document.getElementById("username").textContent;
  await addDoc(collection(db, "comments"), {
    text,
    username,
    timestamp: serverTimestamp()
  });
  commentInput.value = "";
});

const q = query(collection(db, "comments"), orderBy("timestamp", "asc"));
onSnapshot(q, (snapshot) => {
  commentList.innerHTML = "";

  snapshot.forEach((doc) => {
    const data = doc.data();
    const time = data.timestamp?.toDate().toLocaleTimeString() ?? '';
    const user = data.username || "Anonymous";

    const item = document.createElement("div");
    item.style.padding = "8px";
    item.style.margin = "5px 0";
    item.style.borderRadius = "8px";
    item.style.background = "#fff";
    item.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
    item.style.textAlign = "left";

    item.innerHTML = `<strong>${user}</strong> <span style="font-size: 0.8em; color: #666;">${time}</span><br>${data.text}`;
    commentList.appendChild(item);
  });

  // Auto scroll to bottom
  commentList.scrollTop = commentList.scrollHeight;
});

// REACT BUTTONS PART
const reactionDocRef = doc(db, "reactions", "album1");

// Initialize reaction doc if not exists
async function initReactions() {
  const snap = await getDoc(reactionDocRef);
  if (!snap.exists()) {
    await setDoc(reactionDocRef, {
      adore: 0,
      meh: 0,
      bad: 0
    });
  }
}
initReactions();

// Listen for real-time updates
onSnapshot(reactionDocRef, (docSnap) => {
  const data = docSnap.data();
  document.getElementById("adoreCount").textContent = data.adore ?? 0;
  document.getElementById("mehCount").textContent = data.meh ?? 0;
  document.getElementById("badCount").textContent = data.bad ?? 0;
});

// Handlers for button clicks
document.getElementById("adoreBtn").addEventListener("click", () => {
  updateDoc(reactionDocRef, { adore: increment(1) });
});
document.getElementById("mehBtn").addEventListener("click", () => {
  updateDoc(reactionDocRef, { meh: increment(1) });
});
document.getElementById("badBtn").addEventListener("click", () => {
  updateDoc(reactionDocRef, { bad: increment(1) });
});



/////////////////////////////////////////// Unique Listeners Counter ////////////////////
const uniqueListenersRef = doc(db, "uniqueListeners", "counter");

// Initialize document if missing
async function initUniqueListeners() {
  const uniqueSnap = await getDoc(uniqueListenersRef);
  if (!uniqueSnap.exists()) {
    await setDoc(uniqueListenersRef, { count: 0 });
  }
}
initUniqueListeners();

// Show unique listeners count (optional, add an element in HTML if you want to display)
onSnapshot(uniqueListenersRef, (docSnap) => {
  if (docSnap.exists() && document.getElementById("uniqueListeners")) {
    document.getElementById("uniqueListeners").textContent = `Unique Listeners: ${docSnap.data().count}`;
  }
});

// Helper: Check if user already counted
async function hasUserBeenCounted(visitorId) {
  const userRef = doc(db, "uniqueListeners", visitorId);
  const snap = await getDoc(userRef);
  return snap.exists();
}

// Helper: Mark user as counted
async function markUserCounted(visitorId) {
  const userRef = doc(db, "uniqueListeners", visitorId);
  await setDoc(userRef, { counted: true });
}

// Only unique listeners for Spotify and YouTube Music
document.getElementById("spotifyLink").addEventListener("click", async (event) => {
  event.preventDefault();
  // Unique listeners logic
  const visitorId = getVisitorId();
  if (!(await hasUserBeenCounted(visitorId))) {
    await updateDoc(uniqueListenersRef, { count: increment(1) });
    await markUserCounted(visitorId);
  }
  window.open(event.target.href, '_blank');
});

document.getElementById("ytMusicLink").addEventListener("click", async (event) => {
  event.preventDefault();
  // Unique listeners logic
  const visitorId = getVisitorId();
  if (!(await hasUserBeenCounted(visitorId))) {
    await updateDoc(uniqueListenersRef, { count: increment(1) });
    await markUserCounted(visitorId);
  }
  window.open(event.target.href, '_blank');
});


// --- Start of Auth --- 
function getVisitorId() {
  let visitorId = localStorage.getItem("visitor_id");
  if (!visitorId) {
    visitorId = crypto.randomUUID();
    localStorage.setItem("visitor_id", visitorId);
  }
  return visitorId;
}


// --- Get or Assign Username, track all in localStorage ---
function getAllLocalUsers() {
  try {
    return JSON.parse(localStorage.getItem("all_users")) || [];
  } catch {
    return [];
  }
}

function saveLocalUser(visitorId, username) {
  const users = getAllLocalUsers();
  const idx = users.findIndex(u => u.visitorId === visitorId);
  if (idx === -1) {
    users.push({ visitorId, username });
  } else {
    users[idx].username = username;
  }
  localStorage.setItem("all_users", JSON.stringify(users));
}

async function getOrAssignUsername(visitorId) {
  // Check localStorage first
  const users = getAllLocalUsers();
  const localUser = users.find(u => u.visitorId === visitorId);
  if (localUser) {
    // Update Firebase if needed
    const ref = doc(db, "visitors", visitorId);
    const snap = await getDoc(ref);
    if (!snap.exists() || snap.data().username !== localUser.username) {
      await setDoc(ref, {
        username: localUser.username,
        firstVisit: snap.exists() ? snap.data().firstVisit : new Date().toISOString()
      }, { merge: true });
    }
    return localUser.username;
  }
  // Not in localStorage, check Firebase
  const ref = doc(db, "visitors", visitorId);
  const snap = await getDoc(ref);
  if (snap.exists() && snap.data().username) {
    saveLocalUser(visitorId, snap.data().username);
    return snap.data().username;
  } else {
    // Assign new username
    const randomName = usernames[Math.floor(Math.random() * usernames.length)];
    const timestamp = new Date().toISOString();
    await setDoc(ref, {
      username: randomName,
      firstVisit: timestamp
    }, { merge: true });
    saveLocalUser(visitorId, randomName);
    return randomName;
  }
}

// --- Fetch all usernames that have visited before ---
async function fetchAllUsernamesFromFirebase() {
  const colRef = collection(db, "visitors");
  const qSnap = await getDocs(colRef);
  const usernames = [];
  qSnap.forEach(doc => {
    const data = doc.data();
    if (data.username) usernames.push(data.username);
  });
  return usernames;
}



(async () => {
  const visitorId = getVisitorId();
  const username = await getOrAssignUsername(visitorId);
  document.getElementById("username").textContent = username;
  // Optionally, fetch all usernames and log/display them
  // const allUsernames = await fetchAllUsernamesFromFirebase();
  // console.log("All visitors:", allUsernames);
})();

// --- End of Auth ---
