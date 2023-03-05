import { Center, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { IconEye, IconPencil } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { changeMode } from "@/redux/actions";

export default function InteractiveMode() {
  const dispatch = useDispatch();
  // get current mode & color
  const { mode, color } = useSelector((state: RootState) => state.cv);
  // if mode has been activated -> return current color for this mode
  const currentColor = (mode: boolean) => mode ? color : 'white';
  const viewMode = () => dispatch(changeMode(false)); // set mode = view using redux action
  const editMode = () => dispatch(changeMode(true)); // set mode = edit using redux action

  return (
    <>
      <Center>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='set mode'
            variant='unstyledGrayHoverWhite'
            icon={mode ? <IconPencil size='20px' /> : <IconEye size='20px' />}
            size='sm'
          />
          <MenuList>
            <MenuItem
              icon={<IconEye size='18px' color={currentColor(!mode)} />}
              command='Ctrl + V'
              onClick={viewMode}
            >
              Chế độ xem
            </MenuItem>
            <MenuItem
              icon={<IconPencil size='18px' color={currentColor(mode)} />}
              command='Ctrl + E'
              onClick={editMode}
            >
              Chế độ chỉnh sửa
            </MenuItem>
          </MenuList>
        </Menu>
      </Center>
    </>
  );
}