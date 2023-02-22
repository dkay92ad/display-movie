import Search from "./Search";
import MovieTitles from "./MovieTitles";
import { MovieSearchContainer } from "./styles";

function MovieSearch() {
  return (
    <MovieSearchContainer>
      <Search />
      <MovieTitles />
    </MovieSearchContainer>
  );
}

export default MovieSearch;
