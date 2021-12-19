import Identifiable from '@protocols/Identifiable'
import { v4 as uuid } from 'uuid'

export class Sandwich implements Identifiable {
  id: string
  name!: string
  ingredientCount!: number
  isSpicy!: boolean

  constructor(init?: Partial<Sandwich>) {
    this.id = uuid()
    Object.assign(this, init)
  }

  get imageName() {
    return this.name + '.jpg'
  }

  get thumbnailName() {
    return this.name + '-Thumbnail.jpg'
  }
}

export const sampleSandwiches = [
  new Sandwich({
    name: 'California Quinoa Burger',
    ingredientCount: 4,
    isSpicy: false,
  }),
  new Sandwich({ name: 'Caprese', ingredientCount: 5, isSpicy: true }),
  new Sandwich({
    name: 'Double Wrap Bean Tacos',
    ingredientCount: 4,
    isSpicy: true,
  }),
  new Sandwich({
    name: 'Egg & Ham Openface',
    ingredientCount: 3,
    isSpicy: false,
  }),
  new Sandwich({
    name: 'Green Goddess Pita',
    ingredientCount: 5,
    isSpicy: true,
  }),
  new Sandwich({
    name: 'Grilled White Cheese',
    ingredientCount: 2,
    isSpicy: false,
  }),
  new Sandwich({
    name: 'Northern Soul Grilled Cheese',
    ingredientCount: 4,
    isSpicy: true,
  }),
  new Sandwich({ name: 'Patty Melt', ingredientCount: 2, isSpicy: false }),
  new Sandwich({
    name: 'Toasted Ham and Cheese',
    ingredientCount: 3,
    isSpicy: true,
  }),
  new Sandwich({
    name: 'Triple Meat & Cheese',
    ingredientCount: 4,
    isSpicy: true,
  }),
  new Sandwich({
    name: 'Vegan Blackbean Burger',
    ingredientCount: 3,
    isSpicy: false,
  }),
]
