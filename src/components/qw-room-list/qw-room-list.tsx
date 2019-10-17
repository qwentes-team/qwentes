import {Component, h, Host, Prop, State} from '@stencil/core';
import {
  RoomModel,
  BasketService,
  RoomHelper,
  RoomQuery,
  RoomModelCollection,
  BasketWithPrice$,
  RoomService
} from 'booking-state-manager';
import {filter, switchMap} from 'rxjs/operators';

@Component({
  tag: 'qw-room-list',
  styleUrl: 'qw-room-list.css',
  shadow: false
})
export class QwRoomList {
  @Prop() QwRoomListTriggerBasket: boolean = false;
  @State() rooms: RoomModelCollection = {};

  constructor() {
    this.setRoomToBasket = this.setRoomToBasket.bind(this);
  }

  public componentDidLoad() {
    if (this.QwRoomListTriggerBasket) {
      BasketService.getBasket().subscribe();
    }

    RoomQuery.select().subscribe(res => {
      this.rooms = res;
    });

    BasketWithPrice$
      .pipe(
        filter(basket => !(basket as any).loading), // todo fix BasketModel e portare questo filter nel selettore
        switchMap(() => RoomService.getRooms()))
      .subscribe();
  }

  public setRoomToBasket(room: RoomModel) {
    BasketService.setRoomInBasket({
      roomId: room.roomId,
      rateId: RoomHelper.getCheapestRate(room).rateId,
      occupancyId: RoomHelper.getDefaultOccupancy(room).occupancyId,
      quantity: 1,
    }).subscribe();
  }

  private hasPrice(room: RoomModel) {
    return RoomHelper.getCheapestRateFormatted(room) !== RoomHelper.DEFAULT_NO_PRICE_LABEL;
  }

  public render() {
    return (
      <Host>
        {Object.values(this.rooms).map(r => {
          return <qw-room-card
            class={!this.hasPrice(r) && 'qw-room-card__disabled'}
            qw-room-card-title={r.name}
            qw-room-card-caption={RoomHelper.getCheapestRateFormatted(r)}
            qw-room-card-guests={RoomHelper.getDefaultOccupancy(r).definition.text}
            qw-room-card-beds={r.bedding.beds[0].count + ' ' + r.bedding.beds[0].type.text}
            qw-room-card-image={RoomHelper.getCoverImage(r).url}
            QwRoomCardOnClickBook={() => this.setRoomToBasket(r)}
          />
        })}
      </Host>
    );
  }
}
