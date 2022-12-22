function escolheItemAleatorio(lista) {
  // Gera um índice aleatório entre 0 e o tamanho da lista
  const indiceAleatorio = Math.floor(Math.random() * lista.length);

  // Retorna o item da lista com base no índice aleatório gerado
  return lista[indiceAleatorio];
}


