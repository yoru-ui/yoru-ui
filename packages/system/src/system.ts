import emotionStyled from '@emotion/styled';

type DOMElements = keyof JSX.IntrinsicElements;

type YoruComponent = {
  <ComponentProperties extends keyof JSX.IntrinsicElements>(
    props: React.ComponentProps<ComponentProperties>,
  ): JSX.Element;
};

export type HTMLYoruElements = {
  [Tag in DOMElements]: YoruComponent;
};

const styled = <T extends React.ElementType<any>>(component: T) => {
  return emotionStyled(component as React.ComponentType<any>, {})() as YoruComponent;
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
