function log(items) {
    document.getElementById("result").innerHTML = '';
    list = document.getElementById("result");
    [...items].forEach(item => {
        console.log(item)
        // div = document.createElement("div");
        // let name = document.createTextNode(item.name + '\n')
        // let email = document.createTextNode(item.email)
        // div.appendChild(name)
        // div.appendChild(email)
        let li = document.createElement("li");
        li.innerHTML = item.name;
        // li.appendChild(div)
        list.appendChild(li);
    });
}

async function search() {
    const query = document.getElementById("query").value;
    if (query) {
        try {
            let items = []
            await $.post("/api/user/search", { query: query }, function (data, stat) {
                items = data;
            })
            log(items);
        }
        catch (e) {
            log("Invalid Expression " + query);
        }
    }
}



function initialize() {
    search_button = document.getElementById("search");
    search_button.addEventListener("click", search);
}