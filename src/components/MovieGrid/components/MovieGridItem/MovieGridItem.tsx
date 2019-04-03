import * as React from "react";
// styles
import * as styles from "./MovieGridItem.styles.css";

// interface
export interface IMovieGridItem {
  title: string;
  poster?: string;
  releaseDate: string;
  genres: string[];
}

const MovieGridItem: React.SFC<IMovieGridItem> = ({
  title,
  poster,
  releaseDate,
  genres
}) => {
  const parsedDate = releaseDate.substr(0, 4);
  const joinedGenres = genres.join(" & ");
  const isPosterDefined = poster.length > 0;
  return (
    <div className={styles.main}>
      {isPosterDefined ? (
        <img src={poster} alt={title} className={styles.poster} />
      ) : (
        <div className={styles.noPoster}>
          <span className={styles.noPosterLabel}>No poster</span>
        </div>
      )}
      <div className={styles.data}>
        <div className={styles.baseData}>
          <span className={styles.title}>{title}</span>
          <span className={styles.releaseDate}>{parsedDate}</span>
        </div>
        <span className={styles.genres}>{joinedGenres}</span>
      </div>
    </div>
  );
};

export default MovieGridItem;
