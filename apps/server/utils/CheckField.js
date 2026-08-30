
const CheckField=(fields)=>{
    if(!fields||typeof fields!=="object"||Array.isArray(fields)){
           return { success: false, message: "Invalid fields payload" };

    }
    
    for(let key in fields){
     
        const val=fields[key];

        // if(val.startsWith('_'))continue;

        
        if(String(val).trim()===""||val===undefined||val===null){
            return {
                status:false,
                message:`This field is required ${key}`
            }
        }

    }

    return {success:true};

};

export default CheckField;