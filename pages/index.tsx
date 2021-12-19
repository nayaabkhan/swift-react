import type { NextPage } from 'next'
import List from '@layout/List'
import Text from '@controls/Text'
import HStack from '@layout/HStack'
import Image from '@controls/Image'
import VStack from '@layout/VStack'
import { sampleSandwiches, Sandwich } from '@models/sandwich'
import NavigationView from '@controls/NavigationView'

const Home: NextPage = () =>
  NavigationView(List(sampleSandwiches, SandwichCell))

function SandwichCell(sandwich: Sandwich) {
  return HStack(
    Image(`/images/${sandwich.imageName}`).size(32),
    VStack(
      Text(sandwich.name).font('heading').as('h3'),
      Text(`${sandwich.ingredientCount} ingredients`)
        .font('subheading')
        .as('small'),
    ),
  )
    .alignment('center')
    .spacing('looser')
}

export default Home
