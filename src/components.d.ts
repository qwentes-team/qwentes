/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  MoneyPrice,
  PricesForStayPeriod,
  Rate,
  RateModel,
  RoomBasketModel,
  RoomModel,
  SessionGuests,
  SessionStayPeriod,
} from '@qwentes/booking-state-manager';
import {
  QwCalendarGuestInlineInputType,
  QwChangeRoomEvent,
  QwRoomListCardButtonType,
  QwRoomListType,
} from './index';
import {
  QwCounterEmitter,
} from './components/shared/qw-counter/qw-counter';
import {
  QwRoomDetailAddToBasketEmitter,
} from './components/qw-room-detail/qw-room-detail';
import {
  QwRoomRateAddToBasketEmitter,
} from './components/qw-room-rate/qw-room-rate';
import {
  QwRoomRateAddToBasketEmitter as QwRoomRateAddToBasketEmitter1,
} from './components/qw-room-rate/qw-room-rate';

export namespace Components {
  interface QwBasket {
    'qwBasketShowBookNowButton': boolean;
    'qwBasketShowEmptyButton': boolean;
  }
  interface QwBasketRoomCounter {}
  interface QwBasketSummary {}
  interface QwCalendar {
    'qwCalendarDesktopLimit': number;
    'qwCalendarNumberOfMonths': number;
    'qwCalendarResponsive': boolean;
    'qwCalendarSyncOnChange': boolean;
  }
  interface QwCalendarGuestInline {
    'qwCalendarGuestInlineShowCheckButton': boolean;
  }
  interface QwCalendarPicker {
    'qwCalendarPickerDesktopLimit': number;
    'qwCalendarPickerDisabled': boolean;
    'qwCalendarPickerNumberOfMonths': number;
    'qwCalendarPickerResponsive': boolean;
    'qwCalendarPickerStayPeriod': SessionStayPeriod;
  }
  interface QwCard {}
  interface QwCounter {
    'qwCounterMaxValue': number;
    'qwCounterName': string;
    'qwCounterValue': number;
  }
  interface QwError {}
  interface QwGuest {
    'qwGuestCenter': boolean;
    'qwGuestSyncOnChange': boolean;
  }
  interface QwInput {
    'qwInputIsReadonly': boolean;
    'qwInputLabel': string;
    'qwInputName': string;
    'qwInputType': string;
    'qwInputValue': string;
  }
  interface QwLoading {
    'QwLoadingSize': string;
  }
  interface QwPrice {
    'qwPriceCaption': string;
    'qwPriceCrossedPrice': string;
    'qwPriceMainPrice': string;
  }
  interface QwRoomBaseInfo {
    'qwRoomBaseInfoIsStateFull': boolean;
    'qwRoomBaseInfoRoomId': string;
  }
  interface QwRoomBasket {
    'qwRoomBasketBackToRoomListMessage': string;
    'qwRoomBasketShowDescription': any;
  }
  interface QwRoomDetail {
    'qwRoomDetailAlertMessage': string;
    'qwRoomDetailId': string;
  }
  interface QwRoomDetailCard {
    'qwRoomDetailCardAlertMessage': string;
    'qwRoomDetailCardBed': string;
    'qwRoomDetailCardGuests': string;
    'qwRoomDetailCardImage': string;
    'qwRoomDetailCardIsLoading': boolean;
    'qwRoomDetailCardNumberOfAccommodation': number;
    'qwRoomDetailCardNumberOfGuests': number;
    'qwRoomDetailCardNumberOfNights': number;
    'qwRoomDetailCardRates': Rate[];
    'qwRoomDetailCardRatesModel': {[rateId: string]: RateModel};
    'qwRoomDetailCardRoomId': RoomModel['roomId'];
    'qwRoomDetailCardSquareMeter': string;
    'qwRoomDetailCardTitle': string;
  }
  interface QwRoomList {
    'qwRoomListFilterRoomsWith': string;
    'qwRoomListHeaderMessage': string;
    'qwRoomListShowCta': boolean;
    'qwRoomListShowPrices': boolean;
    'qwRoomListType': QwRoomListType;
  }
  interface QwRoomListCard {
    'qwRoomListCardAveragePrice': string;
    'qwRoomListCardBasketRoom': RoomBasketModel;
    'qwRoomListCardCrossedOutPrice': string;
    'qwRoomListCardDescription': string;
    'qwRoomListCardGuests': string;
    'qwRoomListCardId': RoomModel['roomId'];
    'qwRoomListCardImage': string;
    'qwRoomListCardIsLoading': boolean;
    'qwRoomListCardIsLoadingBasket': boolean;
    'qwRoomListCardIsLoadingPrice': boolean;
    'qwRoomListCardNights': number;
    'qwRoomListCardOnChangeRoom': (e: QwChangeRoomEvent) => void;
    'qwRoomListCardOnClickBook': () => void;
    'qwRoomListCardOnClickChangeDate': () => void;
    'qwRoomListCardOnClickView': () => void;
    'qwRoomListCardPrice': string;
    'qwRoomListCardPrices': {[dateString: string]: MoneyPrice};
    'qwRoomListCardRangeDate': Date[];
    'qwRoomListCardRangeDateSession': Date[];
    'qwRoomListCardRates': Rate[];
    'qwRoomListCardShowCta': boolean;
    'qwRoomListCardShowDescription': boolean;
    'qwRoomListCardShowPrice': boolean;
    'qwRoomListCardShowPriceAndTaxes': boolean;
    'qwRoomListCardShowPrices': boolean;
    'qwRoomListCardSquareMeter': string;
    'qwRoomListCardTaxes': string;
    'qwRoomListCardTitle': string;
  }
  interface QwRoomRate {
    'qwRoomRateIsDisabled': boolean;
    'qwRoomRateIsLoading': boolean;
    'qwRoomRateName': string;
    'qwRoomRateQualifier': string;
    'qwRoomRateRate': Rate;
    'qwRoomRateSummary': string;
  }
  interface QwWeekCalendar {
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

  interface HTMLQwBasketRoomCounterElement extends Components.QwBasketRoomCounter, HTMLStencilElement {}
  var HTMLQwBasketRoomCounterElement: {
    prototype: HTMLQwBasketRoomCounterElement;
    new (): HTMLQwBasketRoomCounterElement;
  };

  interface HTMLQwBasketSummaryElement extends Components.QwBasketSummary, HTMLStencilElement {}
  var HTMLQwBasketSummaryElement: {
    prototype: HTMLQwBasketSummaryElement;
    new (): HTMLQwBasketSummaryElement;
  };

  interface HTMLQwCalendarElement extends Components.QwCalendar, HTMLStencilElement {}
  var HTMLQwCalendarElement: {
    prototype: HTMLQwCalendarElement;
    new (): HTMLQwCalendarElement;
  };

  interface HTMLQwCalendarGuestInlineElement extends Components.QwCalendarGuestInline, HTMLStencilElement {}
  var HTMLQwCalendarGuestInlineElement: {
    prototype: HTMLQwCalendarGuestInlineElement;
    new (): HTMLQwCalendarGuestInlineElement;
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

  interface HTMLQwErrorElement extends Components.QwError, HTMLStencilElement {}
  var HTMLQwErrorElement: {
    prototype: HTMLQwErrorElement;
    new (): HTMLQwErrorElement;
  };

  interface HTMLQwGuestElement extends Components.QwGuest, HTMLStencilElement {}
  var HTMLQwGuestElement: {
    prototype: HTMLQwGuestElement;
    new (): HTMLQwGuestElement;
  };

  interface HTMLQwInputElement extends Components.QwInput, HTMLStencilElement {}
  var HTMLQwInputElement: {
    prototype: HTMLQwInputElement;
    new (): HTMLQwInputElement;
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

  interface HTMLQwRoomBaseInfoElement extends Components.QwRoomBaseInfo, HTMLStencilElement {}
  var HTMLQwRoomBaseInfoElement: {
    prototype: HTMLQwRoomBaseInfoElement;
    new (): HTMLQwRoomBaseInfoElement;
  };

  interface HTMLQwRoomBasketElement extends Components.QwRoomBasket, HTMLStencilElement {}
  var HTMLQwRoomBasketElement: {
    prototype: HTMLQwRoomBasketElement;
    new (): HTMLQwRoomBasketElement;
  };

  interface HTMLQwRoomDetailElement extends Components.QwRoomDetail, HTMLStencilElement {}
  var HTMLQwRoomDetailElement: {
    prototype: HTMLQwRoomDetailElement;
    new (): HTMLQwRoomDetailElement;
  };

  interface HTMLQwRoomDetailCardElement extends Components.QwRoomDetailCard, HTMLStencilElement {}
  var HTMLQwRoomDetailCardElement: {
    prototype: HTMLQwRoomDetailCardElement;
    new (): HTMLQwRoomDetailCardElement;
  };

  interface HTMLQwRoomListElement extends Components.QwRoomList, HTMLStencilElement {}
  var HTMLQwRoomListElement: {
    prototype: HTMLQwRoomListElement;
    new (): HTMLQwRoomListElement;
  };

  interface HTMLQwRoomListCardElement extends Components.QwRoomListCard, HTMLStencilElement {}
  var HTMLQwRoomListCardElement: {
    prototype: HTMLQwRoomListCardElement;
    new (): HTMLQwRoomListCardElement;
  };

  interface HTMLQwRoomRateElement extends Components.QwRoomRate, HTMLStencilElement {}
  var HTMLQwRoomRateElement: {
    prototype: HTMLQwRoomRateElement;
    new (): HTMLQwRoomRateElement;
  };

  interface HTMLQwWeekCalendarElement extends Components.QwWeekCalendar, HTMLStencilElement {}
  var HTMLQwWeekCalendarElement: {
    prototype: HTMLQwWeekCalendarElement;
    new (): HTMLQwWeekCalendarElement;
  };
  interface HTMLElementTagNameMap {
    'qw-basket': HTMLQwBasketElement;
    'qw-basket-room-counter': HTMLQwBasketRoomCounterElement;
    'qw-basket-summary': HTMLQwBasketSummaryElement;
    'qw-calendar': HTMLQwCalendarElement;
    'qw-calendar-guest-inline': HTMLQwCalendarGuestInlineElement;
    'qw-calendar-picker': HTMLQwCalendarPickerElement;
    'qw-card': HTMLQwCardElement;
    'qw-counter': HTMLQwCounterElement;
    'qw-error': HTMLQwErrorElement;
    'qw-guest': HTMLQwGuestElement;
    'qw-input': HTMLQwInputElement;
    'qw-loading': HTMLQwLoadingElement;
    'qw-price': HTMLQwPriceElement;
    'qw-room-base-info': HTMLQwRoomBaseInfoElement;
    'qw-room-basket': HTMLQwRoomBasketElement;
    'qw-room-detail': HTMLQwRoomDetailElement;
    'qw-room-detail-card': HTMLQwRoomDetailCardElement;
    'qw-room-list': HTMLQwRoomListElement;
    'qw-room-list-card': HTMLQwRoomListCardElement;
    'qw-room-rate': HTMLQwRoomRateElement;
    'qw-week-calendar': HTMLQwWeekCalendarElement;
  }
}

declare namespace LocalJSX {
  interface QwBasket {
    'onQwBasketBookNow'?: (event: CustomEvent<void>) => void;
    'onQwBasketClickPrice'?: (event: CustomEvent<void>) => void;
    'qwBasketShowBookNowButton'?: boolean;
    'qwBasketShowEmptyButton'?: boolean;
  }
  interface QwBasketRoomCounter {
    'onQwBasketRoomCounterNumber'?: (event: CustomEvent<number>) => void;
  }
  interface QwBasketSummary {}
  interface QwCalendar {
    'onQwCalendarChange'?: (event: CustomEvent<SessionStayPeriod>) => void;
    'qwCalendarDesktopLimit'?: number;
    'qwCalendarNumberOfMonths'?: number;
    'qwCalendarResponsive'?: boolean;
    'qwCalendarSyncOnChange'?: boolean;
  }
  interface QwCalendarGuestInline {
    'onQwCalendarGuestInlineCheckAvailability'?: (event: CustomEvent<void>) => void;
    'onQwCalendarGuestInlineClickInput'?: (event: CustomEvent<QwCalendarGuestInlineInputType>) => void;
    'qwCalendarGuestInlineShowCheckButton'?: boolean;
  }
  interface QwCalendarPicker {
    'onQwCalendarPickerChangeDates'?: (event: CustomEvent<SessionStayPeriod>) => void;
    'qwCalendarPickerDesktopLimit'?: number;
    'qwCalendarPickerDisabled'?: boolean;
    'qwCalendarPickerNumberOfMonths'?: number;
    'qwCalendarPickerResponsive'?: boolean;
    'qwCalendarPickerStayPeriod'?: SessionStayPeriod;
  }
  interface QwCard {}
  interface QwCounter {
    'onQwCounterChangeValue'?: (event: CustomEvent<QwCounterEmitter>) => void;
    'qwCounterMaxValue'?: number;
    'qwCounterName'?: string;
    'qwCounterValue'?: number;
  }
  interface QwError {}
  interface QwGuest {
    'onQwGuestChange'?: (event: CustomEvent<SessionGuests>) => void;
    'qwGuestCenter'?: boolean;
    'qwGuestSyncOnChange'?: boolean;
  }
  interface QwInput {
    'qwInputIsReadonly'?: boolean;
    'qwInputLabel'?: string;
    'qwInputName'?: string;
    'qwInputType'?: string;
    'qwInputValue'?: string;
  }
  interface QwLoading {
    'QwLoadingSize'?: string;
  }
  interface QwPrice {
    'qwPriceCaption'?: string;
    'qwPriceCrossedPrice'?: string;
    'qwPriceMainPrice'?: string;
  }
  interface QwRoomBaseInfo {
    'qwRoomBaseInfoIsStateFull'?: boolean;
    'qwRoomBaseInfoRoomId'?: string;
  }
  interface QwRoomBasket {
    'onQwRoomBasketBackToRoomList'?: (event: CustomEvent<void>) => void;
    'qwRoomBasketBackToRoomListMessage'?: string;
    'qwRoomBasketShowDescription'?: any;
  }
  interface QwRoomDetail {
    'onQwRoomDetailAddAnotherRoom'?: (event: CustomEvent<void>) => void;
    'onQwRoomDetailAddToBasketSuccess'?: (event: CustomEvent<QwRoomDetailAddToBasketEmitter>) => void;
    'onQwRoomDetailProceed'?: (event: CustomEvent<void>) => void;
    'qwRoomDetailAlertMessage'?: string;
    'qwRoomDetailId'?: string;
  }
  interface QwRoomDetailCard {
    'onQwRoomDetailCardAddAnotherRoom'?: (event: CustomEvent<void>) => void;
    'onQwRoomDetailCardAddToBasket'?: (event: CustomEvent<QwRoomRateAddToBasketEmitter>) => void;
    'onQwRoomDetailCardProceed'?: (event: CustomEvent<void>) => void;
    'qwRoomDetailCardAlertMessage'?: string;
    'qwRoomDetailCardBed'?: string;
    'qwRoomDetailCardGuests'?: string;
    'qwRoomDetailCardImage'?: string;
    'qwRoomDetailCardIsLoading'?: boolean;
    'qwRoomDetailCardNumberOfAccommodation'?: number;
    'qwRoomDetailCardNumberOfGuests'?: number;
    'qwRoomDetailCardNumberOfNights'?: number;
    'qwRoomDetailCardRates'?: Rate[];
    'qwRoomDetailCardRatesModel'?: {[rateId: string]: RateModel};
    'qwRoomDetailCardRoomId'?: RoomModel['roomId'];
    'qwRoomDetailCardSquareMeter'?: string;
    'qwRoomDetailCardTitle'?: string;
  }
  interface QwRoomList {
    'onQwRoomListClickRoom'?: (event: CustomEvent<{type: QwRoomListCardButtonType, room: RoomModel}>) => void;
    'qwRoomListFilterRoomsWith'?: string;
    'qwRoomListHeaderMessage'?: string;
    'qwRoomListShowCta'?: boolean;
    'qwRoomListShowPrices'?: boolean;
    'qwRoomListType'?: QwRoomListType;
  }
  interface QwRoomListCard {
    'qwRoomListCardAveragePrice'?: string;
    'qwRoomListCardBasketRoom'?: RoomBasketModel;
    'qwRoomListCardCrossedOutPrice'?: string;
    'qwRoomListCardDescription'?: string;
    'qwRoomListCardGuests'?: string;
    'qwRoomListCardId'?: RoomModel['roomId'];
    'qwRoomListCardImage'?: string;
    'qwRoomListCardIsLoading'?: boolean;
    'qwRoomListCardIsLoadingBasket'?: boolean;
    'qwRoomListCardIsLoadingPrice'?: boolean;
    'qwRoomListCardNights'?: number;
    'qwRoomListCardOnChangeRoom'?: (e: QwChangeRoomEvent) => void;
    'qwRoomListCardOnClickBook'?: () => void;
    'qwRoomListCardOnClickChangeDate'?: () => void;
    'qwRoomListCardOnClickView'?: () => void;
    'qwRoomListCardPrice'?: string;
    'qwRoomListCardPrices'?: {[dateString: string]: MoneyPrice};
    'qwRoomListCardRangeDate'?: Date[];
    'qwRoomListCardRangeDateSession'?: Date[];
    'qwRoomListCardRates'?: Rate[];
    'qwRoomListCardShowCta'?: boolean;
    'qwRoomListCardShowDescription'?: boolean;
    'qwRoomListCardShowPrice'?: boolean;
    'qwRoomListCardShowPriceAndTaxes'?: boolean;
    'qwRoomListCardShowPrices'?: boolean;
    'qwRoomListCardSquareMeter'?: string;
    'qwRoomListCardTaxes'?: string;
    'qwRoomListCardTitle'?: string;
  }
  interface QwRoomRate {
    'onQwRoomRateAddToBasket'?: (event: CustomEvent<QwRoomRateAddToBasketEmitter>) => void;
    'onQwRoomRateCounterChanged'?: (event: CustomEvent<QwRoomRateAddToBasketEmitter>) => void;
    'qwRoomRateIsDisabled'?: boolean;
    'qwRoomRateIsLoading'?: boolean;
    'qwRoomRateName'?: string;
    'qwRoomRateQualifier'?: string;
    'qwRoomRateRate'?: Rate;
    'qwRoomRateSummary'?: string;
  }
  interface QwWeekCalendar {
    'qwWeekCalendarPricesByRoom'?: PricesForStayPeriod[RoomModel['roomId']];
    'qwWeekCalendarRangeDate'?: Date[];
    'qwWeekCalendarRangeDateSession'?: Date[];
    'qwWeekCalendarSelectedRoomId'?: RoomModel['roomId'];
  }

  interface IntrinsicElements {
    'qw-basket': QwBasket;
    'qw-basket-room-counter': QwBasketRoomCounter;
    'qw-basket-summary': QwBasketSummary;
    'qw-calendar': QwCalendar;
    'qw-calendar-guest-inline': QwCalendarGuestInline;
    'qw-calendar-picker': QwCalendarPicker;
    'qw-card': QwCard;
    'qw-counter': QwCounter;
    'qw-error': QwError;
    'qw-guest': QwGuest;
    'qw-input': QwInput;
    'qw-loading': QwLoading;
    'qw-price': QwPrice;
    'qw-room-base-info': QwRoomBaseInfo;
    'qw-room-basket': QwRoomBasket;
    'qw-room-detail': QwRoomDetail;
    'qw-room-detail-card': QwRoomDetailCard;
    'qw-room-list': QwRoomList;
    'qw-room-list-card': QwRoomListCard;
    'qw-room-rate': QwRoomRate;
    'qw-week-calendar': QwWeekCalendar;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'qw-basket': LocalJSX.QwBasket & JSXBase.HTMLAttributes<HTMLQwBasketElement>;
      'qw-basket-room-counter': LocalJSX.QwBasketRoomCounter & JSXBase.HTMLAttributes<HTMLQwBasketRoomCounterElement>;
      'qw-basket-summary': LocalJSX.QwBasketSummary & JSXBase.HTMLAttributes<HTMLQwBasketSummaryElement>;
      'qw-calendar': LocalJSX.QwCalendar & JSXBase.HTMLAttributes<HTMLQwCalendarElement>;
      'qw-calendar-guest-inline': LocalJSX.QwCalendarGuestInline & JSXBase.HTMLAttributes<HTMLQwCalendarGuestInlineElement>;
      'qw-calendar-picker': LocalJSX.QwCalendarPicker & JSXBase.HTMLAttributes<HTMLQwCalendarPickerElement>;
      'qw-card': LocalJSX.QwCard & JSXBase.HTMLAttributes<HTMLQwCardElement>;
      'qw-counter': LocalJSX.QwCounter & JSXBase.HTMLAttributes<HTMLQwCounterElement>;
      'qw-error': LocalJSX.QwError & JSXBase.HTMLAttributes<HTMLQwErrorElement>;
      'qw-guest': LocalJSX.QwGuest & JSXBase.HTMLAttributes<HTMLQwGuestElement>;
      'qw-input': LocalJSX.QwInput & JSXBase.HTMLAttributes<HTMLQwInputElement>;
      'qw-loading': LocalJSX.QwLoading & JSXBase.HTMLAttributes<HTMLQwLoadingElement>;
      'qw-price': LocalJSX.QwPrice & JSXBase.HTMLAttributes<HTMLQwPriceElement>;
      'qw-room-base-info': LocalJSX.QwRoomBaseInfo & JSXBase.HTMLAttributes<HTMLQwRoomBaseInfoElement>;
      'qw-room-basket': LocalJSX.QwRoomBasket & JSXBase.HTMLAttributes<HTMLQwRoomBasketElement>;
      'qw-room-detail': LocalJSX.QwRoomDetail & JSXBase.HTMLAttributes<HTMLQwRoomDetailElement>;
      'qw-room-detail-card': LocalJSX.QwRoomDetailCard & JSXBase.HTMLAttributes<HTMLQwRoomDetailCardElement>;
      'qw-room-list': LocalJSX.QwRoomList & JSXBase.HTMLAttributes<HTMLQwRoomListElement>;
      'qw-room-list-card': LocalJSX.QwRoomListCard & JSXBase.HTMLAttributes<HTMLQwRoomListCardElement>;
      'qw-room-rate': LocalJSX.QwRoomRate & JSXBase.HTMLAttributes<HTMLQwRoomRateElement>;
      'qw-week-calendar': LocalJSX.QwWeekCalendar & JSXBase.HTMLAttributes<HTMLQwWeekCalendarElement>;
    }
  }
}


