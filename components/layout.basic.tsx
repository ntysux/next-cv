import { setBasicTitleBranchSection } from "@/redux/actions";
import { BasicLayout as Basic } from "@/redux/state.interface";
import { Box, Grid, GridItem, HStack, Textarea } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";

interface Props {
  children: JSX.Element,
  currentBasic: Basic,
  index: number
}

export default function BasicLayout ({children, currentBasic, index}: Props) {
  const dispatch = useDispatch();

  // set title Basic use redux state
  const handleSetTitle = (event: ChangeEvent) => {
    const textarea = event.target as HTMLTextAreaElement;
    dispatch(setBasicTitleBranchSection(index, currentBasic, textarea.value));
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
                onChange={e => handleSetTitle(e)}
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Textarea variant='outlineGray' minH='200px' />
            </GridItem>
          </Grid>
        </Box>
        <Box>
          {children}
        </Box>
      </HStack>
    </>
  );
}