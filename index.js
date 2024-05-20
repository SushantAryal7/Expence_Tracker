let form = document.querySelector('form');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let expense = event.target.expense.value;
    let description = event.target.description.value;
    let category = event.target.category.value;

    let deta = JSON.parse(localStorage.getItem('deta')) ?? []

    deta.push({
        expense : expense,
        description: description,
        category: category
    })
    localStorage.setItem("deta",JSON.stringify(deta));
    event.target.reset();
    getData();
})

function getData(){
    let deta = JSON.parse(localStorage.getItem('deta')) ?? []
    let show = document.querySelector('.show');
    let finallist = '' ;

    deta.forEach((element, index) => {
        finallist += `<div>
        <span>${element.expense} -</span><span>${element.description} -</span><span>${element.category} -</span>
        <button onclick = deleteData('${index}')>Delete Expence</button><button onclick = editData('${element.expense}','${element.description}','${element.category}','${index}')>Edit Expence</button>
    </div>`
    show.innerHTML = finallist ;
    });

}

function deleteData(i){
    let deta = JSON.parse(localStorage.getItem('deta')) ?? []

    deta.splice(i,1);
    localStorage.setItem("deta",JSON.stringify(deta));
    getData();
}

function editData(expens, des, cat, ind){
    document.querySelector('#expense').value = expens;
    document.querySelector('#description').value = des;
    document.querySelector('#category').value = cat;

    deleteData(ind);
}
getData();