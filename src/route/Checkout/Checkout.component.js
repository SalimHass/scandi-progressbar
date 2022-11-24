import {
    Checkout as SourceCheckout,
} from 'SourceRoute/Checkout/Checkout.component';
import ContentWrapper from 'Component/ContentWrapper';
import "./Checkout.override.style.scss"
import CheckoutProgress from 'Component/CheckoutProgress';

/** @namespace Storetest/Route/Checkout/Component */
export default class CheckoutComponent extends SourceCheckout {
    // TODO implement logic
    render ( ){
        console.log(this.stepMap)
        return (
            <main block="Checkout">
                <CheckoutProgress steps={this.stepMap} currentStep={this.props.checkoutStep}/>
            <ContentWrapper
              wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
              label={ __('Checkout page') }
              >
                { this.renderSummary(true) }
                <div block="Checkout" elem="Step">
                    { this.renderTitle() }
                    { this.renderGuestForm() }
                    { this.renderStep() }
                    { this.renderLoader() }
                </div>
                <div>
                    { this.renderSummary() }
                    { this.renderPromo() }
                    { this.renderCoupon() }
                </div>
            </ContentWrapper>
        </main>
        )

    }
}
