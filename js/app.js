var marvel = {
    render: () => {
      var urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=1c6bf0a5687c6710cc2bbed1d6abb873&hash=91bdcaa5519b06770fab4b652617cf0e';
      var container = document.querySelector('#slideLeft');
      let contentHTML = '';
  
      fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
          for (var hero of json.data.results) {
            let urlHero = hero.urls[0].url;
            contentHTML += `
              <div class="col-md-4">
                  <a href="${urlHero}" target="_blank">
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                  </a>
                  <h3 class="title">${hero.name}</h3>
              </div>`;
          }
          container.innerHTML = contentHTML;
        })
    }
  };
  marvel.render();