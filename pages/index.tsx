import { Button, Flex, HStack } from "@chakra-ui/react";
import Search from "@/components/search";
import Link from "next/link";

export default function HeroPage() {
  return (
    <>
      <Flex
        minH='100vh'
        align='center'
        justify='center'
        bgSize='17px 17px'
        bgGradient='radial(#88898C 8%, transparent 10%)'
      >
        <HStack>
          <Button
            as={Link}
            href='/cv/something'
            variant='solidBlack'
          >
            Bắt đầu
          </Button>
          <Search />
        </HStack>
      </Flex>
    </>
  );
}
