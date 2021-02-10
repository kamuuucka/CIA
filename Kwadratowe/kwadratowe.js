function kwadratowe(a,b,c){
    if(isFinite(a) && isFinite(b) && isFinite(c)){
        if(a!==0){
            var delta = b*b - (4 * a * c);
            if(delta > 0){
                var x1 = (-b - Math.sqrt(delta)) / 2 * a;
                var x2 = (-b + Math.sqrt(delta)) / 2 * a;
            }
            else if (delta = 0){

            }
            else console.info("Nie ma pierwiastków");
        }
        else console.error("A nie może być zerem");
    }
    else console.error("Coś tutaj śmierdzi jak nie liczba");
}