/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  PricesForStayPeriod,
  Rate,
  RoomModel,
  SessionStayPeriod,
} from 'booking-state-manager';
import {
  QwCounterEmitter,
} from './components/shared/qw-counter/qw-counter';

export namespace Components {
  interface QwBasket {}
  interface QwCalendar {
    'qwCalendarNumberOfMonths': number;
    'qwCalendarResponsive': boolean;
  }
  interface QwCalendarPicker {
    'qwCalendarPickerDisabled': boolean;
    'qwCalendarPickerNumberOfMonths': number;
    'qwCalendarPickerResponsive': boolean;
    'qwCalendarPickerStayPeriod': SessionStayPeriod;
  }
  interface QwCard {}
  interface QwCounter {
    'qwCounterName': string;
    'qwCounterValue': number;
  }
  interface QwGuest {
    'qwGuestCenter': boolean;
  }
  interface QwLoading {
    'QwLoadingSize': string;
  }
  interface QwPrice {
    'qwPriceCaption': string;
    'qwPriceCrossedPrice': string;
    'qwPriceMainPrice': string;
  }
  interface QwRoomCard {
    'qwRoomCardAvailability': number;
    'qwRoomCardAveragePrice': string;
    'qwRoomCardBeds': string;
    'qwRoomCardGuests': string;
    'qwRoomCardImage': string;
    'qwRoomCardIsLoading': boolean;
    'qwRoomCardOnClickBook': () => void;
    'qwRoomCardPrice': string;
    'qwRoomCardRates': Rate[];
    'qwRoomCardTitle': string;
  }
  interface QwRoomDetail {}
  interface QwRoomList {
    'QwRoomListTriggerBasket': boolean;
  }
  interface QwWeekCalendar {
    'qwWeekCalendarIsPriceLoading': boolean;
    'qwWeekCalendarPricesByRoom': PricesForStayPeriod[RoomModel['roomId']];
    'qwWeekCalendarRangeDate': Date[];
    'qwWeekCalendarRangeDateSession': Date[];
    'qwWeekCalendarSelectedRoomId': RoomModel['roomId'];
  }
}

declare global {


  interface HTMLQwBasketElement extends Components.QwBasket, HTMLStencilElement {}
  var HTMLQwBasketElement: {
    prototype: HTMLQwBasketElement;
    new (): HTMLQwBasketElement;
  };

  interface HTMLQwCalendarElement extends Components.QwCalendar, HTMLStencilElement {}
  var HTMLQwCalendarElement: {
    prototype: HTMLQwCalendarElement;
    new (): HTMLQwCalendarElement;
  };

  interface HTMLQwCalendarPickerElement extends Components.QwCalendarPicker, HTMLStencilElement {}
  var HTMLQwCalendarPickerElement: {
    prototype: HTMLQwCalendarPickerElement;
    new (): HTMLQwCalendarPickerElement;
  };

  interface HTMLQwCardElement extends Components.QwCard, HTMLStencilElement {}
  var HTMLQwCardElement: {
    prototype: HTMLQwCardElement;
    new (): HTMLQwCardElement;
  };

  interface HTMLQwCounterElement extends Components.QwCounter, HTMLStencilElement {}
  var HTMLQwCounterElement: {
    prototype: HTMLQwCounterElement;
    new (): HTMLQwCounterElement;
  };

  interface HTMLQwGuestElement extends Components.QwGuest, HTMLStencilElement {}
  var HTMLQwGuestElement: {
    prototype: HTMLQwGuestElement;
    new (): HTMLQwGuestElement;
  };

  interface HTMLQwLoadingElement extends Components.QwLoading, HTMLStencilElement {}
  var HTMLQwLoadingElement: {
    prototype: HTMLQwLoadingElement;
    new (): HTMLQwLoadingElement;
  };

  interface HTMLQwPriceElement extends Components.QwPrice, HTMLStencilElement {}
  var HTMLQwPriceElement: {
    prototype: HTMLQwPriceElement;
    new (): HTMLQwPriceElement;
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

  interface HTMLQwWeekCalendarElement extends Components.QwWeekCalendar, HTMLStencilElement {}
  var HTMLQwWeekCalendarElement: {
    prototype: HTMLQwWeekCalendarElement;
    new (): HTMLQwWeekCalendarElement;
  };
  interface HTMLElementTagNameMap {
    'qw-basket': HTMLQwBasketElement;
    'qw-calendar': HTMLQwCalendarElement;
    'qw-calendar-picker': HTMLQwCalendarPickerElement;
    'qw-card': HTMLQwCardElement;
    'qw-counter': HTMLQwCounterElement;
    'qw-guest': HTMLQwGuestElement;
    'qw-loading': HTMLQwLoadingElement;
    'qw-price': HTMLQwPriceElement;
    'qw-room-card': HTMLQwRoomCardElement;
    'qw-room-detail': HTMLQwRoomDetailElement;
    'qw-room-list': HTMLQwRoomListElement;
    'qw-week-calendar': HTMLQwWeekCalendarElement;
  }
}

declare namespace LocalJSX {
  interface QwBasket {}
  interface QwCalendar {
    'qwCalendarNumberOfMonths'?: number;
    'qwCalendarResponsive'?: boolean;
  }
  interface QwCalendarPicker {
    'onQwCalendarPickerChangeDates'?: (event: CustomEvent<SessionStayPeriod>) => void;
    'qwCalendarPickerDisabled'?: boolean;
    'qwCalendarPickerNumberOfMonths'?: number;
    'qwCalendarPickerResponsive'?: boolean;
    'qwCalendarPickerStayPeriod'?: SessionStayPeriod;
  }
  interface QwCard {}
  interface QwCounter {
    'onQwCounterChangeValue'?: (event: CustomEvent<QwCounterEmitter>) => void;
    'qwCounterName'?: string;
    'qwCounterValue'?: number;
  }
  interface QwGuest {
    'qwGuestCenter'?: boolean;
  }
  interface QwLoading {
    'QwLoadingSize'?: string;
  }
  interface QwPrice {
    'qwPriceCaption'?: string;
    'qwPriceCrossedPrice'?: string;
    'qwPriceMainPrice'?: string;
  }
  interface QwRoomCard {
    'qwRoomCardAvailability'?: number;
    'qwRoomCardAveragePrice'?: string;
    'qwRoomCardBeds'?: string;
    'qwRoomCardGuests'?: string;
    'qwRoomCardImage'?: string;
    'qwRoomCardIsLoading'?: boolean;
    'qwRoomCardOnClickBook'?: () => void;
    'qwRoomCardPrice'?: string;
    'qwRoomCardRates'?: Rate[];
    'qwRoomCardTitle'?: string;
  }
  interface QwRoomDetail {}
  interface QwRoomList {
    'QwRoomListTriggerBasket'?: boolean;
  }
  interface QwWeekCalendar {
    'qwWeekCalendarIsPriceLoading'?: boolean;
    'qwWeekCalendarPricesByRoom'?: PricesForStayPeriod[RoomModel['roomId']];
    'qwWeekCalendarRangeDate'?: Date[];
    'qwWeekCalendarRangeDateSession'?: Date[];
    'qwWeekCalendarSelectedRoomId'?: RoomModel['roomId'];
  }

  interface IntrinsicElements {
    'qw-basket': QwBasket;
    'qw-calendar': QwCalendar;
    'qw-calendar-picker': QwCalendarPicker;
    'qw-card': QwCard;
    'qw-counter': QwCounter;
    'qw-guest': QwGuest;
    'qw-loading': QwLoading;
    'qw-price': QwPrice;
    'qw-room-card': QwRoomCard;
    'qw-room-detail': QwRoomDetail;
    'qw-room-list': QwRoomList;
    'qw-week-calendar': QwWeekCalendar;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'qw-basket': LocalJSX.QwBasket & JSXBase.HTMLAttributes<HTMLQwBasketElement>;
      'qw-calendar': LocalJSX.QwCalendar & JSXBase.HTMLAttributes<HTMLQwCalendarElement>;
      'qw-calendar-picker': LocalJSX.QwCalendarPicker & JSXBase.HTMLAttributes<HTMLQwCalendarPickerElement>;
      'qw-card': LocalJSX.QwCard & JSXBase.HTMLAttributes<HTMLQwCardElement>;
      'qw-counter': LocalJSX.QwCounter & JSXBase.HTMLAttributes<HTMLQwCounterElement>;
      'qw-guest': LocalJSX.QwGuest & JSXBase.HTMLAttributes<HTMLQwGuestElement>;
      'qw-loading': LocalJSX.QwLoading & JSXBase.HTMLAttributes<HTMLQwLoadingElement>;
      'qw-price': LocalJSX.QwPrice & JSXBase.HTMLAttributes<HTMLQwPriceElement>;
      'qw-room-card': LocalJSX.QwRoomCard & JSXBase.HTMLAttributes<HTMLQwRoomCardElement>;
      'qw-room-detail': LocalJSX.QwRoomDetail & JSXBase.HTMLAttributes<HTMLQwRoomDetailElement>;
      'qw-room-list': LocalJSX.QwRoomList & JSXBase.HTMLAttributes<HTMLQwRoomListElement>;
      'qw-week-calendar': LocalJSX.QwWeekCalendar & JSXBase.HTMLAttributes<HTMLQwWeekCalendarElement>;
    }
  }
}


