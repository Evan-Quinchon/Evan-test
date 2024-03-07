import Image from "next/image";
import styles from "./styles.module.scss";

export const imagePath = `https://image.tmdb.org/t/p/original`;

type Props = {
  id: number;
  title: string;
  path: string;
  releaseDate: string;
  rating: number;
  handleclick: (id: number) => void;
};

const MovieCard = ({
  id,
  title,
  path,
  releaseDate,
  rating,
  handleclick,
}: Props) => {
  return (
    <div className={styles.card} onClick={handleclick(id)}>
      <div className={styles.image}>
        <Image alt={title} src={imagePath + path} width={150} height={225} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p>Release Date: {releaseDate}</p>
        <p>Rating: {`${Math.round(rating * 10) / 10} / 10`}</p>
      </div>
    </div>
  );
};

export default MovieCard;
