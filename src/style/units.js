/* eslint-disable prefer-template */
/**
 * Sets the context of browser measurements.
 * The default is 16. This would change if the body or html
 * has a different value set besides 1em or 16px.
 */
const globalContext = 16;

/**
 *  Takes in a value and returns an em measurement.
 * @parameter num The passed value, such as 12px or 3em
 * @example Use stripUnit(12px);
 * returns 12
 */
const stripUnit = (num) => {
  let number = num;
  if (typeof number === 'string' || number instanceof String) {
    number = Number(number.replace(/[^-.\d]/g, ''));
  }
  return number / (number * 0 + 1);
};

/**
 *  Takes in a value and divides it by the context.
 * @parameter value A single value to convert to a relative measurement
 * @parameter context The context of the calculation.
 */
const calcRelative = (value, context) => {
  const newValue = stripUnit(value) / stripUnit(context) * 1;
  return newValue;
};

/**
 *  Call with 1, 2, 3 or 4 parameters, 'px' is not required but supported.
 * @parameter values The measurement value(s) that needs to be converted.
 * @parameter unit The unit to assign to each value. Possible values are 'em' or 'rem'.
 * @parameter context values are calculated by dividing the pixel value by the context.
 * @example Use convertToRelative(10 20 30px 40);
 * @example also accepts convertToRelative((16px, 32px, 48), 8px);
 */
const convertToRelative = (values, unit, context) => {
  const remValues = values.split(/,\s?(?![^(]*\))/).map((value) => {
    const parenthesis = value.match(/\((.*?)\)/);
    if (parenthesis) {
      const [, tempValue] = parenthesis;
      const tempIndividuals = tempValue.split(/[ ,]+/).map(val => convertToRelative(val, unit, context));
      return `(${tempIndividuals.join(' ')})`;
    }
    const tempIndividuals = value.split(/[ ,]+/).map(val => calcRelative(val, context) + unit);
    return tempIndividuals.join(' ');
  });
  return remValues.join(', ');
};

/**
 *  Takes in a value and returns an rem measurement.
 * @parameter pixels The measurement value(s) that needs to be converted to rem.
 * @parameter context rem values are calculated by dividing the pixel value by the context.
 * @example Use font-size: rem(12);
 * returns font-size: .75rem;
 * @example Use padding: rem(12px 0);
 * returns padding: .75rem 0;
 * @group Functions
 * @link https://www.w3schools.com/csSref/css_units.asp
 */
const rem = (pixels, context = globalContext) => convertToRelative('' + pixels, 'rem', context);

/**
 * Takes in a value and returns an em measuement.
 * @parameter pixels The numeric value you that needs to be converted to em.
 * @parameter context em values are calculated by dividing the pixel value by the context.
 * @example Use font-size: em(12);
 * returns font-size: .75em;
 * @example Use padding: em(12px 0);
 * returns padding: .75em 0;
 * @group Functions
 * @link https://www.w3schools.com/csSref/css_units.asp
 */
const em = (pixels, context = globalContext) => convertToRelative('' + pixels, 'em', context);

/**
 * Takes in a fraction and returns the corresponding percentage.
 * @parameter dividend of the fraction.
 * @parameter divider of the fraction.
 * @example Use widthFraction(1, 2)
 * returns width: 50%;
 * @example Use widthFraction(2, 3)
 * returns width: 66.6666%;
 */
const widthFraction = (dividend, divider) => `width: ${((dividend / divider).toFixed(4)) * 100}%;`;

export {
  rem,
  em,
  widthFraction,
};
