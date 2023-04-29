

class Hero {
  private id: string;
  private heroName: string;
  private civilName: string;
  private hero: boolean;
  private universe: string;
  private created_at: string;
  private updated_at: string;


  constructor(id: string, heroName: string, civilName: string,
     universe: string, created_at: string, updated_at: string, hero: boolean){
      this.id = id;
      this.heroName = heroName;
      this.civilName = civilName;
      this.universe = universe;
      this.hero = hero;
      this.created_at = created_at;
      this.updated_at = updated_at;
    }

  getId(): string {
    return this.id;
  }
  getHeroName(): string {
    return this.heroName;
  }
  getCivilName(): string {
    return this.civilName;
  }
  getUniverse(): string {
    return this.universe;
  }
  getHero(): boolean {
    return this.hero;
  }
}

export default Hero