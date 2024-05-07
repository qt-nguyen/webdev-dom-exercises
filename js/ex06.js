function addItem(content)
{
    var list = document.getElementById("myList");
    var new_item = document.createElement("li");
    new_item.classList.add("list-group-item");
    new_item.innerHTML = content;
    console.log(content);

    list.appendChild(new_item);
}

function catchForm()
{
    var form = document.getElementById("keyword");
    var keyword = form.value;
    addItem(keyword);
}