import Search from "./Search";
import Movies from "./Movies";
import { MovieSearchContainer } from "./styles";

function MovieSearch() {
  return (
    <MovieSearchContainer>
      <Search />
      <Movies />
    </MovieSearchContainer>
  );
}

export default MovieSearch;
