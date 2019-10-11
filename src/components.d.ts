/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface QwCard {}
  interface QwRoomCard {
    'QwRoomCardBeds': string;
    'QwRoomCardCaption': string;
    'QwRoomCardGuests': string;
    'QwRoomCardImage': string;
    'QwRoomCardTitle': string;
  }
  interface QwRoomDetail {}
  interface QwRoomList {}
  interface QwRoomListContent {
    'QwRoomListContentRooms': any;
  }
}

declare global {


  interface HTMLQwCardElement extends Components.QwCard, HTMLStencilElement {}
  var HTMLQwCardElement: {
    prototype: HTMLQwCardElement;
    new (): HTMLQwCardElement;
  };

  interface HTMLQwRoomCardElement extends Components.QwRoomCard, HTMLStencilElement {}
  var HTMLQwRoomCardElement: {
    prototype: HTMLQwRoomCardElement;
    new (): HTMLQwRoomCardElement;
  };

  interface HTMLQwRoomDetailElement extends Components.QwRoomDetail, HTMLStencilElement {}
  var HTMLQwRoomDetailElement: {
    prototype: HTMLQwRoomDetailElement;
    new (): HTMLQwRoomDetailElement;
  };

  interface HTMLQwRoomListElement extends Components.QwRoomList, HTMLStencilElement {}
  var HTMLQwRoomListElement: {
    prototype: HTMLQwRoomListElement;
    new (): HTMLQwRoomListElement;
  };

  interface HTMLQwRoomListContentElement extends Components.QwRoomListContent, HTMLStencilElement {}
  var HTMLQwRoomListContentElement: {
    prototype: HTMLQwRoomListContentElement;
    new (): HTMLQwRoomListContentElement;
  };
  interface HTMLElementTagNameMap {
    'qw-card': HTMLQwCardElement;
    'qw-room-card': HTMLQwRoomCardElement;
    'qw-room-detail': HTMLQwRoomDetailElement;
    'qw-room-list': HTMLQwRoomListElement;
    'qw-room-list-content': HTMLQwRoomListContentElement;
  }
}

declare namespace LocalJSX {
  interface QwCard {}
  interface QwRoomCard {
    'QwRoomCardBeds'?: string;
    'QwRoomCardCaption'?: string;
    'QwRoomCardGuests'?: string;
    'QwRoomCardImage'?: string;
    'QwRoomCardTitle'?: string;
  }
  interface QwRoomDetail {}
  interface QwRoomList {}
  interface QwRoomListContent {
    'QwRoomListContentRooms'?: any;
  }

  interface IntrinsicElements {
    'qw-card': QwCard;
    'qw-room-card': QwRoomCard;
    'qw-room-detail': QwRoomDetail;
    'qw-room-list': QwRoomList;
    'qw-room-list-content': QwRoomListContent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'qw-card': LocalJSX.QwCard & JSXBase.HTMLAttributes<HTMLQwCardElement>;
      'qw-room-card': LocalJSX.QwRoomCard & JSXBase.HTMLAttributes<HTMLQwRoomCardElement>;
      'qw-room-detail': LocalJSX.QwRoomDetail & JSXBase.HTMLAttributes<HTMLQwRoomDetailElement>;
      'qw-room-list': LocalJSX.QwRoomList & JSXBase.HTMLAttributes<HTMLQwRoomListElement>;
      'qw-room-list-content': LocalJSX.QwRoomListContent & JSXBase.HTMLAttributes<HTMLQwRoomListContentElement>;
    }
  }
}


