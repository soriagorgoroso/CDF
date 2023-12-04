import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------


const PROPERTY_NAMES = [
  'Casa del Sol',
  'Villa Serenidad',
  'Rincón del Bosque',
  'Quinta Esperanza',
  'Torre Ébano',
  'Jardines del Valle',
  'Finca Encantada',
  'Hacienda del Río',
  'Chateau Montaña',
  'Mirador del Lago',
  'Casa de Campo',
  'Palacio de las Flores',
  'Mansión del Cielo',
  'Estancia Aurora',
  'Rancho del Sueño',
  'Cabañas del Bosque',
  'Edificio Épico',
  'Residencia Esmeralda',
  'Rancho del Sol',
  'Torre del Horizonte',
  'Chacra del Amanecer',
  'Casa Blanca',
  'Viviendas del Valle',
  'Castillo del Ocaso',
];

// Puedes usar la nueva constante PROPERTY_NAMES en lugar de PROPERTY_NAMES en tu código.

const PRODUCT_COLOR = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107',
];

// ----------------------------------------------------------------------

export const products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.string.uuid(),
    cover: `/assets/images/products/product_${setIndex}.jpg`,
    name: PROPERTY_NAMES[index],
    price: faker.number.int({ min: 4, max: 99, precision: 0.01 }),
    priceSale: setIndex % 3 ? null : faker.number.int({ min: 19, max: 29, precision: 0.01 }),
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
    status: sample(['sale', 'new', '', '']),
  };
});
