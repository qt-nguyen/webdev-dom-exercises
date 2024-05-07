function addItem(content)
{
    var list = document.getElementById("myList");
    var new_item = document.createElement("li");
    new_item.classList.add("list-group-item");
    new_item.innerHTML = content;
    list.appendChild(new_item);
}


var form = document.getElementById("keyword");
form.addEventListener("keypress", function(event) {
    if (event.key !== "Enter")
    {
        return;
    }
    var keyword = form.value;
    addItem(keyword);
});

function clearItems()
{
    var list = document.getElementById("myList");
    let n_child = list.children.length;
    for (let i = 0; i < n_child; i++)
    {
        list.removeChild(list.children[0]); 
    }
}