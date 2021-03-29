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
    challenges: (
      <>
        Initially I had problems with testing as my app became more complex. To
        resolve this I refactored my code and shifted my onClick and onChange
        functions up a level to pass them down to the component as a prop
        instead. Isolating parts of the functional code in this way allowed me
        to use Jest mocks and test the code at a lower level.
      </>
    ),
    review: (
      <>
        With more time I would add functionality to the 'add property' form to
        allow the user to upload an image when creating a new property. I would
        also replicate the filters/sort options of the main property listings
        page onto the favourites page.
        <br />I would also build on the SSO feature by giving the user
        alternative login methods, eg login with Google or Github, or by adding
        my own custom OAuth.
      </>
    ),
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
      liveSite: "https://samtovey13.github.io/weather-app",
      gitRepo: "https://github.com/samtovey13/weather-app",
    },
    brief: (
      <>
        Build a weather app that receives live weather data. Users should be able to:
        <li>Select a location</li>
        <li>See a summary of each of the weather for a 5-day forecast</li>
        <li>Click on one of the summaries to view full forecast details.</li>
      </>
    ),
    tech: <>React Hooks, Jest, PropTypes, Axios, CSS</>,
    justification: (
      <> 
        The app was built as a Single Page Application with React. Using React keeps the app light
        and fast, as forecast data can be updated without reloading the whole page. It also meant that
        components such as the forecast summary cards could be reused.
      </>
    ),
    challenges: (
      <>
        All parts of the forecast and location display rely on data from the API
        call made automatically when the app is first opened. This initially resulted in a very juddery loading
        experience as each component spluttered into view.
        To smooth the visual transition I implemented conditional rendering so that a 
        'loading' graphic was displayed while the API request was in progress, and the
        whole app rendered as one when the data was ready to display.
        This gave a more professional, polished feel.
      </>
    ),
    review: (
      <>
        The app currently receives quite limited data from a slimmed-down version
        of the Open Weather Map API - eg it can only search for cities within the UK. I would
        like to connect it directly to the Open Weather Map instead in order to receive
        a wider range of data.
        <br/>
        I also want to build an autocorrecting search bar to make it easier for users to find
        a location.
      </>
    ),
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
