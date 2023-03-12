import { setSimpleContentSection } from "@/redux/actions";
import { Simple } from "@/redux/state.interface";
import { Box, HStack, Text, Textarea } from "@chakra-ui/react";
import { FocusEvent } from "react";
import { useDispatch } from "react-redux";

interface Props {
  currentSimple: Simple,
  index: number
}

export function SimpleEdit({currentSimple, index}: Props) {
  const dispatch = useDispatch();

  // set content Simple use redux state
  const handleSetSimpleContent = (event: FocusEvent) => {
    const textarea = event.target as HTMLTextAreaElement;
    dispatch(setSimpleContentSection(index, currentSimple, textarea.value));
  }

  return (
    <>
      <HStack>
        <Textarea
          variant='outlineGray'
          onBlur={e => handleSetSimpleContent(e)}
        />
      </HStack>
    </>
  );
}

export function SimpleView({data}: {data: Simple}) {
  return (
    <Box p={2} bg='app.gray.light3' rounded='xl'>
      <Text color='app.black.light'>{data.content}</Text>
    </Box>
  );
}