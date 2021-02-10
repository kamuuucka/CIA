/**
 * @author: Kamila Matuszak
 * @version 2.0
 *
 * Funkcja oblicza pierwiastki funkcji kwadratowej w konsoli.
 *
 * @param {Number} a - Współczynnik a (kierunkowy) w funkcji kwadratowej.
 * @param {Number} b - Współczynnik b w funkcji kwadratowej.
 * @param {Number} c - Współczynnik c w funkcji kwadratowej.
 * @returns {Array | boolean} Rozwiązania funckji kwadratowej w postaci dwuelementowej tablicy lub fałsz, jeżeli jest błąd.
 *
 * @example
 * // [-1.25, 0]
 * kwadratowe(4,5);
 * @example
 * // [-4.444317890592218, -0.01022756395323654]
 * kwadratowe(22,98,1);
 * @example
 * // false
 * kwadratowe(4, 5, 6);
 * @example
 * // false
 * kwadratowe(masło);
 * @example
 * // false
 * kwadratowe(0,5,2);
 */

function kwadratowe(a= 0, b= 0, c= 0){
    if (a===0 || isNaN(a) || isNaN(b) || isNaN(c)){
        if (a===0) console.error("A nie może być 0!");
        console.error("Wpisałeś złą wartość!");
        return false;
    }
    else {
        delta = b * b - 4 * a * c;
        if(delta >= 0) {
            deltaP = Math.sqrt(delta);
            x1 = (-b - deltaP) / (2 * a);
            x2 = (-b + deltaP) / (2 * a);
            var array = [x1, x2];
            console.info("Znaleziono rozwiązania: ");
            return array;
        }
        else{
            console.error("Nie ma rozwiązań!");
            return false;
        }

    }

}