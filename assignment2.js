// Task 1

function clos(num1){
        return function(num2){
            console.log(num1 + num2);
        }
    }

    let closure1 = clos(9);
    closure1(5);