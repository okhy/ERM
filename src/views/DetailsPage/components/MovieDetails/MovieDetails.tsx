import * as React from "react";
// styles
import * as styles from "./MovieDetails.styles.css";

const MovieDetails = () => (
  <div className={styles.main}>
    <div className={styles.poster} />
    <div className={styles.details}>
      <span className={styles.title}>Movie Title</span>
      <span className={styles.category}>Oscar-winning Movies</span>
      <div className={styles.yearAndDuration}>
        <span className={styles.year}>1994</span>
        <span className={styles.duration}>154 min</span>
      </div>
      <span className={styles.description}>
        Waving together three stories featuring a burger-loving hit man, his
        philosophical partner and a washed-up boxer, Quenting Tarantino
        influenced a generation of filmmakers with this crime caper's stylized,
        ove-the-top violence and dark komic spirit.
      </span>
    </div>
  </div>
);

export default MovieDetails;
