import { Box, BoxProps } from '@chakra-ui/react'

export const Placeholder = (BoxProps) => {
  return <Box role="presentation" py="3" px="4" color="fg.accent.default" {...BoxProps} />
}