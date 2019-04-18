import * as React from "react";
// styles
import * as styles from "./MovieGridItem.styles.css";

// interface
import { MovieTypes } from "Types";

const MovieGridItem: React.SFC<MovieTypes.IMovieGridItem> = ({
  title,
  poster,
  releaseDate,
  genres
}) => (
  <div>
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
  </div>
);

export default MovieGridItem;
