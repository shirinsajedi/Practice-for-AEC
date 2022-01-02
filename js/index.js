const data = [{
        "name": " شعبه ها",
        "sys_id": "ca49eea01bd034d0d1dcb9118b4bcb17",
        "order": "02"
    },
    {
        "name": " آذربایجان شرقی",
        "sys_id": "e699e2641bd034d0d1dcb9118b4bcb84",
        "order": "02.01"
    },
    {
        "name": "آذربایجان غربی",
        "sys_id": "e699e2641bd034d0d1dcb9118b4bcb84",
        "order": "02.02"
    },
    {
        "name": "اردبیل ",
        "sys_id": "e699e2641bd034d0d1dcb9118b4bcb84",
        "order": "02.03"
    },
    {
        "name": "اصفهان ",
        "sys_id": "e699e2641bd034d0d1dcb9118b4bcb84",
        "order": "02.04"
    },
    {
        "name": "آران وبیدگل ",
        "sys_id": "e699e2641bd034d0d1dcb9118b4bcb84",
        "order": "02.04.01"
    }, {
        "name": "OSS-668 ",
        "sys_id": "e699e2641bd034d0d1dcb9118b4bcb84",
        "order": "02.04.01.01"
    },
    {
        "name": " ECS-Test-7",
        "sys_id": "e699e2641bd034d0d1dcb9118b4bcb84",
        "order": "02.04.01.01"
    },
    {
        "name": " ECS-Test-7",
        "sys_id": "e699e2641bd034d0d1dcb9118b4bcb84",
        "order": "02.04.01.01"
    },

    {
        "name": "البرز ",
        "sys_id": "e699e2641bd034d0d1dcb9118b4bcb84",
        "order": "02.05"
    },
    {
        "name": "ایلام ",
        "sys_id": "e699e2641bd034d0d1dcb9118b4bcb84",
        "order": "02.06"
    },
    {
        "name": "بوشهر ",
        "sys_id": "e699e2641bd034d0d1dcb9118b4bcb84",
        "order": "02.07"
    },
    {
        "name": "تهران ",
        "sys_id": "e699e2641bd034d0d1dcb9118b4bcb84",
        "order": "02.08"
    },
    {
        "name": "چهارمحال و بختیاری ",
        "sys_id": "e699e2641bd034d0d1dcb9118b4bcb84",
        "order": "02.19"
    },
    {
        "name": "آزادشهر",
        "sys_id": "15da66e81bd034d0d1dcb9118b4bcb1c",
        "order": "02.01.01"
    }, {
        "name": "OSS-668",
        "sys_id": "15da66e81bd034d0d1dcb9118b4bcb1c",
        "order": "02.01.01.01"
    },
    {
        "name": "ECS-Test-7",
        "sys_id": "15da66e81bd034d0d1dcb9118b4bcb1c",
        "order": "02.01.01.01"
    },
    {
        "name": "ECS-test-7",
        "sys_id": "15da66e81bd034d0d1dcb9118b4bcb1c",
        "order": "02.01.01.01"
    },
    {
        "name": "تبریز    ",
        "sys_id": "15da66e81bd034d0d1dcb9118b4bcb1c",
        "order": "02.01.02"
    },
];

function createTree(data) {
    const nodeWithParent = []

    // Find parent
    data.forEach(d => {
        const parent = d.order.includes('.') ? d.order.substr(0, d.order.lastIndexOf('.')) : null
        nodeWithParent.push({...d, parent })
    })

    // create HTML out of node
    function getNodeHtml(n) {
        const children = nodeWithParent.filter(d => d.parent === n.order)
        let html = "" + '<li ></i><span class="box">' + "  " + n.name + '</span><ul class="nested">'
        if (children.length > 0) {
            html += '<li>' +
                children.map(getNodeHtml).join('') +
                '</li>'
        }
        html += '</ul></li>'
        return html
    }

    const root = nodeWithParent.filter(d => d.parent === null)

    return root.map(getNodeHtml).join('')
}
const html = createTree(data)
let tree = document.getElementById('tree');
tree.innerHTML = html
var toggler = document.getElementsByClassName("box");
var i;

for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("check-box");
    });
}