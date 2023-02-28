import * as C from "@chakra-ui/react";
import Dashboard from "@/components/dashboard";

export default function CvPage() {
  return (
    <>
      <C.Flex
        minH='100vh'
        bgSize='17px 17px'
        bgGradient='radial(#88898C 8%, transparent 10%)'
      >
        <C.Container maxW='container.md'>
          <Dashboard />
        </C.Container>
      </C.Flex>
    </>
  );
}