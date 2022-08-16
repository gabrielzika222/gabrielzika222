$('#inputola').click(
    function(){
        // cadastro =
        // {
        //     'nome' :document.getElementById('inputNome').value, 
        //     'endereco':document.getElementById('inputendereco').value,
        //     'email':document.getElementById('inputemail').value

        // }
                  
        //           alert('meu nome é: ' +cadastro.nome + 'sou de '+  cadastro.endereco+'meu email' + cadastro.email);
        //           alert(cadastro.endereco);
        //           alert(cadastro.email);

        calculo=
        {  
        'a':document.getElementById('inputA').value,
        'b':document.getElementById('inputB').value,
        'c':document.getElementById('inputC').value
}
      let media = (parseInt(calculo.a) + parseInt(calculo.b) + parseInt(calculo.c)) /3;
      let exame = (10-media);

      if (media >= 7) {
          alert('voce foi aprovado!');
      } else {
          alert('a nota que vc precisa é :'+exame);
      }

     
})