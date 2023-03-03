import * as C from "@chakra-ui/react";
import Dashboard from "@/components/dashboard";
import SectionView from "@/components/section.view";
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export default function CvPage() {
  const { section } = useSelector((state: RootState) => state.cv);

  interface Map {
    array: any[],
    render: (color: string, key: number) => JSX.Element
  }
  
  const Map = ({array, render}: Map) =>
    <>{array.map((color, key) => render(color, key))}</>

  return (
    <>
      <C.Flex
        minH='100vh'
        bgSize='17px 17px'
        bgGradient='radial(#88898C 8%, transparent 10%)'
      >
        <C.Container maxW='container.lg'>
          <Dashboard />
          <Map array={section} render={(item, key) => 
            <SectionView key={key} value={{item, key}} />
          }/>
        </C.Container>
      </C.Flex>
    </>
  );
}