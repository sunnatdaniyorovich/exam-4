const createElement = function (name, className, textContent, image) {
    const createdElement = document.createElement(name);
    createdElement.className = className;
    if (textContent) {
        createdElement.textContent = textContent;
    } else {
        createdElement.src = image;
    }
    return createdElement;
}




// "0" qo'shuvchi funksiya

const addZero = function (number) {
    return number < 10 ? "0" + number : number
}


// Sana funksiya

const showDate = function (dateString) {
    const date = new Date(dateString);

    return `${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.${date.getFullYear()} ${addZero(date.getHours())}:${addZero(date.getMinutes())}`;
}


// ---------


const list = document.querySelector("#product-list");

const renderProduct = function (product) {

    const {
        id,
        title,
        img,
        price,
        birthDate,
        sizes,
        isFavorite,
        features,
    } = product

    currentProduct = product;

    const PRICE = Math.floor(currentProduct.price);
    const LEFT = Math.floor((currentProduct.price) / 10000).toFixed(0);
    const USD = ` $${PRICE}.${LEFT}`;


    const productItem = createElement("li", "col-6", "", "");

    const productCard = createElement("div", "card")

    const productImg = createElement("img", "card-img-top", "", img);
    const productDiv = createElement("div", "card-body", "", "");

    const productTitle = createElement("h3", "card-title", title, "");
    const productTextOne = createElement("p", "card-text fw-bold", USD, "");
    const productMark = createElement("mark", "", "", "");
    const productTextTwo = createElement("p", "badge bg-success", currentProduct.sizes, "");

    const productTextDate = createElement("p", "card-text", currentProduct.birthDate, "");

    productTextTwo.append(productMark);

    productDiv.append(productTitle);
    productDiv.append(productTextOne);
    productDiv.append(productTextTwo);
    productDiv.append(productTextDate);

    const productList = createElement("ul", "row list-unstyled g-3 parrots-wrapper", "", "");

    for (j = 0; j < sizes.length; j++) {
        const currentSize = sizes[j];
        const productListItem = createElement("li", "badge bg-primary me-1 mb-1", currentSize, "");
        productList.append(productListItem);
    }

    const productButDiv = createElement("div", "position-absolute top-0 end-0 d-flex", "", "");
    const productButMark = createElement("button", "btn rounded-0 btn-secondary", "", "");
    productButMark.setAttribute("data-editing", id);
    productButMark.setAttribute("data-bs-toggle", "modal");
    productButMark.setAttribute("data-bs-target", "#edit-product-modal");

    const productButDel = createElement("button", "btn rounded-0 btn-danger", "", "");
    productButDel.setAttribute("data-delete", id);
    const productButIMark = createElement("i", "fa-solid fa-pen", "", "");
    productButIMark.style.pointerEvents = "none";
    const productButIDel = createElement("i", "fa-solid fa-trash", "", "");
    productButIDel.style.pointerEvents = "none";

    productButMark.append(productButIMark);
    productButDel.append(productButIDel);
    productButDiv.append(productButMark);
    productButDiv.append(productButDel);

    productDiv.append(productList);
    productDiv.append(productButDiv);

    productCard.append(productImg);
    productCard.append(productDiv)
    productItem.append(productCard);
    list.append(productItem)
    
    productButDel.onclick = el =>  {
        el.preventDefault()
        list.innerHTML = ""
        let found = products.findIndex(el => el.id == product.id)

        let deleted = products.splice(found, 1)
        for(let i of products) {
            renderProduct(i)
        }
    }

    return  productItem;
}


for(let i of products){
    renderProduct(i)

}


filterBtn.onclick = el => {
    el.preventDefault()
    list.innerHTML = ""
    let found = products.find(el => el.title == search.value)
    renderProduct(found)
}




































































// const productList = document.querySelector('#product-list')

// function renderPruducts(){
//     productList.innerHTML = ""
//     for(let product of products) {
//         console.log(product);
//         let li = document.createElement("li")
//         li.className = "col-6"

//         li.innerHTML = `
//             <div class="card">
//                 <img src="${product.img}" alt="" class="card-img-top">
//               <div class="card-body">
//                   <h3 class="card-title">${product.title}</h3>
//                   <p class="card-text fw-bold"><mark>${"$" + product.price}</mark></p>
//                   <p class="badge bg-success">184sm x 50sm</p>

//                   <p class="card-text">${product.birthDate}</p>

//                   <ul class="d-flex flex-wrap list-unstyled">
//                     ${
//                         product.features = product.features.split(" "),
//                         console.log(product.features)
//                     }
//                   </ul>

//                   <div class="position-absolute top-0 end-0 d-flex">

//                       <button class="btn rounded-0 btn-success"><i class="fa-solid fa-star" style="color: yellow; pointer-events: none;"></i></button>
//                       <button class="btn rounded-0 btn-secondary"><i class="fa-solid fa-pen" style="pointer-events: none;"></i></button>
//                       <button class="btn rounded-0 btn-danger"><i class="fa-solid fa-trash" style="pointer-events: none;"></i></button>
//                   </div>
//               </div>
//             </div>
//         `
//         productList.append(li)


//     }
// }
// renderPruducts()

