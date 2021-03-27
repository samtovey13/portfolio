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
    },
    links: {
      liveSite: "https://samtovey-surreal-estate.netlify.app",
      gitRepo: "https://github.com/samtovey13/surreal-estate",
    },
    brief: (
      <>
        Build a property search engine with multiple pages:
        <li>
          A listings page where you can search for properties and sort/filter
          the results
        </li>
        <li>An 'add property' page where users can add new properties</li>
        <li>A favourites page where users can view their saved properties</li>
      </>
    ),
    tech: (
      <>
        React, React Router, Facebook SSO, PropTypes, Axios, QS, Docker Compose
      </>
    ),
    justification: (
      <>
        I built the app using React for efficiency and ability to reuse
        components across the app. For example the PropertyCard component could
        be used in the listings page and again inside a popup from the
        Favourites page. I used QS in conjunction with React Router to implement
        client-side routing.
      </>
    ),
    challenges: <></>,
    review: <></>,
  },
  {
    ref: "Weather",
    header: "Umbrella Weather",
    summary: "React weather app with live API",
    images: {
      square: weatherSq,
      gif1: weatherLocationGif,
    },
    links: {
      liveSite: "",
      gitRepo: "",
    },
    brief: <></>,
    tech: <></>,
    justification: <></>,
    challenges: <></>,
    review: <></>,
  },
  {
    ref: "NASA",
    header: "Nasa Image Search",
    summary: "React app with image gallery",
    images: {
      square: nasaSq,
      gif1: NASASearchGif,
    },
    links: {
      liveSite: "",
      gitRepo: "",
    },
    brief: <></>,
    tech: <></>,
    justification: <></>,
    challenges: <></>,
    review: <></>,
  },
  {
    ref: "MusicLib",
    header: "Music Library API",
    summary: "Artists, Songs and Albums",
    images: {
      square: musicLibSq,
      gif1: musicLibGetGif,
    },
    links: {
      liveSite: "",
      gitRepo: "",
    },
    brief: <></>,
    tech: <></>,
    justification: <></>,
    challenges: <></>,
    review: <></>,
  },
  {
    ref: "BookLib",
    header: "Book Library API",
    summary: "Readers, Books and Genres",
    images: {
      square: bookLibSq,
    },
    links: {
      liveSite: "",
      gitRepo: "",
    },
    brief: <></>,
    tech: <></>,
    justification: <></>,
    challenges: <></>,
    review: <></>,
  },
  {
    ref: "CruiseShips",
    header: "Cruise Ships",
    summary: "Vanilla JavaScript app with retro UI",
    images: {
      square: cruiseShipsSq,
      gif1: cruiseShipsGif,
    },
    links: {
      liveSite: "",
      gitRepo: "",
    },
    brief: <></>,
    tech: <></>,
    justification: <></>,
    challenges: <></>,
    review: <></>,
  },
];

export default projects;
