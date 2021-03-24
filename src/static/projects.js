import surrealEstateSq from "./images/surreal-estate/screenshot-sq.png";
import weatherSq from "./images/weather/weather.png";
import nasaSq from "./images/nasa/screenshot-sq.png";
import musicLibSq from "./images/music-library/screenshot-sq.png";
import bookLibSq from "./images/book-library/screenshot-sq.png";
import cruiseShipsSq from "./images/cruise-ships/screenshot-sq.png";

const projects = [
  {
    ref: "SurrealEstate",
    header: "Surreal Estate",
    summary: "React Property search app with API and Facebook SSO",
    images: {
      square: surrealEstateSq,
    } ,
  },
  {
    ref: "Weather",
    header: "Umbrella Weather",
    summary: "React weather app with live API",
    images: {
      square: weatherSq,
    }
  },
  {
    ref: "NASA",
    header: "Nasa Image Search",
    summary: "React app with image gallery",
    images: {
      square: nasaSq,
    }
  },
  {
    ref: "MusicLib",
    header: "Music Library API",
    summary: "Artists, Songs and Albums",
    images: {
      square: musicLibSq,
    }
  },
  {
    ref: "BookLib",
    header: "Book Library API",
    summary: "Readers, Books and Genres",
    images: {
      square: bookLibSq,
    }
  },
  {
    ref: "CruiseShips",
    header: "Cruise Ships",
    summary: "Vanilla JavaScript app with retro UI",
    images: {
      square: cruiseShipsSq,
    }
  },
];

export default projects;
