import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const Subscribe = () => {
  return (
    <Container h={'90vh'} p="16">
      <Heading />
      <VStack
        boxShadow={'lg'}
        alignItems="stretch"
        borderRadius={'lg'}
        spacing="0"
      >
        <Box
          bg={'yellow.400'}
          padding="4"
          css={{ borderRadius: '8px 8px 0 0' }}
        >
          <Text children={`Pro Pack = ৳৩৯৯`} />
        </Box>
        <Box p="4">
          <VStack textAlign={'center'} px="8" mt={'4'} spacing="8">
            <Text
              
              children={`Join Pro pack and Get Access to all contendt`}
            />
            <Heading size={'md'} children="৳390 only" />
          </VStack>
          <Button my={'8'} width="full" colorScheme={'yellow'}>
            BUY NOW
          </Button>
        </Box>
        <Box bg={'blackAlpha.600'} p="4" css={{ borderRadius: '0 0 8px 8px' }}>
          <Heading
            size={'sm'}
            children="100% refund at cancelation"
            color={'white'}
            textTransform="uppercase"
          />
          <Text fontSize={'xs'} color="white" children='terms and condition apply' />
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
