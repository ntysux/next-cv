import * as C from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { rename } from "@/redux/actions";

export default function Rename() {
  const dispatch = useDispatch();
  const { name } = useSelector((state: RootState) => state.cv);

  return (
    <>
      <C.Editable
        value={name}
        onChange={nextValue => dispatch(rename(nextValue))}
      >
        <C.EditablePreview
          noOfLines={1}
          maxW='100px'
          bg='app.black.light'
          rounded='full'
          color='white'
          px='3'
        />
        <C.Input
          as={C.EditableInput}
          variant='unstyledBlackLight'
          size='sm'
        />
      </C.Editable>
    </>
  );
}