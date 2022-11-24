// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './CheckoutProgress.style';

/** @namespace Storetest/Component/CheckoutProgress/Component */
export class CheckoutProgressComponent extends PureComponent {
    constructor(props) {
        super(props)
    }

    static propTypes = {
        // TODO: implement prop-types
    };

    render() {
        let steps = [];
        let currentStepIndex = 0;
        Object.keys(this.props.steps).forEach((key, index) => {
            steps.push({ "key": key, "title": this.props.steps[key].title.value.split(" step")[0] })
            if (key === this.props.currentStep) {
                currentStepIndex = index;
            }
        });
        console.log(this.props.currentStep, steps)


        return (
            <>

                <div block="CheckoutProgress">
                    {steps.map((e, index) => {
                        console.log(e.key)
                        return (

                            <>

                                {index <= currentStepIndex ? <div className='line--selected' ></div> :
                                    <div className='line--unselected' ></div>}
                                {index < steps.length - 1 && <div className='step--container'>
                                    {index <= currentStepIndex ? <div className='step step--selected'>{index + 1}</div> :
                                        <div className='step step--unselected'>{index + 1}</div>}
                                    {index <= currentStepIndex ? <div className='step--text '>{e.title}</div> : <div className='step--text text--unselected'>{e.title}</div>}</div>}

                            </>)


                    })}

                </div>
            </>
        );
    }
}

export default CheckoutProgressComponent;
