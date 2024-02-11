import { Box, BoxProps, Container } from '@chakra-ui/react'
import { Placeholder } from './Placeholder'

export default function Footer(BoxProps){
  return (
    <Box as="footer" role="contentinfo" bg="bg.accent.default" {...BoxProps}>
      <Container>
        <Placeholder minH="20">Footer</Placeholder>
      </Container>
    </Box>
  )
}