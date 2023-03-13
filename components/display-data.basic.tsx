import { removeDataSection, setBasicContentSection, setBasicTitleSection } from "@/redux/actions";
import { Basic } from "@/redux/state.interface";
import { Box, Grid, GridItem, HStack, IconButton, Textarea } from "@chakra-ui/react";
import { IconX } from "@tabler/icons-react";
import { FocusEvent, useState } from "react";
import { useDispatch } from "react-redux";

interface Props {
  currentBasic: Basic,
  index: number
}

export function BasicEdit({currentBasic, index}: Props) {
  const dispatch = useDispatch();
  const [basic, setBasic] = useState({title: currentBasic.title, content: currentBasic.content});

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
                value={basic.title}
                variant='outlineGray'
                fontWeight='600'
                onChange={e => setBasic({...basic, title: e.target.value})}
                onBlur={e => handleSetTitle(e)}
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Textarea
                value={basic.content}
                variant='outlineGray'
                minH='200px'
                onChange={e => setBasic({...basic, content: e.target.value})}
                onBlur={e => handleSetContent(e)}  
              />
            </GridItem>
          </Grid>
        </Box>
        <Box>
          <IconButton
            aria-label='close'
            variant='close'
            size='xs'
            onClick={() => dispatch(removeDataSection(index))}
            icon={<IconX size='16px' strokeWidth='3' />}
          />
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
      <Grid
        templateColumns={{md: 'repeat(5, 1fr)', base: 'repeat(1, 1fr)'}}
        gap={4}
        color='app.black.light'
      >
        <GridItem
          wordBreak='break-all'
          fontWeight='600'
        >
          <Map array={data.title?.split("\n")} render={(line, index) =>
            <Box key={index}>
              {line}
            </Box>
          } />
        </GridItem>
        <GridItem
          colSpan={{md: 4, base: 1}}
          p={2}
          rounded='xl'
          bg='app.gray.light3'
          wordBreak='break-all'
        >
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