var vagas = Array.from({ length: 18 }, (_, i) => i + 1);
var placas = []
var registro = {}

function registrarPlaca() {
    var placa = document.getElementById("placadoCarro").value
    if (placa) { 
        if (placas.length < 18) { 
            placas.push(placa)
            registrarVaga(placa)
        } else {
            alert("Sem vagas disponiveis")
        }
    } else {
        alert("Placa invalida")
    }
}

function registrarVaga(placa) {
    while (true) {
        var vagasDisponiveis = vagas.filter(vaga => !registro[vaga]).join(', ')
        var vaga = prompt(`Selecione uma vaga para registrar (1 a 18). Vagas disponíveis: ${vagasDisponiveis}`)
        vaga = parseInt(vaga, 10)
        if (vaga >= 1 && vaga <= 18) {
            if (!registro[vaga]) { 
                registro[vaga] = placa
                alert(`Placa ${placa} registrada na vaga ${vaga}.`)
                break;
            } else {
                alert("Essa vaga ja esta ocupada. Escolha outra.")
            }
        } else {
            alert("As vagas vão de 1 a 18. Tente novamente.")
        }
    }
}

function despacharCarro() {
    var placa = document.getElementById("placaCarro").value
    var vaga = Object.keys(registro).find(key => registro[key] === placa)
    if (vaga) {
        delete registro[vaga];
        placas = placas.filter(p => p !== placa)
        alert(`Placa ${placa} removida da vaga ${vaga}.`)
    } else {
        alert("Placa não encontrada ou não está registrada.")
    }
}



