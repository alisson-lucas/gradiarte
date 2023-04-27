import {
    Flex,
    Text,
    Image,
    useMediaQuery,
    Link,
} from "@chakra-ui/react";
import useEmblaCarousel from 'embla-carousel-react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Carousel() {
    const [emblaRef] = useEmblaCarousel()
    const [desktop] = useMediaQuery('(min-width: 992px)');

    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={desktop ? 29 : 100}
            totalSlides={3}
        >
            <Slider>
                <Slide index={0}>
                    <Flex backgroundImage={desktop ? '/gradil/caroussel.png' : '/gradil/caroussel-mobile.png'} backgroundRepeat='no-repeat' backgroundSize='cover' w="full" h='395px' justify="center" align='flex-start' gap={6} direction='column' p={desktop ? '20px 125px' : '20px 30px'} >
                        <Text fontSize='5xl' color='#fff'>Gradil</Text>
                        <Text color='#fff' fontSize='md' maxW='500px'>Uma estrutura versátil e muito útil em diversas áreas, que pode ser utilizada para delimitar áreas, proteger espaços e garantir a segurança das pessoas.</Text>
                        <Link href="./gradil" p='20px 20px' borderRadius='10px' display='flex' alignItems='center' justifyContent='center' w='220' h='50px' backgroundColor='#fff'>Saiba mais</Link>
                    </Flex>
                </Slide>
                <Slide index={1}>
                    <Flex backgroundImage='/concertina/caroussel.png' backgroundRepeat='no-repeat' backgroundSize='cover' w="full" h='395px' justify="center" align='flex-start' gap={6} direction='column' p={desktop ? '20px 125px' : '20px 30px'}>
                        <Text fontSize='5xl' color='#fff'>Concertina</Text>
                        <Text color='#fff' fontSize='md' maxW='500px'>Com a concertina para muros, é possível aumentar consideravelmente a segurança da sua propriedade e garantir a tranquilidade de sua família ou funcionários.</Text>
                        <Link href="./concertina" p='20px 20px' borderRadius='10px' display='flex' alignItems='center' justifyContent='center' w='220' h='50px' backgroundColor='#fff'>Saiba mais</Link>
                    </Flex>
                </Slide>
                <Slide index={2}>
                    <Flex backgroundImage='/serralheria/caroussel.png' backgroundRepeat='no-repeat' backgroundSize='cover' w="full" h='395px' justify="center" align='flex-start' gap={6} direction='column' p={desktop ? '20px 125px' : '20px 30px'}>
                        <Text fontSize='5xl' color='#fff'>Serralheria</Text>
                        <Text color='#fff' maxW='500px'>O gradil serralheria é uma estrutura versátil e resistente, que pode ser utilizada em diferentes ambientes e com diferentes finalidades, oferecendo segurança e praticidade aos seus usuários.</Text>
                        <Link href="./serralheria" p='20px 20px' borderRadius='10px' display='flex' alignItems='center' justifyContent='center' w='220' h='50px' backgroundColor='#fff'>Saiba mais</Link>
                    </Flex>
                </Slide>
            </Slider>
            <ButtonBack style={{position: "absolute", color: '#fff', left: '1%', top: '52%', display: desktop ? 'flex' : 'none' }}><Image src="./prev.png" w='35px' /></ButtonBack>
            <ButtonNext style={{position: "absolute", color: '#fff', right: '1%', top: '52%', display: desktop ? 'flex' : 'none' }}><Image src="./next.png" w='35px' /></ButtonNext>
        </CarouselProvider>
    )
}