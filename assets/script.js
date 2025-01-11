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

    h2.textContent = video.title;
    a.target = `iframe${video.title.replace(/\s+/g, '')}`;
    a.href = video.url;
    h2.style.fontFamily = "Jacquard 24 Charted";

    img.src = video.img;
    img.alt = video.title;
    img.border = "1px solid #00ff00";
    img.width = "100%";
    img.height = "250";

    iframe.width = "100%";
    iframe.height = "250";
    iframe.border = "1px solid #00ff00";
    iframe.allowFullscreen = true;
    iframe.name = `iframe${video.title.replace(/\s+/g, '')}`;
    iframe.src = "";
    iframe.frameBorder = "0";

    a.appendChild(img);
    container.append(hr, h2, a, iframe); // Adiciona todos os elementos ao container
    return container; // Retorna o container que contém todos os elementos
  }
});
