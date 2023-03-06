import { Box, Center, Collapse, HStack, IconButton, Input, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Spacer, Text, useDisclosure } from "@chakra-ui/react";
import { IconBorderLeft, IconBorderRight, IconBorderTop, IconChevronRight, IconLayoutBoard, IconLayoutColumns, IconLayoutNavbar, IconNote, IconPencilMinus, IconPhoto, IconTable } from "@tabler/icons-react";
import { useSelector, useDispatch } from "react-redux";
import { ChangeEvent, useRef } from "react";
import { RootState } from "@/redux/store";
import { addImageBranchSection, addNoteBranchSection, renameBranchSection } from "@/redux/actions";

export default function SectionMenuOptions() {
  const { isOpen: isLayoutOpen, onToggle: onLayoutToggle } = useDisclosure();
  const { isOpen: isImageOpen, onToggle: onImageToggle } = useDisclosure();
  const inputRef = useRef<HTMLInputElement>(null); // rename input ref
  const dispatch = useDispatch();
  // get current color
  const { color } = useSelector((state: RootState) => state.cv);
  // focus input when click
  const handleClickFocusInput = () => inputRef.current?.focus();
  // add Note using redux action
  const handleAddNote = () => dispatch(addNoteBranchSection());
  // rename section using redux action
  const handleRenameSection = (event: ChangeEvent) => {
    const input = event.target as HTMLInputElement;
    dispatch(renameBranchSection(input.value));
  }
  // add Image using redux action
  const handleAddImage = (align: string) => dispatch(addImageBranchSection(align));

  return (
    <>
      <Center>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                as={IconButton}
                aria-label='open actions'
                variant='unstyledHoverBgBlack'
                icon={<Box p={1} bg={isOpen ? color : 'app.black.dark'} rounded='full'/>}
                size='xs'
              />
              <MenuList mt={2}>
                {/* Name */}
                <MenuItem
                  closeOnSelect={false}
                  icon={<IconPencilMinus size='18px' />}
                  _hover={{bg:'none', cursor: 'text'}}
                  onClick={handleClickFocusInput}
                >
                  <HStack>
                    <Text>Tên</Text>
                    <Spacer />
                    <Input
                      ref={inputRef}
                      type='text'
                      variant='unstyledBlackLight'
                      size='sm'
                      onChange={e => handleRenameSection(e)}
                    />
                  </HStack>
                </MenuItem>
                <MenuDivider />
                {/* Note */}
                <MenuItem
                  icon={<IconNote size='18px' />}
                  onClick={handleAddNote}
                >
                  Ghi chú
                </MenuItem>
                <MenuDivider />
                {/* Layout */}
                <MenuItem
                  closeOnSelect={false}
                  icon={<IconLayoutBoard size='18px' />}
                  onClick={onLayoutToggle}
                >
                  <HStack>
                    <Text>Bố cục</Text>
                    <Spacer />
                    <Box
                      transition='all 0.3s'
                      transform={isLayoutOpen ? 'rotate(90deg)' : 'rotate(0deg)'}
                    >
                      <IconChevronRight size='18px' strokeWidth='3' />
                    </Box>
                  </HStack>
                </MenuItem>
                {/* Layout options */}
                <Collapse in={isLayoutOpen} animateOpacity>
                  <MenuGroup>
                    <MenuItem icon={<IconTable color='#88898C' size='18px' />}>Bảng</MenuItem>
                    <MenuItem icon={<IconLayoutColumns color='#88898C' size='18px' />}>Cơ bản</MenuItem>
                    <MenuItem icon={<IconLayoutNavbar color='#88898C' size='18px' />}>Đơn giản</MenuItem>
                  </MenuGroup>
                </Collapse>
                <MenuDivider />
                {/* Image */}
                <MenuItem
                  closeOnSelect={false}
                  icon={<IconPhoto size='18px' />}
                  onClick={onImageToggle}
                >
                  <HStack>
                    <Text>Ảnh</Text>
                    <Spacer />
                    <Box
                      transition='all 0.3s'
                      transform={isImageOpen ? 'rotate(90deg)' : 'rotate(0deg)'}
                    >
                      <IconChevronRight size='18px' strokeWidth='3' />
                    </Box>
                  </HStack>
                </MenuItem>
                {/* Image options */}
                <Collapse in={isImageOpen} animateOpacity>
                  <MenuGroup>
                    <MenuItem
                      icon={<IconBorderLeft color='#88898C' size='18px' />}
                      onClick={() => handleAddImage('start')}
                    >
                      Bên trái
                    </MenuItem>
                    <MenuItem
                      icon={<IconBorderRight color='#88898C' size='18px' />}
                      onClick={() => handleAddImage('end')}
                    >
                      Bên phải
                    </MenuItem>
                    <MenuItem
                      icon={<IconBorderTop color='#88898C' size='18px' />}
                      onClick={() => handleAddImage('center')}
                    >
                      Bên trên
                    </MenuItem>
                  </MenuGroup>
                </Collapse>
              </MenuList>
            </>
          )}
        </Menu>
      </Center>
    </>
  );
}