    document.getElementsByTagName('p')[1].innerText = "Descrição Breve Sobre Mim"

      document.getElementsByTagName('main')[0].style.backgroundColor = "rgb(76,164,109)"

      document.getElementsByTagName('section')[0].style.backgroundColor = "white"

      document.getElementsByTagName('h1')[0].innerText = "Exercício 5.1 - JavaScript"

      document.getElementsByTagName('p')[2].innerText = document.getElementsByTagName('p')[2].innerText.toUpperCase()

      let exibirP = document.getElementsByTagName('p');
      for (index=0; index<exibirP.length;index++){
        console.log(exibirP[index])
      }