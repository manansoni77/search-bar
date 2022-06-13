function log(items) {
    document.getElementById("result").innerHTML = '';
    list = document.getElementById("result");
    [...items].forEach(item => {
        console.log(item)
        let li = document.createElement("li");
        li.innerHTML = item.name;
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
            console.log('error')
        }
    } else {
        let items = []
        await $.get("/api/user", {}, function (data, stat) {
            items = data;
        })
        log(items);
    }
}



function initialize() {
    search_button = document.getElementById("search");
    search_button.addEventListener("click", search);
    search();
}