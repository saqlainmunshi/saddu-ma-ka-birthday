let i = 0;
const speed = 60;
const message = `I wish I could be there with you today, to hug you, to laugh with you, and to see your smile.
But even from afar, I hope this little surprise brings a smile to your face.
You are the most beautiful part of my life.
Here's to many more birthdays together. 🎂❤️  
I love you so much.  
\n– Yours Always Divana Babu` ;

function typeText() {
  if (i < message.length) {
    document.getElementById("typedText").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeText, speed);
  }
}

function toggleLetter() {
  const letter = document.getElementById("letter");
  const music = document.getElementById("bgMusic");
  const memories = document.getElementById("memories");

  if (letter.style.display === "block") {
    letter.style.display = "none";
    music.pause();
    music.currentTime = 0;

    // Animate hide memories
    memories.classList.remove("show");
    setTimeout(() => memories.style.display = "none", 500); // Wait for animation to end
  } else {
    letter.style.display = "block";
    i = 0;
    document.getElementById("typedText").innerHTML = "";
    typeText();

    // Animate show memories
    memories.style.display = "block";
    setTimeout(() => memories.classList.add("show"), 50); // Small delay to trigger transition
// Animate show memories
memories.style.display = "block";
setTimeout(() => memories.classList.add("show"), 50);

startMemorySlideshow(); // <-- Add this line

    music.play().catch(err => {
      console.log("Music autoplay blocked:", err);
    });
  }
}



// Heart animation
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";

  const hearts = ["❤️", "💙", "💜", "💚", "💛", "🧡", "🤍", "🩷"];
  heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

  document.querySelector(".hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 500);

function openGift() {
  document.getElementById("giftMessage").innerText = "🎉 Surprise! You're the most special gift in my life. I love you! ❤️";
  document.getElementById("giftMessage").style.display = "block";
}

let currentStart = 0;
let memoryInterval;

function startMemorySlideshow() {
  const allMemories = Array.from(document.querySelectorAll("#allMemories .memory"));
  const gallery = document.getElementById("memoryGallery");

  function showNextSet() {
    const allMemories = Array.from(document.querySelectorAll("#allMemories .memory"));
    const gallery = document.getElementById("memoryGallery");
  
    gallery.innerHTML = ""; // Clear current
  
    for (let i = 0; i < 3; i++) {
      const index = (currentStart + i) % allMemories.length;
      const clone = allMemories[index].cloneNode(true);
  
      // Add fade class to each memory block
      clone.classList.add("fade-image");
  
      gallery.appendChild(clone);
    }
  
    currentStart = (currentStart + 3) % allMemories.length;
  }
  
  

  showNextSet(); // Show first 3
  clearInterval(memoryInterval); // Avoid duplicate intervals
  memoryInterval = setInterval(showNextSet, 5000); // Every 4 seconds
}
