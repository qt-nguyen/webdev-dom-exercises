let trash_icons = document.getElementsByClassName("bi-trash-fill");
for (let i = 0; i < trash_icons.length; i++)
{
    trash_icons[i].addEventListener("click", function() {
        let parent = this.parentElement;
        parent.classList.add("visually-hidden");
    });
}