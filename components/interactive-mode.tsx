import * as C from "@chakra-ui/react";
import * as TB from "@tabler/icons-react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { changeMode } from "@/redux/actions";

export default function InteractiveMode() {
  const dispatch = useDispatch();
  const { mode } = useSelector((state: RootState) => state.cv);

  function currentColor(mode: boolean) {
    return mode ? '#5CF2E3' : 'white'
  }

  return (
    <>
      <C.Center>
        <C.Menu>
          <C.MenuButton
            as={C.IconButton}
            aria-label='set mode'
            variant='unstyledGrayHoverWhite'
            icon={mode ? <TB.IconPencil size='20px' /> : <TB.IconEye size='20px' />}
            size='sm'
          />
          <C.MenuList>
            <C.MenuItem
              icon={<TB.IconEye size='18px' color={currentColor(!mode)} />}
              command='Ctrl + V'
              onClick={() => dispatch(changeMode(false))}
            >
              Chế độ xem
            </C.MenuItem>
            <C.MenuItem
              icon={<TB.IconPencil size='18px' color={currentColor(mode)} />}
              command='Ctrl + E'
              onClick={() => dispatch(changeMode(true))}
            >
              Chế độ chỉnh sửa
            </C.MenuItem>
          </C.MenuList>
        </C.Menu>
      </C.Center>
    </>
  );
}