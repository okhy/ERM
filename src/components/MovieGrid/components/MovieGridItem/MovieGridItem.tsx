import { MovieTypes } from "Types";
// react
import * as React from "react";
// Link
import { Link } from "react-router-dom";
// styles
import * as styles from "./MovieGridItem.styles.css";
// components
import Poster from "Components/Poster/Poster";

const MovieGridItem: React.SFC<MovieTypes.IMovie> = ({
  id,
  title,
  poster,
  releaseDate,
  genres
}) => (
  <Link to={`/movie/${id}`}>
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

export default MovieGridItem;
