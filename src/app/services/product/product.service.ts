import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProductById(id: number): Product {
    return this.getAllProduct().find((product) => product.id == id)!;
  }

  getAllProduct(): Product[] {
    return [
      {
        id: 1,
        name: 'Latte',
        price: 15,
        imageUrl: 'https://avatars.mds.yandex.net/get-eda/3534679/aef55de6dac6fb582470d90cca5ed118/orig',
        calories: "190 calories",
        description: "Espresso-based coffee drink with plenty of warmed milk and a layer of milk foam.",
        size: 250,
      },
      {
        id: 2,
        name: 'Matcha',
        price: 20,
        imageUrl: 'https://avatars.mds.yandex.net/get-eda/3682162/c7e4e2dea998174fa554840751416630/orig',
        calories: "200 calories",
        description: "Green drink with thick foam.",
        size: 250
      },
      {
        id: 3,
        name: 'Cappuccino',
        price: 18,
        imageUrl: 'https://avatars.mds.yandex.net/get-eda/3502728/6aa8e87d9fe49231872bf1aaaf0b5991/orig',
        calories: "140 calories",
        description: "Espresso-based Italian coffee drink with the addition of heated foamed milk.",
        size: 250,
      },
      
      {
        id: 4,
        name: 'Americano',
        price: 15,
        imageUrl: 'https://avatars.mds.yandex.net/get-eda/2806911/88cfd2c512b9da399a29f8867aa9b8c9/orig',
        calories: "15 calories",
        description:"Espresso with hot water.",
        size: 100
      },
      {
        id: 5,
        name: 'Ice coffee',
        price: 25,
        imageUrl: 'https://avatars.mds.yandex.net/get-eda/3806023/a48748ee3ae2b8888c844cc6357d68c8/orig',
        calories: "80 calories",
        description: "An invigorating summer drink served chilled with a variety of refreshing additions.",
        size: 450,
      },
      {
        id: 6,
        name: 'Tea',
        price: 10,
        imageUrl: 'https://avatars.mds.yandex.net/get-eda/3805363/b93e8a9aa3e180b8be7a1c88b387e3a1/orig',
        calories: "0 calories",
        description: "A drink obtained by boiling, brewing and/or infusing a leaf of a tea bush, which is previously prepared in a special way.",
        size: 300,
      },
      {
        id: 7,
        name: 'Ice tea',
        price: 13,
        imageUrl: 'https://avatars.mds.yandex.net/get-eda/3559865/b5a4d75a65887a7d3e1acf6a1952ab95/orig',
        calories: "50 calories",
        description: "Tea with ice.",
        size: 500,
      },
      {
        id: 8,
        name: 'Milkshake',
        price: 20,
        imageUrl: 'https://avatars.mds.yandex.net/get-eda/3781088/9b43d101bf2615ebd32a91b108b7b516/orig',
        calories: "420 calories",
        description: "Dessert drink based on milk and ice cream.",
        size: 500
      },
    ];
  }
}
