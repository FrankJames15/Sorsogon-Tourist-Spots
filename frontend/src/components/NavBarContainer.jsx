import { Flex,Box } from "@chakra-ui/react";

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Box>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
      
        color={["blue.500"]}
        {...props}
      >
        {children}
      </Flex>
    </Box>
  );
};

export default NavBarContainer;
