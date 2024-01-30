import { FormattedNumber } from './string.types';

export const capitalize = (str: string | undefined): string =>
  str ? str.charAt(0).toUpperCase() + str.slice(1) : '';

const isExponential = (number: number) => number.toString().includes('e');

const removeZero = (array: ReadonlyArray<string>): string => {
  if (!array.length) return '';

  if (array[array.length - 1] == '0') return removeZero(array.slice(0, -1));

  return array.join('');
};

export const removeUnnecessaryZeros = (string: string): string =>
  string.includes('.') ? removeZero(string.split('')) : string;

const treatNumberDecimals = (number: number, maxDecimals: number) => {
  const [integralPart, decimalPart] = (
    isExponential(number)
      ? removeUnnecessaryZeros(number.toFixed(maxDecimals))
      : number.toString()
  ).split('.');

  const integralDigits = integralPart.toString().length;

  const newNumber = Number(
    integralDigits > 12
      ? `${integralPart.slice(0, -12)}.${integralPart.slice(-12, -10)}`
      : integralDigits > 9
      ? `${integralPart.slice(0, -9)}.${integralPart.slice(-9, -7)}`
      : integralDigits > 6
      ? `${integralPart.slice(0, -6)}.${integralPart.slice(-6, -4)}`
      : `${integralPart}.${
          +integralPart >= 10 ? decimalPart?.slice(0, 2) ?? 0 : decimalPart ?? 0
        }`
  );

  const newNumberString = isExponential(newNumber)
    ? removeUnnecessaryZeros(newNumber.toFixed(maxDecimals - integralDigits))
    : newNumber.toPrecision();

  const baseDecimals = integralDigits > 6 ? 0 : 2;

  const decimalDigits =
    integralDigits <= 6 && +integralPart >= 10
      ? 2
      : newNumberString.split('.')[1]?.length ?? baseDecimals;

  return {
    newNumber,
    decimalDigits,
    integralDigits,
  };
};

export const formatNumber = (
  number: number,
  maxFractionDigits = 20
): FormattedNumber => {
  const { integralDigits, newNumber } = treatNumberDecimals(
    number,
    maxFractionDigits
  );
  const value = newNumber ?? 0;
  const unit =
    integralDigits > 12
      ? 'T'
      : integralDigits > 9
      ? 'B'
      : integralDigits > 6
      ? 'M'
      : integralDigits > 3
      ? 'K'
      : '';

  const toString = (unitSeparator = '') => `${value}${unitSeparator}${unit}`;

  return {
    value,
    unit,
    toString,
  };
};
