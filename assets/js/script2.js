class Video {
  constructor(videoMusica, videoPelicula, videoSeries) {
    // agrega clousers para protege todos los atributos de la clase Video,
    // evitando asi modificaciones externas

    let _videoMusica = videoMusica;
    let _videoPelicula = videoPelicula;
    let _videoSeries = videoSeries;

    this.getVideoMusica = () => {
      return _videoMusica;
    };
    this.getVideoPelicula = () => {
      return _videoPelicula;
    };
    this.getVideoSeries = () => {
      return _videoSeries;
    };
  }
  get VideoMusica() {
    return this.getVideoMusica;
  }
  get VideoPelicula() {
    return this.getVideoPelicula;
  }
  get VideoSeries() {
    return this.getVideoSeries;
  }

  mostrarMusica() {
    miEspacio.miPropiedadPublicaMusica(this.getVideoMusica());
  }
  mostrarPelicula() {
    miEspacio.miPropiedadPublicaPelicula(this.getVideoPelicula());
  }
  mostrarSeries() {
    miEspacio.miPropiedadPublicaSeries(this.getVideoSeries());
  }
}

const miEspacio = (() => {
  // variables privadas
  let musica;
  let pelicula;
  let series;

  miFuncionPrivadoMusica = (videoMusica) => {
    //insertar video recibido
    p = `<iframe src="${videoMusica}"></iframe>`;
    musica.insertAdjacentHTML("beforeend", p);
  };
  miFuncionPrivadoPelicula = (videoPelicula) => {
    p = `<iframe src="${videoPelicula}"></iframe>`;
    pelicula.insertAdjacentHTML("beforeend", p);
  };
  miFuncionPrivadoSeries = (videoSeries) => {
    p = `<iframe src="${videoSeries}"></iframe>`;
    series.insertAdjacentHTML("beforeend", p);
  };

  return {
    miPropiedadPublicaMusica: (videoMusica) => {
      musica = document.getElementById("musica");
      miFuncionPrivadoMusica(videoMusica);
    },

    miPropiedadPublicaPelicula: (videoPelicula) => {
      pelicula = document.getElementById("peliculas");
      miFuncionPrivadoPelicula(videoPelicula);
    },

    miPropiedadPublicaSeries: (videoSeries) => {
      series = document.getElementById("series");
      miFuncionPrivadoSeries(videoSeries);
    },
  };
})();

// variables publicas
let videoMusica = "./assets/videos/videoplayback_Mariah_Carey.mp4";

let videoPelicula =
  "./assets/videos/Avatar_Official_Trailer_(HD)_20th_Century_FOX.mp4";

let videoSeries =
  "./assets/videos/THE_BOYS_Trailer_2_Espanol_(2020)_Temporada_2.mp4";

const video = new Video(videoMusica, videoPelicula, videoSeries);

video.mostrarMusica();
video.mostrarPelicula();
video.mostrarSeries();
