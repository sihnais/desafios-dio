class heroi{
    constructor(nomeHeroi, idadeHeroi, tipoHeroi, tipoAtaque){
        this.nomeHeroi = nomeHeroi
        this.idadeHeroi = idadeHeroi
        this.tipoHeroi = tipoHeroi
        this.tipoAtaque = tipoAtaque
  	}
	
    atacar(){
    	console.log(`O ${this.tipoHeroi} atacou usando ${this.tipoAtaque}`)
    }
    
}

let mago = new heroi("Geremias", 39, "Mago", "Magia")
let guerreiro = new heroi("Jasmine", 26, "Guerreiro", "Espada")
let monge = new heroi ("Roberto", 89, "Monge", "Artes marciais")
let ninja = new heroi("Yuri", 45, "Ninja", "Shuriken")

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()