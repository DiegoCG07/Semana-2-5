
class campeon {
    constructor(nombre, vida, ataque, mana, tipo, ...habilidades){
        this.nombre = nombre;
        this.vida = vida;
        this.ataque =  ataque;
        this.mana= mana;
        this.habilidades=habilidades;
        this.tipo = tipo;
        
        switch(this.tipo){
        case "asesino":
            //asesino
            this.ataque=(this.ataque)*1.3;
            this.vida=(this.vida)*.95;
            this.habilidades.push('movilidad');
            break;
        
        case "mago":
            //mago
            this.mana=(this.mana)*1.24;
            this.habilidades.push('distancia');
            break;
        
        case "luchador":
            //Luchador
            this.ataque=(this.ataque)*1.15;
            this.vida=(this.vida)*1.15;
            break;
        
        case "tirador":
            //arquero
            this.ataque=(this.ataque)*1.24;
            this.habilidades.push('distancia');
            break;

        case "tanque":
            //tanque
            this.vida=(this.vida)*1.24;
            this.habilidades.push('armadura');
            break;

        default:
            console.log("No pusiste el tipo jajaj")
            break;
        }
    }

    presentarse(){
        console.log("Mi nombre es " + this.nombre + ", soy un campeón de Leage of Legends");
        console.log("Mis grandiosas estadísticas son: Vida: " + this.vida + ", Maná: "+ this.mana +", Ataque:" + this.ataque);
    }
    comparar(campeon){  
        
        switch(this.tipo){
            case "asesino":
                this.tipo = 2;
                break;
            
            case "mago":
                this.tipo = 3;
                break;
            
            case "luchador":
                this.tipo = 4;
                break;
            
            case "tirador":
                this.tipo = 5;
                break;
    
            case "tanque":
                this.tipo = 9;
                break;
    
            default:
                console.log("No pusiste el tipo jajaj")
                break;
            }

            switch(campeon.tipo){
                case "asesino":
                    campeon.tipo = 2;
                    break;
                
                case "mago":
                    campeon.tipo = 3;
                    break;
                
                case "luchador":
                    campeon.tipo = 4;
                    break;
                
                case "tirador":
                    campeon.tipo = 5;
                    break;
        
                case "tanque":
                    campeon.tipo = 9;
                    break;
        
                default:
                    console.log("No pusiste el tipo jajaj")
                    break;
                }
        
        if(this.nombre===campeon){
            console.log("Perfectamente equilibrado, échale ganas");
        }
        if(this.tipo===campeon.tipo){
            console.log("No hay venyaja de clases, buena suerte");
        }
        else if((this.tipo*2)-campeon.tipo===1 || (this.tipo*2)-campeon.tipo===2 || (this.tipo*2)-campeon.tipo===-1 || (this.tipo-3)*2===campeon.tipo){
            console.log("Tu personaje, " + this.nombre + ", tiene las de GANAR");
        }
        else{
            console.log("Tu personaje, " + this.nombre + ", tiene las de PERDER");
        }
        switch(this.tipo){
            case 2:
                this.tipo = "asesino";
                break;
            
            case 3:

                this.tipo = "mago";
                break;
            
            case 4:
                this.tipo = "luchador";
                break;
            
            case 5:
                this.tipo = "tirador";
                break;
    
            case 9:
                this.tipo = "tanque";
                break;
    
            default:
                console.log("No pusiste el tipo jajaj")
                break;
            }

            switch(campeon.tipo){
                case 2:
                    campeon.tipo = "asesino";
                    break;
                
                case 3:
    
                    campeon.tipo = "mago";
                    break;
                
                case 4:
                    campeon.tipo = "luchador";
                    break;
                
                case 5:
                    campeon.tipo = "tirador";
                    break;
        
                case 9:
                    campeon.tipo = "tanque";
                    break;
        
                default:
                    console.log("No pusiste el tipo jajaj");
                    break;
                }
    }
}

const Diego = new campeon("Diego", 100, 100, 100, "asesino", "Comer Iguanas", "Robar sin violencia", "No necesita comer");
const ELRodri = new campeon("ELRodri", 100, 100, 100, "mago", "Caerme mal", "Es Cacastroso", "Le gusta la pizza con yougurt");
const Pablo = new campeon ("Pablo", 100, 100, 100, "tanque", "Nunnca se cansa", "No puede ser estafado", "Vende casas a muy buen precio");
const Alcides = new campeon("Alcides", 100, 100, 100, "tirador", "Le fian en la Tienda", "Le quita el chip a su cel antes de que se lo roben", "Es fiel");
const Abisair = new campeon("Abisair", 100, 100, 100, "luchador", "Es papá prematuro pero sigue estudiando", "Su unico vicio es el Futbol", "SIIIUUUU");

Diego.comparar(ELRodri);