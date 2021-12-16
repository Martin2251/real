import {link } from "next/link"
import { Menu, MenuButton,MenuList, MenuItem, IconButton, Flex, Box, Spacer } from "@chakra-ui/react";
import { FcMenU, FcHome, FcAbout} from "react-icons/fc";
import {BsSearch } from "react-icons/bs-search";
import { FiKey} from "react-icons/fi"

const Navbar = () => (
<Flex p="2" borderBottom="1px" borderColor="gray.100">
    <Box fontSize="3xl" color="blue.400" fontWeight="bold">
    <Link href="/" paddingLeft="2">Realtor</Link>
    </Box>
    <Spacer />
    <Box>
        <Menu></Menu>
    </Box>

</Flex>
)

export default Navbar