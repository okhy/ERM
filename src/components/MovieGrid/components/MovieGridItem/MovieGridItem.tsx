import { MovieTypes } from "Types";
// react
import * as React from "react";
// redux
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { fetchMovieById } from "Views/DetailsPage/DetailsPage.actions";
// Link
import { Link } from "react-router-dom";
// styles
import * as styles from "./MovieGridItem.styles.css";
// components
import Poster from "Components/Poster/Poster";

type MovieGridItemType = MovieTypes.IMovie & {
  fetchMovie: (id: number) => void;
};

const MovieGridItem: React.SFC<MovieGridItemType> = ({
  id,
  title,
  poster,
  releaseDate,
  genres,
  fetchMovie
}) => (
  <Link
    to={`/movie/${id}`}
    onClick={(e: React.SyntheticEvent) => {
      fetchMovie(id);
    }}
  >
    <Poster url={poster} />
    <div className={styles.data}>
      <div className={styles.baseData}>
        <span className={styles.title}>{title}</span>
        {!!releaseDate && releaseDate.length > 3 && (
          <span className={styles.releaseDate}>{releaseDate.substr(0, 4)}</span>
        )}
      </div>
      {!!genres && !!genres.length && (
        <span className={styles.genres}>{genres.join(" & ")}</span>
      )}
    </div>
  </Link>
);

/* istanbul ignore next*/
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchMovie: (id: number) => {
    fetchMovieById(id)(dispatch);
  }
});

export { MovieGridItem };

export default connect(
  null,
  mapDispatchToProps
)(MovieGridItem);
