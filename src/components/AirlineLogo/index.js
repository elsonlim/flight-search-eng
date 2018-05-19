import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'; 

class AirlineLogo extends Component {

    // { origin: 'USA', IATA: 'DL' },
    // { origin: 'AUS', IATA: 'QAN' },
    // { origin: 'SGP', IATA: 'SQ' },
    // { origin: 'HKG', IATA: 'CX' },
    // { origin: 'JPN', IATA: 'JAL' },
    // { origin: 'JPN', IATA: 'ANA' },
    // { origin: 'TWN', IATA: 'BR' },
    // { origin: 'VNM', IATA: 'EVA' },

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

export default AirlineLogo;