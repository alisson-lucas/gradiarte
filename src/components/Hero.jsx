import {
    Flex,
    Stack,
    Box,
    Button,
    IconButton,
    Text,
    FormControl,
    FormLabel,
    Input,
    Radio,
    RadioGroup,
    useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from 'react';
import { TiArrowRightThick } from 'react-icons/ti';
import InputMask from 'react-input-mask';
import { useForm } from 'react-hook-form';
import axios from 'axios';


export default function Hero() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [cpf, setCpf] = useState('')
    const [enterprise, setEnterprise] = useState('')
    const [meters, setMeters] = useState('')
    const [product, setProduct] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [desktop] = useMediaQuery('(min-width: 992px)');

    const sendLead = () => {
        const data = {
            name,
            email,
            phone,
            cpf,
            enterprise,
            meters,
            product,
        }

        // setBtnText('Enviando...')

        console.log(data)

        axios.post('/api/mail',
            data
        )
            .then(function (response) {
                resetForm();
                // Router.push("/obrigado");
                // setBtnText('Enviado');
                // console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function resetForm() {
        setName('')
        setEmail('')
        setPhone('')
        setCpf('')
        setEnterprise('')
        setMeters('')
        setProduct('')
      }

    return (
        <Flex w="full" backgroundImage={desktop ? './banner.png' : './banner-mobile.png'} gap={8} direction={desktop ? 'row' : 'column'} backgroundPosition='center' align='center' justify={desktop ? 'space-between' : 'space-around'} h={desktop ? '850px' : '1190px'} p={desktop ? '20px 72px' : '120px 40px'} >
            <Box w={desktop ? '50%' : 'full'} >
                <Text fontSize={desktop ? '5xl' : '2xl'} color='#fff' fontWeight='extrabold'>Comprometimento e
                    qualidade: a combinação
                    perfeita para sua proteção!</Text>
            </Box>
            <Flex w={desktop ? '530px' : '340px'} h={desktop ? '530px' : '600px'} bgColor='#D9D9D9' gap={8} direction='column' align='center' borderRadius={desktop ? '60px' : '15px'} p='32px 80px' >
                <Text fontSize='lg'>Solicite um orçamento</Text>
                <form onSubmit={handleSubmit(sendLead)}>
                    <Flex w={desktop ? '500px' : '355px'} marginLeft={desktop ? '0' : '20px'} bgColor='#32fac11' direction='row' justify='center' align='space-between' wrap='wrap'  >
                        <Flex direction='column' gap={3} w='50%' align='center' justify='flex-start'>
                            <FormControl width='90%'>
                                <FormLabel>Nome</FormLabel>
                                <Input type="text" value={name} {...register('name', { required: true })} onChange={e => setName(e.target.value)} bgColor='#fff' />
                            </FormControl>
                            <FormControl width='90%'>
                                <FormLabel>Telefone</FormLabel>
                                <Input as={InputMask} mask="(99)99999-9999" maskChar="" type="text" {...register('phone', {
                                    pattern: {
                                        value: /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
                                        message: "Insira um telefone válido"
                                    },
                                    required: true
                                })} bgColor='#fff' />
                            </FormControl>
                            <FormControl width='90%'>
                                <FormLabel>CPF ou CNPJ</FormLabel>
                                <Input type="text" value={cpf} {...register('cpf', { required: true })} onChange={e => setCpf(e.target.value)} bgColor='#fff' />
                            </FormControl>
                            <FormControl width='90%'>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" name="" value={email} {...register('email', { required: true })} onChange={e => setEmail(e.target.value)} bgColor='#fff' />
                            </FormControl>
                        </Flex>
                        <Flex direction='column' gap={3} w='50%'>

                            <FormControl width='90%'>
                                <FormLabel>Empresa</FormLabel>
                                <Input type="text" value={enterprise} {...register('enterprise', { required: true })} onChange={e => setEnterprise(e.target.value)} bgColor='#fff' />
                            </FormControl>
                            <FormControl width='90%'>
                                <FormLabel>Quant. de metros</FormLabel>
                                <Input type="text" value={meters} {...register('meters', { required: true })} onChange={e => setMeters(e.target.value)} bgColor='#fff' />
                            </FormControl>
                            <FormControl width='90%'>
                                <FormLabel>Tipo de produto</FormLabel>
                                <RadioGroup>
                                    <Stack direction='column' onChange={e => setProduct(e.target.value)}>
                                        <Radio value='Alambrado Galvanizado' fontSize='sm'>Alambrado Galvanizado</Radio>
                                        <Radio value='Alambrado Revestido' fontSize='sm'>Alambrado Revestido</Radio>
                                        <Radio value='Tela Soldada' fontSize='sm'>Tela Soldada</Radio>
                                        <Radio value='Concertina Dupla/Simples' fontSize='sm'>Concertina Dupla/Simples</Radio>
                                        <Radio value='Gradil' fontSize='sm'>Gradil</Radio>
                                    </Stack>
                                </RadioGroup>
                            </FormControl>
                            <FormControl display='flex' justifyContent='flex-end' padding='0 20px'>
                                <IconButton type="submit" icon={<TiArrowRightThick />} borderRadius='50px' colorScheme="blackAlpha" />
                            </FormControl>
                        </Flex>
                    </Flex>
                </form>
            </Flex>
        </Flex>
    )
}
