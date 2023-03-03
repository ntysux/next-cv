import * as C from "@chakra-ui/react";
import * as TB from "@tabler/icons-react";
import { useRef } from "react";
import { RootState } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { renameBranchSection } from "@/redux/actions";

export default function SectionMenuOptions() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { isOpen: isLayoutOpen, onToggle: onLayoutToggle } = C.useDisclosure();
  const { isOpen: isImageOpen, onToggle: onImageToggle } = C.useDisclosure();
  const dispatch = useDispatch();
  const { color } = useSelector((state: RootState) => state.cv);

  return (
    <>
      <C.Center>
        <C.Menu>
          {({ isOpen }) => (
            <>
              <C.MenuButton
                as={C.IconButton}
                aria-label='open actions'
                variant='unstyledHoverBgBlack'
                icon={<C.Box p={1} bg={isOpen ? color : 'app.black.dark'} rounded='full'/>}
                size='xs'
              />
              <C.MenuList mt={2}>
                {/* Name */}
                <C.MenuItem
                  closeOnSelect={false}
                  icon={<TB.IconPencilMinus size='18px' />}
                  _hover={{bg:'none', cursor: 'text'}}
                  onClick={() => inputRef.current?.focus()}
                >
                  <C.HStack>
                    <C.Text>Tên</C.Text>
                    <C.Spacer />
                    <C.Input
                      ref={inputRef}
                      type='text'
                      variant='unstyledBlackLight'
                      size='sm'
                      onChange={e => dispatch(renameBranchSection(e.target.value))}
                    />
                  </C.HStack>
                </C.MenuItem>
                <C.MenuDivider />
                {/* Note */}
                <C.MenuItem icon={<TB.IconNote size='18px' />}>
                  Ghi chú
                </C.MenuItem>
                <C.MenuDivider />
                {/* Layout */}
                <C.MenuItem
                  closeOnSelect={false}
                  icon={<TB.IconLayoutBoard size='18px' />}
                  onClick={onLayoutToggle}
                >
                  <C.HStack>
                    <C.Text>Bố cục</C.Text>
                    <C.Spacer />
                    <C.Box
                      transition='all 0.3s'
                      transform={isLayoutOpen ? 'rotate(90deg)' : 'rotate(0deg)'}
                    >
                      <TB.IconChevronRight size='18px' strokeWidth='3' />
                    </C.Box>
                  </C.HStack>
                </C.MenuItem>
                <C.Collapse in={isLayoutOpen} animateOpacity>
                  <C.MenuGroup>
                    <C.MenuItem icon={<TB.IconTable color='#88898C' size='18px' />}>
                      Bảng
                    </C.MenuItem>
                    <C.MenuItem icon={<TB.IconLayoutColumns color='#88898C' size='18px' />}>
                      Cơ bản
                    </C.MenuItem>
                    <C.MenuItem icon={<TB.IconLayoutNavbar color='#88898C' size='18px' />}>
                      Đơn giản
                    </C.MenuItem>
                  </C.MenuGroup>
                </C.Collapse>
                <C.MenuDivider />
                {/* Image */}
                <C.MenuItem
                  closeOnSelect={false}
                  icon={<TB.IconPhoto size='18px' />}
                  onClick={onImageToggle}
                >
                  <C.HStack>
                    <C.Text>Ảnh</C.Text>
                    <C.Spacer />
                    <C.Box
                      transition='all 0.3s'
                      transform={isImageOpen ? 'rotate(90deg)' : 'rotate(0deg)'}
                    >
                      <TB.IconChevronRight size='18px' strokeWidth='3' />
                    </C.Box>
                  </C.HStack>
                </C.MenuItem>
                <C.Collapse in={isImageOpen} animateOpacity>
                  <C.MenuGroup>
                    <C.MenuItem icon={<TB.IconBorderLeft color='#88898C' size='18px' />}>
                      Bên trái
                    </C.MenuItem>
                    <C.MenuItem icon={<TB.IconBorderRight color='#88898C' size='18px' />}>
                      Bên phải
                    </C.MenuItem>
                    <C.MenuItem icon={<TB.IconBorderTop color='#88898C' size='18px' />}>
                      Bên trên
                    </C.MenuItem>
                  </C.MenuGroup>
                </C.Collapse>
              </C.MenuList>
            </>
          )}
        </C.Menu>
      </C.Center>
    </>
  );
}