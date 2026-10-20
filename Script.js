// TanishStudios Portfolio Interactions Script
document.addEventListener("DOMContentLoaded", () => {
  console.log("TanishStudios Portfolio loaded successfully!");

  // Smooth appearance effect for video card on load
  const videoCard = document.querySelector(".video-card");
  if (videoCard) {
    videoCard.style.opacity = "0";
    videoCard.style.transform = "translateY(20px)";
    videoCard.style.transition = "all 0.8s ease-out";
    
    setTimeout(() => {
      videoCard.style.opacity = "1";
      videoCard.style.transform = "translateY(0)";
    }, 200);
  }
});
