// Calculate Area of Trapezoid


// Event listeners
document.getElementById('calculate').addEventListener('click', main);

// Functions
function main() {
   
    // INPUT 
    
  
    let b1 = Number(document.getElementById('b1').value);
    let b2 = Number(document.getElementById('b2').value);
    let h = Number(document.getElementById('h').value);

    // PROCESS 
    let result = ((b1 + b2) / 2) * h;

    // OUTPUT 
    document.getElementById('result').innerHTML = result;
}