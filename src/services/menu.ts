import { randomHash } from '@/helpers/random'

export function getProducts(): Promise<any[]> {
  return new Promise((resolve) => {
    const products = [
      {
        title: 'Наггетсы',
        image: './images/nuggets.png',
        price: '0.79',
        category: 'nuggets',
        id: randomHash(),
      },

      {
        title: 'Кранчес 3 шт.',
        image: './images/crunches.png',
        price: '1.89',
        category: 'crunches',
        id: randomHash()
      },

      {
        title: 'Кранчес 6 шт.',
        image: './images/crunches.png',
        price: '3.89',
        category: 'crunches',
        id: randomHash()
      },

      {
        title: 'Крылья 6 шт.',
        image: './images/chicken.png',
        price: '5.79',
        category: 'nuggets',
        id: randomHash()
      },

      {
        title: 'Крылья 9 шт.',
        image: './images/chicken.png',
        price: '8.79',
        category: 'nuggets',
        id: randomHash()
      },

      {
        title: 'Крылья 12 шт.',
        image: './images/chicken.png',
        price: '12.79',
        category: 'nuggets',
        id: randomHash()
      },

      {
        title: 'Кранчес 6 шт.',
        image: './images/crunches.png',
        price: '3.89',
        category: 'eda1',
        id: randomHash()
      },

      {
        title: 'Кранчес 6 шт.',
        image: './images/crunches.png',
        price: '3.89',
        category: 'eda1',
        id: randomHash()
      },

      {
        title: 'Кранчес 6 шт.',
        image: './images/crunches.png',
        price: '3.89',
        category: 'eda1',
        id: randomHash()
      },

      {
        title: 'Кранчес 6 шт.',
        image: './images/crunches.png',
        price: '3.89',
        category: 'eda1',
        id: randomHash()
      },

      {
        title: 'Кранчес 6 шт.',
        image: './images/crunches.png',
        price: '3.89',
        category: 'eda2',
        id: randomHash()
      },

      {
        title: 'Кранчес 6 шт.',
        image: './images/crunches.png',
        price: '3.89',
        category: 'eda2',
        id: randomHash()
      },

      {
        title: 'Кранчес 6 шт.',
        image: './images/crunches.png',
        price: '3.89',
        category: 'eda2',
        id: randomHash()
      },

      {
        title: 'Кранчес 6 шт.',
        image: './images/crunches.png',
        price: '3.89',
        category: 'eda2',
        id: randomHash()
      },

      {
        title: 'Кранчес 6 шт.',
        image: './images/crunches.png',
        price: '3.89',
        category: 'eda3',
        id: randomHash()
      },

      {
        title: 'Кранчес 6 шт.',
        image: './images/crunches.png',
        price: '3.89',
        category: 'eda3',
        id: randomHash()
      },

      {
        title: 'Кранчес 6 шт.',
        image: './images/crunches.png',
        price: '3.89',
        category: 'eda3',
        id: randomHash()
      },

      {
        title: 'Кранчес 6 шт.',
        image: './images/crunches.png',
        price: '3.89',
        category: 'eda3',
        id: randomHash()
      },

      {
        title: 'Кранчес 6 шт.',
        image: './images/crunches.png',
        price: '3.89',
        category: 'eda4',
        id: randomHash()
      },

      {
        title: 'Кранчес 6 шт.',
        image: './images/crunches.png',
        price: '3.89',
        category: 'eda4',
        id: randomHash()
      },

      {
        title: 'Кранчес 6 шт.',
        image: './images/crunches.png',
        price: '3.89',
        category: 'eda4',
        id: randomHash()
      },

      {
        title: 'Кранчес 6 шт.',
        image: './images/crunches.png',
        price: '3.89',
        category: 'eda4',
        id: randomHash()
      },

      {
        title: 'Кранчес 6 шт.',
        image: './images/crunches.png',
        price: '3.89',
        category: 'eda5',
        id: randomHash()
      },

      {
        title: 'Кранчес 6 шт.',
        image: './images/crunches.png',
        price: '3.89',
        category: 'eda5',
        id: randomHash()
      },

      {
        title: 'Кранчес 6 шт.',
        image: './images/crunches.png',
        price: '3.89',
        category: 'eda5',
        id: randomHash()
      },

      {
        title: 'Кранчес 6 шт.',
        image: './images/crunches.png',
        price: '3.89',
        category: 'eda5',
        id: randomHash()
      },

      {
        title: 'Кранчес 6 шт.',
        image: './images/crunches.png',
        price: '3.89',
        category: 'eda6',
        id: randomHash()
      },

      {
        title: 'Кранчес 6 шт.',
        image: './images/crunches.png',
        price: '3.89',
        category: 'eda6',
        id: randomHash()
      },

      {
        title: 'Кранчес 6 шт.',
        image: './images/crunches.png',
        price: '3.89',
        category: 'eda6',
        id: randomHash()
      },

      {
        title: 'Кранчес 6 шт.',
        image: './images/crunches.png',
        price: '3.89',
        category: 'eda6',
        id: randomHash()
      },
    ]

    setTimeout(() => resolve(products), 500)
  })
}

export function getCategories(): Promise<any[]> {
  return new Promise((resolve) => {
    const categories = [
      {
        id: 'eda1',
        title: 'Eda 1',
      },

      {
        id: 'eda2',
        title: 'Eda 2',
      },

      {
        id: 'eda3',
        title: 'Eda 3',
      },

      {
        id: 'eda4',
        title: 'Eda 4',
      },

      {
        id: 'eda5',
        title: 'Eda 5',
      },

      {
        id: 'eda6',
        title: 'Eda 6',
      },

      {
        id: 'nuggets',
        title: 'Наггетсы',
      },
    ]

    setTimeout(() => resolve(categories), 500)
  })
}