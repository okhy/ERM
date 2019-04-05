import * as React from "react";
// styles
import * as styles from "./MovieGridItem.styles.css";

// interface
export interface IMovieGridItem {
  title?: string;
  poster?: string;
  releaseDate?: string;
  genres?: string[];
}

const MovieGridItem: React.SFC<IMovieGridItem> = ({
  title,
  poster,
  releaseDate,
  genres
}) => {
  const parsedDate = releaseDate.substr(0, 4);
  const joinedGenres = !!genres ? genres.join(" & ") : "";
  const isPosterDefined = !!poster;
  const unknownMessage = "unknown";
  return (
    <div>
      {isPosterDefined ? (
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
          <span className={styles.title}>{title || unknownMessage}</span>
          <span className={styles.releaseDate}>
            {parsedDate || unknownMessage}
          </span>
        </div>
        <span className={styles.genres}>{joinedGenres || unknownMessage}</span>
      </div>
    </div>
  );
};

export default MovieGridItem;
