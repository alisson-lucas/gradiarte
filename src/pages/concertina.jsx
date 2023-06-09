import {
    Flex,
    Text,
    Image,
    useMediaQuery,
    UnorderedList,
    ListItem
} from "@chakra-ui/react";

import Nav from '../components/Nav';
import Footer from "@/components/Footer";
import Whatsapp from "@/components/whatsapp";

function Concertina() {
    const [desktop] = useMediaQuery('(min-width: 992px)');

    return (
        <>
            <Nav />
            <Flex backgroundImage={desktop ? './concertina/hero.png' : './concertina/hero-mobile.png'}   boxSize='200px' align='center' justify='center' bgSize='cover' w='full' h='315px'>
                <Text color='#fff' fontSize={desktop ? '75px' : '5xl'} fontWeight='bold' border='1'>Concertina</Text>
            </Flex>
            <Flex w='full' bgColor='#D9D9D9' p={desktop ? '40px 72px' : '40px 26px'}>
                <Flex w='full' maxW='1200px' direction={desktop ? 'row' : 'column' } h='inherit'>
                    <Flex w={desktop ? '50%' : 'full' } gap={3} direction='column' h={desktop ? '500px' : '390px'} >
                        <Image src="./concertina/1.png" h={desktop ? '300px' : '210px' }  borderRadius='12px' />
                        <Flex w='full' direction='row' align='center' justify='center' gap={3}>
                            <Image src="./concertina/2.png" h={desktop ? '180px' : '96px' } borderRadius='12px' />
                            <Image src="./concertina/3.png" h={desktop ? '180px' : '96px' } borderRadius='12px'/>
                        </Flex>
                    </Flex>
                    <Flex w={desktop ? '50%' : 'full' } gap={8} direction='column' h='inherit' p={desktop ? '0 40px' : '0'} >
                        <Text fontWeight='bold' fontSize='22px' >Concertina</Text>
                        <Text fontSize='sm'>A grade concertina é amplamente utilizada em áreas de alta segurança, como prisões, instalações militares, instalações governamentais, instalações de armazenamento de alta segurança, entre outros. Ela é projetada para ser uma barreira física altamente eficaz que impede a entrada não autorizada de pessoas ou veículos em áreas restritas.</Text>

                        <Text fontSize='sm'>A grade concertina é uma opção altamente eficaz para proteger propriedades e áreas de alto risco. É uma barreira física forte e durável que pode impedir o acesso não autorizado e ajudar a manter pessoas e propriedades seguras. No entanto, é importante lembrar que a instalação e manutenção de uma grade concertina devem ser realizadas apenas por profissionais treinados e qualificados para garantir a segurança e a eficácia da cerca.</Text>

                        <Text fontWeight='bold' fontSize='22px'>Especificações Técnicas:</Text>

                        <Flex direction='column' gap='3' bgColor='#C5C5C5' p='20px' >
                            <UnorderedList>
                                <ListItem>CONCERTINA S/ CLIPS DIAMETRO 300MM - 40 VOLTAS (8 METROS)</ListItem>
                                <ListItem>CONCERTINA S/ CLIPS DIAMETRO 450MM - 40 VOLTAS (10 METROS)</ListItem>
                                <ListItem>CONCERTINA CLIPADA DIAMETRO 300MM - 54 VOLTAS (5 METROS)</ListItem>
                            </UnorderedList>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Whatsapp />
            <Footer />
        </>
    );
}

export default Concertina;