import { Box, HStack, Textarea } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { FocusEvent } from "react";
import { removeDataSection, setNoteContentSection } from "@/redux/actions";
import { CloseButtonDefault } from "./closebutton";
import { Note } from "@/redux/state.interface";

interface Props {
  index: number,
  data: Note
}

export function NoteEdit({index, data}: Props) {
  const dispatch = useDispatch();

  // set note content
  const handleSetNoteContent = (event: FocusEvent) => {
    const textarea = event.target as HTMLTextAreaElement;
    dispatch(setNoteContentSection(index, data,textarea.value));
  }

  // remove note
  const handleRemoveNote = () => dispatch(removeDataSection(index));


  return (
    <HStack>
      <Textarea
        variant='filledGray'
        onBlur={e => handleSetNoteContent(e)} 
      />
      <CloseButtonDefault onClick={handleRemoveNote} />
    </HStack>
  );
}

export function NoteView({data}: {data: Note}) {
  return (
    <Box color='app.gray.dark'>
      {data.content?.split("\n").map((line, index) => (
        <Box key={index}>
          # {line}
        </Box>
      ))}
    </Box>
  );
}