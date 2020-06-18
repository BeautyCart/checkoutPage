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
  const images = ['https://images-na.ssl-images-amazon.com/images/I/71ZV8tYG%2BnL._SL1500_.jpg',
                  'https://jilt.com/wp-content/uploads/2019/06/fenty-featured.jpg',
                  'https://s1.thcdn.com/productimg/1600/1600/11752246-3294597285458378.jpg',
                  'https://i5.walmartimages.com/asr/b8a1e0f8-7154-4a69-af22-f53b9970f291_3.600ef75af25b4fadb9aca2a6f96454a0.jpeg',
                  'https://www.narscosmetics.com/dw/image/v2/BBSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw51a276cc/hi-res/0607845012344.jpg?sw=856&sh=750&sm=fit',
                  'https://images.ulta.com/is/image/Ulta/2548164?op_sharpen=1&resMode=bilin&qlt=85&wid=800&hei=800&fmt=jpg',
                  'https://cdn.shopify.com/s/files/1/2037/5105/products/KKW-Nude-Lipstick-1_1024x.jpg?v=1562091300',
                  'https://images.ulta.com/is/image/Ulta/2539520?op_sharpen=1&resMode=bilin&qlt=85&wid=800&hei=800&fmt=jpg',
                  'https://images.ulta.com/is/image/Ulta/2242417?op_sharpen=1&resMode=bilin&qlt=85&wid=800&hei=800&fmt=jpg',
                  'https://www.sephora.com/productimages/sku/s1721240-main-hero.jpg']
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

for (var i = 0; i < 99; i++) {
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