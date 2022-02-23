let div = document.createElement("div");
div.setAttribute("id","div");
div.classList.add("row","bg-info","border","border-dark");
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
        btnMore.classList.add("btn-light","mt-1","mb-2","btn-link","text-center",
        "text-dark","text-decoration-underline","border","border-dark");
        btnMore.innerHTML = "MoreDetails"
        btnMore.addEventListener("click",() =>{
                let sum = " ";
               for(let i = 0;i <= 5;i++){
                let respo = x.characters;
                sum = sum + " " + respo[i]; 
            }
            alert(sum);
        })
        div.appendChild(btnMore);
    })
})
.catch((err) => {
    alert(err);
})

