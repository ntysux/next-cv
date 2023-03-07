import { Box, Grid, GridItem, HStack, Textarea } from "@chakra-ui/react";

export default function BasicLayout ({children}: {children: JSX.Element}) {
  return (
    <>
      <HStack>
        <Box w='full'>
          <Grid templateColumns='repeat(3, 1fr)' gap={2}>
            <GridItem>
              <Textarea variant='outlineGray' fontWeight='600' />
            </GridItem>
            <GridItem colSpan={2}>
              <Textarea variant='outlineGray' minH='200px' />
            </GridItem>
          </Grid>
        </Box>
        <Box>
          {children}
        </Box>
      </HStack>
    </>
  );
}