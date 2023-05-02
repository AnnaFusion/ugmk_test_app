import type { textsForMonth, textForFabrics } from '../constants';

export interface IFilter {
  selector: string;
  title: string;
}

export interface IPieData {
  name: string;
  value: number;
}

export interface IProductsData {
  id: number;
  factory_id: number;
  date: string;
  product1: number;
  product2: number;
  product3: number;
}

export interface IProductsResponse {
  data: IProductsData[];
}

export type ProductType = 'product1' | 'product2' | 'common';

export interface IFactoryProducts {
  product1: number;
  product2: number;
  common: number;
}

export type MonthType = typeof textsForMonth;

export interface ICommonData {
  [1]: IFactoryProducts;
  [2]: IFactoryProducts;
  month: keyof MonthType;
  monthText: MonthType[keyof MonthType];
}

export type CommonDataObjectType = Record<string, ICommonData>;

export interface IBarChartData {
  [textForFabrics.factory_1]: number;
  [textForFabrics.factory_2]: number;
  month: keyof MonthType;
  monthText: MonthType[keyof MonthType];
}
