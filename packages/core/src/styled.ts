import configs from './configs';
import emotionStyled, { FunctionInterpolation } from '@emotion/styled';
import { GetStyleObject, StyleResolverProps, YoruComponent } from './system';
import { objectFilter, runIfFN } from '@yoru-ui/utils';
import { getCss } from './css';

const styleProps = { ...configs };

export const isStyleProps = (prop: string) => prop in styleProps;

const getStyleObject: GetStyleObject = (): FunctionInterpolation<StyleResolverProps> =>
  (props => {
    const { __style = {}, theme = {}, ...restProperties } = props;
    const styleProps = objectFilter(restProperties, (_, prop) => isStyleProps(prop));
    const resolveIsFunction = runIfFN(__style);
    const finalStyle = getCss({ ...resolveIsFunction, ...styleProps })(theme);
    return finalStyle;
  }) as FunctionInterpolation<StyleResolverProps>;

export const styled = <T extends React.ElementType<any>>(component: T): YoruComponent => {
  const cssObject = getStyleObject({});
  return emotionStyled(component as React.ComponentType<any>, {})(cssObject) as YoruComponent;
};
