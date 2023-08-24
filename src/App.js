import './App.css';
import Row from './Row';
import command from './command';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={command.fetchNetflixOriginals}
      isLargeRow/>
      <Row title="Trending Now" fetchUrl={command.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={command.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={command.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={command.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={command.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={command.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={command.fetchDocumentaries}/>
    </div>
  );
}

export default App;
