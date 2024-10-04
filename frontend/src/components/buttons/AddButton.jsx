import { Button } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import React from 'react'


function AddButton({button_label = "Add", ...props}) {
  return (
    <>
      <Button
        size="sm"
        colorScheme="green"
        LeftIcon={<AddIcon />}
        {...props}
      >
        {button_label}
      </Button>
    </>
  )
}

export default AddButton