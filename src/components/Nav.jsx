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
        <Flex w="full" h='100' justify="space-between" align='center' bgColor='#141414' p='20px 72px'>
            <Link href="/"><Image src='/logo.png' h={desktop ? '120px' : '95px'}  /></Link> 
            <ButtonGroup display={desktop ? 'inline-flex' : 'none'} variant="link" spacing="6">
                <Button display='none' color='#fff' fontSize='14px' fontWeight='hairline'>INÍCIO</Button>
                <Button color='#fff' fontSize='14px' fontWeight='hairline'>SOBRE NÓS</Button>
                <Button color='#fff' fontSize='14px' fontWeight='hairline'>PRODUTOS</Button>
                <Button color='#fff' fontSize='14px' fontWeight='hairline'>TRABALHOS</Button>
                <Button color='#000D1C' fontSize='14px' bgColor='#D9D9D9' padding='10px' h='30px' borderRadius='2px'>CONTATE-NOS</Button>
            </ButtonGroup>
        </Flex>
    )
}