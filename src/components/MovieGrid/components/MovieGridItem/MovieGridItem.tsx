import * as React from "react";

interface IMovieGridItem {
  id: number;
  title: string;
  poster?: string;
  releaseDate: string;
  genres: string[];
}

const MovieGridItem: React.SFC<IMovieGridItem> = ({
  id,
  title,
  poster,
  releaseDate,
  genres
}) => {
  const parsedDate = releaseDate.substr(0, 4);
  const joinedGenres = genres.join(" & ");
  const isPosterDefined = poster.length > 0;
  return (
    <div key={id}>
      {isPosterDefined ? (
        <img src={poster} alt={title} />
      ) : (
        <div>No poster</div>
      )}
      <div>
        <span>{title}</span>
        <span>{parsedDate}</span>
      </div>
      <span>{joinedGenres}</span>
    </div>
  );
};

export default MovieGridItem;
export { IMovieGridItem };
