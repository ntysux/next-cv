import Search from "@/components/search";
import * as C from "@chakra-ui/react";
import Link from "next/link";

export default function HeroPage() {
  return (
    <>
      <C.Flex
        minH='100vh'
        align='center'
        justify='center'
        bgSize='17px 17px'
        bgGradient='radial(#88898C 8%, transparent 10%)'
      >
        <C.HStack>
          <C.Button
            as={Link}
            href='/cv/something'
            variant='solidBlack'
          >Bắt đầu</C.Button>
          <Search />
        </C.HStack>
      </C.Flex>
    </>
  );
}
