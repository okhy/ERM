import * as React from "react";
import { MovieTypes } from "Types";
// styles
import * as styles from "./MovieDetails.styles.css";

const MovieDetails: React.SFC<MovieTypes.IMovie> = ({
  title,
  poster,
  releaseDate,
  genres,
  runtime,
  overview
}) => (
  <div className={styles.main}>
    {!!poster ? (
      <div
        className={styles.poster}
        style={{ backgroundImage: `url(${poster})` }}
      />
    ) : (
      <div className={styles.noPoster}>
        <span className={styles.noPosterLabel}>No poster</span>
      </div>
    )}
    <div className={styles.details}>
      <span className={styles.title}>{title}</span>
      {!!genres && genres.length && (
        <span className={styles.genres}>{genres.join(" & ")}</span>
      )}
      <div className={styles.yearAndDuration}>
        {!!releaseDate && releaseDate.length > 3 && (
          <span className={styles.year}>{releaseDate.substr(0, 4)}</span>
        )}
        {!!runtime && (
          <span className={styles.duration}>{`${runtime} min`}</span>
        )}
      </div>
      <span className={styles.overview}>{overview}</span>
    </div>
  </div>
);

export default MovieDetails;
