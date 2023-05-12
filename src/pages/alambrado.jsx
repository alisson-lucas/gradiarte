import {
    Flex,
    Text,
    Image,
    useMediaQuery
} from "@chakra-ui/react";

import Nav from '../components/Nav';
import Footer from "@/components/Footer";
import Whatsapp from "@/components/whatsapp";

function Alambrado() {
    const [desktop] = useMediaQuery('(min-width: 992px)');

    return (
        <>
            <Nav />
            <Flex backgroundImage={desktop ? './alambrado/hero.png' : './alambrado/hero-mobile.png'} boxSize='200px' align='center' justify='center' bgSize='cover' w='full' h='315px'>
                <Text color='#fff' fontSize={desktop ? '75px' : '5xl'} fontWeight='bold' border='1'>Alambrado</Text>
            </Flex>
            <Flex w='full' bgColor='#D9D9D9' p={desktop ? '40px 72px' : '40px 26px'} >
                <Flex w='full' maxW='1200px' direction={desktop ? 'row' : 'column'} h='inherit'>
                    <Flex w={desktop ? '50%' : 'full'} gap={3} direction='column' h={desktop ? '500px' : '390px'}>
                        <Image src="./alambrado/1.png" h={desktop ? '300px' : '210px'} borderRadius='12px' />
                        <Flex w='full' direction='row' align='center' justify='center' gap={3}>
                            <Image src="./alambrado/2.png" h={desktop ? '180px' : '96px'} borderRadius='12px' />
                            <Image src="./alambrado/3.png" h={desktop ? '180px' : '96px'} borderRadius='12px' />
                        </Flex>
                    </Flex>
                    <Flex w={desktop ? '50%' : 'full'} gap={8} direction='column' h='inherit' p={desktop ? '0 40px' : '0'}>
                        <Text fontWeight='bold' fontSize='22px' >Alambrado</Text>
                        <Text fontSize='sm'>A tela alambrado é um tipo de cercamento muito utilizado e popular. Ele apresenta um papel muito importante na segurança, principalmente na segurança perimetral. Sua estrutura é formada por feixes interconectados ou soldados de metal, que torna a estrutura qual impossível de ser cortada.</Text>

                        <Text fontWeight='bold' fontSize='22px'>Especificações Técnicas:</Text>

                        <Flex direction='column' gap='3'>
                            <Flex><Text>Altura(m):</Text> <Text fontSize='sm'>de 1 a 4 metros</Text></Flex>
                            <Flex><Text>Diâmetro do Fio(mm):</Text> <Text fontSize='sm'>2,10mm / 2,76mm / 3,40mm</Text></Flex>
                            <Flex><Text>Malha: (Altura x Largura):</Text> <Text fontSize='sm'>2" / 2.1/2" / 3" /3.1/2"</Text></Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Whatsapp />
            <Footer />
        </>
    );
}

export default Alambrado;