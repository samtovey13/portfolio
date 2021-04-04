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
  // Surreal Estate
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
  // Weather App
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
        Build a weather app that receives live weather data. Users should be
        able to:
        <li>Select a location</li>
        <li>See a summary of each of the weather for a 5-day forecast</li>
        <li>Click on one of the summaries to view full forecast details.</li>
      </>
    ),
    tech: <>React Hooks, Jest, PropTypes, Axios, CSS</>,
    justification: (
      <>
        The app was built as a Single Page Application with React. Using React
        keeps the app light and fast, as forecast data can be updated without
        reloading the whole page. It also meant that components such as the
        forecast summary cards could be reused.
      </>
    ),
    challenges: (
      <>
        All parts of the forecast and location display rely on data from the API
        call made automatically when the app is first opened. This initially
        resulted in a very juddery loading experience as each component
        spluttered into view. To smooth the visual transition I implemented
        conditional rendering so that a 'loading' graphic was displayed while
        the API request was in progress, and the whole app rendered as one when
        the data was ready to display. This gave a more professional, polished
        feel.
      </>
    ),
    review: (
      <>
        The app currently receives quite limited data from a slimmed-down
        version of the Open Weather Map API - eg it can only search for cities
        within the UK. I would like to connect it directly to the Open Weather
        Map instead in order to receive a wider range of data.
        <br />I also want to build an autocorrecting search bar to make it
        easier for users to find a location.
      </>
    ),
  },
  // NASA Search
  {
    ref: "NASA",
    header: "Nasa Image Search",
    summary: "React app with image gallery",
    images: {
      square: nasaSq,
      gif1: NASASearchGif,
    },
    links: {
      liveSite: "https://samtovey13.github.io/NASA-image-search",
      gitRepo: "https://github.com/samtovey13/NASA-image-search",
    },
    brief: (
      <>
        Technical test: 10hrs. Build a React web application that allows users
        to search for images based on a query relating to space. You are
        provided the NASA API endpoint for image search. The following
        functionalities should be implemented:
        <li>
          A search page which allows users to search for images by keyword
        </li>
        <li>Images must be returned upon a successful search</li>
      </>
    ),
    tech: <>React Hooks, Jest, PropTypes, Axios, CSS</>,
    justification: (
      <>I used React to enable the search results to be stored in state.</>
    ),
    challenges: (
      <>
        This was my first project completed under timed conditions so it was
        important to prioritise the functionality of the app over styling.
      </>
    ),
    review: (
      <>
        Given more time I would add ability to search and display videos as well
        as images. I would add radio checkboxes to select content type when
        searching.
        <br />I would also improve the image gallery layout to minimise white
        space in between images.
      </>
    ),
  },
  // Music Library
  {
    ref: "MusicLib",
    header: "Music Library API",
    summary: "Artists, Songs and Albums",
    images: {
      square: musicLibSq,
      gif1: musicLibGetGif,
    },
    links: {
      liveSite: "https://music-library-api-demo.herokuapp.com",
      gitRepo: "https://github.com/samtovey13/music-library-api",
    },
    brief: (
      <>
        Build a music library API that will store information about artists,
        albums and songs. It should implement a CRUD REST API to interact with a
        MySQL database.
      </>
    ),
    tech: (
      <>
        MySQL, Sequelize, Express, Docker, Dotenv, Nodemon, Mocha, Chai,
        Supertest
      </>
    ),
    justification: (
      <>
        I used Express which made it easier to process the API data in JSON
        format.
        <br />
        Dotenv allowed me to easily switch between different environment
        variables as needed, to enable me to connect to my local database while
        building the app and then connect to the production database when ready
        to deploy.
        <br />
        Using Mocha ensured that tests were run synchronously for this app,
        while the assertion library from Chai provided more options for checking
        the behaviour of the app in testing.
      </>
    ),
    challenges: (
      <>
        This project was my first using Docker. I initially ran into many
        technical problems with installation (due to attempting to install
        Docker within my Linux installation which was itself a container within
        my ChromeOS!)... in the end this actually improved my understanding of
        how Docker operates and the role of containers in other aspects of my
        tech usage.
      </>
    ),
    review: (
      <>
        The API could be made more complex by adding futher database tables, for
        example Genre, to create different associations between the data.
      </>
    ),
  },
  // Book Library
  {
    ref: "BookLib",
    header: "Book Library API",
    summary: "Readers, Books and Genres",
    images: {
      square: bookLibSq,
    },
    links: {
      liveSite: "",
      gitRepo: "https://github.com/samtovey13/book-library-api",
    },
    brief: (
      <>
        Build a music library API that will store information about books,
        genres and readers. It should implement a CRUD REST API to interact with
        a MySQL database.
        <li>All book items must have at least a title and an author</li>
        <li>Users should be able to search for books by genre</li>
        <li>The reader must sign up with a valid email and password</li>
        <li>
          For security, the reader's password should not be returned from the
          API
        </li>
      </>
    ),
    tech: (
      <>
        MySQL, Sequelize, Express, Docker, Dotenv, Nodemon, Mocha, Chai,
        Supertest
      </>
    ),
    justification: (
      <>
        I implemented Sequelize validation methods to check the validity of data
        before it is handled by the API. This helps to prevent malicious users
        sending dangerous input to the server.
        <br />
        I used Express which made it easier to process the API data in JSON
        format.
        <br />
        Dotenv allowed me to easily switch between different environment
        variables as needed, to enable me to connect to my local database while
        building the app and then connect to the production database when ready
        to deploy.
        <br />
        Using Mocha ensured that tests were run synchronously for this app,
        while the assertion library from Chai provided more options for checking
        the behaviour of the app in testing.
      </>
    ),
    challenges: (
      <>
        This project required advance Sequelize schema validation which required
        a high attention to detail to implement.
        <br />
        There were also complex relationships between database tables to work
        through and it was a challenge to construct the all associations in the
        right directions.
      </>
    ),
    review: (
      <>
        With more time I would improve the error handling and validation methods
        of this app, for example to prevent duplicate records being created.
        <br />I made use of a 'helper' file to refactor my code in the
        controllers, to improve reusability and make the code DRY. This same
        'helper' setup could be replicated in the test files to improve
        efficiency.
      </>
    ),
  },
  // Cruise Ships
  {
    ref: "CruiseShips",
    header: "Cruise Ships",
    summary: "Vanilla JavaScript app with retro UI",
    images: {
      square: cruiseShipsSq,
      gif1: cruiseShipsGif,
    },
    links: {
      liveSite: "https://samtovey13.github.io/cruise-ships",
      gitRepo: "https://github.com/samtovey13/cruise-ships",
    },
    brief: (
      <>
        Build an app for a cruise ship captain to track the voyage of a ship. 
        The ship should be able to set sail and dock at all ports on the specified route.
        The user should be able to create their own itinerary for the ship to follow.
      </>
    ),
    tech: <>JavaScript, HTML, CSS</>,
    justification: (
      <>
        This project used Vanilla JavaScript with the aim to become familiar
        with the principles of Object-Oriented Programming.
        <br/>
        Jest mocks and spies were used to emulate dependencies in tests and to track the 
        call history of other functions.
        <br/>
        A simple UI was built with HTML and CSS to enable users to select an intinerary
        and to visualise the progress of the ship on its journey.
      </>
    ),
    challenges:( 
      <>
        In this project the brief became more and more complex as the project progressed 
        and new user stories were added. This forced me to consider the scalability of the code I was writing and dependencies 
        between each component. It was hard work constantly refactoring and rethinking the 
        structure as the brief changed, but ultimately a valuable learning experience in that
        it replicated the unpredictability of working on a real project.
        <br/>
        I spent a lot of time learning about advanced Jest testing in order to test specific 
        parts of my code in isolation.
      </>
    ),
    review: (
      <> 
        Given more time I would improve the responsiveness of the UI, which currently
        includes a horizontal scroll bar which does not create the best user experience.
        This animated section which visualises the ship's journey would be more effective 
        with the ship displayed in a fixed position while the ports move behind it.
      </>
    ),
  },
];

export default projects;
