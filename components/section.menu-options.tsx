import { Box, Center, Collapse, HStack, IconButton, Input, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Spacer, Text, useDisclosure } from "@chakra-ui/react";
import { IconChevronRight, IconCircle, IconLayoutColumns, IconLayoutNavbar, IconNote, IconPencilMinus, IconPhoto, IconRectangle, IconStack2, IconTable } from "@tabler/icons-react";
import { useSelector, useDispatch } from "react-redux";
import { ChangeEvent, useRef } from "react";
import { RootState } from "@/redux/store";
import { addBasicSection, addImageSection, addNoteSection, addSimpleSection, renameSection } from "@/redux/actions";

export default function SectionMenuOptions() {
  const { isOpen: isLayoutOpen, onToggle: onLayoutToggle } = useDisclosure();
  const { isOpen: isImageOpen, onToggle: onImageToggle } = useDisclosure();
  const inputRef = useRef<HTMLInputElement>(null); // rename input ref
  const dispatch = useDispatch();

  // get current color
  const { color } = useSelector((state: RootState) => state.cv);
  // focus input when click
  const handleClickFocusInput = () => inputRef.current?.focus();
  // rename section
  const handleRenameSection = (event: ChangeEvent) => {
    const input = event.target as HTMLInputElement;
    dispatch(renameSection(input.value));
  }
  const handleAddNote = () => dispatch(addNoteSection()); // add Note
  const handleAddBasic = () => dispatch(addBasicSection()); // add Basic
  const handleAddSimple = () => dispatch(addSimpleSection()); // add Simple
  const handleAddImage = (isAvatar: boolean) => dispatch(addImageSection(isAvatar)); // add Image

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
                    <Text>T??n</Text>
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
                  Ghi ch??
                </MenuItem>
                <MenuDivider />
                {/* Display data */}
                <MenuItem
                  closeOnSelect={false}
                  icon={<IconStack2 size='18px' strokeWidth='2.5' />}
                  onClick={onLayoutToggle}
                >
                  <HStack>
                    <Text fontWeight='700'>B??? c???c</Text>
                    <Spacer />
                    <Box
                      transition='all 0.3s'
                      transform={isLayoutOpen ? 'rotate(90deg)' : 'rotate(0deg)'}
                    >
                      <IconChevronRight size='18px' strokeWidth='3' />
                    </Box>
                  </HStack>
                </MenuItem>
                {/* Display data options */}
                <Collapse in={isLayoutOpen} animateOpacity>
                  <MenuGroup>
                    <MenuItem
                      isDisabled
                      icon={<IconTable color='white' size='18px' />}
                      command='??ang c???p nh???p'
                    >
                      B???ng
                    </MenuItem>
                    <MenuItem
                      icon={<IconLayoutColumns color='white' size='18px' />}
                      onClick={handleAddBasic}
                    >
                      C?? b???n
                    </MenuItem>
                    <MenuItem
                      icon={<IconLayoutNavbar color='white' size='18px' />}
                      onClick={handleAddSimple}
                    >
                      ????n gi???n
                    </MenuItem>
                  </MenuGroup>
                </Collapse>
                <MenuDivider />
                {/* Image */}
                <MenuItem
                  closeOnSelect={false}
                  icon={<IconPhoto size='18px' strokeWidth='2.5' />}
                  onClick={onImageToggle}
                >
                  <HStack>
                    <Text fontWeight='700'>???nh</Text>
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
                      icon={<IconCircle color='white' size='18px' />}
                      onClick={() => handleAddImage(true)}
                    >
                      ???nh tr??n
                    </MenuItem>
                    <MenuItem
                      icon={<IconRectangle color='white' size='18px' />}
                      onClick={() => handleAddImage(false)}
                    >
                      ???nh ngang
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