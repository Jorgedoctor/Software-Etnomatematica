function mostrarCategorias(id) {
  let conteudo = "";

  if (id === 1) {
    conteudo = `
      <ul>
        <li><strong>Matemática do Fazer:</strong> Realiza cálculos mentais constantes ao pesar e medir grãos, ajustando quantidades conforme o valor disponível do freguês.</li>
        <li><strong>Matemática da Cooperação:</strong> Compartilha informações de preços e mercadorias com outros feirantes, fortalecendo relações de troca.</li>
        <li><strong>Matemática da Resistência:</strong> Mantém práticas tradicionais de comercialização mesmo diante das pressões do mercado formal.</li>
      </ul>
    `;
  } 
  
  else if (id === 2) {
    conteudo = `
      <ul>
        <li><strong>Matemática do Fazer:</strong> Ajusta quantidades de frutas e verduras sem uso de balança, utilizando estimativas precisas baseadas na experiência.</li>
        <li><strong>Matemática da Cooperação:</strong> Organiza os produtos de forma coletiva com outros feirantes, facilitando a circulação e venda.</li>
        <li><strong>Matemática da Resistência:</strong> Permanece na feira como forma de sustento e continuidade de saberes familiares.</li>
      </ul>
    `;
  } 
  
  else if (id === 3) {
    conteudo = `
      <ul>
        <li><strong>Matemática do Fazer:</strong> Utiliza estratégias de agrupamento e contagem para agilizar as vendas de frutas.</li>
        <li><strong>Matemática da Cooperação:</strong> Estabelece parcerias informais para divisão de espaços e apoio nas vendas.</li>
        <li><strong>Matemática da Resistência:</strong> Sustenta sua permanência na feira diante das instabilidades econômicas.</li>
      </ul>
    `;
  } 
  
  else if (id === 4) {
    conteudo = `
      <ul>
        <li><strong>Matemática do Fazer:</strong> Na produção do beiju, mobiliza saberes relacionados à medida e proporção na preparação da massa, ao controle do tempo no uso do fogo e à definição dos tamanhos das unidades comercializadas, articulando cálculo, अनुभव e percepção sensível no fazer cotidiano.</li>
        
        <li><strong>Matemática da Cooperação:</strong> A prática se constrói também na partilha de saberes e insumos com outros feirantes, na ajuda mútua em momentos de maior movimento e na circulação de conhecimentos sobre preparo e comercialização, evidenciando relações de reciprocidade no espaço da feira.</li>
        
        <li><strong>Matemática da Resistência:</strong> A produção artesanal do beiju constitui-se como prática de resistência, ao manter saberes tradicionais e modos próprios de existência frente às lógicas hegemônicas do mercado, afirmando a permanência cultural e econômica no território da feira.</li>
      </ul>
    `;
  }

  const div = document.getElementById(`categorias-${id}`);

  if (div.style.display === "none" || div.style.display === "") {
    div.innerHTML = conteudo;
    div.style.display = "block";
  } else {
    div.innerHTML = "";
    div.style.display = "none";
  }
}
