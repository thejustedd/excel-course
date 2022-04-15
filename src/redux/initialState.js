import {storage} from '@core/utils';
import {defaultStyles, defaultTitle} from '@/constants';

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyles,
};

const normalize = (state) => ({
  ...state,
  currentStyle: defaultStyles,
  currentText: '',
});

const excelStorage = storage('excel-state');
export const initialState = excelStorage
  ? normalize(excelStorage)
  : defaultState;
