import React from 'react'
import ReactDOM from 'react-dom'
//import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'
//const elemento = <h1>React</h1>
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Correia">
        {/* varios filhos */}
        <Filho nome="Pedro" />
        <Filho nome="Paulo" />
        <Filho nome="Carla" />
        </Pai>
    </div>

, document.getElementById('root'))