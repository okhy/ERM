interface IMovie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  runtime: number | null;
}
const singleMovie: IMovie = {
  id: 680,
  title: "Pulp Fiction",
  tagline: "Just because you are a character doesn't mean you have character.",
  vote_average: 8.3,
  vote_count: 10910,
  release_date: "1994-09-10",
  poster_path: "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
  overview:
    "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
  budget: 8000000,
  revenue: 213928762,
  genres: ["Thriller", "Crime"],
  runtime: 154
};

interface IMovies {
  data: IMovie[];
  total: number;
  offset: number;
  limit: number;
}
const movieList: IMovies = {
  data: [
    {
      id: 353081,
      title: "Mission: Impossible - Fallout",
      tagline: "",
      vote_average: 0,
      vote_count: 3,
      release_date: "2018-07-26",
      poster_path: "https://image.tmdb.org/t/p/w500/A2W75CVz9l8gEeWhQiiftlOCkgi.jpg",
      overview:
        'The sixth installment in the "Mission: Impossible". When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfil his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a global catastrophe.',
      budget: 0,
      revenue: 0,
      genres: ["Adventure", "Action", "Thriller"],
      runtime: null
    },
    {
      id: 351286,
      title: "Jurassic World: Fallen Kingdom",
      tagline: "Life finds a way",
      vote_average: 0,
      vote_count: 28,
      release_date: "2018-06-01",
      poster_path: "https://image.tmdb.org/t/p/w500/ln6d5Okr6VK5vfQVobJTiYxeD0l.jpg",
      overview:
        "A volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar, where the creatures have freely roamed for several years after the demise of an animal theme park known as Jurassic World. Claire Dearing, the former park manager, has now founded the Dinosaur Protection Group, an organization dedicated to protecting the dinosaurs. To help with her cause, Claire has recruited Owen Grady, a former dinosaur trainer who worked at the park, to prevent the extinction of the dinosaurs once again.",
      budget: 0,
      revenue: 0,
      genres: ["Action", "Adventure", "Drama", "Science Fiction", "Thriller"],
      runtime: null
    },
    {
      id: 505177,
      title: "10x10",
      tagline: "There are some secrets we cannot escape",
      vote_average: 0,
      vote_count: 0,
      release_date: "2018-04-13",
      poster_path: "https://image.tmdb.org/t/p/w500/egMETBYual2JtfFGigXTA0tGkME.jpg",
      overview:
        "Lewis is an outwardly ordinary guy, but in reality he is hiding an obsession - revenge - against Cathy. Lewis kidnaps Cathy in broad daylight and takes her to his home, where he locks her in a soundproof cell and attempt to extract a dark secret from her past.",
      budget: 0,
      revenue: 0,
      genres: ["Thriller"],
      runtime: 86
    },
    {
      id: 460019,
      title: "Truth or Dare",
      tagline: "",
      vote_average: 0,
      vote_count: 0,
      release_date: "2018-04-12",
      poster_path: "https://image.tmdb.org/t/p/w500/kdkNaQYZ7dhM80LsnAGKpH8ca2g.jpg",
      overview:
        "A harmless game of “Truth or Dare” among friends turns deadly when someone—or something—begins to punish those who tell a lie—or refuse the dare.",
      budget: 0,
      revenue: 0,
      genres: ["Thriller", "Horror"],
      runtime: null
    },
    {
      id: 447332,
      title: "A Quiet Place",
      tagline: "A Quiet Place",
      vote_average: 6.5,
      vote_count: 19,
      release_date: "2018-04-05",
      poster_path: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
      overview:
        "A Quiet Place is a 2018 American horror film directed by John Krasinski, who also stars in the film with Emily Blunt, his wife in real life. The screenplay was written by Krasinski, Bryan Woods, and Scott Beck based on a story by Woods and Beck. The plot follows a family of four who must live life in silence while hiding from creatures that hunt by sound.",
      budget: 17000000,
      revenue: 0,
      genres: ["Drama", "Horror", "Thriller"],
      runtime: 95
    },
    {
      id: 513285,
      title: "Trouble Is My Business",
      tagline: "Passion, Murder, and Betrayal. Just Another Day at the Office.",
      vote_average: 0,
      vote_count: 0,
      release_date: "2018-04-03",
      poster_path: "https://image.tmdb.org/t/p/w500/4dw0z5Uh2NbabdGk2u6wdyJvMg7.jpg",
      overview:
        "Private eye Roland Drake cracks cases and romances femme fatales in 1940's Los Angeles while corrupt cop Det Barry Tate rules the city. A tale told in the classic style of film noir. Drake has fallen on hard times in a harsh world. He has been evicted from his office and disgraced by a missing persons case. Ruined in the public eye and with the police. it seems like it's all over for Roland Drake. Then, redemption walks in - with curves. The owner of those curves is a sexy, dark haired beauty named Katherine Montemar. She wants his help. The chemistry is immediate and her concern for the disappearance of her family members pulls him into her case - and into bed.",
      budget: 200000,
      revenue: 0,
      genres: ["Thriller", "Mystery", "Adventure", "Crime", "Romance"],
      runtime: 116
    },
    {
      id: 496316,
      title: "Baaghi 2",
      tagline: "Rebel for Love",
      vote_average: 7.7,
      vote_count: 3,
      release_date: "2018-03-30",
      poster_path: "https://image.tmdb.org/t/p/w500/gwX6mKjfxBYbq46CoIpcxIAmIMx.jpg",
      overview:
        "A battle-hardened army officer goes in search of his ex-lover's child who is mysteriously kidnapped. Neha reaches out to the only person who can help her with her plight, Ronnie. He goes deep into the underbelly of Goa, facing off against drug lords, menacing Russian henchmen, and blood thirsty animals. Daring stunts, chase sequences, air strikes, bomb blasts and other large-scale action sequences will be done with a bona-fide, larger than life approach, truly making it a spectacle.",
      budget: 0,
      revenue: 0,
      genres: ["Action", "Romance", "Thriller"],
      runtime: 145
    },
    {
      id: 412302,
      title: "Gemini",
      tagline: "",
      vote_average: 10,
      vote_count: 3,
      release_date: "2018-03-30",
      poster_path: "https://image.tmdb.org/t/p/w500/oIltQs7MPk7VQFG3DJfgC63mShU.jpg",
      overview:
        "A heinous crime tests the complex relationship between a tenacious personal assistant and her Hollywood starlet boss. As the assistant travels across Los Angeles to unravel the mystery, she must stay one step ahead of a determined policeman and confront her own understanding of friendship, truth and celebrity.",
      budget: 0,
      revenue: 0,
      genres: ["Mystery", "Thriller"],
      runtime: 92
    },
    {
      id: 421044,
      title: "Best F(r)iends",
      tagline: "Friendship before money",
      vote_average: 3.3,
      vote_count: 9,
      release_date: "2018-03-30",
      poster_path: "https://image.tmdb.org/t/p/w500/5Knp0sBWb4hLTc49qaiDjZ4DYV8.jpg",
      overview:
        "When a drifter befriends a quirky mortician, an unlikely business partnership is formed. Paranoia soon develops, however, and both men are forced to come to terms with the fragility of friendship and loyalty.",
      budget: 0,
      revenue: 0,
      genres: ["Comedy", "Drama", "Thriller"],
      runtime: 108
    },
    {
      id: 467660,
      title: "Unsane",
      tagline: "Is she or isn't she?",
      vote_average: 6.1,
      vote_count: 34,
      release_date: "2018-03-23",
      poster_path: "https://image.tmdb.org/t/p/w500/jvDBfavZASdKsJunu9VCAtXjLS2.jpg",
      overview:
        "A woman is involuntarily committed to a mental institution amid uncertainty as to whether her greatest fear is real or delusional.",
      budget: 1500000,
      revenue: 0,
      genres: ["Horror", "Thriller"],
      runtime: 98
    }
  ],
  total: 933,
  offset: 0,
  limit: 10
};

export { singleMovie };
export { movieList };
