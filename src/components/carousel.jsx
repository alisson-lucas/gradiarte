import {
    Flex,
    Text,
    Image,
    ButtonGroup,
    Button,
    HStack,

} from "@chakra-ui/react";
import useEmblaCarousel from 'embla-carousel-react'

export default function Carousel() {
    const [emblaRef] = useEmblaCarousel()

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    <Flex backgroundImage='/gradil/caroussel.png' backgroundRepeat='no-repeat' backgroundSize='cover' w="full" h='395px' justify="center" align='flex-start' gap={6} direction='column' p='20px 125px'>
                        <Text fontSize='5xl' color='#fff'>Gradil</Text>
                        <Text color='#fff'>Sed nec pulvinar odio. Morbi a erat nulla.</Text>
                        <Button>Saiba mais</Button>
                    </Flex>
                </div>
                <div className="embla__slide">
                    <Flex backgroundImage='/concertina/caroussel.png' backgroundRepeat='no-repeat' backgroundSize='cover' w="full" h='395px' justify="center" align='flex-start' gap={6} direction='column' p='20px 125px'>
                        <Text fontSize='5xl' color='#fff'>Concertina</Text>
                        <Text color='#fff'>Sed nec pulvinar odio. Morbi a erat nulla.</Text>
                        <Button>Saiba mais</Button>
                    </Flex>
                </div>
                <div className="embla__slide">
                    <Flex backgroundImage='/serralheria/caroussel.png' backgroundRepeat='no-repeat' backgroundSize='cover' w="full" h='395px' justify="center" align='flex-start' gap={6} direction='column' p='20px 125px'>
                        <Text fontSize='5xl' color='#fff'>Serralheria</Text>
                        <Text color='#fff'>Sed nec pulvinar odio. Morbi a erat nulla.</Text>
                        <Button>Saiba mais</Button>
                    </Flex>
                </div>
            </div>
        </div>

    )
}