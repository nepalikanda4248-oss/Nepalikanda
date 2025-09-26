// List of your video folders
const videos = ["video1", "video2"];

// Pick the first video for the Continue button
const firstVideo = videos[0];

// Update the Continue button link dynamically
document.getElementById("continueBtn").href = `${firstVideo}/Step2.html`;
