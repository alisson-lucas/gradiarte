import {
    Flex,
    Image,
    Text,
    Button,
    Link,
    useMediaQuery
} from "@chakra-ui/react";

export default function Products() {
    const [desktop] = useMediaQuery('(min-width: 992px)');

    return (
        <Flex id="products" w="full" h='inherit' justify="space-between" gap={10} wrap='wrap' align='center' bgColor='#D9D9D9' p='72px 72px'>
            <Link href="./concertina" display='flex' alignItems='center' flexDirection='column' w='350px' textAlign='center' align='center' gap={3} >
                <Image src="./1.png" h={desktop ? '250px' : '200px'} borderRadius='12px'/>
                <Text>Concertina</Text>
                <Text fontSize='xs' >Muito eficaz na prevenção de invasões e escaladas.</Text>
                <Button border='1px solid #171717' maxW='100px' borderRadius='20px'>Veja mais</Button>
            </Link>
            <Link href="./esportiva" display='flex' alignItems='center' flexDirection='column' w='350px' textAlign='center' align='center' gap={3} >
                <Image src="./2.png" h={desktop ? '250px' : '200px'} borderRadius='12px'/>
                <Text>Esportiva</Text>
                <Text fontSize='xs'>Quadra esportiva.</Text>
                <Button border='1px solid #171717' borderRadius='20px'>Veja mais</Button>

            </Link>
            <Link href="./gradil" display='flex' alignItems='center' flexDirection='column' w='350px' textAlign='center' align='center' gap={3} >
                <Image src="./3.png" h={desktop ? '250px' : '200px'} borderRadius='12px'/>
                <Text>Gradil</Text>
                <Text fontSize='xs'>Uma combinação de estética e segurança</Text>
                <Button border='1px solid #171717' borderRadius='20px'>Veja mais</Button>

            </Link>
            <Link href="./tela-eletrosoldada" display='flex' alignItems='center' flexDirection='column' w='350px' textAlign='center' align='center' gap={3} >
                <Image src="./4.png" h={desktop ? '250px' : '200px'} borderRadius='12px'/>
                <Text>Tela Eletrosoldada</Text>
                <Text fontSize='xs'></Text>
                <Button border='1px solid #171717' borderRadius='20px'>Veja mais</Button>

            </Link>
            <Link href="./serralheria" display='flex' alignItems='center' flexDirection='column' w='350px' textAlign='center' align='center' gap={3} >

                <Image src="./5.png" h={desktop ? '250px' : '200px'} borderRadius='12px'/>
                <Text>Serralheria</Text>
                <Text fontSize='xs'>Um tipo de grade de segurança com resistência e durabilidade</Text>
                <Button border='1px solid #171717' borderRadius='20px'>Veja mais</Button>

            </Link>
            <Link href="./robust" display='flex' alignItems='center' flexDirection='column' w='350px' textAlign='center' align='center' gap={3} >

                <Image src="./6.png" h={desktop ? '250px' : '200px'} borderRadius='12px'/>
                <Text>Robust</Text>
                <Text fontSize='xs'>Robustês </Text>
                <Button border='1px solid #171717' borderRadius='20px'>Veja mais</Button>

            </Link>
        </Flex>
    )
}