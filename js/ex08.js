let current_item = null;
let edit_icons = document.getElementsByClassName("bi-pencil-fill");
for (let i = 0; i < edit_icons.length; i++)
{
    edit_icons[i].addEventListener("click", function() {
        let item = this.parentElement;
        current_item  = item;
        let item_text = item.children[0].textContent;

        let form = document.getElementById("keyword");
        form.value = item_text;
    });
}

var form = document.getElementById("keyword");
form.addEventListener("keypress", function(event) {
    if (event.key !== "Enter")
    {
        return;
    }
    if (current_item != null)
    {

        current_item.children[0].textContent = form.value;
    }
});