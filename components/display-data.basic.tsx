import { removeDataSection, setBasicContentSection, setBasicTitleSection } from "@/redux/actions";
import { Basic } from "@/redux/state.interface";
import { Box, Divider, Grid, GridItem, HStack, Textarea } from "@chakra-ui/react";
import { FocusEvent } from "react";
import { useDispatch } from "react-redux";
import { CloseButtonDefault } from "./closebutton";

interface Props {
  currentBasic: Basic,
  index: number
}

export function BasicEdit({currentBasic, index}: Props) {
  const dispatch = useDispatch();

  // set title Basic
  const handleSetTitle = (event: FocusEvent) => {
    const textarea = event.target as HTMLTextAreaElement;
    dispatch(setBasicTitleSection(index, currentBasic, textarea.value));
  }

  // set content Basic
  const handleSetContent = (event: FocusEvent) => {
    const textarea = event.target as HTMLTextAreaElement;
    dispatch(setBasicContentSection(index, currentBasic, textarea.value));
  }

  return (
    <>
      <HStack>
        <Box w='full'>
          <Grid templateColumns='repeat(3, 1fr)' gap={2}>
            <GridItem>
              <Textarea 
                variant='outlineGray'
                fontWeight='600'
                onBlur={e => handleSetTitle(e)}
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Textarea
                variant='outlineGray'
                minH='200px'
                onBlur={e => handleSetContent(e)}  
              />
            </GridItem>
          </Grid>
        </Box>
        <Box>
          <CloseButtonDefault onClick={() => dispatch(removeDataSection(index))} />
        </Box>
      </HStack>
    </>
  );
}

interface Map {
  array: string[] | undefined,
  render: (line: string, index: number) => JSX.Element
}

const Map = ({array, render}: Map) => <>{array?.map((line, index) => render(line, index))}</>

export function BasicView({data}: {data: Basic}) {
  return (
    <>
      <Grid templateColumns='repeat(10, 1fr)'>
        <GridItem colSpan={2}>
          <Map array={data.title?.split("\n")} render={(line, index) =>
            <Box key={index}>
              {line}
            </Box>
          } />
        </GridItem>
        <Divider orientation="vertical" borderColor='app.gray.light1' />
        <GridItem colSpan={7}>
          <Map array={data.content?.split("\n")} render={(line, index) =>
            <Box key={index}>
              {line}
            </Box>
          } />
        </GridItem>
      </Grid>
    </>
  );
}