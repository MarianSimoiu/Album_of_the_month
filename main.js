
// Firebase SDK v9 (Modular)
import { increment } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, serverTimestamp, where, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
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
  const msg = trash[Math.floor(Math.random() * trash.length)];
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
  const url = event.currentTarget.href;
  
  // Unique listeners logic
  const visitorId = getVisitorId();
  if (!(await hasUserBeenCounted(visitorId))) {
    await updateDoc(uniqueListenersRef, { count: increment(1) });
    await markUserCounted(visitorId);
  }
  
  // iOS-friendly link opening
  setTimeout(() => {
    window.location.href = url;
  }, 100);
});

document.getElementById("ytMusicLink").addEventListener("click", async (event) => {
  event.preventDefault();
  const url = event.currentTarget.href;
  
  // Unique listeners logic
  const visitorId = getVisitorId();
  if (!(await hasUserBeenCounted(visitorId))) {
    await updateDoc(uniqueListenersRef, { count: increment(1) });
    await markUserCounted(visitorId);
  }
  
  // iOS-friendly link opening
  setTimeout(() => {
    window.location.href = url;
  }, 100);
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

// ========================================== WEEKLY ALBUM SUBMISSIONS ==========================================

// Track submission status to avoid repeated queries
let userHasSubmittedThisWeek = false;

// Check if user has already submitted an album this week
async function checkUserSubmissionStatus(visitorId, weekId) {
  try {
    const submissionsRef = query(
      collection(db, "weeklyAlbums"),
      where("weekId", "==", weekId)
    );
    const snap = await getDocs(submissionsRef);
    
    // Get current username
    const username = document.getElementById("username").textContent;
    
    // Check if current user submitted any album this week
    const userSubmissions = snap.docs.filter(doc => doc.data().submittedBy === username);
    return userSubmissions.length > 0;
  } catch (error) {
    console.error("Error checking submissions:", error);
    return false;
  }
}

// Toggle form visibility
const toggleFormBtn = document.getElementById("toggleFormBtn");
const albumSubmissionBox = document.getElementById("albumSubmissionBox");

toggleFormBtn.addEventListener("click", () => {
  if (userHasSubmittedThisWeek) {
    alert("You have already submitted an album this week. You can submit again next week!");
    return;
  }
  
  const isHidden = albumSubmissionBox.style.display === "none";
  albumSubmissionBox.style.display = isHidden ? "block" : "none";
  toggleFormBtn.textContent = isHidden ? "✖️ Close Form" : "➕ Add Your Album";
});

// Real-time validation for Spotify URL
document.getElementById("spotifyUrl").addEventListener("input", (e) => {
  const url = e.target.value.trim();
  const validationMsg = document.getElementById("spotifyValidation");
  
  if (!url) {
    validationMsg.style.display = "none";
    return;
  }
  
  if (isValidSpotifyUrl(url)) {
    validationMsg.textContent = "✓ Valid Spotify URL";
    validationMsg.style.color = "#1DB954";
    validationMsg.style.display = "block";
  } else {
    validationMsg.textContent = "✗ Invalid Spotify URL (must be from open.spotify.com/album/...)";
    validationMsg.style.color = "#d32f2f";
    validationMsg.style.display = "block";
  }
});

// Real-time validation for YouTube Music URL
document.getElementById("youtubeMusicUrl").addEventListener("input", (e) => {
  const url = e.target.value.trim();
  const validationMsg = document.getElementById("youtubeValidation");
  
  if (!url) {
    validationMsg.style.display = "none";
    return;
  }
  
  if (isValidYoutubeMusicUrl(url)) {
    validationMsg.textContent = "✓ Valid YouTube Music URL";
    validationMsg.style.color = "#1DB954";
    validationMsg.style.display = "block";
  } else {
    validationMsg.textContent = "✗ Invalid YouTube Music URL (must be from music.youtube.com/browse/...)";
    validationMsg.style.color = "#d32f2f";
    validationMsg.style.display = "block";
  }
});

// Check submission status when page loads
async function initializeSubmissionCheck() {
  const visitorId = getVisitorId();
  const weekId = getCurrentWeekId();
  const hasSubmitted = await checkUserSubmissionStatus(visitorId, weekId);
  
  if (hasSubmitted) {
    userHasSubmittedThisWeek = true;
    toggleFormBtn.disabled = true;
    toggleFormBtn.style.opacity = "0.5";
    toggleFormBtn.style.cursor = "not-allowed";
    toggleFormBtn.textContent = "✅ Album Submitted";
    toggleFormBtn.title = "You have already submitted an album this week. Come back next week!";
  }
}

// Get current week identifier (year-week)
function getCurrentWeekId() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const diff = now - start;
  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  const weekNum = Math.floor(diff / oneWeek);
  return `${now.getFullYear()}-W${weekNum}`;
}

// Calculate countdown to end of week (Sunday 11:59:59 PM)
function updateCountdown() {
  try {
    const now = new Date();
    const currentDay = now.getDay(); // 0 = Sunday, 6 = Saturday
    
    // Calculate days until next Sunday
    const daysUntilSunday = (7 - currentDay) % 7 || 7; // If today is Sunday, 7 days
    
    // Create target date (Sunday 11:59:59 PM)
    const targetDate = new Date(now);
    targetDate.setDate(targetDate.getDate() + daysUntilSunday);
    targetDate.setHours(23, 59, 59, 0);
    
    // Calculate difference
    const diff = targetDate - now;
    
    if (diff <= 0) {
      document.getElementById("countdownText").textContent = "0d 0h 0m 0s";
      return;
    }
    
    // Calculate days, hours, minutes, seconds
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById("countdownText").textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } catch (error) {
    console.error("Error updating countdown:", error);
    document.getElementById("countdownText").textContent = "Error";
  }
}

// Update featured album display with name, artist, links, and image
function updateFeaturedAlbum(album) {
  // Update title and heading
  document.getElementById("pageTitle").textContent = `🎵 ${album.albumName} by ${album.artistName} | Maruja`;
  document.getElementById("albumDisplay").textContent = `${album.albumName} - ${album.artistName}`;
  document.getElementById("featuredAlbumDisplay").textContent = `${album.albumName}`;
  
  // Update album cover image
  if (album.coverImage) {
    document.getElementById("albumCoverImage").src = album.coverImage;
  }
  
  // Update platform links
  const spotifyLink = document.getElementById("spotifyLink");
  const ytMusicLink = document.getElementById("ytMusicLink");
  
  if (album.spotifyUrl) {
    spotifyLink.href = album.spotifyUrl;
    spotifyLink.style.display = "inline-block";
  } else {
    spotifyLink.style.display = "none";
  }
  
  if (album.youtubeMusicUrl) {
    ytMusicLink.href = album.youtubeMusicUrl;
    ytMusicLink.style.display = "inline-block";
  } else {
    ytMusicLink.style.display = "none";
  }
}

// Validate Spotify URL
function isValidSpotifyUrl(url) {
  if (!url) return true; // Optional field
  try {
    const urlObj = new URL(url);
    // Check if it's from Spotify domain and contains /album/
    return urlObj.hostname.includes("spotify.com") && urlObj.pathname.includes("/album/");
  } catch (e) {
    return false;
  }
}

// Validate YouTube Music URL (specifically for music.youtube.com, not regular YouTube)
function isValidYoutubeMusicUrl(url) {
  if (!url) return true; // Optional field
  try {
    const urlObj = new URL(url);
    // MUST be from music.youtube.com (not regular youtube.com)
    // AND must have /browse/ path for albums
    const isYTMusic = urlObj.hostname === "music.youtube.com" || urlObj.hostname.endsWith(".music.youtube.com");
    const hasAlbumPath = urlObj.pathname.includes("/browse/");
    return isYTMusic && hasAlbumPath;
  } catch (e) {
    return false;
  }
}

// Convert file to base64
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

// Handle album submission
const albumForm = document.getElementById("albumSubmissionForm");
albumForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const albumName = document.getElementById("albumName").value.trim();
  const artistName = document.getElementById("artistName").value.trim();
  const coverFile = document.getElementById("albumCover").files[0];
  const spotifyUrl = document.getElementById("spotifyUrl").value.trim();
  const youtubeMusicUrl = document.getElementById("youtubeMusicUrl").value.trim();
  const username = document.getElementById("username").textContent;
  
  if (!albumName || !artistName || !coverFile) {
    alert("Please fill in all required fields");
    return;
  }
  
  // Validate Spotify URL if provided
  if (spotifyUrl && !isValidSpotifyUrl(spotifyUrl)) {
    alert("Invalid Spotify URL. Please provide a valid Spotify album link (e.g., https://open.spotify.com/album/...)");
    return;
  }
  
  // Validate YouTube Music URL if provided
  if (youtubeMusicUrl && !isValidYoutubeMusicUrl(youtubeMusicUrl)) {
    alert("Invalid YouTube Music URL. Please provide a valid YouTube Music album link (e.g., https://music.youtube.com/browse/...)");
    return;
  }
  
  try {
    // Convert image to base64
    const coverImage = await fileToBase64(coverFile);
    
    // Get current week ID
    const weekId = getCurrentWeekId();
    
    // Add album submission to Firebase
    await addDoc(collection(db, "weeklyAlbums"), {
      weekId,
      albumName,
      artistName,
      coverImage,
      spotifyUrl: spotifyUrl || null,
      youtubeMusicUrl: youtubeMusicUrl || null,
      submittedBy: username,
      votes: 0,
      timestamp: serverTimestamp()
    });
    
    // Clear form
    albumForm.reset();
    
    // Set submission flag and disable button
    userHasSubmittedThisWeek = true;
    toggleFormBtn.disabled = true;
    toggleFormBtn.style.opacity = "0.5";
    toggleFormBtn.style.cursor = "not-allowed";
    toggleFormBtn.textContent = "✅ Album Submitted";
    toggleFormBtn.title = "You have already submitted an album this week. Come back next week!";
    
    // Close the form
    albumForm.parentElement.style.display = "none";
    
    alert("Album submitted successfully!");
  } catch (error) {
    console.error("Error submitting album:", error);
    alert("Error submitting album. Please try again.");
  }
});

// Display this week's albums
const weeklyAlbumsContainer = document.getElementById("weeklyAlbumsContainer");
const weekId = getCurrentWeekId();

// Check if user has already voted this week
async function hasUserVotedThisWeek(visitorId, weekId) {
  const votesRef = doc(db, "weeklyVotes", `${visitorId}-${weekId}`);
  const snap = await getDoc(votesRef);
  return snap.exists() ? snap.data().albumId : null; // Return albumId if voted, null if not
}

// Record user's vote
async function recordUserVote(visitorId, weekId, albumId) {
  const votesRef = doc(db, "weeklyVotes", `${visitorId}-${weekId}`);
  await setDoc(votesRef, {
    albumId,
    weekId,
    timestamp: serverTimestamp()
  });
}

// Remove vote from an album
async function removeVoteFromAlbum(albumId) {
  await updateDoc(doc(db, "weeklyAlbums", albumId), {
    votes: increment(-1)
  });
}

onSnapshot(
  query(collection(db, "weeklyAlbums"), where("weekId", "==", weekId)),
  async (snapshot) => {
    weeklyAlbumsContainer.innerHTML = "";
    const visitorId = getVisitorId();
    const userVotedAlbumId = await hasUserVotedThisWeek(visitorId, weekId); // Get album ID if already voted
    
    // Sort albums by votes (highest first), then by timestamp (newest first)
    const albums = snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }));
    albums.sort((a, b) => {
      const votesDiff = (b.data.votes || 0) - (a.data.votes || 0);
      if (votesDiff !== 0) return votesDiff;
      return (b.data.timestamp?.toMillis() || 0) - (a.data.timestamp?.toMillis() || 0);
    });
    
    // Check if there's a manually featured album
    const featuredRef = doc(db, "featuredAlbum", weekId);
    const featuredSnap = await getDoc(featuredRef);
    
    // Update featured album: prefer manual selection, fall back to top-voted
    if (featuredSnap.exists()) {
      updateFeaturedAlbum(featuredSnap.data());
    } else if (albums.length > 0) {
      updateFeaturedAlbum(albums[0].data);
    }
    
    snapshot.forEach((docSnapshot) => {
      const data = docSnapshot.data();
      const isAlreadyVoted = userVotedAlbumId === docSnapshot.id; // Check if THIS album was voted by user
      const userHasVotedOtherAlbum = userVotedAlbumId !== null && userVotedAlbumId !== docSnapshot.id; // User voted for a different album
      
      const albumDiv = document.createElement("div");
      albumDiv.style.textAlign = "center";
      albumDiv.style.cursor = "pointer";
      albumDiv.style.transition = "transform 0.2s";
      
      let buttonText = "Vote";
      let buttonStyle = `background: #4082ff; color: white;`;
      let isDisabled = false;
      let tooltipText = "";
      
      if (isAlreadyVoted) {
        buttonText = "✓ Voted";
        buttonStyle = `background: #1DB954; color: white;`;
        isDisabled = true;
        tooltipText = "You voted for this album. Click to change your vote.";
      } else if (userHasVotedOtherAlbum) {
        buttonText = "Change Vote";
        buttonStyle = `background: #ff9800; color: white;`;
        tooltipText = "Click to change your vote from another album to this one.";
      }
      
      albumDiv.innerHTML = `
        <div style="position: relative; overflow: hidden; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.2); margin-bottom: 10px;">
          <img src="${data.coverImage}" alt="${data.albumName}" style="width: 100%; height: 150px; object-fit: cover;">
          <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.2s;" class="album-hover">
            <button class="vote-btn" data-id="${docSnapshot.id}" style="${buttonStyle}; padding: 8px 16px; border: none; border-radius: 4px; cursor: ${userVotedAlbumId !== null && !isAlreadyVoted && !userHasVotedOtherAlbum ? 'not-allowed' : 'pointer'};" title="${tooltipText}" ${userVotedAlbumId !== null && !isAlreadyVoted && !userHasVotedOtherAlbum ? 'disabled' : ''}>${buttonText}</button>
          </div>
        </div>
        <p style="margin: 0; font-weight: bold; font-size: 0.9em;">${data.albumName}</p>
        <p style="margin: 0; color: #666; font-size: 0.8em;">${data.artistName}</p>
        <p style="margin: 3px 0 0 0; color: #999; font-size: 0.75em;">by ${data.submittedBy}</p>
        <div style="margin: 8px 0 5px 0; display: flex; gap: 6px; justify-content: center; flex-wrap: wrap;">
          ${data.spotifyUrl ? `<a href="${data.spotifyUrl}" target="_blank" style="font-size: 0.75em; padding: 4px 8px; background: #1DB954; color: white; border-radius: 4px; text-decoration: none; display: inline-block; cursor: pointer;">🎵 Spotify</a>` : ''}
          ${data.youtubeMusicUrl ? `<a href="${data.youtubeMusicUrl}" target="_blank" style="font-size: 0.75em; padding: 4px 8px; background: #FF0000; color: white; border-radius: 4px; text-decoration: none; display: inline-block; cursor: pointer;">📺 YouTube</a>` : ''}
        </div>
        <p style="margin: 5px 0 0 0; color: #4082ff; font-weight: bold;">👍 ${data.votes ?? 0}</p>
      `;
      
      albumDiv.addEventListener("mouseenter", () => {
        albumDiv.querySelector(".album-hover").style.opacity = "1";
      });
      albumDiv.addEventListener("mouseleave", () => {
        albumDiv.querySelector(".album-hover").style.opacity = "0";
      });
      
      // Vote button handler - attach to this specific album
      const voteBtn = albumDiv.querySelector(".vote-btn");
      
      // Only allow clicking if: user hasn't voted OR they're changing vote from another album
      // Do NOT allow clicking if they already voted for THIS album
      if (userVotedAlbumId === null || userHasVotedOtherAlbum) {
        voteBtn.addEventListener("click", async (e) => {
          e.preventDefault();
          e.stopPropagation();
          try {
            console.log("Voting for album:", docSnapshot.id);
            
            // Disable button immediately to prevent multiple clicks
            voteBtn.disabled = true;
            voteBtn.style.cursor = "not-allowed";
            voteBtn.style.opacity = "0.5";
            
            // If user is changing vote, remove old vote first
            if (userHasVotedOtherAlbum) {
              console.log("Removing vote from previous album:", userVotedAlbumId);
              await removeVoteFromAlbum(userVotedAlbumId);
            }
            
            // Update the album's vote count
            await updateDoc(doc(db, "weeklyAlbums", docSnapshot.id), {
              votes: increment(1)
            });
            console.log("Vote count updated");
            
            // Record this user's vote
            await recordUserVote(visitorId, weekId, docSnapshot.id);
            console.log("User vote recorded");
            
            // Update button UI
            voteBtn.textContent = "✓ Voted";
            voteBtn.style.background = "#1DB954";
            voteBtn.style.color = "white";
            voteBtn.style.cursor = "not-allowed";
            voteBtn.style.opacity = "1";
            voteBtn.title = "You voted for this album. You cannot vote again this week.";
            
            alert(userHasVotedOtherAlbum ? "Your vote has been changed!" : "Your vote has been recorded! You cannot vote again this week.");
            
            // Disable all other vote buttons immediately to prevent any further voting
            const allVoteButtons = document.querySelectorAll(".vote-btn");
            allVoteButtons.forEach(btn => {
              btn.disabled = true;
              btn.style.cursor = "not-allowed";
              btn.style.opacity = "0.7";
            });
          } catch (error) {
            console.error("Error voting:", error);
            console.error("Error code:", error.code);
            console.error("Error message:", error.message);
            voteBtn.disabled = false;
            voteBtn.style.opacity = "1";
            alert(`Error recording your vote: ${error.message}`);
          }
        });
      }
      
      weeklyAlbumsContainer.appendChild(albumDiv);
    });
  }
);

// ========================================== END WEEKLY ALBUMS ==========================================

// ========================================== ADMIN PANEL ==========================================

const ADMIN_PASSWORD = "maruja2024"; // Change this to your desired password

// Check if user is admin
function isUserAdmin() {
  return localStorage.getItem("admin_authenticated") === "true";
}

// Admin authentication
function authenticateAdmin() {
  const password = prompt("Enter admin password:");
  if (password === ADMIN_PASSWORD) {
    localStorage.setItem("admin_authenticated", "true");
    showAdminBtn();
    alert("✅ Admin mode activated!");
    return true;
  } else if (password !== null) {
    alert("❌ Incorrect password");
    return false;
  }
  return false;
}

// Show admin button if authenticated
function showAdminBtn() {
  if (isUserAdmin()) {
    document.getElementById("adminBtn").style.display = "inline-block";
  }
}

// Show admin modal
document.getElementById("adminBtn").addEventListener("click", () => {
  const modal = document.getElementById("adminModal");
  modal.style.display = "block";
  loadAdminAlbumsList();
});

// Close admin modal
document.getElementById("closeAdminModal").addEventListener("click", () => {
  document.getElementById("adminModal").style.display = "none";
});

// Close modal when clicking outside
document.getElementById("adminModal").addEventListener("click", (e) => {
  if (e.target === document.getElementById("adminModal")) {
    document.getElementById("adminModal").style.display = "none";
  }
});

// Load and display albums in admin panel
async function loadAdminAlbumsList() {
  const weekId = getCurrentWeekId();
  const albumsList = document.getElementById("adminAlbumsList");
  albumsList.innerHTML = "";
  
  try {
    const albumsRef = query(collection(db, "weeklyAlbums"), where("weekId", "==", weekId));
    const snap = await getDocs(albumsRef);
    
    if (snap.empty) {
      albumsList.innerHTML = "<p style='grid-column: 1/-1; color: #666;'>No albums submitted yet</p>";
      return;
    }
    
    snap.forEach((docSnapshot) => {
      const data = docSnapshot.data();
      const albumDiv = document.createElement("div");
      albumDiv.style.cursor = "pointer";
      albumDiv.style.padding = "10px";
      albumDiv.style.borderRadius = "8px";
      albumDiv.style.background = "white";
      albumDiv.style.border = "2px solid #ddd";
      albumDiv.style.textAlign = "center";
      albumDiv.style.transition = "all 0.2s";
      
      albumDiv.innerHTML = `
        <img src="${data.coverImage}" alt="${data.albumName}" style="width: 100%; height: 100px; object-fit: cover; border-radius: 4px; margin-bottom: 8px;">
        <p style="margin: 5px 0; font-weight: bold; font-size: 0.85em;">${data.albumName}</p>
        <p style="margin: 3px 0; font-size: 0.75em; color: #666;">${data.artistName}</p>
        <p style="margin: 3px 0; font-size: 0.7em; color: #999;">by ${data.submittedBy}</p>
        <p style="margin: 5px 0; color: #4082ff; font-weight: bold;">👍 ${data.votes ?? 0}</p>
      `;
      
      albumDiv.addEventListener("mouseenter", () => {
        albumDiv.style.background = "#fff3cd";
        albumDiv.style.borderColor = "#ff6b00";
        albumDiv.style.transform = "scale(1.05)";
      });
      
      albumDiv.addEventListener("mouseleave", () => {
        albumDiv.style.background = "white";
        albumDiv.style.borderColor = "#ddd";
        albumDiv.style.transform = "scale(1)";
      });
      
      albumDiv.addEventListener("click", async () => {
        await setFeaturedAlbum(docSnapshot.id, data);
      });
      
      albumsList.appendChild(albumDiv);
    });
  } catch (error) {
    console.error("Error loading albums:", error);
    albumsList.innerHTML = "<p style='color: red;'>Error loading albums</p>";
  }
}

// Set featured album
async function setFeaturedAlbum(albumId, albumData) {
  try {
    // Store featured album in a special collection
    await setDoc(doc(db, "featuredAlbum", getCurrentWeekId()), {
      albumId,
      albumName: albumData.albumName,
      artistName: albumData.artistName,
      coverImage: albumData.coverImage,
      spotifyUrl: albumData.spotifyUrl || null,
      youtubeMusicUrl: albumData.youtubeMusicUrl || null,
      submittedBy: albumData.submittedBy,
      manuallyFeatured: true,
      timestamp: serverTimestamp()
    });
    
    alert(`✅ "${albumData.albumName}" is now the featured album!`);
    document.getElementById("adminModal").style.display = "none";
  } catch (error) {
    console.error("Error setting featured album:", error);
    alert("❌ Error setting featured album");
  }
}

// ========================================== END ADMIN PANEL ==========================================

// Initialize countdown timer on page load
if (document.getElementById("countdownText")) {
  updateCountdown();
  setInterval(updateCountdown, 1000); // Update every second
} else {
  console.error("Countdown element not found in DOM");
}

// Show admin button if already authenticated
showAdminBtn();

// Check if user wants to authenticate as admin (optional button press)
// For now, they need to access via console or we can add a hidden button
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get("admin") === "true") {
  authenticateAdmin();
}

// Initialize submission check on page load
initializeSubmissionCheck();
