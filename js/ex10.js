let btn = document.getElementById("fetch-data");
btn.addEventListener("click", function() {
    let data = null;
    fetch("https://reqres.in/api/unknown")
        .then(response => response.json())
        .then(json => {
            data = json;
            
            // Display data
            let list = document.getElementById("myList");
            // Clear list
            let n_child = list.children.length;
            for (let i = 0; i < n_child; i++) {
                list.removeChild(list.children[0]);
            }

            for (let i = 0; i < data.data.length; i++) {
                let new_item = document.createElement("li");
                new_item.classList.add("list-group-item");
                new_item.style = "color: " + data.data[i].color;
                new_item.innerHTML = data.data[i].name + " - " + data.data[i].year;
                list.appendChild(new_item);
            }
        });

    
});