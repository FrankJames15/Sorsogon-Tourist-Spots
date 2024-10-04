import React from "react";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
export default function CustomTable({ children, table_head = [] }) {
  return (
    <>
      <TableContainer
        maxH="80vh"
        maxW={"container.xl"}
        overflowY="auto"
        overflowX="auto"
        borderWidth="2px"
        borderRadius="lg"
      >
        <Table variant="simple">
          <Thead>
            <Tr>
              {table_head?.map((column) => (
                <Th key={column}>{column}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>{children}</Tbody>
          <Tfoot>
            <Tr>
              {table_head?.map((column) => (
                <Th key={column}>{column}</Th>
              ))}
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
}
