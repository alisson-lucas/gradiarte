import {
    Flex,
    Text,
    Image,
    useMediaQuery
} from "@chakra-ui/react";

import Nav from '../components/Nav';
import Footer from "@/components/Footer";
import Whatsapp from "@/components/whatsapp";

function Robust() {
    const [desktop] = useMediaQuery('(min-width: 992px)');

    return (
        <>
            <Nav />
            <Flex backgroundImage={desktop ? './robust/hero.png' : './robust/hero-mobile.png'} boxSize='200px' align='center' justify='center' bgSize='cover' w='full' h='315px'>
                <Text color='#fff' fontSize={desktop ? '75px' : '5xl'} fontWeight='bold' border='1'>Robust</Text>
            </Flex>
            <Flex w='full' bgColor='#D9D9D9' p={desktop ? '40px 72px' : '40px 26px'}>
                <Flex w='full' maxW='1200px' direction={desktop ? 'row' : 'column' } h='inherit'>
                    <Flex w={desktop ? '50%' : 'full' } gap={3} direction='column' h={desktop ? '500px' : '390px'}>
                        <Image src="./robust/1.png" h={desktop ? '300px' : '210px' } borderRadius='12px'/>
                        <Flex w='full' direction='row' align='center' justify='center' gap={3}>
                            <Image src="./robust/2.png" h={desktop ? '180px' : '96px' } borderRadius='12px'/>
                            <Image src="./robust/3.png" h={desktop ? '180px' : '96px' } borderRadius='12px'/>
                        </Flex>
                    </Flex>
                    <Flex w={desktop ? '50%' : 'full' } gap={8} direction='column' h='inherit' p={desktop ? '0 40px' : '0'}>
                        <Text fontWeight='bold' fontSize='22px'>Robust</Text>
                        <Text fontSize='sm'>A grade Robust é uma grade fabricada com barras de aço maciço, soldadas e rebitadas em pontos de junção, o que a torna altamente resistente e durável. Ela é comumente utilizada em locais que exigem alta segurança, como indústrias, condomínios e estabelecimentos comerciais, além de ser empregada também em áreas externas, como cercas e portões.</Text>

                        <Text fontSize='sm'>A grade Robust tem uma aparência robusta e forte, com linhas retas e um design simples, o que a torna ideal para projetos que requerem uma estética mais industrial ou minimalista. Ela é geralmente produzida em aço carbono e pode ser pintada ou galvanizada para proteção contra corrosão e danos.</Text>

                        <Text fontSize='sm'>Além da sua alta resistência, a grade Robust também é valorizada por sua facilidade de instalação e manutenção, o que a torna uma escolha popular para projetos comerciais e residenciais que exigem segurança e durabilidade.</Text>

                    </Flex>
                </Flex>
            </Flex>
            <Flex w='full' alignItems='center' justify='center' bgColor='#D9D9D9' p={desktop ? '0 72px' : '40px 26px'}>
                <Image src="./table.png" w='900px'/>
            </Flex>
            <Whatsapp />
            <Footer />
        </>
    );
}

export default Robust;