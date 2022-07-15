import { Product } from '../Models/ProductModel';

const shopProducts: Product[] = [
  {
    id: 1,
    title: 'Gigabyte GeForce RTX 3090 GAMING OC, 24 GB, GDDR6X',
    price: '4.000€',
    imgSrc: 'https://images.1a.lv/display/aikido/cache/8f7d903682174471334153d3e8f11331.jpeg?h=2000&w=2000',
    count: 0,
  },
  {
    id: 2,
    title: 'PNY Nvidia RTX A5000 VCNRTXA5000-PB, 24 GB, GDDR6',
    price: '3.000€',
    imgSrc: 'https://images.1a.lv/display/aikido/store/f5223e5e4cedd44b3345df4907db0c4b.jpg?h=2000&w=2000',
    count: 0,
  },
  {
    id: 3,
    title: 'MSI GeForce RTX 3090 Ti Suprim X, 24 GB, GDDR6X',
    price: '2.000€',
    imgSrc: 'https://images.1a.lv/display/aikido/cache/f7a4facba486124d5cc4120d33e06996.jpeg?h=2000&w=2000',
    count: 0,
  },
  {
    id: 4,
    title: 'Asus GeForce RTX 3080 Ti, 12 GB, GDDR6X',
    price: '2.000€',
    imgSrc: 'https://images.1a.lv/display/aikido/cache/b53fde845ccbfcfa05cc2b4fa971e241.jpeg?h=742&w=816',
    count: 0,
  },
  {
    id: 5,
    title: 'Zotac GeForce RTX 3080 KGZOTN308677006, 12 GB, GDDR6X',
    price: '1.000€',
    imgSrc: 'https://images.1a.lv/display/aikido/cache/476095a01e3f03d706a934c1d46c16c8.jpeg?h=2000&w=2000',
    count: 0,
  },
];

export const getProducts = () => [...shopProducts];
export const getProductById = (id: number) => (
  shopProducts.find((product) => (
    product.id === id
  ))
);

export default shopProducts;
