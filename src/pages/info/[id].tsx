import { GetServerSideProps } from "next";
import React from "react";
import api from "services/api";
import { TeamsProps } from "..";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import { CardProducts } from "@/components/CardProducts";

export default function Info(data: Props) {
  const router = useRouter();
  console.log(data);
  if (data) {
    return (
      <main>
        {data.products.map((item, index) => {
          return (
            <CardProducts
              image={item.urlImage}
              name={item.name}
              discountPrice={String(item.discountPrice)}
              price={String(item.price)}
              key={`products-${index}`}
            />
          );
        })}
      </main>
    );
  }

  return router.push("/NoProductsFound");
}

type Params = {
  id: string;
} & ParsedUrlQuery;

type Props = {
  products: ProductsDataProps[];
};

interface ProductsDataProps {
  available: boolean;
  _id: string;
  name: string;
  urlImage: string;
  price: number;
  discountPrice: number;
  maker: string;
  categoryId: string;
  __v: number;
  description: string;
}
export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  const query = context.params?.id;

  const { data } = await api.get<TeamsProps[]>("/teams");

  const selectedTeam = data.find((team) => team._id === query);

  const { data: productsData } = await api.get<ProductsDataProps[]>(
    `/products/${selectedTeam?._id}`
  );

  return {
    props: { products: productsData },
  };
};
