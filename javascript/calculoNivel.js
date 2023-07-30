
function calculoExperiencia(anos){
    if (anos == 0 ){
        console.log("Inexperiente");
    }else{
        if( anos <= 2){
            console.log("Iniciante");
        }else{
            if( anos > 2 && anos <= 3){
                console.log("Intermediário");
            }else{
                if(anos > 3 && anos <= 6 ){
                    console.log("Avançado");
                }
                else{
                    console.log("Especialista");
                }
            }
        }
    }    
}


console.log(calculoExperiencia(0));