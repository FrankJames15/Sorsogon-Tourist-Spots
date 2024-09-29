import { Button } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import React from 'react'


function AddButton({...props}) {
  return (
    <>
      <Button
        size="sm"
        colorScheme="green"
        LeftIcon={<AddIcon />}
        {...props}
      >
        Add
      </Button>
    </>
  )
}

export default AddButton