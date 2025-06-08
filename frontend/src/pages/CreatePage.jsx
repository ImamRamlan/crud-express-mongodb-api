import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from '@chakra-ui/react';
import { useState } from 'react'
import { useProductStore } from '../store/product';

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    });
    const toast = useToast();

    const { createProduct } = useProductStore();
    const handleAddProduct = async () => {
        const { success, message } = await createProduct(newProduct)
        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 9000,
                isClosable: true,
            })
        } else {
            toast({
                title: "Success",
                description: message,
                status: "success",
                duration: 9000,
                isClosable: true,
            })
        }
        setNewProduct({ name: "", price: "", image: "" });
        // console.log(newProduct);
    };
    return (
        <Container maxW={"container.sm"}>
            <VStack
                spacing={8}
            >
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
                    Create New A Product
                </Heading>
                <Box
                    w={"full"} bg={useColorModeValue("white", "gray.800")}
                    p={6} rounded={"lg"} shadow={"md"}
                >
                    <VStack spacing={4}>
                        <Input
                            placeholder='Product Name'
                            name='name'
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        >
                        </Input>
                        <Input
                            placeholder='Product Price'
                            name='price'
                            type='number'
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        >
                        </Input>
                        <Input
                            placeholder='Product image'
                            name='image'
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                        >
                        </Input>
                        <Button colorScheme='blue' onClick={handleAddProduct} w={"full"}>
                            Add Product
                        </Button>
                    </VStack>

                </Box>
            </VStack>
        </Container>
    )
};

export default CreatePage;