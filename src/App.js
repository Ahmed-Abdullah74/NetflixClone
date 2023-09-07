import requestes from "./requestes";
import "./App.css";
import Row from "./componentes/Row";
import Banner from "./componentes/Banner";
import Navbar from "./componentes/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title={"Netflix Orignals"}
        fetchUrl={requestes.fetchNetflixOrginals}
        isLargeRow
      />
      <Row title={"Top Rated"} fetchUrl={requestes.fetchTrending} />
      <Row title={"Popular"} fetchUrl={requestes.fetchPopular} />
      <Row title={"Upcoming"} fetchUrl={requestes.fetchUpcoming} />
      <Row title={"Action Movies"} fetchUrl={requestes.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchUrl={requestes.fetchComedyMovies} />
      <Row title={"Horror Movies"} fetchUrl={requestes.fetchHorrorMovies} />
      <Row title={"Romance Movies"} fetchUrl={requestes.fetchRomanceMovies} />
      <Row title={"Documentaries"} fetchUrl={requestes.fetchDocumentaries} />
    </div>
  );
}

export default App;
