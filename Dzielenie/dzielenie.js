/**
 * @author Kamila Matuszak
 * przykład: dzielenie(5)	zwraca false
 * przykład: dzielenie(6)	zwraca true
 * przykład: dzielenie(8,4)	zwraca true
 * przykład: dzielenie(7,3)	zwraca false
 * przykład: dzielenie(a)	zwraca null
 */

function dzielenie(a, b = 2){
    if (isFinite(a) && isFinite(b)){
        if (a % b === 0) console.info("Jest podzielna przez " + b);
        else console.info("Nie jest podzielna przez " + b);
    }
    else console.error("Wpisałeś coś innego niż liczbę!");
}