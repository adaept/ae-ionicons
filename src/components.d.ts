/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AeIconsComponent {
    'aesize': string;
    'aetype': string;
    'arialabel': string;
    'color': string;
    'name': string;
  }
}

declare global {

  // Adding a global JSX for backcompatibility with legacy dependencies
  export namespace JSX {
    export interface Element {}
  }


  interface HTMLAeIconsComponentElement extends Components.AeIconsComponent, HTMLStencilElement {}
  var HTMLAeIconsComponentElement: {
    prototype: HTMLAeIconsComponentElement;
    new (): HTMLAeIconsComponentElement;
  };
  interface HTMLElementTagNameMap {
    'ae-icons-component': HTMLAeIconsComponentElement;
  }
}

declare namespace LocalJSX {
  interface AeIconsComponent extends JSXBase.HTMLAttributes<HTMLAeIconsComponentElement> {
    'aesize'?: string;
    'aetype'?: string;
    'arialabel'?: string;
    'color'?: string;
    'name'?: string;
  }

  interface IntrinsicElements {
    'ae-icons-component': AeIconsComponent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


