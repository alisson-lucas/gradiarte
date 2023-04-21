import {
    Flex,
    Text,
    Image,
    useMediaQuery
} from "@chakra-ui/react";

import Nav from '../components/Nav';
import Footer from "@/components/Footer";
import Whatsapp from "@/components/whatsapp";

function Eletrosoldada() {
    const [desktop] = useMediaQuery('(min-width: 992px)');

    return (
        <>
            <Nav />
            <Flex backgroundImage={desktop ? './eletrosoldada/hero.png' : './eletrosoldada/hero-mobile.png'} boxSize='200px' align='center' justify='center' bgSize='cover' w='full' h='315px'>
                <Text color='#fff' fontSize='5xl' fontWeight='bold' border='1'>Eletrosoldada</Text>
            </Flex>
            <Flex w='full' bgColor='#D9D9D9' p={desktop ? '40px 72px' : '40px 26px'}>
                <Flex w='full' maxW='1200px' direction={desktop ? 'row' : 'column' } h='inherit'>
                    <Flex w={desktop ? '50%' : 'full' } gap={3} direction='column' h={desktop ? '500px' : '390px'}>
                        <Image src="./eletrosoldada/1.png" h={desktop ? '300px' : '210px' } borderRadius='12px'/>
                        <Flex w='full' direction='row' align='center' justify='center' gap={3}>
                            <Image src="./eletrosoldada/2.png" h={desktop ? '180px' : '96px' } borderRadius='12px'/>
                            <Image src="./eletrosoldada/3.png" h={desktop ? '180px' : '96px' } borderRadius='12px'/>
                        </Flex>
                    </Flex>
                    <Flex w={desktop ? '50%' : 'full' } gap={8} direction='column' h='inherit' p={desktop ? '0 40px' : '0'}>
                        <Text fontWeight='bold' fontSize='22px' >Eletrosoldada</Text>
                        <Text fontSize='sm'>Uma tela eletrosoldada é um produto feito de arames de aço que são soldados eletricamente em pontos de cruzamento para formar uma malha uniforme. É uma alternativa popular e versátil aos materiais tradicionais de cerca, pois é fácil de instalar, durável, resistente à corrosão e oferece alta segurança.</Text> 

                        <Text fontSize='sm'>A tela eletrosoldada pode ser usada em várias aplicações, incluindo cercas de segurança, cercas de jardim, grades de ventilação, decks de piso, gaiolas de animais, entre outros. Há uma variedade de opções de tamanho, espessura do fio e espaçamento de malha disponíveis para atender às necessidades específicas do projeto. Em geral, a tela eletrosoldada é uma escolha econômica e de baixa manutenção para a construção de cercas e outras estruturas de proteção.</Text>

                        <Text fontWeight='bold' fontSize='22px'>Especificações Técnicas:</Text>

                        <Flex direction='column' gap='3'>
                            <Flex><Text>Altura(m):</Text> <Text fontSize='sm'>1,03m / 1,53m / 2,03m / 2,43m</Text></Flex>
                            <Flex><Text>Largura(m):</Text> <Text fontSize='sm'>2,5m</Text></Flex>
                            <Flex><Text>Bitola do Fio(mm):</Text> <Text fontSize='sm'>4,80 mm</Text></Flex>
                            <Flex><Text>Espessura da barra(mm):</Text> <Text fontSize='sm'>25 x 1,50 mm</Text></Flex>
                            <Flex><Text>Malha: (Altura x Largura):</Text> <Text fontSize='sm'>132 x 65 mm</Text></Flex>
                        </Flex>

                        <Text fontWeight='bold' fontSize='22px'>Cores disponíveis</Text>
                        <Flex direction='row' gap={3}>
                            <Image src="/verde.png" w='40px' h='40px' />
                            <Image src="/roxo.png" w='40px' h='40px'/>
                            <Image src="/amarelo.png" w='40px' h='40px'/>
                            <Image src="/cinza.png" w='40px' h='40px'/>
                            <Image src="/preto.png" w='40px' h='40px'/>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Whatsapp />
            <Footer />
        </>
    );
}

export default Eletrosoldada;