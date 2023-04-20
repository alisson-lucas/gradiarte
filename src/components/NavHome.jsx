import {
    Flex,
    Image,
    ButtonGroup,
    Button,
    HStack,
    Link,
    useMediaQuery
} from "@chakra-ui/react";

export default function Home() {
    const [desktop] = useMediaQuery('(min-width: 992px)');

    return (
        <Flex w="full" h='100' justify="space-between" align='center' position='absolute' p='20px 72px'>
            <Image src='/logo.png' h='120px' />
            <ButtonGroup display={desktop ? 'inline-flex' : 'none'} variant="link" spacing="6">
                <Link color='#fff' fontSize='14px' fontWeight='hairline'>INÍCIO</Link>
                <Link href="#aboutUs" color='#fff' fontSize='14px' fontWeight='hairline'>SOBRE NÓS</Link>
                <Link href="#products" color='#fff' fontSize='14px' fontWeight='hairline'>PRODUTOS</Link>
                <Button color='#000D1C' fontSize='14px' bgColor='#D9D9D9' padding='10px' h='30px' borderRadius='2px'>CONTATE-NOS</Button>
            </ButtonGroup>
        </Flex>
    )
}