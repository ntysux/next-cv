import { Editable, EditableInput, EditablePreview, Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { rename } from "@/redux/actions";

export default function Rename() {
  const dispatch = useDispatch();
  // get name current
  const { name } = useSelector((state: RootState) => state.cv);
  // rename using redux action
  const renameCv = (nextValue: string) => dispatch(rename(nextValue));

  return (
    <>
      <Editable
        value={name}
        onChange={renameCv}
      >
        <EditablePreview
          noOfLines={1}
          maxW='100px'
          bg='app.black.light'
          rounded='full'
          color='white'
          px='3'
        />
        <Input
          as={EditableInput}
          variant='unstyledBlackLight'
          size='sm'
        />
      </Editable>
    </>
  );
}