import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import { CloseButton } from '@chakra-ui/react'

const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value, setValue] = React.useState('1')

  return (
    <>
      <Button data-cy="add-product-button" onClick={onOpen} colorScheme='teal' variant='outline'> Add New Product </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalBody pb={6}>
        <CloseButton /> 
        <label>Title</label>
        <Input data-cy="add-product-title" placeholder='Title' size='md'/>
        <label>Category</label>
          <Select data-cy="add-product-category" placeholder='Category'>
            <option data-cy="add-product-category-shirt" value='option1'>Shirt</option>
            <option data-cy="add-product-category-pant" value='option2'>Pant</option>
            <option data-cy="add-product-category-jeans" value='option3'>Jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender" onChange={setValue} value={value}>
            <Stack direction='row'>
              <Radio data-cy="add-product-gender-male" value='1'>Male</Radio>
              <Radio data-cy="add-product-gender-female" value='2'>Female</Radio>
              <Radio data-cy="add-product-gender-unisex" value='3'>Unisex</Radio>
            </Stack>
          </RadioGroup>
          <Input data-cy="add-product-price"  type="number" placeholder="Price" />
          <Button data-cy="add-product-submit-button" colorScheme='teal' size='md'>Create</Button>
        </ModalBody>
      </Modal>
    </>
  );
  }
};

export default AddProduct;
