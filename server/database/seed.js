let faker = require('faker');
let Product = require('../models/product.js')

const getRandomInt = (min, max) => {
  return Math.random() * (max - min) + min;
}

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const getImage = () => {
  const index = Math.floor(getRandomInt(0, 10))
  const images = ['https://sephjen.s3-us-west-1.amazonaws.com/sephora1.jpg',
                  'https://sephjen.s3-us-west-1.amazonaws.com/sephora2.jpg',
                  'https://sephjen.s3-us-west-1.amazonaws.com/Sephora3.jpg',
                  'https://sephjen.s3-us-west-1.amazonaws.com/sophora4.jpeg',
                  'https://sephjen.s3-us-west-1.amazonaws.com/sephora5.jpg',
                  'https://sephjen.s3-us-west-1.amazonaws.com/sophora6.jpeg',
                  'https://sephjen.s3-us-west-1.amazonaws.com/sephora7.jpg',
                  'https://sephjen.s3-us-west-1.amazonaws.com/sephora8.jpeg',
                  'https://sephjen.s3-us-west-1.amazonaws.com/sephora9.jpeg',
                  'https://sephjen.s3-us-west-1.amazonaws.com/sephora10.webp']
  return images[index];
}

const getRandomProduct = () => {
  const index = Math.floor(getRandomInt(0, 9))
  const products = ['Moisturizer', 'Cream', 'Foundation', 'Eye shadow', 'Eyeliner',
                    'Perfume', 'Mascara', 'Lip Tint', 'Highlighter', 'Bronzer']
  return `${capitalize(faker.lorem.word())} ${products[index]}`;
}

const getReview = () => {
  const index = getRandomInt(3, 5) 
  return index;
}

const getSize = () => {
  let sizes;
  const index = Math.ceil(getRandomInt(0, 2))
  if(index === 1) {
    sizes = [{label: 'Standard size', amount: `${Math.floor(getRandomInt(80, 230))} mL`, price: '$' + Math.floor(getRandomInt(20,50))}, 
            {label: 'Mini size', amount: `${Math.floor(getRandomInt(10, 50))} mL`, price: '$' + Math.floor(getRandomInt(10,20))}]
    return sizes;
  }
  if(index === 2) {
    sizes = [{label: 'Value size', amount: `${Math.floor(getRandomInt(150, 230))} mL`, price: '$' + Math.floor(getRandomInt(50,90))},
            {label: 'Standard size', amount: `${Math.floor(getRandomInt(50, 150))} mL`, price: '$' + Math.floor(getRandomInt(20,50))}, 
            {label: 'Mini size', amount: `${Math.floor(getRandomInt(10, 50))} mL`, price: '$' + Math.floor(getRandomInt(10,20))}]
    return sizes;
  }
}

for (var i = 0; i < 100; i++) {
  Product.create({
    image: getImage(), 
    brand: capitalize(faker.lorem.word()), 
    itemName: getRandomProduct(), 
    reviews: getReview(),
    hearts: faker.random.number(), 
    options: getSize()},
    (err, results) => {
      if(err) {
        console.log(err)
      } else{
        console.log(results)
      }
    }
  )
}