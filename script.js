let div = document.createElement("div");
div.setAttribute("id","div");
div.classList.add("row","bg-info","border","border-dark","p-4");
document.body.appendChild(div);

let div1 = document.createElement("div");
div1.classList.add("col-sm-2","col-lg-2","col-xl-2","col-xxl-2",
"fw-bold","fs-5","text-dark","text-center","border","border-dark");
div1.innerText = "NAME";
div.appendChild(div1);

let div2 = document.createElement("div");
div2.classList.add("col-sm-2","col-lg-2","col-xl-2","col-xxl-2",
"fw-bold","fs-5","text-dark","text-center","border","border-dark");
div2.innerText = "ISBN";
div.appendChild(div2);

let div3 = document.createElement("div");
div3.classList.add("col-sm-2","col-lg-2","col-xl-2","col-xxl-2",
"fw-bold","fs-5","text-dark","text-center","border","border-dark");
div3.innerText = "No.of Pages";
div.appendChild(div3);

let div4 = document.createElement("div");
div4.classList.add("col-sm-2","col-lg-2","col-xl-2","col-xxl-2",
"fw-bold","fs-5","text-dark","text-center","border","border-dark");
div4.innerText = "Authors";
div.appendChild(div4);

let div5 = document.createElement("div");
div5.classList.add("col-sm-2","col-lg-2","col-xl-2","col-xxl-2",
"fw-bold","fs-5","text-dark","text-center","border","border-dark");
div5.innerText = "Publisher";
div.appendChild(div5);

let div6 = document.createElement("div");
div6.classList.add("col-sm-2","col-lg-2","col-xl-2","col-xxl-2",
"fw-bold","fs-5","text-dark","text-center","border","border-dark");
div6.innerText = "Released";
div.appendChild(div6);

const code = async (id) =>{
let res = await fetch("https://anapioficeandfire.com/api/books?pageSize=12")
.then((x) => x.json())
 return res;
}
code()
.then((response) => {
    response.map((x) => {
        let para = document.createElement("p");
        para.classList.add("col-sm-2","col-lg-2","col-xl-2","col-xxl-2",
        "text-center","border","border-dark");
        para.innerText = x.name;
        div.appendChild(para);

        let para1 = document.createElement("p");
        para1.classList.add("col-sm-2","col-lg-2","col-xl-2","col-xxl-2",
        "text-center","border","border-dark");
        para1.innerText = x.isbn;
        div.appendChild(para1);

        let para2 = document.createElement("p");
        para2.classList.add("col-sm-2","col-lg-2","col-xl-2","col-xxl-2",
        "text-center","border","border-dark");
        para2.innerText = x.numberOfPages;
        div.appendChild(para2);

        let para3 = document.createElement("p");
        para3.classList.add("col-sm-2","col-lg-2","col-xl-2","col-xxl-2",
        "text-center","border","border-dark");
        para3.innerText = x.authors;
        div.appendChild(para3);

        let para4 = document.createElement("p");
        para4.classList.add("col-sm-2","col-lg-2","col-xl-2","col-xxl-2",
        "text-center","border","border-dark");
        para4.innerText = x.publisher;
        div.appendChild(para4);

        let para5 = document.createElement("p");
        para5.classList.add("col-sm-2","col-lg-2","col-xl-2","col-xxl-2",
        "text-center","border","border-dark");
        para5.innerText = x.released;
        div.appendChild(para5);

        let btnMore = document.createElement("button");
        btnMore.setAttribute("id","MoreDetails");
        btnMore.classList.add("btn-light","btn-link","text-center",
        "text-dark","text-decoration-underline","border","border-dark");
        btnMore.innerHTML = "MoreDetails"
        
        let Char_div = document.createElement("div");
        Char_div.classList.add("text-center","border","border-dark");
        
           btnMore.addEventListener("click",() =>{
                let charGet = x.characters;
                let a = [];
                for(let i = 0; i < 5 ; i++){
                    fetch(charGet[i])
                    .then((x)=>x.json())
                    .then((respo) => {
                        var charName = respo.name;
                        a.push(charName);
                        console.log("a",a);
                    })
                }
                setTimeout(()=>{
                    let unorder = document.createElement("ul");
                    Char_div.appendChild(unorder);
                    for(let i = 0; i < 5 ; i++){
                        let li = document.createElement("li");
                        li.innerHTML = a[i]; 
                        unorder.appendChild(li);    
                    }  
                },2000);                
        })
        div.appendChild(btnMore);
        div.appendChild(Char_div);   
    })
})
.catch((err) => {
    alert(err);
})

let SearchId = document.getElementById("searchId");
let searchBtn = document.getElementById("search");

searchBtn.addEventListener("click",() =>{
    if(SearchId.value){
        window.find(SearchId.value);
    }
})
