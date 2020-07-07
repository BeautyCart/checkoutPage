const faker = require('faker');
const Product = require('../models/product.js');
const { db } = require('../models/product.js');
const mongoose = require('./index.js');

const getRandomInt = (min, max) => Math.random() * (max - min) + min;

const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const getIdWithPadding = (id) => {
  const stringedId = id.toString();
  return stringedId.padStart(4, '0');
};

const getImage = () => {
  const index = Math.floor(getRandomInt(0, 10));
  const images = ['https://sephjen.s3-us-west-1.amazonaws.com/sephora1.jpg',
    'https://sephjen.s3-us-west-1.amazonaws.com/sephora2.jpg',
    'https://sephjen.s3-us-west-1.amazonaws.com/Sephora3.jpg',
    'https://sephjen.s3-us-west-1.amazonaws.com/sophora4.jpeg',
    'https://sephjen.s3-us-west-1.amazonaws.com/sephora5.jpg',
    'https://sephjen.s3-us-west-1.amazonaws.com/sophora6.jpeg',
    'https://sephjen.s3-us-west-1.amazonaws.com/sephora7.jpg',
    'https://sephjen.s3-us-west-1.amazonaws.com/sephora8.jpeg',
    'https://sephjen.s3-us-west-1.amazonaws.com/sephora9.jpeg',
    'https://sephjen.s3-us-west-1.amazonaws.com/sephora10.webp'];
  return images[index];
};

const getRandomProduct = () => {
  const index = Math.floor(getRandomInt(0, 9));
  const products = ['Moisturizer', 'Cream', 'Foundation', 'Eye shadow', 'Eyeliner',
    'Perfume', 'Mascara', 'Lip Tint', 'Highlighter', 'Bronzer'];
  return `${capitalize(faker.lorem.word())} ${products[index]}`;
};

const getReview = () => {
  let reviews = getRandomInt(3, 5);
  reviews = Number.parseFloat(reviews).toFixed(2);
  return reviews;
};

const getSize = () => {
  let sizes;
  const index = Math.ceil(getRandomInt(0, 2));
  if (index === 1) {
    sizes = [{ label: 'Standard size', amount: `${Number.parseFloat(getRandomInt(5, 10)).toFixed(1)} oz/ ${Math.floor(getRandomInt(80, 230))} mL`, price: `$${Math.floor(getRandomInt(20, 50))}.00` },
    { label: 'Mini size', amount: `${Number.parseFloat(getRandomInt(1, 5)).toFixed(1)} oz/ ${Math.floor(getRandomInt(10, 50))} mL`, price: `$${Math.floor(getRandomInt(10, 20))}.00` }];
    return sizes;
  }
  if (index === 2) {
    sizes = [{ label: 'Value size', amount: `${Number.parseFloat(getRandomInt(10, 13)).toFixed(1)} oz/ ${Math.floor(getRandomInt(150, 230))} mL`, price: `$${Math.floor(getRandomInt(50, 90))}.00` },
    { label: 'Standard size', amount: `${Number.parseFloat(getRandomInt(5, 10)).toFixed(1)} oz/ ${Math.floor(getRandomInt(50, 150))} mL`, price: `$${Math.floor(getRandomInt(20, 50))}.00` },
    { label: 'Mini size', amount: `${Number.parseFloat(getRandomInt(1, 5)).toFixed(1)} oz/ ${Math.floor(getRandomInt(10, 50))} mL`, price: `$${Math.floor(getRandomInt(10, 20))}.00` }];
    return sizes;
  }
};

let promises = [];

//RUN ON LOCAL MACHINE WITHOUT DOCKER 
// db.dropCollection('products')
//   .then(() => {
//     for (let i = 0; i < 100; i++) {
//       const promise = Product.create({
//         count: getIdWithPadding(i + 1),
//         image: getImage(),
//         brand: capitalize(faker.lorem.word()),
//         itemName: getRandomProduct(),
//         reviews: getReview(),
//         reviewAmount: faker.random.number(),
//         hearts: faker.random.number(),
//         options: getSize(),
//       });
//       promise
//         .then((result) => console.log(result));
//       promises.push(promise);
//     }
//     Promise.all(promises)
//       .then(() => mongoose.connection.close())
//       .catch((err) => console.log(err));
//   });

for (let i = 0; i < 100; i++) {
  const promise = Product.create({
    count: getIdWithPadding(i + 1),
    image: getImage(),
    brand: capitalize(faker.lorem.word()),
    itemName: getRandomProduct(),
    reviews: getReview(),
    reviewAmount: faker.random.number(),
    hearts: faker.random.number(),
    options: getSize(),
  });
  promise
    .then((result) => console.log(result));
  promises.push(promise);
}
Promise.all(promises)
  .then(() => mongoose.connection.close())
  .catch((err) => console.log(err));
