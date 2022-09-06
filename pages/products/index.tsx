import type { NextPage } from "next";
import ProductCard from "../../components/Cards/ProductCard";
import { data as products } from "../../api/products";
import { Container, ItemCounter } from "./style";
import { Button } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";

const Products: NextPage = () => {
  return (
    <Container>
      {products.map((product, i) => (
        <ProductCard
          image={{ link: product.link }}
          price={product.price}
          title={product.name}
          key={i}
        />
      ))}

      <Button
        colorScheme="red"
        position="fixed"
        bottom="30px"
        right="30px"
      >
        <BellIcon />
        <ItemCounter>
          3
        </ItemCounter>
      </Button>
    </Container>
  );
};

export default Products;
