function is_Int(num){
    if(num === undefined){
        throw new Error(`${num} is not an integer,
        current type: ${typeof num}`);
        }else{
        if(typeof num === 'number'){
            return parseInt(num);
        }else{
            throw new Error(`${num} is not an integer,
            current type: ${typeof num}`);
        }
    }
};
function is_Flt(num){
    if(num === undefined){
        throw new Error(`${num} is not a float(integer),
        current type: ${typeof num}`);
        }else{
        if(typeof num === 'number'){
            if(Number.isInteger(num)){
                return parseFloat(num);
            }else{
                return num;
            }
        }else{
            throw new Error(`${num} is not a float(integer),
            current type: ${typeof num}`);
        }
    }
}
function is_Str(string){
    if(string === undefined){
        throw new Error(`${string} is not an string,
        current type: ${typeof string}`);
        }else{
        if(typeof string === 'string'){
            if(string){
                return `${string}`
            }
        }else{
            throw new Error(`${string} is not a string,
            current type: ${typeof string}`);
        }
    }
}
function is_Bi(bi){
    if(bi === undefined){
        throw new Error(`${bi} is not an biginteger,
        current type: ${typeof bi}`);
        }else{
        if(typeof bi === 'bigint'){
            if(bi){
                return bi
            }
        }else{
            throw new Error(`${bi} is not a biginteger,
            current type: ${typeof bi}`);
        }
    }
}
function is_Bool(bool){
    if(bool === undefined){
        throw new Error(`${bool} is not a boolean,
        current type: ${typeof bool}`);
        }else{
        if(typeof bool === 'boolean'){
            return bool;
        }else{
            throw new Error(`${bool} is not a boolean,
            current type: ${typeof bool}`);
        }
    }
}
function is_Func(func){
    if(func === undefined){
        throw new Error(`${func} is not a function,
        current type: ${typeof func}`);
        }else{
        if(typeof func === 'function'){
            return func;
        }else{
            throw new Error(`${func} is not a function,
            current type: ${typeof func}`);
        }
    }
}
function is_Obj(obj){
    if(obj === undefined){
        throw new Error(`${obj} is not an object,
        current type: ${typeof obj}`);
        }else{
        if(typeof obj === 'object'){
            return obj;
        }else{
            throw new Error(`${obj} is not an object,
            current type: ${typeof obj}`);
        }
    }
}
function is_Sym(sym){
    if(sym === undefined){
        throw new Error(`${sym} is not a symbol,
        current type: ${typeof sym}`);
        }else{
        if(typeof sym === 'symbol'){
            return sym;
        }else{
            throw new Error(`${sym} is not a symbol,
            current type: ${typeof sym}`);
        }
    }
}
function is_Equal_to(a, b){
    if(typeof a === typeof b){
        if(a === b){
            return true;
        }else{
            return false;
        }
    }else{
        throw new Error(`${a} and ${b} is not the same type,
        current type: (${a}: ${typeof a} , ${b}: ${typeof b})`);
    }
}