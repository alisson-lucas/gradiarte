import {
    Flex,
    Image,
    ButtonGroup,
    Button,
    HStack,
    Link,
    useMediaQuery
} from "@chakra-ui/react";

export default function Whatsapp() {
    const [desktop] = useMediaQuery('(min-width: 992px)');

    return (
        <Link href="https://wa.me/5581995697610?text=ol%C3%A1%2C+vim+atrav%C3%A9s+do+site+gradiarte.com%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+gradis" position='fixed' zIndex='2' right='1%' top={desktop ? '85px' : '87%'}  w={desktop ? '80px' : '70px' }  >
            <Image src="/Whatsapp-circle.png" />
        </Link>
    )
}