import { Container, Flex } from "@chakra-ui/react";
import Dashboard from "@/components/dashboard";
import SectionView from "@/components/section.view";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Section } from "@/redux/state.interface";

export default function CvPage() {
  // get sections current from redux state
  const { section } = useSelector((state: RootState) => state.cv);

  interface Map {
    array: Section[],
    render: (item: Section, key: number) => JSX.Element
  }
  
  // render all section of cv use render props
  const Map = ({array, render}: Map) =>
    <>{array.map((section, key) => render(section, key))}</>

  return (
    <>
      <Flex
        minH='100vh'
        bgSize='17px 17px'
        bgGradient='radial(#88898C 8%, transparent 10%)'
      >
        <Container maxW='container.lg' pb={8}>
          <Dashboard />
          <Map array={section} render={(section, key) => 
            <SectionView key={key} index={key} />
          }/>
        </Container>
      </Flex>
    </>
  );
}