import * as C from "@chakra-ui/react";
import * as TB from "@tabler/icons-react";

export default function InteractiveMode() {
  return (
    <>
      <C.Center>
        <C.Menu>
          <C.MenuButton
            as={C.IconButton}
            aria-label='set mode'
            variant='unstyledGrayHoverWhite'
            icon={<TB.IconEye size='20px' />}
            size='sm'
          />
          <C.MenuList>
            <C.MenuItem icon={<TB.IconEye size='18px' />} command='Ctrl + V'>
              Chế độ xem
            </C.MenuItem>
            <C.MenuItem icon={<TB.IconPencil size='18px' />} command='Ctrl + E'>
              Chế độ chỉnh sửa
            </C.MenuItem>
          </C.MenuList>
        </C.Menu>
      </C.Center>
    </>
  );
}