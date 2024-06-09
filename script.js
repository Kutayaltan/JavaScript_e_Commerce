let products = [
    { 
    productName : "CPUS / PROCESSORS",
    productImage : "CPU.jpg",
    productInfo : "Intel i9-14900KS",
    productImportance : 0,
    },{ 
        productName : "MAINBOARDS",
        productImage : "MAINBOARDS.jpg",
        productInfo : "Gigabyte B650E",
        productImportance : 0,
        },{ 
            productName : "MEMORY",
            productImage : "MEMORY.jpg",
            productInfo : "G.Skill Trident Z5",
            productImportance : 0,
            },{ 
                productName : "GRAPHICS CARDS",
                productImage : "GRAPHICS.jpg",
                productInfo : "GeForce RTX 40-Serie",
                productImportance : 0,
                },{ 
                    productName : "DRIVES",
                    productImage : "DRIVES.jpg",
                    productInfo : "Seagate FireCuda ST8000D",
                    productImportance : 0,
                    },{ 
                        productName : "MOUSE & KEYBOARDS",
                        productImage : "KEYBOARD.jpg",
                        productInfo : "Logitech MK335",
                        productImportance : 0,
                        }
];



//displaying products for the sorting mechanism
function displayProducts() {
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = "";


    //for each loop for the cards with the value
for (let val of products)
    {
        document.getElementById("result").innerHTML +=`
        <div>
            <div class="card" style="width: 18rem;">
            <img src="images/${val.productImage}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${val.productName} </h5>
                <p class="card-text">${val.productInfo}<br> 
                Amount: <span class="numberAdd bg-success background">${val.productImportance}</span></p>
                <a class="btn btn-primary addBtn">Add + </a> 
            </div>
            </div>
        <div>
        `  
    };

    
//adding

    let btns = document.querySelectorAll(".addBtn");

    btns.forEach((element, index) => {
        element.addEventListener("click", function(){
            if(products[index].productImportance < 5){ 
            products[index].productImportance++;
            document.querySelectorAll(".numberAdd")[index].innerText = products[index].productImportance;
        if (products[index].productImportance <=1){
            document.getElementsByClassName("background")[index].classList.add("bg-success");
            document.getElementsByClassName("background")[index].classList.remove("bg-danger", "bg-warning");

        } else if (products[index].productImportance <=3){
            document.getElementsByClassName("background")[index].classList.add("bg-warning");
            document.getElementsByClassName("background")[index].classList.remove("bg-success", "bg-danger");
       
        } else {
            document.getElementsByClassName("background")[index].classList.add("bg-danger");
            document.getElementsByClassName("background")[index].classList.remove("bg-success", "bg-warning")
        } 
        };
                
        

    });
    

});

}
//sort and display products
 
 function sortProducts() {
    products.sort((a, b) => b.productImportance - a.productImportance);
    displayProducts();
}document.getElementById("sortButton").addEventListener("click", sortProducts);

displayProducts();






//-- i tried here an additional "confirm and undo/redobutton" but i couldnt manage to do it

// i also cant write anything here wihtout deleting my cards


// let btns2 = document.querySelectorAll("#undoButton"){

// }

// // function undoProducts() { 
// //     products.delete();
// //     displayProducts(); 
// // }
// //         document.getElementById("undoButton").addEventListener("click", undoProducts);
// //         displayProducts();



        
//         // function displayProducts() {
//         //     document.getElementById("undoButton").addEventListener("click", undoProducts);
//         //     let resultElement = document.getElementById("result");
//         //     resultElement.innerHTML = "";
//         // }
    
//         displayProducts();



// function undoLastAction() {
//     if (undoProducts.length > 0) {
//         let lastAction = undoProducts.pop();
//         products[lastAction.index].productImportance = lastAction.previousValue;
//         displayProducts();
//     }
// }
// document.getElementById("undoButton").addEventListener("click", undoLastAction);

// displayProducts();


// let btns2 = document.querySelectorAll("#undoButton"){
//     displayProducts(products());
// }


