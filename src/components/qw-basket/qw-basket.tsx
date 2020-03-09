import {Component, Host, h, State, Prop, Event, EventEmitter} from '@stencil/core';
import {
  BasketHelper, BasketIsLoading$, BasketService, BasketWithPrice$, Language,
  MoneyPrice, SessionHelper, SessionLoaded$, SessionService,
} from '@qwentes/booking-state-manager';
import {QwButton} from '../shared/qw-button/qw-button';
import {switchMap} from 'rxjs/operators';

@Component({
  tag: 'qw-basket',
  styleUrl: 'qw-basket.css',
  shadow: false,
})
export class QwBasket {
  @Prop() qwBasketShowEmptyButton: boolean = false;
  @Prop() qwBasketShowBookNowButton: boolean = false;
  @Prop() qwBasketShowPriceIfEmpty: boolean = false;
  @Prop() qwBasketShowTaxes: boolean = false;
  @Prop() qwBasketShowOnSiteTaxes: boolean = false;
  @State() totalPrice: MoneyPrice;
  @State() onSiteTaxes: string;
  @State() taxesMessage: string;
  @State() isLoading: boolean;
  @State() numberOfGuests: number;
  @State() numberOfAccommodation: number;
  @Event() qwBasketBookNow: EventEmitter<void>;
  @Event() qwBasketClickPrice: EventEmitter<void>;
  @Event() qwBasketIsAccommodationSatisfy: EventEmitter<boolean>;

  public componentWillLoad() {
    SessionService.getSession().subscribe();
    SessionLoaded$.pipe(switchMap((session) => {
      this.numberOfGuests = SessionHelper.getTotalGuests(session);
      return BasketService.getBasket(session)
    })).subscribe();

    BasketWithPrice$.subscribe(basket => {
      this.totalPrice = BasketHelper.getTotalOriginalPrice(basket);
      this.onSiteTaxes = basket.taxes.onSite.text;
      this.taxesMessage = BasketHelper.getTaxesFormatted(basket);
      this.numberOfAccommodation = BasketHelper.getNumberOfAccommodation(basket);
      this.qwBasketIsAccommodationSatisfy.emit(this.isAccommodationSatisfy());
    });
    BasketIsLoading$.subscribe(isLoading => this.isLoading = isLoading);
  }

  private deleteBasket() {
    BasketService.deleteBasket().subscribe();
  }

  bookNow = () => {
    this.qwBasketBookNow.emit();
  };

  private clickPrice() {
    this.qwBasketClickPrice.emit();
  }

  private isTotalPriceZero() {
    return !this.totalPrice || this.totalPrice.value.amount === 0
  }

  private isAccommodationSatisfy() {
    return this.numberOfGuests <= this.numberOfAccommodation;
  }

  public render() {
    return (
      <Host class={this.isAccommodationSatisfy() ? 'qw-basket--active' : ''}>
        {(!this.isTotalPriceZero() || this.qwBasketShowPriceIfEmpty) && <div class="qw-basket__price" onClick={() => this.clickPrice()}>
          {this.qwBasketShowTaxes && <div class={`qw-basket__tax-total ${this.isLoading ? 'qw-basket__price__amount--disabled' : ''}`}>
            {this.taxesMessage}
          </div>}
          <div class={`qw-basket__price-total ${this.isLoading ? 'qw-basket__price__amount--disabled' : ''}`}>
            {this.totalPrice && this.totalPrice.text}
          </div>
        </div>}
        {this.qwBasketShowEmptyButton && <QwButton
          QwButtonLabel={Language.getTranslation('emptyBasket')}
          QwButtonOnClick={this.deleteBasket}/>}
        {this.qwBasketShowBookNowButton && <QwButton
          QwButtonClass="qw-button--checkout"
          QwButtonLabel={Language.getTranslation('checkout')}
          QwButtonDisabled={!this.totalPrice || this.isTotalPriceZero() || !this.isAccommodationSatisfy()}
          QwButtonOnClick={this.bookNow}/>}
        {(!this.isTotalPriceZero() && this.qwBasketShowOnSiteTaxes) && <div class={`qw-basket__on-site-tax-total ${this.isLoading ? 'qw-basket__price__amount--disabled' : ''}`}>
          {this.onSiteTaxes}
        </div>}
      </Host>
    );
  }
}
