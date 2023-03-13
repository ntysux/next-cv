import { removeDataSection, setSimpleContentSection } from "@/redux/actions";
import { Simple } from "@/redux/state.interface";
import { Box, HStack, IconButton, Text, Textarea } from "@chakra-ui/react";
import { IconX } from "@tabler/icons-react";
import { FocusEvent, useState } from "react";
import { useDispatch } from "react-redux";

interface Props {
  currentSimple: Simple,
  index: number
}

export function SimpleEdit({currentSimple, index}: Props) {
  const dispatch = useDispatch();
  const [simpleContent, setSimpleContent] = useState(currentSimple.content);

  // set content Simple use redux state
  const handleSetSimpleContent = (event: FocusEvent) => {
    const textarea = event.target as HTMLTextAreaElement;
    dispatch(setSimpleContentSection(index, currentSimple, textarea.value));
  }

  // remove simple
  const handleRemoveSimple = () => dispatch(removeDataSection(index));

  return (
    <>
      <HStack>
        <Textarea
          value={simpleContent}
          onChange={e => setSimpleContent(e.target.value)}
          variant='outlineGray'
          onBlur={e => handleSetSimpleContent(e)}
        />
        <IconButton
          aria-label='close'
          variant='close'
          size='xs'
          onClick={handleRemoveSimple}
          icon={<IconX size='16px' strokeWidth='3' />}
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