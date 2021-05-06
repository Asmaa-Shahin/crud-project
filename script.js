var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescInput = document.getElementById("productDesc");
var btn2=document.getElementById("btn2");
var cons;
var productsContainer ;//0
if(localStorage.getItem('productList')==null){

    productsContainer=[];




}
else{
productsContainer=JSON.parse(localStorage.getItem("productList"));
displayProducts();


}

function addProduct() {


if(btn2.innerHTML=="update"){

checkUpdate();

displayProducts();

    btn2.innerHTML="add product";



}
else{
    if(checkInputs() == true){
    var product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value
    }
    productsContainer.push(product);//3
    localStorage.setItem("productList",JSON.stringify(productsContainer));
    displayProducts();

    clearForm();

    document.getElementById("check").classList.replace("d-block","d-none");
    productNameInput.classList.remove("is-invalid");
    productPriceInput.classList.remove("is-invalid");
    productCategoryInput.classList.remove("is-invalid");
    productDescInput.classList.remove("is-invalid");
}
else{

    document.getElementById("check").classList.replace("d-none","d-block");
    productNameInput.classList.remove("is-valid");
    productPriceInput.classList.remove("is-valid");
    productCategoryInput.classList.remove("is-valid");
    productDescInput.classList.remove("is-valid");
    
}
}

}

function clearForm() {


    productNameInput.value = "";
    productPriceInput.value = "";
    productDescInput.value = "";
    productCategoryInput.value = "";
}

function displayProducts(){

var cartoon=``;
for(var i=0 ; i<productsContainer.length;i++){
cartoon +=`
<tr>
<td>${i+1}</td>
<td>${productsContainer[i].name}</td>
<td>${productsContainer[i].price}</td>
<td>${productsContainer[i].category}</td>
<td>${productsContainer[i].desc}</td>
<td>  <button class="btn btn-outline-warning" onclick="update(${i})">  update </button>   </td>
<td>  <button class="btn btn-outline-danger" onclick="deleteProduct(${i})"> delete </button>   </td>

</tr>

`



}


document.getElementById("tableBody").innerHTML=cartoon;
}



function update(index){

productNameInput.value=productsContainer[index].name;
productPriceInput.value=productsContainer[index].price;
productDescInput.value=productsContainer[index].desc;
productCategoryInput.value=productsContainer[index].category;
btn2.innerHTML="update";

cons=index;

}



function checkUpdate(){


    productsContainer[cons].name=productNameInput.value;
    productsContainer[cons].price=productPriceInput.value;
    productsContainer[cons].desc=productDescInput.value;
    productsContainer[cons].category=productCategoryInput.value;
    localStorage.setItem("productList",JSON.stringify(productsContainer));
  
    clearForm();
    
 
}




function deleteProduct(index){

productsContainer.splice(index,1);
displayProducts();

}


function checkInputs()
{

    if(checkNameValidation()==true && checkPriceValidation()==true && checkDescValidation()==true &&  checkCategoryValidation()==true){

return true;

    }
    else{

        return false;
    }
}






function checkNameValidation(){
    var regex=/^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?/;


if(regex.test(productNameInput.value) && productNameInput.value!=="" ){


document.getElementById("nameInput").classList.replace("d-block","d-none");
productNameInput.classList.add("is-valid");

    return true;
}
else{

    document.getElementById("nameInput").classList.replace("d-none","d-block");
   
    productNameInput.classList.add("is-invalid");
    return false;
}



    
}
function checkPriceValidation(){
   
var regex=/^[0-9]{3,9}$/

if(regex.test(productPriceInput.value) && productPriceInput.value!=="" ){


document.getElementById("priceInput").classList.replace("d-block","d-none");
productPriceInput.classList.add("is-valid");

console.log("no")
    return true;
}
else{

    document.getElementById("priceInput").classList.replace("d-none","d-block");
    productPriceInput.classList.add("is-invalid");
    console.log("fff")
    return false;
}



    
}
function checkDescValidation(){
    var regex=/^.{5,100}$/;


if(regex.test(productDescInput.value) && productDescInput.value!=="" ){


document.getElementById("desc").classList.replace("d-block","d-none");
productDescInput.classList.add("is-valid");

    return true;
}
else{

    document.getElementById("desc").classList.replace("d-none","d-block");
    productDescInput.classList.add("is-invalid");
   
    return false;
}



    
}
function checkCategoryValidation(){
    var regex=/^.{1,10}?/;


if(regex.test(productCategoryInput.value) && productCategoryInput.value!=="" ){


document.getElementById("Category").classList.replace("d-block","d-none");
productCategoryInput.classList.add("is-valid");


    return true;
}
else{

    document.getElementById("Category").classList.replace("d-none","d-block");
productCategoryInput.classList.add("is-invalid");
    return false;
}



    
}