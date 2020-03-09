/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  RoomMetadata,
} from '@qwentes/booking-state-manager/src/feature/room/model/room.interface';
import {
  BasketModel,
  MoneyPrice,
  PricesForStayPeriod,
  QuoteCreateBody,
  Rate,
  RoomBasketModel,
  RoomImageMetadata,
  RoomModel,
  SessionDisplay,
  SessionGuests,
  SessionStayPeriod,
} from '@qwentes/booking-state-manager';
import {
  QwCalendarGuestInlineInputType,
  QwChangeRoomEvent,
  QwRoomBaseInfoGuestType,
  QwRoomBaseInfoType,
  QwRoomListCardButtonType,
  QwRoomListOrderType,
  QwRoomListType,
  QwWeekCalendarDirection,
} from './index';
import {
  QwCounterEmitter,
} from './components/shared/qw-counter/qw-counter';
import {
  QwExtraEmitter,
} from './components/qw-extra/qw-extra-card/qw-extra-card';
import {
  Transformation,
} from 'cloudinary-core';
import {
  QwInputEmitter,
} from './components/shared/qw-input/qw-input';
import {
  QwOfferClickEmitter,
} from './components/qw-offers/qw-offers';
import {
  QwRoomDetailAddToBasketEmitter,
} from './components/qw-room-detail/qw-room-detail';
import {
  QwRoomRateAddedToBasketEmitter,
} from './components/qw-room-rate/qw-room-rate';
import {
  QwRoomRateAddedToBasketEmitter as QwRoomRateAddedToBasketEmitter1,
  QwRoomRateCounterChangedEmitter,
} from './components/qw-room-rate/qw-room-rate';
import {
  QwInputEmitter as QwInputEmitter1,
} from './components/shared/qw-input/qw-input';

export namespace Components {
  interface QwBasket {
    'qwBasketShowBookNowButton': boolean;
    'qwBasketShowEmptyButton': boolean;
    'qwBasketShowOnSiteTaxes': boolean;
    'qwBasketShowPriceIfEmpty': boolean;
    'qwBasketShowTaxes': boolean;
  }
  interface QwBasketRoomCounter {}
  interface QwBasketSummary {}
  interface QwBook {}
  interface QwBookCondition {
    'qwBookConditionForceQuoteCall': boolean;
  }
  interface QwBookGuestDetail {
    'qwBookFormShowError': boolean;
    'qwBookGuestDetailTitleOptions': Array<RoomMetadata<string>>;
  }
  interface QwCalendar {
    'qwCalendarDesktopLimit': number;
    'qwCalendarNumberOfMonths': number;
    'qwCalendarResponsive': boolean;
    'qwCalendarSyncOnChange': boolean;
  }
  interface QwCalendarGuestInline {
    'qwCalendarGuestInlineShowCheckButton': boolean;
    'qwCalendarGuestInlineShowInputs': boolean;
  }
  interface QwCalendarInline {}
  interface QwCalendarPicker {
    'qwCalendarPickerDesktopLimit': number;
    'qwCalendarPickerDisabled': boolean;
    'qwCalendarPickerLocale': SessionDisplay['culture'];
    'qwCalendarPickerNumberOfMonths': number;
    'qwCalendarPickerResponsive': boolean;
    'qwCalendarPickerStayPeriod': SessionStayPeriod;
  }
  interface QwCalendarShorthand {}
  interface QwCard {}
  interface QwCounter {
    'qwCounterDisabled': boolean;
    'qwCounterId': string;
    'qwCounterMaxValue': number;
    'qwCounterMinValue': number;
    'qwCounterName': string | number;
    'qwCounterValue': number;
  }
  interface QwCurrency {}
  interface QwError {}
  interface QwExtra {}
  interface QwExtraBasket {}
  interface QwExtraCard {
    'qwExtraCardAvailability': number;
    'qwExtraCardCover': RoomImageMetadata;
    'qwExtraCardId': number;
    'qwExtraCardName': string;
    'qwExtraCardSelectedQuantity': number;
    'qwExtraCardUnitPrice': string;
  }
  interface QwGuest {
    'qwGuestCenter': boolean;
    'qwGuestSyncOnChange': boolean;
  }
  interface QwImage {
    'qwImageAlt': string;
    'qwImageTransformationOptions': Transformation.Options;
    'qwImageUrl': string;
  }
  interface QwInput {
    'qwInputCaption': string;
    'qwInputHasError': boolean;
    'qwInputIsMandatory': boolean;
    'qwInputIsReadonly': boolean;
    'qwInputLabel': string;
    'qwInputName': string;
    'qwInputType': string;
    'qwInputValue': string;
  }
  interface QwLanguage {
    'qwLanguageLanguages': string;
    'qwLanguagePreselected': string;
  }
  interface QwLoading {
    'QwLoadingSize': string;
  }
  interface QwOffers {
    'qwOffersImageTransformationOptions': string;
    'qwOffersMax': number;
    'qwOffersType': QwRoomListType;
  }
  interface QwPlaceholder {
    'qwPlaceholderType': QwRoomListType;
  }
  interface QwPrice {
    'qwPriceCaption': string;
    'qwPriceCrossedPrice': string;
    'qwPriceMainPrice': string;
  }
  interface QwRoomBaseInfo {
    'qwRoomBaseInfoForceRoomsCall': boolean;
    'qwRoomBaseInfoGuestType': QwRoomBaseInfoGuestType;
    'qwRoomBaseInfoRoomId': string;
    'qwRoomBaseInfoType': QwRoomBaseInfoType;
  }
  interface QwRoomBasket {
    'qwRoomBasketHasImage': boolean;
  }
  interface QwRoomDetail {
    'qwRoomDetailId': string;
    'qwRoomDetailImageTransformationOptions': string;
  }
  interface QwRoomDetailCard {
    'qwRoomDetailCardImage': string;
    'qwRoomDetailCardImageTransformationOptions': Transformation.Options;
    'qwRoomDetailCardNumberOfAccommodation': number;
    'qwRoomDetailCardNumberOfGuests': number;
    'qwRoomDetailCardNumberOfNights': number;
    'qwRoomDetailCardRoomId': RoomModel['roomId'];
    'qwRoomDetailCardTitle': string;
  }
  interface QwRoomList {
    'qwRoomListBaseInfoType': QwRoomBaseInfoType;
    'qwRoomListFilterRoomsWith': string;
    'qwRoomListImageTransformationOptions': string;
    'qwRoomListOrder': QwRoomListOrderType;
    'qwRoomListPlaceholders': string;
    'qwRoomListShowCta': boolean;
    'qwRoomListShowPrices': boolean;
    'qwRoomListShowRates': boolean;
    'qwRoomListType': QwRoomListType;
  }
  interface QwRoomListCard {
    'qwRoomListCardAddableLeftover': number;
    'qwRoomListCardAveragePrice': string;
    'qwRoomListCardBaseInfoType': QwRoomBaseInfoType;
    'qwRoomListCardBasketIsEmpty': boolean;
    'qwRoomListCardBasketRoom': RoomBasketModel;
    'qwRoomListCardCrossedOutPrice': string;
    'qwRoomListCardDescription': string;
    'qwRoomListCardId': RoomModel['roomId'];
    'qwRoomListCardImage': string;
    'qwRoomListCardImageTransformationOptions': Transformation.Options;
    'qwRoomListCardIsLoading': boolean;
    'qwRoomListCardIsLoadingPrice': boolean;
    'qwRoomListCardLanguage': SessionDisplay['culture'];
    'qwRoomListCardNights': number;
    'qwRoomListCardNumberOfAccommodation': number;
    'qwRoomListCardNumberOfGuests': number;
    'qwRoomListCardOnAddedToBasket': (e: BasketModel) => void;
    'qwRoomListCardOnChangeRoom': (e: QwChangeRoomEvent) => void;
    'qwRoomListCardOnChangeWeekDates': (e: QwWeekCalendarDirection) => void;
    'qwRoomListCardOnClickBook': () => void;
    'qwRoomListCardOnClickChangeDate': () => void;
    'qwRoomListCardOnClickView': () => void;
    'qwRoomListCardOnProceedToCheckout': () => void;
    'qwRoomListCardPlaceholders': string;
    'qwRoomListCardPrice': string;
    'qwRoomListCardPrices': {[dateString: string]: MoneyPrice};
    'qwRoomListCardRangeDate': Date[];
    'qwRoomListCardRangeDateSession': Date[];
    'qwRoomListCardShowActions': boolean;
    'qwRoomListCardShowCta': boolean;
    'qwRoomListCardShowDescription': boolean;
    'qwRoomListCardShowPrice': boolean;
    'qwRoomListCardShowPriceAndTaxes': boolean;
    'qwRoomListCardShowPrices': boolean;
    'qwRoomListCardShowRates': boolean;
    'qwRoomListCardTaxes': string;
    'qwRoomListCardTitle': string;
    'qwRoomListCardType': QwRoomListType;
  }
  interface QwRoomNames {}
  interface QwRoomNotification {
    'qwRoomNotificationShowPopupTime': number;
  }
  interface QwRoomRate {
    'qwRoomRateDefaultToOne': boolean;
    'qwRoomRateIsAddingToBasket': boolean;
    'qwRoomRateIsDisabled': boolean;
    'qwRoomRateIsLoading': boolean;
    'qwRoomRateRate': Rate;
    'qwRoomRateRoomId': RoomModel['roomId'];
    'qwRoomRateShowConditions': boolean;
    'qwRoomRateType': QwRoomListType;
  }
  interface QwRoomRateList {
    'qwRoomRateListDefaultToOne': boolean;
    'qwRoomRateListId': string;
  }
  interface QwRoomRates {
    'qwRoomRatesForceRoomsCall': boolean;
    'qwRoomRatesPlaceholders': string;
    'qwRoomRatesRoomId': RoomModel['roomId'];
    'qwRoomRatesType': QwRoomListType;
  }
  interface QwRoomRichInfo {
    'qwRoomRichInfoBaseInfoType': QwRoomBaseInfoType;
    'qwRoomRichInfoForceRoomsCall': boolean;
    'qwRoomRichInfoRoomId': string;
  }
  interface QwRoomService {
    'qwRoomServiceForceRoomsCall': boolean;
    'qwRoomServiceRoomId': string;
  }
  interface QwSeparator {}
  interface QwTextarea {
    'qwTextareaName': string;
    'qwTextareaValue': string;
  }
  interface QwWeekCalendar {
    'qwWeekCalendarIsLoading': boolean;
    'qwWeekCalendarLanguage': SessionDisplay['culture'];
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

  interface HTMLQwBookElement extends Components.QwBook, HTMLStencilElement {}
  var HTMLQwBookElement: {
    prototype: HTMLQwBookElement;
    new (): HTMLQwBookElement;
  };

  interface HTMLQwBookConditionElement extends Components.QwBookCondition, HTMLStencilElement {}
  var HTMLQwBookConditionElement: {
    prototype: HTMLQwBookConditionElement;
    new (): HTMLQwBookConditionElement;
  };

  interface HTMLQwBookGuestDetailElement extends Components.QwBookGuestDetail, HTMLStencilElement {}
  var HTMLQwBookGuestDetailElement: {
    prototype: HTMLQwBookGuestDetailElement;
    new (): HTMLQwBookGuestDetailElement;
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

  interface HTMLQwCalendarInlineElement extends Components.QwCalendarInline, HTMLStencilElement {}
  var HTMLQwCalendarInlineElement: {
    prototype: HTMLQwCalendarInlineElement;
    new (): HTMLQwCalendarInlineElement;
  };

  interface HTMLQwCalendarPickerElement extends Components.QwCalendarPicker, HTMLStencilElement {}
  var HTMLQwCalendarPickerElement: {
    prototype: HTMLQwCalendarPickerElement;
    new (): HTMLQwCalendarPickerElement;
  };

  interface HTMLQwCalendarShorthandElement extends Components.QwCalendarShorthand, HTMLStencilElement {}
  var HTMLQwCalendarShorthandElement: {
    prototype: HTMLQwCalendarShorthandElement;
    new (): HTMLQwCalendarShorthandElement;
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

  interface HTMLQwCurrencyElement extends Components.QwCurrency, HTMLStencilElement {}
  var HTMLQwCurrencyElement: {
    prototype: HTMLQwCurrencyElement;
    new (): HTMLQwCurrencyElement;
  };

  interface HTMLQwErrorElement extends Components.QwError, HTMLStencilElement {}
  var HTMLQwErrorElement: {
    prototype: HTMLQwErrorElement;
    new (): HTMLQwErrorElement;
  };

  interface HTMLQwExtraElement extends Components.QwExtra, HTMLStencilElement {}
  var HTMLQwExtraElement: {
    prototype: HTMLQwExtraElement;
    new (): HTMLQwExtraElement;
  };

  interface HTMLQwExtraBasketElement extends Components.QwExtraBasket, HTMLStencilElement {}
  var HTMLQwExtraBasketElement: {
    prototype: HTMLQwExtraBasketElement;
    new (): HTMLQwExtraBasketElement;
  };

  interface HTMLQwExtraCardElement extends Components.QwExtraCard, HTMLStencilElement {}
  var HTMLQwExtraCardElement: {
    prototype: HTMLQwExtraCardElement;
    new (): HTMLQwExtraCardElement;
  };

  interface HTMLQwGuestElement extends Components.QwGuest, HTMLStencilElement {}
  var HTMLQwGuestElement: {
    prototype: HTMLQwGuestElement;
    new (): HTMLQwGuestElement;
  };

  interface HTMLQwImageElement extends Components.QwImage, HTMLStencilElement {}
  var HTMLQwImageElement: {
    prototype: HTMLQwImageElement;
    new (): HTMLQwImageElement;
  };

  interface HTMLQwInputElement extends Components.QwInput, HTMLStencilElement {}
  var HTMLQwInputElement: {
    prototype: HTMLQwInputElement;
    new (): HTMLQwInputElement;
  };

  interface HTMLQwLanguageElement extends Components.QwLanguage, HTMLStencilElement {}
  var HTMLQwLanguageElement: {
    prototype: HTMLQwLanguageElement;
    new (): HTMLQwLanguageElement;
  };

  interface HTMLQwLoadingElement extends Components.QwLoading, HTMLStencilElement {}
  var HTMLQwLoadingElement: {
    prototype: HTMLQwLoadingElement;
    new (): HTMLQwLoadingElement;
  };

  interface HTMLQwOffersElement extends Components.QwOffers, HTMLStencilElement {}
  var HTMLQwOffersElement: {
    prototype: HTMLQwOffersElement;
    new (): HTMLQwOffersElement;
  };

  interface HTMLQwPlaceholderElement extends Components.QwPlaceholder, HTMLStencilElement {}
  var HTMLQwPlaceholderElement: {
    prototype: HTMLQwPlaceholderElement;
    new (): HTMLQwPlaceholderElement;
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

  interface HTMLQwRoomNamesElement extends Components.QwRoomNames, HTMLStencilElement {}
  var HTMLQwRoomNamesElement: {
    prototype: HTMLQwRoomNamesElement;
    new (): HTMLQwRoomNamesElement;
  };

  interface HTMLQwRoomNotificationElement extends Components.QwRoomNotification, HTMLStencilElement {}
  var HTMLQwRoomNotificationElement: {
    prototype: HTMLQwRoomNotificationElement;
    new (): HTMLQwRoomNotificationElement;
  };

  interface HTMLQwRoomRateElement extends Components.QwRoomRate, HTMLStencilElement {}
  var HTMLQwRoomRateElement: {
    prototype: HTMLQwRoomRateElement;
    new (): HTMLQwRoomRateElement;
  };

  interface HTMLQwRoomRateListElement extends Components.QwRoomRateList, HTMLStencilElement {}
  var HTMLQwRoomRateListElement: {
    prototype: HTMLQwRoomRateListElement;
    new (): HTMLQwRoomRateListElement;
  };

  interface HTMLQwRoomRatesElement extends Components.QwRoomRates, HTMLStencilElement {}
  var HTMLQwRoomRatesElement: {
    prototype: HTMLQwRoomRatesElement;
    new (): HTMLQwRoomRatesElement;
  };

  interface HTMLQwRoomRichInfoElement extends Components.QwRoomRichInfo, HTMLStencilElement {}
  var HTMLQwRoomRichInfoElement: {
    prototype: HTMLQwRoomRichInfoElement;
    new (): HTMLQwRoomRichInfoElement;
  };

  interface HTMLQwRoomServiceElement extends Components.QwRoomService, HTMLStencilElement {}
  var HTMLQwRoomServiceElement: {
    prototype: HTMLQwRoomServiceElement;
    new (): HTMLQwRoomServiceElement;
  };

  interface HTMLQwSeparatorElement extends Components.QwSeparator, HTMLStencilElement {}
  var HTMLQwSeparatorElement: {
    prototype: HTMLQwSeparatorElement;
    new (): HTMLQwSeparatorElement;
  };

  interface HTMLQwTextareaElement extends Components.QwTextarea, HTMLStencilElement {}
  var HTMLQwTextareaElement: {
    prototype: HTMLQwTextareaElement;
    new (): HTMLQwTextareaElement;
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
    'qw-book': HTMLQwBookElement;
    'qw-book-condition': HTMLQwBookConditionElement;
    'qw-book-guest-detail': HTMLQwBookGuestDetailElement;
    'qw-calendar': HTMLQwCalendarElement;
    'qw-calendar-guest-inline': HTMLQwCalendarGuestInlineElement;
    'qw-calendar-inline': HTMLQwCalendarInlineElement;
    'qw-calendar-picker': HTMLQwCalendarPickerElement;
    'qw-calendar-shorthand': HTMLQwCalendarShorthandElement;
    'qw-card': HTMLQwCardElement;
    'qw-counter': HTMLQwCounterElement;
    'qw-currency': HTMLQwCurrencyElement;
    'qw-error': HTMLQwErrorElement;
    'qw-extra': HTMLQwExtraElement;
    'qw-extra-basket': HTMLQwExtraBasketElement;
    'qw-extra-card': HTMLQwExtraCardElement;
    'qw-guest': HTMLQwGuestElement;
    'qw-image': HTMLQwImageElement;
    'qw-input': HTMLQwInputElement;
    'qw-language': HTMLQwLanguageElement;
    'qw-loading': HTMLQwLoadingElement;
    'qw-offers': HTMLQwOffersElement;
    'qw-placeholder': HTMLQwPlaceholderElement;
    'qw-price': HTMLQwPriceElement;
    'qw-room-base-info': HTMLQwRoomBaseInfoElement;
    'qw-room-basket': HTMLQwRoomBasketElement;
    'qw-room-detail': HTMLQwRoomDetailElement;
    'qw-room-detail-card': HTMLQwRoomDetailCardElement;
    'qw-room-list': HTMLQwRoomListElement;
    'qw-room-list-card': HTMLQwRoomListCardElement;
    'qw-room-names': HTMLQwRoomNamesElement;
    'qw-room-notification': HTMLQwRoomNotificationElement;
    'qw-room-rate': HTMLQwRoomRateElement;
    'qw-room-rate-list': HTMLQwRoomRateListElement;
    'qw-room-rates': HTMLQwRoomRatesElement;
    'qw-room-rich-info': HTMLQwRoomRichInfoElement;
    'qw-room-service': HTMLQwRoomServiceElement;
    'qw-separator': HTMLQwSeparatorElement;
    'qw-textarea': HTMLQwTextareaElement;
    'qw-week-calendar': HTMLQwWeekCalendarElement;
  }
}

declare namespace LocalJSX {
  interface QwBasket {
    'onQwBasketBookNow'?: (event: CustomEvent<void>) => void;
    'onQwBasketClickPrice'?: (event: CustomEvent<void>) => void;
    'onQwBasketIsAccommodationSatisfy'?: (event: CustomEvent<boolean>) => void;
    'qwBasketShowBookNowButton'?: boolean;
    'qwBasketShowEmptyButton'?: boolean;
    'qwBasketShowOnSiteTaxes'?: boolean;
    'qwBasketShowPriceIfEmpty'?: boolean;
    'qwBasketShowTaxes'?: boolean;
  }
  interface QwBasketRoomCounter {
    'onQwBasketRoomCounterNumber'?: (event: CustomEvent<number>) => void;
  }
  interface QwBasketSummary {}
  interface QwBook {}
  interface QwBookCondition {
    'qwBookConditionForceQuoteCall'?: boolean;
  }
  interface QwBookGuestDetail {
    'onQwBookGuestDetailChangeForm'?: (event: CustomEvent<QuoteCreateBody>) => void;
    'qwBookFormShowError'?: boolean;
    'qwBookGuestDetailTitleOptions'?: Array<RoomMetadata<string>>;
  }
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
    'qwCalendarGuestInlineShowInputs'?: boolean;
  }
  interface QwCalendarInline {}
  interface QwCalendarPicker {
    'onQwCalendarPickerChangeDates'?: (event: CustomEvent<SessionStayPeriod>) => void;
    'qwCalendarPickerDesktopLimit'?: number;
    'qwCalendarPickerDisabled'?: boolean;
    'qwCalendarPickerLocale'?: SessionDisplay['culture'];
    'qwCalendarPickerNumberOfMonths'?: number;
    'qwCalendarPickerResponsive'?: boolean;
    'qwCalendarPickerStayPeriod'?: SessionStayPeriod;
  }
  interface QwCalendarShorthand {
    'onQwCalendarShorthandOtherDates'?: (event: CustomEvent<void>) => void;
    'onQwCalendarShorthandTodaySuccess'?: (event: CustomEvent<void>) => void;
    'onQwCalendarShorthandTomorrowSuccess'?: (event: CustomEvent<void>) => void;
  }
  interface QwCard {}
  interface QwCounter {
    'onQwCounterChangeValue'?: (event: CustomEvent<QwCounterEmitter>) => void;
    'qwCounterDisabled'?: boolean;
    'qwCounterId'?: string;
    'qwCounterMaxValue'?: number;
    'qwCounterMinValue'?: number;
    'qwCounterName'?: string | number;
    'qwCounterValue'?: number;
  }
  interface QwCurrency {
    'onQwCurrencyChanged'?: (event: CustomEvent<SessionDisplay['culture']>) => void;
  }
  interface QwError {}
  interface QwExtra {}
  interface QwExtraBasket {}
  interface QwExtraCard {
    'onQwExtraCounterChanged'?: (event: CustomEvent<QwExtraEmitter>) => void;
    'qwExtraCardAvailability'?: number;
    'qwExtraCardCover'?: RoomImageMetadata;
    'qwExtraCardId'?: number;
    'qwExtraCardName'?: string;
    'qwExtraCardSelectedQuantity'?: number;
    'qwExtraCardUnitPrice'?: string;
  }
  interface QwGuest {
    'onQwGuestChange'?: (event: CustomEvent<SessionGuests>) => void;
    'qwGuestCenter'?: boolean;
    'qwGuestSyncOnChange'?: boolean;
  }
  interface QwImage {
    'qwImageAlt'?: string;
    'qwImageTransformationOptions'?: Transformation.Options;
    'qwImageUrl'?: string;
  }
  interface QwInput {
    'onQwInputChanged'?: (event: CustomEvent<QwInputEmitter>) => void;
    'qwInputCaption'?: string;
    'qwInputHasError'?: boolean;
    'qwInputIsMandatory'?: boolean;
    'qwInputIsReadonly'?: boolean;
    'qwInputLabel'?: string;
    'qwInputName'?: string;
    'qwInputType'?: string;
    'qwInputValue'?: string;
  }
  interface QwLanguage {
    'onQwLanguageChanged'?: (event: CustomEvent<SessionDisplay['culture']>) => void;
    'qwLanguageLanguages'?: string;
    'qwLanguagePreselected'?: string;
  }
  interface QwLoading {
    'QwLoadingSize'?: string;
  }
  interface QwOffers {
    'onQwOffersOfferClick'?: (event: CustomEvent<QwOfferClickEmitter>) => void;
    'qwOffersImageTransformationOptions'?: string;
    'qwOffersMax'?: number;
    'qwOffersType'?: QwRoomListType;
  }
  interface QwPlaceholder {
    'qwPlaceholderType'?: QwRoomListType;
  }
  interface QwPrice {
    'qwPriceCaption'?: string;
    'qwPriceCrossedPrice'?: string;
    'qwPriceMainPrice'?: string;
  }
  interface QwRoomBaseInfo {
    'qwRoomBaseInfoForceRoomsCall'?: boolean;
    'qwRoomBaseInfoGuestType'?: QwRoomBaseInfoGuestType;
    'qwRoomBaseInfoRoomId'?: string;
    'qwRoomBaseInfoType'?: QwRoomBaseInfoType;
  }
  interface QwRoomBasket {
    'onQwRoomBasketBackToRoomList'?: (event: CustomEvent<void>) => void;
    'qwRoomBasketHasImage'?: boolean;
  }
  interface QwRoomDetail {
    'onQwRoomDetailAddAnotherRoom'?: (event: CustomEvent<void>) => void;
    'onQwRoomDetailAddToBasketSuccess'?: (event: CustomEvent<QwRoomDetailAddToBasketEmitter>) => void;
    'onQwRoomDetailProceed'?: (event: CustomEvent<void>) => void;
    'qwRoomDetailId'?: string;
    'qwRoomDetailImageTransformationOptions'?: string;
  }
  interface QwRoomDetailCard {
    'onQwRoomDetailCardAddAnotherRoom'?: (event: CustomEvent<void>) => void;
    'onQwRoomDetailCardAddedToBasket'?: (event: CustomEvent<QwRoomRateAddedToBasketEmitter>) => void;
    'onQwRoomDetailCardProceed'?: (event: CustomEvent<void>) => void;
    'qwRoomDetailCardImage'?: string;
    'qwRoomDetailCardImageTransformationOptions'?: Transformation.Options;
    'qwRoomDetailCardNumberOfAccommodation'?: number;
    'qwRoomDetailCardNumberOfGuests'?: number;
    'qwRoomDetailCardNumberOfNights'?: number;
    'qwRoomDetailCardRoomId'?: RoomModel['roomId'];
    'qwRoomDetailCardTitle'?: string;
  }
  interface QwRoomList {
    'onQwRoomListClickRoom'?: (event: CustomEvent<{type: QwRoomListCardButtonType, room: RoomModel}>) => void;
    'onQwRoomListOnLoad'?: (event: CustomEvent<void>) => void;
    'qwRoomListBaseInfoType'?: QwRoomBaseInfoType;
    'qwRoomListFilterRoomsWith'?: string;
    'qwRoomListImageTransformationOptions'?: string;
    'qwRoomListOrder'?: QwRoomListOrderType;
    'qwRoomListPlaceholders'?: string;
    'qwRoomListShowCta'?: boolean;
    'qwRoomListShowPrices'?: boolean;
    'qwRoomListShowRates'?: boolean;
    'qwRoomListType'?: QwRoomListType;
  }
  interface QwRoomListCard {
    'qwRoomListCardAddableLeftover'?: number;
    'qwRoomListCardAveragePrice'?: string;
    'qwRoomListCardBaseInfoType'?: QwRoomBaseInfoType;
    'qwRoomListCardBasketIsEmpty'?: boolean;
    'qwRoomListCardBasketRoom'?: RoomBasketModel;
    'qwRoomListCardCrossedOutPrice'?: string;
    'qwRoomListCardDescription'?: string;
    'qwRoomListCardId'?: RoomModel['roomId'];
    'qwRoomListCardImage'?: string;
    'qwRoomListCardImageTransformationOptions'?: Transformation.Options;
    'qwRoomListCardIsLoading'?: boolean;
    'qwRoomListCardIsLoadingPrice'?: boolean;
    'qwRoomListCardLanguage'?: SessionDisplay['culture'];
    'qwRoomListCardNights'?: number;
    'qwRoomListCardNumberOfAccommodation'?: number;
    'qwRoomListCardNumberOfGuests'?: number;
    'qwRoomListCardOnAddedToBasket'?: (e: BasketModel) => void;
    'qwRoomListCardOnChangeRoom'?: (e: QwChangeRoomEvent) => void;
    'qwRoomListCardOnChangeWeekDates'?: (e: QwWeekCalendarDirection) => void;
    'qwRoomListCardOnClickBook'?: () => void;
    'qwRoomListCardOnClickChangeDate'?: () => void;
    'qwRoomListCardOnClickView'?: () => void;
    'qwRoomListCardOnProceedToCheckout'?: () => void;
    'qwRoomListCardPlaceholders'?: string;
    'qwRoomListCardPrice'?: string;
    'qwRoomListCardPrices'?: {[dateString: string]: MoneyPrice};
    'qwRoomListCardRangeDate'?: Date[];
    'qwRoomListCardRangeDateSession'?: Date[];
    'qwRoomListCardShowActions'?: boolean;
    'qwRoomListCardShowCta'?: boolean;
    'qwRoomListCardShowDescription'?: boolean;
    'qwRoomListCardShowPrice'?: boolean;
    'qwRoomListCardShowPriceAndTaxes'?: boolean;
    'qwRoomListCardShowPrices'?: boolean;
    'qwRoomListCardShowRates'?: boolean;
    'qwRoomListCardTaxes'?: string;
    'qwRoomListCardTitle'?: string;
    'qwRoomListCardType'?: QwRoomListType;
  }
  interface QwRoomNames {
    'onQwRoomNamesClick'?: (event: CustomEvent<RoomModel>) => void;
  }
  interface QwRoomNotification {
    'qwRoomNotificationShowPopupTime'?: number;
  }
  interface QwRoomRate {
    'onQwRoomRateAddedToBasket'?: (event: CustomEvent<QwRoomRateAddedToBasketEmitter>) => void;
    'onQwRoomRateCounterChanged'?: (event: CustomEvent<QwRoomRateCounterChangedEmitter>) => void;
    'qwRoomRateDefaultToOne'?: boolean;
    'qwRoomRateIsAddingToBasket'?: boolean;
    'qwRoomRateIsDisabled'?: boolean;
    'qwRoomRateIsLoading'?: boolean;
    'qwRoomRateRate'?: Rate;
    'qwRoomRateRoomId'?: RoomModel['roomId'];
    'qwRoomRateShowConditions'?: boolean;
    'qwRoomRateType'?: QwRoomListType;
  }
  interface QwRoomRateList {
    'onQwRoomRateListAddAnotherRoom'?: (event: CustomEvent<void>) => void;
    'onQwRoomRateListProceed'?: (event: CustomEvent<void>) => void;
    'qwRoomRateListDefaultToOne'?: boolean;
    'qwRoomRateListId'?: string;
  }
  interface QwRoomRates {
    'qwRoomRatesForceRoomsCall'?: boolean;
    'qwRoomRatesPlaceholders'?: string;
    'qwRoomRatesRoomId'?: RoomModel['roomId'];
    'qwRoomRatesType'?: QwRoomListType;
  }
  interface QwRoomRichInfo {
    'qwRoomRichInfoBaseInfoType'?: QwRoomBaseInfoType;
    'qwRoomRichInfoForceRoomsCall'?: boolean;
    'qwRoomRichInfoRoomId'?: string;
  }
  interface QwRoomService {
    'qwRoomServiceForceRoomsCall'?: boolean;
    'qwRoomServiceRoomId'?: string;
  }
  interface QwSeparator {}
  interface QwTextarea {
    'onQwTextareaChanged'?: (event: CustomEvent<QwInputEmitter>) => void;
    'qwTextareaName'?: string;
    'qwTextareaValue'?: string;
  }
  interface QwWeekCalendar {
    'onQwWeekCalendarChangeDates'?: (event: CustomEvent<QwWeekCalendarDirection>) => void;
    'qwWeekCalendarIsLoading'?: boolean;
    'qwWeekCalendarLanguage'?: SessionDisplay['culture'];
    'qwWeekCalendarPricesByRoom'?: PricesForStayPeriod[RoomModel['roomId']];
    'qwWeekCalendarRangeDate'?: Date[];
    'qwWeekCalendarRangeDateSession'?: Date[];
    'qwWeekCalendarSelectedRoomId'?: RoomModel['roomId'];
  }

  interface IntrinsicElements {
    'qw-basket': QwBasket;
    'qw-basket-room-counter': QwBasketRoomCounter;
    'qw-basket-summary': QwBasketSummary;
    'qw-book': QwBook;
    'qw-book-condition': QwBookCondition;
    'qw-book-guest-detail': QwBookGuestDetail;
    'qw-calendar': QwCalendar;
    'qw-calendar-guest-inline': QwCalendarGuestInline;
    'qw-calendar-inline': QwCalendarInline;
    'qw-calendar-picker': QwCalendarPicker;
    'qw-calendar-shorthand': QwCalendarShorthand;
    'qw-card': QwCard;
    'qw-counter': QwCounter;
    'qw-currency': QwCurrency;
    'qw-error': QwError;
    'qw-extra': QwExtra;
    'qw-extra-basket': QwExtraBasket;
    'qw-extra-card': QwExtraCard;
    'qw-guest': QwGuest;
    'qw-image': QwImage;
    'qw-input': QwInput;
    'qw-language': QwLanguage;
    'qw-loading': QwLoading;
    'qw-offers': QwOffers;
    'qw-placeholder': QwPlaceholder;
    'qw-price': QwPrice;
    'qw-room-base-info': QwRoomBaseInfo;
    'qw-room-basket': QwRoomBasket;
    'qw-room-detail': QwRoomDetail;
    'qw-room-detail-card': QwRoomDetailCard;
    'qw-room-list': QwRoomList;
    'qw-room-list-card': QwRoomListCard;
    'qw-room-names': QwRoomNames;
    'qw-room-notification': QwRoomNotification;
    'qw-room-rate': QwRoomRate;
    'qw-room-rate-list': QwRoomRateList;
    'qw-room-rates': QwRoomRates;
    'qw-room-rich-info': QwRoomRichInfo;
    'qw-room-service': QwRoomService;
    'qw-separator': QwSeparator;
    'qw-textarea': QwTextarea;
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
      'qw-book': LocalJSX.QwBook & JSXBase.HTMLAttributes<HTMLQwBookElement>;
      'qw-book-condition': LocalJSX.QwBookCondition & JSXBase.HTMLAttributes<HTMLQwBookConditionElement>;
      'qw-book-guest-detail': LocalJSX.QwBookGuestDetail & JSXBase.HTMLAttributes<HTMLQwBookGuestDetailElement>;
      'qw-calendar': LocalJSX.QwCalendar & JSXBase.HTMLAttributes<HTMLQwCalendarElement>;
      'qw-calendar-guest-inline': LocalJSX.QwCalendarGuestInline & JSXBase.HTMLAttributes<HTMLQwCalendarGuestInlineElement>;
      'qw-calendar-inline': LocalJSX.QwCalendarInline & JSXBase.HTMLAttributes<HTMLQwCalendarInlineElement>;
      'qw-calendar-picker': LocalJSX.QwCalendarPicker & JSXBase.HTMLAttributes<HTMLQwCalendarPickerElement>;
      'qw-calendar-shorthand': LocalJSX.QwCalendarShorthand & JSXBase.HTMLAttributes<HTMLQwCalendarShorthandElement>;
      'qw-card': LocalJSX.QwCard & JSXBase.HTMLAttributes<HTMLQwCardElement>;
      'qw-counter': LocalJSX.QwCounter & JSXBase.HTMLAttributes<HTMLQwCounterElement>;
      'qw-currency': LocalJSX.QwCurrency & JSXBase.HTMLAttributes<HTMLQwCurrencyElement>;
      'qw-error': LocalJSX.QwError & JSXBase.HTMLAttributes<HTMLQwErrorElement>;
      'qw-extra': LocalJSX.QwExtra & JSXBase.HTMLAttributes<HTMLQwExtraElement>;
      'qw-extra-basket': LocalJSX.QwExtraBasket & JSXBase.HTMLAttributes<HTMLQwExtraBasketElement>;
      'qw-extra-card': LocalJSX.QwExtraCard & JSXBase.HTMLAttributes<HTMLQwExtraCardElement>;
      'qw-guest': LocalJSX.QwGuest & JSXBase.HTMLAttributes<HTMLQwGuestElement>;
      'qw-image': LocalJSX.QwImage & JSXBase.HTMLAttributes<HTMLQwImageElement>;
      'qw-input': LocalJSX.QwInput & JSXBase.HTMLAttributes<HTMLQwInputElement>;
      'qw-language': LocalJSX.QwLanguage & JSXBase.HTMLAttributes<HTMLQwLanguageElement>;
      'qw-loading': LocalJSX.QwLoading & JSXBase.HTMLAttributes<HTMLQwLoadingElement>;
      'qw-offers': LocalJSX.QwOffers & JSXBase.HTMLAttributes<HTMLQwOffersElement>;
      'qw-placeholder': LocalJSX.QwPlaceholder & JSXBase.HTMLAttributes<HTMLQwPlaceholderElement>;
      'qw-price': LocalJSX.QwPrice & JSXBase.HTMLAttributes<HTMLQwPriceElement>;
      'qw-room-base-info': LocalJSX.QwRoomBaseInfo & JSXBase.HTMLAttributes<HTMLQwRoomBaseInfoElement>;
      'qw-room-basket': LocalJSX.QwRoomBasket & JSXBase.HTMLAttributes<HTMLQwRoomBasketElement>;
      'qw-room-detail': LocalJSX.QwRoomDetail & JSXBase.HTMLAttributes<HTMLQwRoomDetailElement>;
      'qw-room-detail-card': LocalJSX.QwRoomDetailCard & JSXBase.HTMLAttributes<HTMLQwRoomDetailCardElement>;
      'qw-room-list': LocalJSX.QwRoomList & JSXBase.HTMLAttributes<HTMLQwRoomListElement>;
      'qw-room-list-card': LocalJSX.QwRoomListCard & JSXBase.HTMLAttributes<HTMLQwRoomListCardElement>;
      'qw-room-names': LocalJSX.QwRoomNames & JSXBase.HTMLAttributes<HTMLQwRoomNamesElement>;
      'qw-room-notification': LocalJSX.QwRoomNotification & JSXBase.HTMLAttributes<HTMLQwRoomNotificationElement>;
      'qw-room-rate': LocalJSX.QwRoomRate & JSXBase.HTMLAttributes<HTMLQwRoomRateElement>;
      'qw-room-rate-list': LocalJSX.QwRoomRateList & JSXBase.HTMLAttributes<HTMLQwRoomRateListElement>;
      'qw-room-rates': LocalJSX.QwRoomRates & JSXBase.HTMLAttributes<HTMLQwRoomRatesElement>;
      'qw-room-rich-info': LocalJSX.QwRoomRichInfo & JSXBase.HTMLAttributes<HTMLQwRoomRichInfoElement>;
      'qw-room-service': LocalJSX.QwRoomService & JSXBase.HTMLAttributes<HTMLQwRoomServiceElement>;
      'qw-separator': LocalJSX.QwSeparator & JSXBase.HTMLAttributes<HTMLQwSeparatorElement>;
      'qw-textarea': LocalJSX.QwTextarea & JSXBase.HTMLAttributes<HTMLQwTextareaElement>;
      'qw-week-calendar': LocalJSX.QwWeekCalendar & JSXBase.HTMLAttributes<HTMLQwWeekCalendarElement>;
    }
  }
}


