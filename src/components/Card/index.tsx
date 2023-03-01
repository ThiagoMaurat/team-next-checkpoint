import Image from "next/image";
import React from "react";
import styles from "./style.module.css";

interface CardProps {
  name: string;
  image: string;
}

export const Card = (props: CardProps) => {
  const { image, name } = props;
  return (
    <div className={styles.card}>
      <Image width={92} height={121} src={image} alt={"TeamLogo"} />
      <p className={styles.text}>{name}</p>
    </div>
  );
};
