function mostrarCategorias(id) {
  const categoriasTexto = `
    <ul>
      <li><strong>Matemática do Fazer:</strong> Medição, cálculo e contagem no cotidiano.</li>
      <li><strong>Matemática da Cooperação:</strong> Trocas e saberes entre feirantes.</li>
      <li><strong>Matemática da Resistência:</strong> Práticas para manter o modo de vida.</li>
    </ul>
  `;
  const div = document.getElementById(`categorias-${id}`);
  if (div.style.display === 'none' || div.style.display === '') {
    div.innerHTML = categoriasTexto;
    div.style.display = 'block';
  } else {
    div.innerHTML = '';
    div.style.display = 'none';
  }
}
