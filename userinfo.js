const {processArray , formatArrayStrings} = require('./arrayManipulation');

function createuserProfiles(names, modifiedNames) {
    return names.map((name,index)  => {
        return {
            originalname: name,
            modifiedname: modifiedNames[index],
            id: index + 1
        
        };
    });        
}
