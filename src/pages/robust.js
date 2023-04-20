import {
    Flex,
    Text,
    Image,
    useMediaQuery
} from "@chakra-ui/react";

import Nav from '../components/Nav';
import Footer from "@/components/Footer";

function Robust() {
    const [desktop] = useMediaQuery('(min-width: 992px)');

    return (
        <>
            <Nav />
            <Flex backgroundImage={desktop ? './robust/hero.png' : './robust/hero-mobile.png'} boxSize='200px' align='center' justify='center' bgSize='cover' w='full' h='315px'>
                <Text color='#fff' fontSize='5xl' fontWeight='bold' border='1'>Robust</Text>
            </Flex>
            <Flex w='full' bgColor='#D9D9D9' p={desktop ? '40px 72px' : '40px 26px'}>
                <Flex w='full' maxW='1200px' direction={desktop ? 'row' : 'column' } h='inherit'>
                    <Flex w={desktop ? '50%' : 'full' } gap={3} direction='column' h={desktop ? '500px' : '390px'}>
                        <Image src="./robust/1.png" h={desktop ? '300px' : '210px' } />
                        <Flex w='full' direction='row' align='center' justify='center' gap={3}>
                            <Image src="./robust/2.png" h={desktop ? '180px' : '96px' } />
                            <Image src="./robust/3.png" h={desktop ? '180px' : '96px' } />
                        </Flex>
                    </Flex>
                    <Flex w={desktop ? '50%' : 'full' } gap={8} direction='column' h='inherit' p={desktop ? '0 40px' : '0'}>
                        <Text fontWeight='bold' fontSize='22px'>Robust</Text>
                        <Text fontSize='sm'>A grade Robust é uma grade fabricada com barras de aço maciço, soldadas e rebitadas em pontos de junção, o que a torna altamente resistente e durável. Ela é comumente utilizada em locais que exigem alta segurança, como indústrias, condomínios e estabelecimentos comerciais, além de ser empregada também em áreas externas, como cercas e portões.</Text>

                        <Text fontSize='sm'>A grade Robust tem uma aparência robusta e forte, com linhas retas e um design simples, o que a torna ideal para projetos que requerem uma estética mais industrial ou minimalista. Ela é geralmente produzida em aço carbono e pode ser pintada ou galvanizada para proteção contra corrosão e danos.</Text>

                        <Text fontSize='sm'>Além da sua alta resistência, a grade Robust também é valorizada por sua facilidade de instalação e manutenção, o que a torna uma escolha popular para projetos comerciais e residenciais que exigem segurança e durabilidade.</Text>

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

export default Robust;