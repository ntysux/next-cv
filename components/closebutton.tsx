import { IconButton } from "@chakra-ui/react";
import { IconX } from "@tabler/icons-react";

export function ModalCloseButton({ onClick }: {onClick: () => any}) {
  return (
    <>
      <IconButton
        position='absolute'
        right='0'
        onClick={onClick}
        aria-label='close section'
        variant='close'
        icon={<IconX size='16px' strokeWidth='3' />}
        size='xs'
      />
    </>
  );
}