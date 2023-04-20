import {
  Flex,
  Text,
  useMediaQuery
} from "@chakra-ui/react";

export default function AboutUs() {
  const [desktop] = useMediaQuery('(min-width: 992px)');

  return (
    <Flex id="aboutUs" w="full" bgColor='#D9D9D9' p={desktop ? '72px 80px' : '72px 20px' }  gap={8} direction='column' align='center' justify='center' >
      <Text fontWeight='bold' fontSize='38px'>Quem somos?</Text>
      <Text fontWeight='normal' fontSize='5xs' textAlign='center'>Somos uma empresa especializada em vendas e instalação de cercamento em geral, utilizando materiais de alta qualidade e tecnologia de ponta. Atendemos diversos segmentos, como residencial, comercial, industrial, agropecuário, entre outros, adaptando seus produtos às necessidades especificas de cada cliente. Os serviços prestados pela empresa são realizados por uma equipe altamente capacitada e experiente, que trabalha com rapidez e eficiência.</Text>
    </Flex>
  )
}