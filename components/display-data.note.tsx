import { Box, HStack, IconButton, Textarea } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { FocusEvent } from "react";
import { removeDataSection, setNoteContentSection } from "@/redux/actions";
import { Note } from "@/redux/state.interface";
import { IconX } from "@tabler/icons-react";

interface Props {
  index: number,
  currentNote: Note
}

interface Map {
  array: string[] | undefined,
  render: (line: string, index: number) => JSX.Element
}

// handle text down the line from textarea
const Map = ({array, render}: Map) => <>{array?.map((line, index) => render(line, index))}</>

// Note edit
export function NoteEdit({index, currentNote}: Props) {
  const dispatch = useDispatch();

  // set note content
  const handleSetNoteContent = (event: FocusEvent) => {
    const textarea = event.target as HTMLTextAreaElement;
    dispatch(setNoteContentSection(index, currentNote, textarea.value));
  }

  // remove note
  const handleRemoveNote = () => dispatch(removeDataSection(index));

  return (
    <HStack>
      <Textarea
        variant='filledGray'
        onBlur={e => handleSetNoteContent(e)} 
      />
      <IconButton
        aria-label='close'
        variant='close'
        size='xs'
        onClick={handleRemoveNote}
        icon={<IconX size='16px' strokeWidth='3' />}
      />
    </HStack>
  );
}

// Note view
export function NoteView({data}: {data: Note}) {
  return (
    <Box color='app.gray.dark'>
      <Map array={data.content?.split("\n")} render={(line, index) =>
        <Box key={index}>
          # {line}
        </Box>
      } />
    </Box>
  );
}