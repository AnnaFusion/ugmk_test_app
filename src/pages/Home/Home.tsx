import { useEffect, useMemo, useReducer } from 'react';

import { getProducts } from '../../api/products';

import accumulateData from '../../utils/accumulateData';
import {
  getFilterFromStorage,
  setFilterToStorage,
} from '../../utils/workWithLocalStorage';

import {
  ERROR_TEXT,
  INITIAL_PRODUCT_SELECTION,
  optionsForSelector,
  textForFabrics,
} from '../../constants';

import type {
  IBarChartData,
  IFilter,
  IProductsData,
  ProductType,
} from '../../models/types';

import BarChartHome from './components/BarChart';
import Selector from './components/Selector';
import Loader from '../../components/Loader';

import styles from './Home.module.css';

function getInitialSelection() {
  const savedFilter = getFilterFromStorage();
  if (!savedFilter) {
    return INITIAL_PRODUCT_SELECTION;
  }
  return savedFilter;
}

interface IState {
  products: IProductsData[];
  isLoading: boolean;
  isError: boolean;
  filter: IFilter;
}

type ActionType =
  | { type: 'set_isLoading'; isLoading: boolean }
  | { type: 'set_isError' }
  | { type: 'set_products'; products: IProductsData[] }
  | { type: 'set_filter'; filter: IFilter };

function reducer(state: IState, action: ActionType) {
  switch (action.type) {
    case 'set_filter': {
      return {
        ...state,
        filter: action.filter,
      };
    }
    case 'set_isLoading': {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    case 'set_isError': {
      return {
        ...state,
        isError: true,
      };
    }
    case 'set_products': {
      return {
        ...state,
        products: action.products,
      };
    }
   // no default
  }
}

const initialState = {
  filter: getInitialSelection(),
  products: [] as IProductsData[],
  isLoading: false,
  isError: false,
};

function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dataForGraph: IBarChartData[] = useMemo(() => {
    const resourceForGraph = accumulateData(state.products);
    const selectedProduct = state.filter.selector as ProductType;
    return resourceForGraph?.map((item) => ({
      month: item.month,
      monthText: item.monthText,
      [textForFabrics.factory_1]: item[1][selectedProduct],
      [textForFabrics.factory_2]: item[2][selectedProduct],
    }));
  }, [state.filter, state.products]);

  const handleClickSelectorOption = (newFilter: IFilter) => {
    setFilterToStorage(newFilter);
    dispatch({
      type: 'set_filter',
      filter: newFilter,
    });
  };

  useEffect(() => {
    const getData = async () => {
      try {
        dispatch({
          type: 'set_isLoading',
          isLoading: true,
        });
        const response = await getProducts();
        dispatch({
          type: 'set_products',
          products: response,
        });
      } catch (err) {
        dispatch({ type: 'set_isError' });
      } finally {
        dispatch({
          type: 'set_isLoading',
          isLoading: false,
        });
      }
    };
    getData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Selector
        filter={state.filter}
        options={optionsForSelector}
        handleClick={handleClickSelectorOption}
      />
      {state.isLoading && <Loader />}
      {state.isError && <div className={styles.error}>{ERROR_TEXT}</div>}
      {!!dataForGraph?.length && <BarChartHome data={dataForGraph} />}
    </div>
  );
}

export default Home;
