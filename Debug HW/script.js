function submitForm(event){
  event.preventDefault()
  
  var fName = document.getElementById('firstName').value;

  document.getElementById('valueFirstName').innerHTML = fName;

  alert('Your name is' + ' ' + fName);
}
