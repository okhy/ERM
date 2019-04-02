import * as React from "react";

interface IMovieGridItem {
  id: number;
  title: string;
  poster: string;
  releaseDate: string;
  genres: string[];
}

const MovieGridItem: React.SFC<IMovieGridItem> = ({ id, title, poster, releaseDate, genres }) => {
  const parsedDate = releaseDate.substr(0, 4);
  const joinedGenres = genres.join(" & ");
  return (
    <div key={id}>
      <img src={poster} alt={title} />
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
