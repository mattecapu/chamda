/*!
    Chained interface for Ramda
*/

import R from 'ramda';

const Chamda__factory = (data) => (new Chamda(data));

function Chamda(data) {
    // port of Ramda functions
    Object.keys(R).filter(x => x !== '__').forEach((func) => {
        let a = (...args) => Chamda__factory(R[func].apply(R, args.concat([data])));
        this[func] = a;
    });

    // method to get the transformed data
    this.end = () => data;
}

export default Chamda__factory;
