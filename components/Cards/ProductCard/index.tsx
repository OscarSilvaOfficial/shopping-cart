import { Box, Image, Badge, Button, Flex } from "@chakra-ui/react";

interface CardOptions {
  title: string;
  price: number;
  image: {
    alt?: string;
    link: string;
  };
}

export default function Card({ title, price, image }: CardOptions) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={'20px 20px'}>
      <Image src={image.link} alt={image.alt} />
      <Flex justifyContent={"space-between"}>
        <Box>
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {title}
          </Box>
          <Box>R$ {price},00</Box>
        </Box>
        <Button colorScheme="blue">+</Button>
      </Flex>
    </Box>
  );
}
