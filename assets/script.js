document.addEventListener("DOMContentLoaded", function() {
  fetch('assets/videos.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(videos => {
const section = document.querySelector('.section__one');

      videos.forEach(video => {
        section.appendChild(createVideoElement(video));
      });
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });

  function createVideoElement(video) {
  const container = document.createElement('div');
  
  const hr = document.createElement('hr');
  const h2 = document.createElement('h2');
  const a = document.createElement('a');
  const img = document.createElement('img');
  const iframe = document.createElement('iframe');
  const download = document.createElement('a');
  
  h2.textContent = video.title;
  h2.style.fontFamily = "sans-serif";
  h2.style.fontWeight = '600';
  h2.style.fontSize = '18px';
// ou == Jacquard 24 Charted 
  
  img.src = video.img;
  img.alt = video.title;
  img.border = "1px solid #ff0000";
  img.width = "100%";
  img.height = "250";
  a.href = video.url;
  a.target = "_blank";
  a.appendChild(img);
  iframe.width = "0%";
  iframe.height = "0";
  iframe.border = "1px solid #ff0000";
  iframe.allowFullscreen = true;
  iframe.name = `iframe${video.title.replace(/\s+/g, '')}`;
  iframe.src = "";
  iframe.frameBorder = "0";
  
  container.append(hr, h2, a, iframe);
  return container;
}
});
