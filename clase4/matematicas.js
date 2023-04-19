function matematicas() {
    function sumar(a,b){
    return a+b;
    }

    function restar(a,b){
        return a-b;
    }

    function multiplicar(a,b){
        return a*b;
    }

    function dividir(a,b){
        if(!validarCero(b)){
            return a / b;
        }
        
    }

    function validarCero(a){
        return a === 0;
    }

    return {
        sumar, 
        restar,
        multiplicar,
        dividir
    }

}

//otra forma:

function suma(a,b){
    return a+b;
    }

    function resta(a,b){
        return a-b;
    }

    function multiplica(a,b){
        return a*b;
    }

    function divide(a,b){
        if(!validarCero(b)){
            return a / b;
        }        
    }

    function validarCero(a){
        return a === 0;
    }

    return {
        suma, 
        resta,
        multiplica,
        divide
    }

    export { sumar, restar };