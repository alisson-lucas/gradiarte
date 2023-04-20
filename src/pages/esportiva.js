import {
    Flex,
    Text,
    Image,
    useMediaQuery
} from "@chakra-ui/react";

import Nav from '../components/Nav';
import Footer from "@/components/Footer";

function Esportiva() {
    const [desktop] = useMediaQuery('(min-width: 992px)');

    return (
        <>
            <Nav />
            <Flex backgroundImage={desktop ? './gradil/hero.png' : './gradil/hero-mobile.png'} boxSize='200px' align='center' justify='center' bgSize='cover' w='full' h='315px'>
                <Text color='#fff' fontSize='5xl' fontWeight='bold' border='1'>Esportiva</Text>
            </Flex>
            <Flex w='full' bgColor='#D9D9D9' p={desktop ? '40px 72px' : '40px 26px'}>
                <Flex w='full' maxW='1200px' direction={desktop ? 'row' : 'column' } h='inherit'>
                    <Flex w={desktop ? '50%' : 'full' } gap={3} direction='column' h={desktop ? '500px' : '390px'}>
                        <Image src="./esportiva/1.png" h={desktop ? '300px' : '210px' } />
                        <Flex w='full' direction='row' align='center' justify='center' gap={3}>
                            <Image src="./esportiva/2.png" h={desktop ? '180px' : '96px' } />
                            <Image src="./esportiva/3.png" h={desktop ? '180px' : '96px' } />
                        </Flex>
                    </Flex>
                    <Flex w={desktop ? '50%' : 'full' } gap={8} direction='column' h='inherit' p={desktop ? '0 40px' : '0'}>
                        <Text fontWeight='bold' fontSize='22px' >Esportiva</Text>
                        <Text fontSize='sm'>Usada para delimitar e proteger áreas de atividades esportivas, como campos de futebol, quadras de basquete, pistas de corrida, entre outros. É geralmente feito de materiais resistentes, como aço galvanizado ou alumínio, e é projetado para suportar impactos e pressão física.</Text>

                        <Text fontSize='sm'> O gradil esportivo é um elemento importante na segurança dos atletas e do público, pois ajuda a evitar que a bola ou os jogadores saiam do campo de jogo e possam causar danos ou acidentes. Além disso, o gradil pode ser utilizado para separar diferentes áreas do campo de jogo, como a área dos jogadores e a área reservada para o público.</Text>

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

export default Esportiva;