import styles from "@/styles/Home.module.css";
import { GetServerSideProps } from "next";
import api from "services/api";
import { Card } from "@/components/Card";
import Link from "next/link";
export interface TeamsProps {
  _id: string;
  name: string;
  __v: number;
  image: string;
}
export interface Teams {
  data: TeamsProps[];
}

export default function Home({ data }: Teams) {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {data.map((team, key) => {
          return (
            <Link href={`/info/${team._id}`} key={`card-${key}`}>
              <Card image={team.image} name={team.name} />
            </Link>
          );
        })}
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get<TeamsProps[]>("/teams");

  return {
    props: { data },
  };
};
