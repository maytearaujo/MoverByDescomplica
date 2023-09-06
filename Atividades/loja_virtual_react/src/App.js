import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <div class="container bg-white rounded-top mt-5" id="zero-pad">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-10 col-12 pt-3" id="carrinho">
        <div class="d-flex">
          <div class="pt-1">
            <h4>Meus Produtos</h4>
          </div>
        </div>
        <div class="d-flex flex-column pt-4">
          <div>
            <h5 class="text-uppercase font-weight-normal">Carrinho de Compras</h5>
          </div>
          <div class="font-weight-normal">2 items</div>
        </div>
        <div class="d-flex flex-row px-lg-5 mx-lg-5 mobile" id="heading">
          <div class="px-lg-5 mr-lg-5" id="produc">PRODUTOS</div>
          <div class="px-lg-5 ml-lg-5" id="prc">PREÇO</div>
          <div class="px-lg-5 ml-lg-1" id="quantity">QUANTIDADE</div>
          <div class="px-lg-5 ml-lg-3" id="total">TOTAL</div>
        </div>
        <div id="produto0"
          class="d-flex flex-row justify-content-between align-items-center pt-lg-4 pt-2 pb-3 border-bottom mobile">
          <div class="d-flex flex-row align-items-center">
            <div><img
                src="https://media.istockphoto.com/id/1473628793/pt/foto/woman-flat-shoes-with-purse-in-fashion-store-display-window-in-venice.jpg?b=1&s=170667a&w=0&k=20&c=uiidIRATlRSvaDdI4vH5BhI7GWeHs9Y_Dug3ITF63-0="
                width="150" height="150" alt="" id="image"/></div>
            <div class="d-flex flex-column pl-md-3 pl-1">
              <div>
                <h6>Sapatilha de onça</h6>
              </div>
            </div>
          </div>
          <div class="pl-md-0 pl-1"><b>R$ 50,00</b></div>
          <div class="pl-md-0 pl-2">
            <span class="fa fa-minus-square text-secondary" onclick="removerItem(0)"></span>
            <span class="px-md-3 px-1" id="quantidade0">0</span>
            <span class="fa fa-plus-square text-secondary" onclick="adicionarItem(0)"> </span>
          </div>
          <div class="pl-md-0 pl-1"><b>R$</b><span id="total0"></span></div>
          <div class="close" onclick="removerProduto(0)">&times;</div>
        </div>
        <div id="produto2" class="d-flex flex-row justify-content-between align-items-center pt-4 pb-3 mobile">
          <div class="d-flex flex-row align-items-center">
            <div><img
                src="https://plus.unsplash.com/premium_photo-1673367751742-c8bb4902be75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2FwYXRvJTIwZmVtaW5pbm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                width="150" height="150" alt="" id="image"/></div>
            <div class="d-flex flex-column pl-md-3 pl-1">
              <div>
                <h6>Bota marrom cano curto</h6>
              </div>
            </div>
          </div>
          <div class="pl-md-0 pl-1"><b>R$30,00</b></div>
          <div class="pl-md-0 pl-2">
            <span class="fa fa-minus-square text-secondary" onclick="removerItem(1)"></span>
            <span class="px-md-3 px-1" id="quantidade1">0</span>
            <span class="fa fa-plus-square text-secondary" onclick="adicionarItem(1)"></span>
          </div>
          <div class="pl-md-0 pl-1"><b>R$</b><span id="total1"></span></div>
          <div class="close" onclick="removerProduto(0)">&times;</div>
        </div>

      </div>
    </div>
  </div>
  <div class="container bg-light rounded-bottom py-4" id="zero-pad">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-10 col-12">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <button class="btn btn-sm bg-light border border-dark"><a href="index.html">VOLTAR</a></button>
          </div>
          <div class="px-md-0 px-1" id="footer-font">
            <b class="pl-md-4">SUBTOTAL R$<span class="pl-md-4" id="valorTotalCompra"></span></b>
          </div>
          <div>
            <button class="btn btn-sm bg-dark text-white px-lg-5 px-3">CONTINUAR</button>
          </div>
        </div>
      </div>
    </div>
  </div>      

    </div>
  );
}

export default App;
