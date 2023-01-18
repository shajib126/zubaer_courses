import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react'
import {TiSocialYoutubeCircular,TiSocialInstagramCircular, TiSocialInstagram} from 'react-icons/ti'
import {DiGithub} from 'react-icons/di'
import React from 'react'

const Footer = () => {
  return (
    <Box padding={'4'} bg='blackAlpha.900' minH={'10vh'}>
        <Stack direction={['column','row']}>
            <VStack alignItems={['center','flex-start']} width="full">
                <Heading children="All right Reserved" color={'white'} />
                <Heading children="@abu zubaer dev" color={'yellow.400'} size="sm" fontFamily={'body'} />
            </VStack>
            <HStack color={'white'} fontSize="50" spacing={['2','10']} justifyContent="center">
                <a href="https://youtube.com/abu_zuaber" target={'_blank'}>
                    <TiSocialYoutubeCircular/>
                </a>
                <a href="https://linkedin.com" target={'_blank'}>
                    <TiSocialInstagram/>
                </a>
                <a href="https://github.com/shajib126" target={'_blank'}>
                    <DiGithub/>
                </a>
            </HStack>
        </Stack>
    </Box>
  )
}

export default Footer