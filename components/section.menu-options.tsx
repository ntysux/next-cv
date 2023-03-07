import { Box, Center, Collapse, HStack, IconButton, Input, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Spacer, Text, useDisclosure } from "@chakra-ui/react";
import { IconChevronRight, IconLayoutBoard, IconLayoutColumns, IconLayoutNavbar, IconNote, IconPencilMinus, IconPhoto, IconRectangle, IconTable, IconUserCircle } from "@tabler/icons-react";
import { useSelector, useDispatch } from "react-redux";
import { ChangeEvent, useRef } from "react";
import { RootState } from "@/redux/store";
import { addBasicBranchSection, addImageBranchSection, addNoteBranchSection, renameBranchSection } from "@/redux/actions";

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
  const handleAddImage = (isAvatar: boolean) => dispatch(addImageBranchSection(isAvatar));

  // add Basic using redux action
  const handleAddBasic = () => dispatch(addBasicBranchSection());

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
                    <MenuItem isDisabled icon={<IconTable color='white' size='18px' />} command='Đang cập nhập'>Bảng</MenuItem>
                    <MenuItem
                      icon={<IconLayoutColumns color='white' size='18px' />}
                      onClick={handleAddBasic}
                    >
                      Cơ bản
                    </MenuItem>
                    <MenuItem icon={<IconLayoutNavbar color='white' size='18px' />}>Đơn giản</MenuItem>
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
                      icon={<IconUserCircle color='white' size='18px' />}
                      onClick={() => handleAddImage(true)}
                    >
                      Ảnh đại diện
                    </MenuItem>
                    <MenuItem
                      icon={<IconRectangle color='white' size='18px' />}
                      onClick={() => handleAddImage(false)}
                    >
                      Ảnh ngang
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