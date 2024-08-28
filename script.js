function redirecionar(){
  window.location.href = "exercicio2-formulario-component.html";
}

function cancelarFormulario(){
  window.location.href = "index.html";
}

function enviarFormulario(){
  window.location.href = "index.html";
}

document.getElementById('telefone').addEventListener('input', function (e) {
  var x = e.target.value.replace(/\D/g, '').slice(0, 13);
  e.target.value = x.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
});

function salvarDados() {
  const nome = document.getElementById('nome').value;
  const usuario = document.getElementById('user').value;
  const senha = document.getElementById('senha').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const nascimento = document.getElementById('nascimento').value;
  const peso = document.getElementById('peso').value;
  const tipoSanguineo = document.getElementById('tipoSanguineo').value;
  const fatorRh = document.getElementById('fatorRh').value;

  // Pegando o valor do rádio selecionado
  const radioFeminino = document.getElementById('radioFeminino').checked ? 'Feminino' : '';
  const radioMasculino = document.getElementById('radioMasculino').checked ? 'Masculino' : '';
  const radioOutro = document.getElementById('radioOutro').checked ? 'Outro' : '';

  const documento = document.getElementById('documento').value;

  // Pegando os valores dos checkboxes marcados
  const checkbox_1 = document.getElementById('checkbox_1').checked ? 'Opção 1' : '';
  const checkbox_2 = document.getElementById('checkbox_2').checked ? 'Opção 2' : '';
  const checkbox_3 = document.getElementById('checkbox_3').checked ? 'Opção 3' : '';
  const checkbox_4 = document.getElementById('checkbox_4').checked ? 'Opção 4' : '';
  const checkbox_5 = document.getElementById('checkbox_5').checked ? 'Opção 5' : '';
  const checkbox_6 = document.getElementById('checkbox_6').checked ? 'Opção 6' : '';

  const comentarios = document.getElementById('comentarios').value;

  //LocalStorage
  localStorage.setItem('nome', nome);
  localStorage.setItem('usuario', usuario);
  localStorage.setItem('senha', senha);
  localStorage.setItem('email', email);
  localStorage.setItem('telefone', telefone);
  localStorage.setItem('nascimento', nascimento);
  localStorage.setItem('peso', peso);
  localStorage.setItem('tipoSanguineo', tipoSanguineo);
  localStorage.setItem('fatorRh', fatorRh);
  localStorage.setItem('radio', radioFeminino || radioMasculino || radioOutro);
  localStorage.setItem('documento', documento);
  localStorage.setItem('checkbox_1', checkbox_1);
  localStorage.setItem('checkbox_2', checkbox_2);
  localStorage.setItem('checkbox_3', checkbox_3);
  localStorage.setItem('checkbox_4', checkbox_4);
  localStorage.setItem('checkbox_5', checkbox_5);
  localStorage.setItem('checkbox_6', checkbox_6);
  localStorage.setItem('comentarios', comentarios);

  alert('Dados salvos com sucesso!');
  window.location.href = 'index.html';
}

function carregarDados() {
  // Dados do LocalStorage
  const nome = localStorage.getItem('nome');
  const usuario = localStorage.getItem('usuario');
  const senha = localStorage.getItem('senha');
  const email = localStorage.getItem('email');
  const telefone = localStorage.getItem('telefone');
  const nascimento = localStorage.getItem('nascimento');
  const peso = localStorage.getItem('peso');
  const tipoSanguineo = localStorage.getItem('tipoSanguineo');
  const fatorRh = localStorage.getItem('fatorRh');
  const radio = localStorage.getItem('radio');
  const documento = localStorage.getItem('documento');
  const checkbox_1 = localStorage.getItem('checkbox_1');
  const checkbox_2 = localStorage.getItem('checkbox_2');
  const checkbox_3 = localStorage.getItem('checkbox_3');
  const checkbox_4 = localStorage.getItem('checkbox_4');
  const checkbox_5 = localStorage.getItem('checkbox_5');
  const checkbox_6 = localStorage.getItem('checkbox_6');
  const comentarios = localStorage.getItem('comentarios');

  // Carregando os dados no formulário
  if (nome) document.getElementById('nome').value = nome;
  if (usuario) document.getElementById('user').value = usuario;
  if (senha) document.getElementById('senha').value = senha;
  if (email) document.getElementById('email').value = email;
  if (telefone) document.getElementById('telefone').value = telefone;
  if (nascimento) document.getElementById('nascimento').value = nascimento;
  if (peso) document.getElementById('peso').value = peso;
  if (tipoSanguineo) document.getElementById('tipoSanguineo').value = tipoSanguineo;
  if (fatorRh) document.getElementById('fatorRh').value = fatorRh;

  // Marcando o rádio selecionado
  if (radio === 'Feminino') document.getElementById('radioFeminino').checked = true;
  if (radio === 'Masculino') document.getElementById('radioMasculino').checked = true;
  if (radio === 'Outro') document.getElementById('radioOutro').checked = true;

  if (documento) document.getElementById('documento').value = documento;
  
  // Marcando os checkboxes
  if (checkbox_1) document.getElementById('checkbox_1').checked = true;
  if (checkbox_2) document.getElementById('checkbox_2').checked = true;
  if (checkbox_3) document.getElementById('checkbox_3').checked = true;
  if (checkbox_4) document.getElementById('checkbox_4').checked = true;
  if (checkbox_5) document.getElementById('checkbox_5').checked = true;
  if (checkbox_6) document.getElementById('checkbox_6').checked = true;
  
  if (comentarios) document.getElementById('comentarios').value = comentarios;

  alert('Dados carregados com sucesso!');
}
