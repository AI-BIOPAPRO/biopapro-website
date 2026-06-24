declare module "react-simple-maps" {
  import { ComponentType, ReactNode, SVGProps } from "react";

  interface ComposableMapProps {
    projection?: string;
    projectionConfig?: Record<string, unknown>;
    width?: number;
    height?: number;
    style?: React.CSSProperties;
    className?: string;
    children?: ReactNode;
  }

  interface GeographiesProps {
    geography: string | object;
    children: (props: { geographies: Geography[] }) => ReactNode;
  }

  interface Geography {
    rsmKey: string;
    properties: { name?: string; [key: string]: unknown };
    [key: string]: unknown;
  }

  interface GeographyProps extends SVGProps<SVGPathElement> {
    geography: Geography;
    style?: { default?: object; hover?: object; pressed?: object };
  }

  interface MarkerProps {
    coordinates: [number, number];
    children?: ReactNode;
  }

  interface LineProps {
    from: [number, number];
    to: [number, number];
    stroke?: string;
    strokeWidth?: number;
    strokeDasharray?: string;
    strokeLinecap?: string;
    fill?: string;
  }

  export const ComposableMap: ComponentType<ComposableMapProps>;
  export const Geographies: ComponentType<GeographiesProps>;
  export const Geography: ComponentType<GeographyProps>;
  export const Marker: ComponentType<MarkerProps>;
  export const Line: ComponentType<LineProps>;
}
