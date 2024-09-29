const songs = [
    { 
        name: "Gaadi Kaali", 
        url: "spotifydown.com - Gaadi Kaali.mp3",
        image: "i wanna be yours.jpeg",
        description: "A great track for chilling."
    },
    { 
        name: "Haza Salaam", 
        url: "spotifydown.com - Haza Salam.mp3",
        image: "i wanna be yours.jpeg",
        description: "An upbeat and energetic track."
    },
    { 
        name: "I just Wanna Be Yours", 
        url: "spotifydown.com - I Wanna Be Yours.mp3",
        image: "i wanna be yours.jpeg",
        description: "A romantic song with deep lyrics."
    },
    { 
        name: "Ride it", 
        url: "spotifydown.com - Ride It.mp3",
        image: "i wanna be yours.jpeg",
        description: "Save the horse nd Ride the cowboy."
    }
];

let currentIndex = 0;
let isPlaying = false;
const audio = document.getElementById("audio");
const playButton = document.querySelector("#play");

// Function to update song details
function updateSongDetails(index) {
    document.getElementById("song-image").src = songs[index].image; // Update image
    document.getElementById("song-name").textContent = songs[index].name; // Update name
    document.getElementById("song-description").textContent = songs[index].description; // Update description
}

// Function to change play button color
function updatePlayButtonColor() {
    if (window.innerWidth <= 768) {
        playButton.style.color = isPlaying ? "rgb(189, 57, 57)" : "white"; // Change color for mobile
    } else {
        playButton.style.color = isPlaying ? "rgb(160, 40, 40)" : "black"; // Change color for laptop
    }
}

// Play/Pause functionality
playButton.addEventListener("click", () => {
    if (!isPlaying) {
        audio.src = songs[currentIndex].url; // Set the audio source
        audio.play(); // Play the audio
        isPlaying = true;

        // Show song details only for laptop
        if (window.innerWidth > 768) {
            updateSongDetails(currentIndex);
            document.getElementById("song-image").style.display = "block";
            document.getElementById("song-name").style.display = "block";
            document.getElementById("song-description").style.display = "block";
        }
    } else {
        audio.pause(); // Pause the audio
        isPlaying = false;
    }
    
    updatePlayButtonColor(); // Update color after play/pause
});

// Change color of back and forward buttons on touch for mobile
function changeButtonColor(button) {
    button.style.color = "rgb(189, 81, 81)"; // Change to new color
    setTimeout(() => {
        button.style.color = ""; // Reset to original color
    }, 300); // Change back after 0.5 seconds
}

// Forward button functionality
document.getElementById("forward").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % songs.length; // Move to next song
    audio.src = songs[currentIndex].url;
    if (isPlaying) {
        audio.play();
    }
    updateSongDetails(currentIndex); // Update song details
    if (window.innerWidth <= 768) {
        changeButtonColor(document.getElementById("forward")); // Change color only on mobile
    }
});

// Backward button functionality
document.getElementById("back").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length; // Move to previous song
    audio.src = songs[currentIndex].url;
    if (isPlaying) {
        audio.play();
    }
    updateSongDetails(currentIndex); // Update song details
    if (window.innerWidth <= 768) {
        changeButtonColor(document.getElementById("back")); // Change color only on mobile
    }
});

// Initially hide song details for mobile
document.getElementById("song-image").style.display = "none";
document.getElementById("song-name").style.display = "none";
document.getElementById("song-description").style.display = "none";

// Automatically show song details for mobile when the page loads
window.onload = () => {
    if (window.innerWidth <= 768) {
        updateSongDetails(currentIndex); // Update song details on mobile load
        document.getElementById("song-image").style.display = "block";
        document.getElementById("song-name").style.display = "block";
        document.getElementById("song-description").style.display = "block";
    }
};
