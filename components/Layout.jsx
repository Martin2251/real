import Head from "next/head";
import { Box} from "@chakra-ui/react"

// children is whatever is in the layout component
const Layout = ({children}) => (
    <>
    <Head>
        <title>Real Estate</title>
    </Head>
    <Box maxWidth="1280px" m="auto">
    <header>
        Navbar
    </header>
    <main>
        {children}
    </main>
    <footer>
        Footer
    </footer>
    </Box>

    </>
)
export default Layout