import {
    Flex,
    Text,
    Image,
    ButtonGroup,
    Button,
    HStack,
    Link,
} from "@chakra-ui/react";
import useEmblaCarousel from 'embla-carousel-react'

export default function Carousel() {
    const [emblaRef] = useEmblaCarousel()

    return (
                    <Flex backgroundImage='/gradil/caroussel.png' backgroundRepeat='no-repeat' backgroundSize='cover' w="full" h='395px' justify="center" align='flex-start' gap={6} direction='column' p='20px 125px'>
                        <Text fontSize='5xl' color='#fff'>Gradil</Text>
                        <Text color='#fff' fontSize='md' maxW='500px'>uma estrutura versátil e muito útil em diversas áreas, que pode ser utilizada para delimitar áreas, proteger espaços e garantir a segurança das pessoas.</Text>
                        <Link href="./gradil" p='20px 20px' borderRadius='10px' display='flex' alignItems='center' justifyContent='center' w='220' h='50px' backgroundColor='#fff'>Saiba mais</Link>
                    </Flex>
        // <div className="embla" ref={emblaRef}>
        //     <div className="embla__container">
        //         <div className="embla__slide">
        //         </div>
        //         <div className="embla__slide">
        //             <Flex backgroundImage='/concertina/caroussel.png' backgroundRepeat='no-repeat' backgroundSize='cover' w="full" h='395px' justify="center" align='flex-start' gap={6} direction='column' p='20px 125px'>
        //                 <Text fontSize='5xl' color='#fff'>Concertina</Text>
        //                 <Text color='#fff' fontSize='md' maxW='500px'>Com a concertina para muros, é possível aumentar consideravelmente a segurança da sua propriedade e garantir a tranquilidade de sua família ou funcionários.</Text>
        //                 <Link href="./concertina" p='20px 20px' borderRadius='10px' display='flex' alignItems='center' justifyContent='center' w='220' h='50px' backgroundColor='#fff'>Saiba mais</Link>
        //             </Flex>
        //         </div>
        //         <div className="embla__slide">
        //             <Flex backgroundImage='/serralheria/caroussel.png' backgroundRepeat='no-repeat' backgroundSize='cover' w="full" h='395px' justify="center" align='flex-start' gap={6} direction='column' p='20px 125px'>
        //                 <Text fontSize='5xl' color='#fff'>Serralheria</Text>
        //                 <Text color='#fff'>Sed nec pulvinar odio. Morbi a erat nulla.</Text>
        //                 <Button>Saiba mais</Button>
        //             </Flex>
        //         </div>
        //     </div>
        // </div>

    )
}