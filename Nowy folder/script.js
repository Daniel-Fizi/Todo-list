const additem = document.getElementById("add");
const todo = document.getElementById('todo');
const inputAdd = document.getElementById("additem");
const complete = document.getElementById("complete")


additem.addEventListener('click',function(){

    if(inputAdd.value=="")
    {
        return 0;
    }
    else
    {
        //div
        const divItem = document.createElement('div');
        divItem.classList.add('div-item');
        todo.appendChild(divItem);

        //paragraph
        const par = document.createElement('p');
        par.classList.add('list-style');
        par.innerText = inputAdd.value;
        par.value=inputAdd.value;
        divItem.appendChild(par);
        inputAdd.value = "";

        //delete button
        const del = document.createElement('button');
        del.classList.add('del-button');
        del.innerText = "DELETE";
        divItem.appendChild(del);

        //hr

        const hr = document.createElement('hr');
        hr.classList.add('item-hr')
        todo.appendChild(hr);
        
        del.addEventListener('click',function()
        {
            todo.removeChild(hr)
            divItem.removeChild(par)
            divItem.removeChild(del)
            todo.removeChild(divItem)
            
        })

        //completed

        par.addEventListener('click',function()
        {
            todo.removeChild(hr)
            divItem.removeChild(par)
            divItem.removeChild(del)
            todo.removeChild(divItem)

            //div
            const divComplete = document.createElement('div');
            divComplete.classList.add('div-item');
            complete.appendChild(divComplete);

            //paragraph
            const parComplete = document.createElement('p');
            parComplete.classList.add('list-style');
            parComplete.classList.add('list-style-complete');
            parComplete.innerText = par.value;
            divComplete.appendChild(parComplete);

            //hr
            const hrComplete = document.createElement('hr');
            hrComplete.classList.add('item-hr')
            complete.appendChild(hrComplete);

            //del
            const delComplete = document.createElement('button');
            delComplete.classList.add('del-button');
            delComplete.innerText = "DELETE";
            divComplete.appendChild(delComplete);

            delComplete.addEventListener('click',function()
            {
                complete.removeChild(hrComplete)
                divComplete.removeChild(parComplete)
                divComplete.removeChild(delComplete)
                complete.removeChild(divComplete)
            
            })
        })
       
    }
})