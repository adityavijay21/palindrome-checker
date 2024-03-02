document.getElementById('check-btn').addEventListener('click', function() {
  const userInput = document.getElementById('text-input').value.trim().toLowerCase();
  if (!userInput) {
    alert('Please input a value');
    return;
  }
  
  const sanitizedInput = userInput.replace(/[^A-Za-z0-9]/g, '');
  const reversedInput = sanitizedInput.split('').reverse().join('');
  
  if (sanitizedInput === reversedInput) {
    document.getElementById('result').textContent = userInput + ' is a palindrome';
  } else {
    document.getElementById('result').textContent = userInput + ' is not a palindrome';
  }
});
