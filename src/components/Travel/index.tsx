import { Grid, GridItem } from "@chakra-ui/react";
import { TravelType } from "./TravelType";

export function Travel() {
  return (
    <Grid 
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      with="100%"
      justifyContent="space-between"
      mt={['10', '32']}
      mx="auto"
      maxWidth="1160px"
      gap={[1, 10]}
    >
      <GridItem>
        <TravelType icon='nightlife' text='Vida noturna' />
      </GridItem>
      <GridItem>
        <TravelType icon='surf' text='Praia' />
      </GridItem>
      <GridItem>
        <TravelType icon='building' text='Moderno' />
      </GridItem>
      <GridItem>
        <TravelType icon='museum' text='Clássico' />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <TravelType icon='earth' text='E mais...' />
      </GridItem>
    </Grid>
  )
}