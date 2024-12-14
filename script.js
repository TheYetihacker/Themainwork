document.getElementById('load-video').addEventListener('click', async () => {
  const linkInput = document.getElementById('video-link');
  const videoPlayer = document.getElementById('video-player');

  const teraboxLink = linkInput.value.trim();

  if (teraboxLink) {
    try {
      // Step 1: Extract the direct video URL
      const directURL = await extractDirectURL(teraboxLink);

      if (directURL) {
        // Step 2: Load the direct video link into the player
        videoPlayer.src = directURL;
        videoPlayer.style.display = 'block';
        videoPlayer.load();
        videoPlayer.play();
      } else {
        alert('Failed to extract the direct video URL. Check the link.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while processing the link.');
    }
  } else {
    alert('Please paste a valid Terabox link.');
  }
});

document.getElementById('clear-link').addEventListener('click', () => {
  document.getElementById('video-link').value = '';
  const videoPlayer = document.getElementById('video-player');
  videoPlayer.src = '';
  videoPlayer.style.display = 'none';
});

document.getElementById('fullscreen').addEventListener('click', () => {
  const videoPlayer = document.getElementById('video-player');

  if (videoPlayer.requestFullscreen) {
    videoPlayer.requestFullscreen();
  } else if (videoPlayer.mozRequestFullScreen) {
    videoPlayer.mozRequestFullScreen();
  } else if (videoPlayer.webkitRequestFullscreen) {
    videoPlayer.webkitRequestFullscreen();
  } else if (videoPlayer.msRequestFullscreen) {
    videoPlayer.msRequestFullscreen();
  }
});

document.getElementById('download-video').addEventListener('click', () => {
  const videoSrc = document.getElementById('video-player').src;

  if (videoSrc) {
    const a = document.createElement('a');
    a.href = videoSrc;
    a.download = 'video.mp4';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } else {
    alert('No video loaded to download.');
  }
});

async function extractDirectURL(teraboxLink) {
  // Simulating the extraction of the direct video URL.
  // You must implement the logic to extract the URL from Terabox.
  console.log('Extracting direct video URL from:', teraboxLink);

  // Example of using a backend API (or custom logic).
  // return await fetch('https://your-backend-api.com/extract', { method: 'POST', body: { link: teraboxLink } });

  // For now, returning the input link for testing:
  return teraboxLink;
}