import {ExtraModel, RoomBasketModel} from '@qwentes/booking-state-manager';

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
  room: RoomBasketModel;
}

export interface QwChangeExtraEvent {
  quantity: string;
  extraId: ExtraModel['extraId'];
}
