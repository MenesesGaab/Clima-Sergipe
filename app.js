//Autor: Gabriel Silva Meneses Barros
// Inspiração: Imersão Dev Alura 07/09/24
// Base de instruções do site

function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    // pelo seu ID. Essa seção será atualizada com os novos resultados.
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa)
    //para não aparecer nada área central ao apertar "pesquisar"
    if (campoPesquisa == ""){
        section.innerHTML = "<p> Nenhuma cidade foi inserida!</p>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase();
    // Inicializa uma string vazia que será utilizada para armazenar
    // os resultados da pesquisa formatados em HTML.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada elemento (dado) do array 'dados'.
    // 'dados' é um array que contém os dados a serem exibidos
    // como resultados da pesquisa (assumindo que esteja definido em outro lugar).
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        if(titulo.includes(campoPesquisa)|| descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)) {
            // Concatena uma nova div com as informações do dado atual
            // à string 'resultados'. Essa div representa um item de resultado
            // e contém o título, descrição e link do dado.
            resultados += `
            <div class="item-resultado">
              <h2>${dado.titulo}</h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank">Temperatura Atual</a>
            </div>
          `; 
        }
    }
    if (!resultados){
        resultados = "<p>Nada foi encontrado!</p>";
    }
    // Atribui o conteúdo da string 'resultados' (que agora contém
    // todas as divs dos itens de resultado) ao atributo innerHTML
    // da seção, substituindo o conteúdo anterior.
    section.innerHTML = resultados;
  } 