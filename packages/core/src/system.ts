import type { FunctionInterpolation } from '@emotion/styled';
import type { PseudoProperties } from './pseudo';
import type { Config } from './configs';
import { styled } from './styled';

type DOMElements = keyof JSX.IntrinsicElements;

export type Theme = Record<string, any>;

export type YoruStyleProperties = React.CSSProperties & PseudoProperties & Record<string, any>;

type MergeInterface<FirstInterface, SecondInterface> = FirstInterface & SecondInterface;

export type YoruComponent = {
  <ComponentProperties extends keyof JSX.IntrinsicElements>(
    props: MergeInterface<React.ComponentProps<ComponentProperties>, StyleResolverProps>,
  ): JSX.Element;
};

export type HTMLYoruElements = {
  [Tag in DOMElements]: YoruComponent;
};

export interface StyleResolverProps
  extends Partial<Record<keyof Config, string | YoruStyleProperties>> {
  __style?: YoruStyleProperties;
  theme?: Theme;
}

export interface GetStyleObject {
  (
    options: React.CSSProperties | ((props: StyleResolverProps) => React.CSSProperties),
  ): FunctionInterpolation<StyleResolverProps>;
}

export type YoruStyledOptions =
  | React.CSSProperties
  | ((props: StyleResolverProps) => React.CSSProperties);

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
