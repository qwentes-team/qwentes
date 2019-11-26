import {ExtraModel, RoomBasketModel, RoomModel} from '@qwentes/booking-state-manager';

export * from './components';

export enum QwCalendarGuestInlineInputType {
  Guest = 'guest',
  Date = 'date',
}

export enum QwRoomListCardButtonType {
  BookNow = 'bookNow',
  ViewRoom = 'viewRoom',
  ChangeDate = 'changeDate',
}

export enum QwRoomListType {
  Inline = 'inline',
  Grid = 'grid',
}

export interface QwChangeRoomEvent {
  quantity: string;
  room?: RoomBasketModel;
  roomId?: RoomModel['roomId'];
}

export interface QwChangeExtraEvent {
  quantity: string;
  extraId: ExtraModel['extraId'];
}

export enum GuestDetailFormProperty {
  FirstName = 'firstName',
  LastName = 'lastName',
  EmailAddress = 'emailAddress',
  PhoneNumber = 'phoneNumber',
  PhoneCountryCode = 'phoneCountryCode',
  Phone = 'phone',
  ConfirmConditions = 'confirmConditions',
  Title = 'title',
  CountryCode = 'countryCode',
}
