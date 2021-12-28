import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { MenuIconButton } from "../../atoms/button/MenunIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            App
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link>User</Link>
          </Box>
          <Link>Setting</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
        <MenuDrawer onClose={onClose} isOpen={isOpen} />
      </Flex>
    </>
  );
});
