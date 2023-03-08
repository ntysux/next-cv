import { setContentSimpleBranchSection } from "@/redux/actions";
import { SimpleLayout as Simple } from "@/redux/state.interface";
import { HStack, Textarea } from "@chakra-ui/react";
import { FocusEvent } from "react";
import { useDispatch } from "react-redux";

interface Props {
  children?: JSX.Element,
  currentSimple: Simple,
  index: number
}

export default function SimpleLayout({children, currentSimple, index}: Props) {
  const dispatch = useDispatch();

  // set content Simple use redux state
  const handleSetContent = (event: FocusEvent) => {
    const textarea = event.target as HTMLTextAreaElement;
    dispatch(setContentSimpleBranchSection(index, currentSimple, textarea.value));
  }

  return (
    <>
      <HStack>
        <Textarea
          variant='outlineGray'
          onBlur={e => handleSetContent(e)}
        />
        {children}
      </HStack>
    </>
  );
}