import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react'; 

/**
 * A AirlineLogo object
 */
class AirlineLogo extends Component {

    getImage(code) {
        const airlineLogo = {
            DL: 'dl.svg',
            QAN: 'qan.svg',
            SQ: 'sq.png',
            CX: 'cx.svg',
            JAL: 'jal.svg',
            ANA: 'ana.svg',
            EVA: 'eva.svg',
        }
        
        return `/airlineLogo/${airlineLogo[code]}`;
    }

    /**
     * This method generates a a airline logo
     * @returns {ReactElement} a image of an airline logo.
     */
    render() {
        return (
            <div>
                <Image rounded={true} size={'small'} src={this.getImage(this.props.airlineLogo)} />
            </div>
        );
    }
}

AirlineLogo.propTypes = {
	airlineLogo: PropTypes.string.isRequired,
};

export default AirlineLogo;