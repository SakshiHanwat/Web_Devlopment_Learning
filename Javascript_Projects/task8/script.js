let input = document.querySelector("input");
let data = [{
    name: "harsh",
    src: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
}, {
    name: "harshita",
    src: "https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
}, {
    name: "nishank",
    src: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=721"
}, {
    name: "rishika",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=464"
}]
let pers = "";
data.forEach(function(elem) {
    pers += `<div class="person">
                    <div class="img">
                        <img src="${elem.src}">
                    </div>
                <h4>${elem.name}</h4>
                </div>`;

});
document.querySelector(".people").innerHTML = pers;
input.addEventListener("input", function() {
    let matching = data.filter(function(e) {
        return e.name.startsWith(input.value)
    })
    let newusers = "";
    matching.forEach(function(elem) {
        newusers += `<div class="person">
                        <div class="img">
                            <img src="${elem.src}">
                        </div>
                        <h4>${elem.name}</h4>
                    </div>`;
    })

    document.querySelector(".people").innerHTML = newusers;
})