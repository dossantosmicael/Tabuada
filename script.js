function tabuada() {
    var num = document.getElementById('txtnum') 
    var tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('[ERRO] Por favor, digite um numero!')
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''  
        for (var c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.innerHTML = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
    
}