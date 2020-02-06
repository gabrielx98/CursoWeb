const valor = "Global"

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = "Local"
    minhaFuncao()
}

exec()

// a função busca o valor no contexto de declaração
// e não no contexto de execução
