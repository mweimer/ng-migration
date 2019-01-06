
export function filter() {
    'ngInject';

    return function(name, targetName) {
        if (name === targetName) {
            return '<mark>' + name + '</mark>';
        }

        return name;
    }
}


export default filter;