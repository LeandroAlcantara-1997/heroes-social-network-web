class Hero {
    name: string;
    civilName: string;
    hero: boolean;
    universe: string;

    constructor(name: string, civilName: string, hero: boolean, universe: string){
        this.name = name
        this.civilName = civilName
        this.hero = hero
        this.universe = universe
    }

    checkUniverse() {  
        switch(this.universe) { 
            case "MARVEL": { 
               return true; 
            } 
            case "DC": { 
               return true; 
            } 
            case "DC|MARVEL": { 
               return true;
            } 
            default: {
                return false;
            }
         } 
    }
}

export default Hero;