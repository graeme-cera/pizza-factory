export const helpers = {
    
    limitToList: (e, pattern) => {
        let value = (e.target.value || ' ').toUpperCase(); 
        return pattern.indexOf(value) > -1 ? value : '';
    },

    getResponseValue: (responses, name) => {
        if(!responses){ return '';}
        let matches = responses.filter( r => r.name.indexOf(`${name}`) !== -1);


        switch(matches.length){
            case 0:
                return '';

            case 1:
                return matches[0].value;

            default:
                let value = {};
                matches.map(match => value[match.name.substring(name.length+1)] = match.value);
                return value;
        }
    },

    replaceShortCodes: (shortCodes, e) => {

        let value = e.target.value || '';
    
        if(!shortCodes || value.indexOf('[') === -1) {
            return value;
        }
    
        let fragments = value.split('[');
    
        for(var i = 0; i < fragments.length; i++){
            var fragment = fragments[i];
    
            if(fragment.indexOf(']') === -1) {
                fragments[i] = `${fragment}`;
                continue;
            }
            
            var subFragments = fragment.split(']');
            var shortCode = (subFragments[0] || ' ');
            var expansion = shortCodes[shortCode.toUpperCase()] || `[${shortCode}]`;
    
            fragments[i] = subFragments.length === 2 ? `${expansion}${subFragments[1]}` : expansion;
        }
    
        return fragments.join('');
    }

};
