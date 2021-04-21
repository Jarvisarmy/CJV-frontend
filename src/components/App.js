import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import './../css/App.css';
import HomePage from './../pages/HomePage.js';
import LoginPage from './../pages/LoginPage.js';
import RegistrationPage from './../pages/RegistrationPage.js';
import ProductListPage from './../pages/ProductListPage.js';
import ProductDescPage from './../pages/ProductDescPage.js';
import Dashboard from './../pages/Dashboard.js';
import DataContext from "../context/DataContext";
import {useState, useEffect} from 'react';



import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App() {
  const [categories, setCategories] = useState([]);
  const [firstFourCategories, setFirstFourCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [adjustedProducts, setAdjustedProducts] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [loginUser, setLoginUser] = useState({});
  const getAllCategories = ()=>{
    fetch('http://localhost:5000/products/cat')
    .then(response=>response.json())
    .then(result=>{
        console.log(result);
        setCategories(result.body);
        setFirstFourCategories(result.body.slice(0,4));
    })
    .catch(err=>{
        console.log(err);
    });
  }
  const getAllProducts = ()=>{
    fetch('http://localhost:5000/products')
    .then(response=>response.json())
    .then(result=>{
        console.log(result.body);
        setProducts(result.body);
        modifyProducts();
    })
    .catch(err=>{
        console.log(err);
    });
  }
  const modifyProducts = ()=>{
    var result = [];
    for (var i = 0; i < products.length/4; i++) {
        var temp = [];
        for (var j = 0; j < 4; j++) {
            
            var index = 4*i + j;
            if (index <= products.length) {
                temp.push(products[index]);
            }
        }
        result.push(temp);
    }
    console.log(result);
    setAdjustedProducts(result);
  }
  const getBestSellers = () =>{
    var bestSellers = products.filter(product => product.best);
    return bestSellers;
  }
  const getProductByCategory = (id)=>{
    if (id === "0") {
      return products;
    }
    var pros = products.filter(product => product.category.toString() === id);
    return pros;
  }
  const getProductById = (id) => {
    var pro = products.filter(product => product.id.toString() === id);
    console.log(pro);
    console.log(pro[0]);
    return pro[0];
  }
  const getProductByCategoryAndName = (id, name) => {
    var pros;
    if (id === "0") {
      pros = products.filter(product => product.title.toLowerCase().includes(name.toLowerCase()));
    } else {
      pros = products.filter(product => product.category.toString() === id && product.title.toLowerCase().includes(name.toLowerCase()));
    }
      return pros;
  }
  useEffect(()=>{
    getAllCategories();
    getAllProducts();
  },[]);
  return (
    <div className="App">
      <DataContext.Provider value={{isLogin, loginUser, setIsLogin, setLoginUser, categories, products, firstFourCategories, adjustedProducts, getBestSellers,getProductByCategoryAndName}}>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/registration">
              <RegistrationPage />
            </Route>
            <Route path="/bestSellers">
              <ProductListPage products={getBestSellers()} />
            </Route>
            
            <Route path="/products/:cat" render={(props) => <ProductListPage products={getProductByCategory(props.match.params.cat)} />} />
            <Route path="/product/:id" render={(props) =><ProductDescPage product={getProductById(props.match.params.id)} />} />
            <Route path="/items/:cat/:name" render={(props)=><ProductListPage products={getProductByCategoryAndName(props.match.params.cat,props.match.params.name)}/>} />
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </DataContext.Provider>
    </div>
  );
}

export default App;
