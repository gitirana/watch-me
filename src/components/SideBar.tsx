import { useEffect, useState } from "react";

import { Button } from "./Button";

import IGenreResponse from "../types/IGenreResponse";

import "../styles/sidebar.scss";

interface SideBarProps {
  selectedGenreId: number;
  genres: IGenreResponse[];
  handleClickButton: (id: number) => void;
}

export function SideBar(props: SideBarProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(props.selectedGenreId);
  const [genres, setGenres] = useState<IGenreResponse[]>(props.genres);
  const { handleClickButton } = props;

  useEffect(() => {
    setSelectedGenreId(props.selectedGenreId);
    setGenres(props.genres);
  }, [props]);

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
