import {
    Flex,
    Text,
    Image,
    useMediaQuery
} from "@chakra-ui/react";

import Nav from '../components/Nav';
import Footer from "@/components/Footer";
import Whatsapp from "@/components/whatsapp";

function Gradil() {
    const [desktop] = useMediaQuery('(min-width: 992px)');

    return (
        <>
            <Nav />
            <Flex backgroundImage={desktop ? './gradil/hero.png' : './gradil/hero-mobile.png'} boxSize='200px' align='center' justify='center' bgSize='cover' w='full' h='315px'>
                <Text color='#fff' fontSize='5xl' fontWeight='bold' border='1'>Gradil</Text>
            </Flex>
            <Flex w='full' bgColor='#D9D9D9' p={desktop ? '40px 72px' : '40px 26px'} >
                <Flex w='full' maxW='1200px' direction={desktop ? 'row' : 'column' } h='inherit'>
                    <Flex w={desktop ? '50%' : 'full' } gap={3} direction='column' h={desktop ? '500px' : '390px'}>
                        <Image src="./gradil/1.png" h={desktop ? '300px' : '210px' } borderRadius='12px'/>
                        <Flex w='full' direction='row' align='center' justify='center' gap={3}>
                            <Image src="./gradil/2.png" h={desktop ? '180px' : '96px' } borderRadius='12px'/>
                            <Image src="./gradil/3.png" h={desktop ? '180px' : '96px' } borderRadius='12px'/>
                        </Flex>
                    </Flex>
                    <Flex w={desktop ? '50%' : 'full' } gap={8} direction='column' h='inherit' p={desktop ? '0 40px' : '0'}>
                        <Text fontWeight='bold' fontSize='22px' >Gradil</Text>
                        <Text fontSize='sm'>O gradil é um tipo de cerca ou grade de segurança que é utilizado para delimitar áreas e proteger pessoas, animais e bens. Ele é formado por um conjunto de barras verticais e horizontais que se entrelaçam, criando uma estrutura rígida e resistente.</Text>

                        <Text fontSize='sm'>Os gradis são fabricados em diversos materiais, como aço, alumínio, ferro, PVC, entre outros, e podem ter diferentes acabamentos, como pintura eletrostática, galvanização a fogo, entre outros.</Text>

                        <Text fontSize='sm'>O gradil é amplamente utilizado em áreas externas, como jardins, praças, parques, condomínios, empresas e indústrias. Ele é uma solução eficiente para quem busca proteção e segurança, sem abrir mão da visibilidade e da estética do ambiente em que está inserido. Além disso, os gradis podem ser facilmente instalados e removidos, permitindo sua utilização em diferentes locais e situações.</Text>

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
            <Whatsapp />
            <Footer />
        </>
    );
}

export default Gradil;