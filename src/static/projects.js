// square card images
import surrealEstateSq from "./images/surreal-estate/screenshot-sq.png";
import weatherSq from "./images/weather/weather.png";
import nasaSq from "./images/nasa/screenshot-sq.png";
import musicLibSq from "./images/music-library/screenshot-sq.png";
import bookLibSq from "./images/book-library/screenshot-sq.png";
import cruiseShipsSq from "./images/cruise-ships/screenshot-sq.png";

// gifs
import surrealEstateSearchGif from "./images/surreal-estate/property-search.gif";
import surrealEstateFavouritesGif from "./images/surreal-estate/property-favourites.gif";
import weatherLocationGif from "./images/weather/weather-location.gif"
import NASASearchGif from "./images/nasa/NASA-search.gif";
import musicLibGetGif from "./images/music-library/music-lib-GET.gif";
import cruiseShipsGif from "./images/cruise-ships/cruise-ships-play.gif";

const projects = [
  {
    ref: "SurrealEstate",
    header: "Surreal Estate",
    summary: "React Property search app with API and Facebook SSO",
    images: {
      square: surrealEstateSq,
      gif1: surrealEstateSearchGif,
      gif2: surrealEstateFavouritesGif,
    } ,
  },
  {
    ref: "Weather",
    header: "Umbrella Weather",
    summary: "React weather app with live API",
    images: {
      square: weatherSq,
      gif1: weatherLocationGif,
    }
  },
  {
    ref: "NASA",
    header: "Nasa Image Search",
    summary: "React app with image gallery",
    images: {
      square: nasaSq,
      gif1: NASASearchGif,
    }
  },
  {
    ref: "MusicLib",
    header: "Music Library API",
    summary: "Artists, Songs and Albums",
    images: {
      square: musicLibSq,
      gif1: musicLibGetGif,
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
      gif1: cruiseShipsGif,
    }
  },
];

export default projects;
