import Image from "next/image";
import React from "react";
import styles from "./style.module.css";

interface CardProductsProps {
  image: string;
  name: string;
  discountPrice?: string;
  price: string;
}

export const CardProducts = (props: CardProductsProps) => {
  const { image, name, discountPrice, price } = props;
  return (
    <div className={styles.flexWrap}>
      <main className={styles.card}>
        <Image
          width={93}
          style={{ marginTop: "20px" }}
          height={121}
          src={image}
          alt={"TeamLogo"}
        />

        <p className={styles.text}>{name}</p>

        {discountPrice && (
          <p className={styles.textLineThrough}>{discountPrice}</p>
        )}

        <p className={styles.textPrice}>{price}</p>
      </main>
    </div>
  );
};
