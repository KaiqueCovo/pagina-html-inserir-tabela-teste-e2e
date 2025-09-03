document.getElementById('form-item').addEventListener('submit', function (e) {
  e.preventDefault();
  const input = document.getElementById('input-item');
  const valor = input.value.trim();

  if (valor !== '') {
    const li = document.createElement('li');
    li.textContent = valor;
    document.getElementById('lista-itens').appendChild(li);
    input.value = '';
  }
});
