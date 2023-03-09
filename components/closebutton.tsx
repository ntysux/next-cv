import { IconButton } from "@chakra-ui/react";
import { IconX } from "@tabler/icons-react";

interface Props {
  onClick?: () => void
}

export const DialogCloseButton = ({onClick}: Props) =>
  <IconButton
    aria-label='close dialog'
    variant='closeDialog'
    size='xs'
    onClick={onClick}
    icon={<IconX size='16px' strokeWidth='3' />}
  />

export const CloseButtonDefault = ({onClick}: Props) =>
  <IconButton
    aria-label='close'
    variant='close'
    size='xs'
    onClick={onClick}
    icon={<IconX size='16px' strokeWidth='3' />}
  />