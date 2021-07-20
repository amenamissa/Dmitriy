// document.querySelector('#duplicateField1').onclick = myClick;
// document.querySelector('#duplicateField1').addEventListener('click', myClick);
document.querySelector('#duplicateField1').addEventListener('click', myClick);
function myClick(enent){
  let prime = document.querySelector('#duplicateField').value;
  event.preventDefault();
  console.log(prime);
  document.querySelector('#duplicateField2 ').innerHTML += prime;

}


