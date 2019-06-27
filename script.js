    let firstColor = document.getElementById('first');
    let secondColor = document.getElementById('second');



    let direction  = 'to right';
    let inputs = document.querySelectorAll('input[type="color"]');
    let radioBtns = document.querySelectorAll('input[type="radio"]');
    radioBtns.forEach(btn => {
        btn.addEventListener('click', function() {
         direction =  this.dataset['direction'];
         
        })
    })
    inputs.forEach(input => {
        input.addEventListener('change', function() {
       
    let firstColor =  document.querySelector('#first').value;
    let secondColor = document.querySelector('#second').value;
    
    document.querySelector('body').style.backgroundImage = `linear-gradient(${direction}, ${firstColor}, ${secondColor})`;
    document.querySelector('h3').innerHTML = `linear-gradient(${direction}, ${firstColor}, ${secondColor})`;
    
    
    })
    
    })

document.getElementById('reset').addEventListener('click', () => {
   firstColor.value = '#0BB6C2';
   secondColor.value = '#66E90F';
   document.querySelector('body').style.backgroundImage = 'linear-gradient(to right, #0BB6C2, #66E90F)';
   document.querySelector('h3').innerHTML = '';
});
// console.log(document.getElementById('reset'));


