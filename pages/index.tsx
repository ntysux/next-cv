import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid"
import Link from "next/link";
import Search from "@/components/search";

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
        <Stack spacing={4}>
          <Heading
            textAlign='center'
            fontFamily='Quicksand'
            fontWeight='300'
          >
            Next <Text as='span' color='app.teal' fontWeight='700'>CV</Text>
          </Heading>
          <Stack direction={{md: 'row', base: 'column'}}>
            <Button
              as={Link}
              href={`cv/${uuidv4()}`}
              variant='solidBlack'
            >
              Bắt đầu
            </Button>
            <Button
              variant='outlineBlack'
            >
              Đăng nhập
            </Button>
            <Search />
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}
