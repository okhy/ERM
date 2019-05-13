import * as React from "react";

import * as styles from "./Poster.styles.css";
type PosterProps = {
  url?: string;
};
const Poster: React.SFC<PosterProps> = ({ url }) => {
  return (
    <>
      {url && (
        <div
          className={styles.main}
          style={{ backgroundImage: `url(${url})` }}
        />
      )}
      {!url && (
        <div className={styles.noPoster}>
          <span className={styles.noPosterLabel}>No poster</span>
        </div>
      )}
    </>
  );
};

export default Poster;
