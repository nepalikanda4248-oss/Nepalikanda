// List of all your video folders
const videos = ["video1", "video2"]; // add more folders as needed

// Pick the first video folder
const firstVideo = videos[0];

// Immediately redirect user to Step1 / Step2.html of the first video
window.location.href = `${firstVideo}/Step2.html`;
