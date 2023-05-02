export const textForProducts = {
  product1: 'Продукт 1',
  product2: 'Продукт 2',
};

export const textForFabrics = {
  factory_1: 'Фабрика А',
  factory_2: 'Фабрика Б',
} as const;

export const factoryIndexesText = {
  1: 'А за',
  2: 'Б за',
} as const;

export const factoryIndexes = {
  A: '1',
  B: '2',
} as const;

export const optionsForSelector = [
  {
    selector: 'product1',
    title: textForProducts.product1,
  },
  {
    selector: 'product2',
    title: textForProducts.product2,
  },
  {
    selector: 'common',
    title: 'Все продукты',
  },
];

export const textsForMonth = {
  1: 'Январь',
  2: 'Февраль',
  3: 'Март',
  4: 'Апрель',
  5: 'Май',
  6: 'Июнь',
  7: 'Июль',
  8: 'Август',
  9: 'Сентябрь',
  10: 'Октябрь',
  11: 'Ноябрь',
  12: 'Декабрь',
};

export const INITIAL_PRODUCT_SELECTION = optionsForSelector[0];

export const SELECTOR_TITLE = 'Фильтр по типу продукции';

export const NOT_FOUND_TEXT = 'Страница не найдена';

export const ERROR_TEXT = 'Ошибка получения данных с сервера';

export const DETAILS_TITLE = 'Статистика по продукции фабрики';

export const colors = {
  green: '#0B6623',
  yellow: '#FEBE00',
  red: '#FF0000',
  blue: '#1520F6',
  white: '#FFFFFF',
};

// Local Storage Key
export const SELECTED_FILTER_KEY = 'filter';
