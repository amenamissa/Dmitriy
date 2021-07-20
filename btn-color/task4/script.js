const testTextField = document.querySelector('#testTextField');


testTextField.addEventListener('click', function(event){
  this.textContent = prompt('');
  event.preventDefault();
  
})
