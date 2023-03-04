import { IconButton } from "@chakra-ui/react";
import { IconX } from "@tabler/icons-react";

export function ModalCloseButton({ onClick }: {onClick?: () => any}) {
  return (
    <>
      <IconButton
        aria-label='close section'
        variant='closeModal'
        position='absolute'
        right='0'
        onClick={onClick}
        icon={<IconX size='16px' strokeWidth='3' />}
        size='xs'
      />
    </>
  );
}

export function CloseButton({ onClick }: {onClick?: () => any}) {
  return (
    <>
      <IconButton
        aria-label='close'
        variant='close'
        onClick={onClick}
        icon={<IconX size='16px' strokeWidth='3' />}
        size='xs'
      />
    </>
  );
}