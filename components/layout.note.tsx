import { setNoteValueBranchSection } from "@/redux/actions";
import { RootState } from "@/redux/store";
import { HStack, Textarea } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  children?: JSX.Element,
  index: number
}

export default function Note({ children, index }: Props) {
  const dispatch = useDispatch();
  const section = useSelector((state: RootState) => state.section);

  return (
    <>
      <HStack>
        <Textarea
          variant='filledGray'
          value={section.chil[index].note}
          onChange={e => dispatch(setNoteValueBranchSection(index, e.target.value))} 
        />
        {children}
      </HStack>
    </>
  );
}