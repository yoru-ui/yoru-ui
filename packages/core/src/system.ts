import emotionStyled, { FunctionInterpolation } from '@emotion/styled';
import type { PseudoProperties } from './pseudo';
import { transformPseudo } from './pseudo';

type DOMElements = keyof JSX.IntrinsicElements;

export type YoruStyleProperties = React.CSSProperties & PseudoProperties;

type MergeInterface<FirstInterface, SecondInterface> = FirstInterface & SecondInterface;

type YoruComponent = {
  <ComponentProperties extends keyof JSX.IntrinsicElements>(
    props: MergeInterface<React.ComponentProps<ComponentProperties>, StyleResolverProps>,
  ): JSX.Element;
};

export type HTMLYoruElements = {
  [Tag in DOMElements]: YoruComponent;
};

type StyleResolverProps = {
  __style?: YoruStyleProperties;
};

interface GetStyleObject {
  (
    options: React.CSSProperties | ((props: StyleResolverProps) => React.CSSProperties),
  ): FunctionInterpolation<StyleResolverProps>;
}

export type YoruStyledOptions =
  | React.CSSProperties
  | ((props: StyleResolverProps) => React.CSSProperties);

const getStyleObject: GetStyleObject = (): FunctionInterpolation<StyleResolverProps> =>
  (props => {
    const { __style } = props;
    const finalStyle = transformPseudo(__style || {});
    return finalStyle;
  }) as FunctionInterpolation<StyleResolverProps>;

const styled = <T extends React.ElementType<any>>(component: T): YoruComponent => {
  const cssObject = getStyleObject({});
  return emotionStyled(component as React.ComponentType<any>, {})(cssObject) as YoruComponent;
};

const factory = () => {
  const cacheElement = new Map<DOMElements, YoruComponent>();

  return new Proxy(styled, {
    get(_, element: DOMElements) {
      if (!cacheElement.has(element)) {
        cacheElement.set(element, styled(element));
      }
      return cacheElement.get(element);
    },
  }) as {
    <T>(component: T): YoruComponent;
  } & HTMLYoruElements;
};

export const yoru = factory();
