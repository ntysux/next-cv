import { HStack, Textarea } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNoteValueBranchSection } from "@/redux/actions";
import { RootState } from "@/redux/store";

interface Props {
  children?: JSX.Element,
  index: number
}

export default function Note({ children, index }: Props) {
  const dispatch = useDispatch();
  // get redux state: branch section
  const section = useSelector((state: RootState) => state.section);
  // handle set note value with redux action
  const handleSetNoteValue = (event: ChangeEvent) => {
    const textarea = event.target as HTMLTextAreaElement;
    dispatch(setNoteValueBranchSection(index, textarea.value));
  }

  return (
    <>
      <HStack>
        <Textarea
          variant='filledGray'
          value={section.chil[index].note}
          onChange={e => handleSetNoteValue(e)} 
        />
        {children}
      </HStack>
    </>
  );
}