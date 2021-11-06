const buscarInfo = document.querySelector("#buscar-dados");
const dadosCarro = document.querySelector("#informacao-carro");
const modelo = document.querySelector(".modelo");



const searchCarInfo = () => {
  const dados = `https://parallelum.com.br/fipe/api/v1/carros/marcas/29/modelos/8057/anos/2018-3`;
  fetch(dados)
    .then((resposta) => resposta.json())
    .then((car) => {
      dadosApi(car);
      console.log(car);
    })
    .catch((error) => error);
};


const dadosApi = (carro) => {
  modelo.innerHTML = `${carro.Modelo}`;
  dadosCarro.innerHTML = `
    <li>Ano: ${carro.AnoModelo}</li>
  <li>CódigoFipe: ${carro.CodigoFipe}</li>
  <li> Combustível: ${carro.Combustivel}</li>
  <li>Marca: ${carro.Marca}</li>
  <li> Mês Referência: ${carro.MesReferencia}</li>
  <li> Sigla Combustível: ${carro.SiglaCombustivel}</li>
  <li> Tipo Veículo: ${carro.TipoVeiculo}</li>
  <li> Valor: ${carro.Valor}</li>`;
};


buscarInfo.addEventListener("click", searchCarInfo);