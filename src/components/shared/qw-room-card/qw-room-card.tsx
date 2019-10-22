import {Component, Host, h, Prop} from '@stencil/core';
import {QwImage} from '../qw-image/qw-image';
import {QwButton} from '../qw-button/qw-button';

@Component({
  tag: 'qw-room-card',
  styleUrl: 'qw-room-card.css',
  shadow: false
})
export class QwRoomCard {
  @Prop() QwRoomCardTitle: string;
  @Prop() QwRoomCardPrice: string;
  @Prop() QwRoomCardAvailability: string;
  @Prop() QwRoomCardGuests: string;
  @Prop() QwRoomCardBeds: string;
  @Prop() QwRoomCardImage: string;
  @Prop() QwRoomCardIsLoading: boolean;
  @Prop() QwRoomCardOnClickBook: () => void;

  render() {
    return (
      <Host>
        <qw-card>
          <div class="qw-room-card__header">
            <h4 class="qw-room-card__title">{this.QwRoomCardTitle}</h4>
            {!this.QwRoomCardIsLoading
              ? (<h6 class="qw-room-card__caption">
                <div>{this.QwRoomCardPrice}</div>
                <div>{`${this.QwRoomCardAvailability} availability`}</div>
              </h6>)
              : <qw-loading class="qw-room-card__caption" qw-loading-size="22"/>
            }
          </div>
          <QwImage imageUrl={this.QwRoomCardImage} alt={this.QwRoomCardTitle}/>
          <div class="qw-room-card__footer">
            <p>{this.QwRoomCardGuests}</p>
            <p>{this.QwRoomCardBeds}</p>
          </div>
          <div class="qw-room-card__cta">
            <QwButton
              QwButtonLabel="Book now"
              QwButtonIsLoading={this.QwRoomCardIsLoading}
              QwButtonOnClick={() => this.QwRoomCardOnClickBook()}/>
          </div>
        </qw-card>
      </Host>
    );
  }
}
