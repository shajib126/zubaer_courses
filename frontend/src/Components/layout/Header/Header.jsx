import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const LinkButton = ({ url = '/', title = 'Home',onClose }) => (
  <Link onClick={onClose} to={url}>{title}</Link>
);
const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const user = {
    role:'admin'
  }
  const logoutHandler = (e)=>{
    e.preventDefault()
  }
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme={'yellow'}
        width="12"
        rounded={'full'}
        height="12"
        position="fixed"
        top="6"
        left="6"
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={'blur(2px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>COURSE BUNDLER</DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'} alignItems="flex-start">
              <LinkButton onClose={onClose} url="/" title="Home" />
              <LinkButton onClose={onClose} url="/courses" title="Brows All Courses" />
              <LinkButton onClose={onClose} url="/request" title="Request A Course" />
              <LinkButton onClose={onClose} url="/contact" title="Contact Us" />
              <LinkButton onClose={onClose} url="/about" title="About" />
              <HStack
                justifyContent={'space-evenly'}
                position="absolute"
                bottom={'2rem'}
                width="80%"
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to="/profile">
                          <Button onClick={onClose} variant={'ghost'}>Profile</Button>
                        </Link>
                        <Button onClick={logoutHandler} variant={'ghost'}>
                            <RiLogoutBoxLine/>
                            Logout
                        </Button>
                      </HStack>
                      {user && user.role === 'admin' && <Link to='/admin/dashboard'>
                            <Button color={'purple'} variant={'ghost'}>
                                <RiDashboardFill style={{margin:'4px'}} />
                                Dashboard
                            </Button>
                        </Link>}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                    <Button colorScheme={'yellow'}>Login</Button>
                    </Link>
                    <p>OR</p>
                    <Link to="/register">
                    <Button colorScheme={'yellow'}>Register</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
