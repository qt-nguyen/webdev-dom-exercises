function filterList()
{
    // Unhide all list items
    var allItems = document.getElementsByClassName("list-group-item");
    for (var i = 0; i < allItems.length; i++)
    {
        console.log(allItems[i].value);
        allItems[i].classList.remove("visually-hidden");
    }



    var filter = document.getElementById("keyword").value;

    // Hide all list items
    var allItems = document.getElementsByClassName("list-group-item");

    // Get the list items that match the filter
    function filterItems(item) {
        return item.textContent.includes(filter);
    }


    var matchedItems = Array.from(allItems).filter(filterItems);

    console.log(matchedItems.length, " ", allItems.length);

    for (var i = 0; i < allItems.length; i++)
    {
        //console.log(allItems[i]);
        allItems[i].classList.add("visually-hidden");
    } 
    // Unhide the selected list items
    for (var i = 0; i < matchedItems.length; i++)
    {
        //console.log(items[i]);
        matchedItems[i].classList.remove("visually-hidden");
    }                                           
}