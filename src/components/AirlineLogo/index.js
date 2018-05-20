import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react'; 

class AirlineLogo extends Component {

    getImage(code) {
        const airlineLogo = {
            DL: 'dl.svg',
            QAN: 'qan.svg',
            SQ: 'sq.svg',
            CX: 'cx.svg',
            JAL: 'jal.svg',
            ANA: 'ana.svg',
            EVA: 'eva.svg',
        }
        
        return `/airlineLogo/${airlineLogo[code]}`;
    }

    render() {
        return (
            <div>
                <Image rounded={true} size={'tiny'} src={this.getImage(this.props.airlineLogo)} />
            </div>
        );
    }
}

AirlineLogo.propTypes = {
	airlineLogo: PropTypes.string.isRequired,
};

export default AirlineLogo;