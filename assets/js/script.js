class Video {
  constructor(videoMusica, videoPelicula, videoSeries) {
    // agrega clousers para protege todos los atributos de la
    // clase Video, evitando asi modificaciones externas

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

class Musica extends Video {
  constructor(videoMusica) {
    super(videoMusica);
  }
}

class Pelicula extends Video {
  constructor(videoPelicula) {
    super(null, videoPelicula);
  }
}

class Series extends Video {
  constructor(videoSeries) {
    super(null, null, videoSeries);
  }
}

/*Estructura del IFE con ES5

(function () {
  // ...declaraciones...
})();

*/

// Estructura del IFE con ES6
// (() => {})();

const miEspacio = (() => {
  // variables privadas
  let musica;
  let pelicula;
  let series;

  miFuncionPrivadoMusica = (videoMusica) => {
    //insertar video recibido
    p = `<iframe src="${videoMusica}" width="560" height="315" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen></iframe>`;
    musica.insertAdjacentHTML("beforeend", p);
  };
  miFuncionPrivadoPelicula = (videoPelicula) => {
    p = `<iframe src="${videoPelicula}" width="560" height="315" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>`;
    pelicula.insertAdjacentHTML("beforeend", p);
  };
  miFuncionPrivadoSeries = (videoSeries) => {
    p = `<iframe src="${videoSeries}" width="560" height="315" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>`;
    series.insertAdjacentHTML("beforeend", p);
  };

  return {
    // funciones publicas que utilizan los elementos privados
    // ya que solo de esta manera podemos acceder a lo privado

    // Definicion:  propiedad: ()=>{},

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

const musica = new Musica(videoMusica);
const pelicula = new Pelicula(videoPelicula);
const series = new Series(videoSeries);

musica.mostrarMusica();
pelicula.mostrarPelicula();
series.mostrarSeries();

// No puedo acceder de esta manera a la propiedad, es por ello que entrega undefined, lo que quiere decir que se esta protegiendo a la variable
/* console.log(musica._videoMusica);
musica._videoMusica = "NO TE PUEDO CAMBIAR DE ESTA FORMA";
console.log(musica._videoMusica);
// solo a traves de un getter o setter se podra acceder
console.log(musica.getVideoMusica()); */
// "./assets/videos/videoplayback_Mariah_Carey.mp4"

/* 
miEspacio.miPropiedadPublicaMusica(videoMusica);
miEspacio.miPropiedadPublicaPelicula(videoPelicula);
miEspacio.miPropiedadPublicaSeries(videoSeries);
 */
