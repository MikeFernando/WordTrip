import { Grid, Heading } from "@chakra-ui/react";
import { City } from "./City";

export function Cities() {
  return (
   <>
      <Heading fontSize={['1.5rem', '2rem']} fontWeight="500">Cidades +100</Heading>

      <Grid
        templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
        gap={['20px', '45px']}
        justifyItems='center'
        justifyContent='center'
        px={['30px', '0']}
        py={['20px', '40px']}
      >
        <City />
      </Grid>
   </>
  )
}