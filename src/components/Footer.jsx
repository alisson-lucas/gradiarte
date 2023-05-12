import {
    Flex,
    Image,
    useMediaQuery
} from "@chakra-ui/react";

export default function Footer() {
    const [desktop] = useMediaQuery('(min-width: 992px)');

    return (
        <Flex w="full" h={desktop ? '90px' : '200px'} direction={desktop ? 'row' : 'column'}  justify={desktop ? "space-between" : "center"}  align='center' bgColor='#141414' p='20px 75px' >
            <Image src='/logo.png' h={desktop ? '90px' : '100'} />
            <Flex gap={3}>
                <Image src='/insta.png' h='35px' />
                <Image src='/whatsapp.png' h='35px' />
            </Flex>
        </Flex>
    )
}