import {
    Flex,
    Text,
    Image,
    useMediaQuery
} from "@chakra-ui/react";

import Nav from '../components/Nav';
import Footer from "@/components/Footer";

function Serralheria() {
    const [desktop] = useMediaQuery('(min-width: 992px)');

    return (
        <>
            <Nav />
            <Flex backgroundImage={desktop ? './serralheria/hero.png' : './serralheria/hero-mobile.png'} boxSize='200px' align='center' justify='center' bgSize='cover' w='full' h='315px'>
                <Text color='#fff' fontSize='5xl' fontWeight='bold' border='1'>Serralheria</Text>
            </Flex>
            <Flex w='full' bgColor='#D9D9D9' p={desktop ? '40px 72px' : '40px 26px'}>
                <Flex w='full' maxW='1200px' direction={desktop ? 'row' : 'column' } h='inherit'>
                    <Flex w={desktop ? '50%' : 'full' } gap={3} direction='column' h={desktop ? '500px' : '390px'}>
                        <Image src="./serralheria/1.png" h={desktop ? '300px' : '210px' } />
                        <Flex w='full' direction='row' align='center' justify='center' gap={3}>
                            <Image src="./serralheria/2.png" h={desktop ? '180px' : '96px' } />
                            <Image src="./serralheria/3.png" h={desktop ? '180px' : '96px' } />
                        </Flex>
                    </Flex>
                    <Flex w={desktop ? '50%' : 'full' } gap={8} direction='column' h='inherit' p={desktop ? '0 40px' : '0'}>
                        <Text fontWeight='bold' fontSize='22px' >Serralheria</Text>
                        <Text fontSize='sm'>Uma grade feita de serralheria é uma estrutura de metal composta por barras verticais e horizontais soldadas em conjunto para formar uma grade uniforme. A serralheria é uma técnica de fabricação que envolve a manipulação de metal para produzir produtos duráveis e esteticamente agradáveis, incluindo grades, portões, janelas e escadas.</Text>

                        <Text fontSize='sm'>As grades de serralheria são comuns em ambientes residenciais e comerciais, onde são usadas para proteger as propriedades de intrusos e prevenir acidentes. Além disso, as grades de serralheria podem ser personalizadas para atender às necessidades específicas de um projeto, com diferentes tamanhos, estilos e designs disponíveis.</Text>

                        <Text fontWeight='bold' fontSize='22px'>Especificações Técnicas:</Text>

                        <Flex direction='column' gap='3'>
                            <Flex><Text>Altura(m):</Text> <Text fontSize='sm'>1,03m / 1,53m / 2,03m / 2,43m</Text></Flex>
                            <Flex><Text>Largura(m):</Text> <Text fontSize='sm'>2,5m</Text></Flex>
                            <Flex><Text>Bitola do Fio(mm):</Text> <Text fontSize='sm'>4,80 mm</Text></Flex>
                            <Flex><Text>Espessura da barra(mm):</Text> <Text fontSize='sm'>25 x 1,50 mm</Text></Flex>
                            <Flex><Text>Malha: (Altura x Largura):</Text> <Text fontSize='sm'>132 x 65 mm</Text></Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Footer />
        </>
    );
}

export default Serralheria;