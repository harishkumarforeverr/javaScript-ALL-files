/*  function player(name, team)
 {
     this.name=name;
     this.team=team;
 }
 const virat=new player("virat","mumbai");
 const msd=new player("ms dhoni","hyderabad");
 player.prototype.g=function()
 {
     console.log(`hello , i'm ${this.name} and im in ${this.team}`);
 }
 player.prototype.nn="cheyyku"; */
 class people 
 {
     constructor(name,job,country)
     {
         this.name=name;
         this.job=job;
         this.country=country;
     }
     sayhi()
     {
         console.log(`im ${this.name} and ${this.job} and ${this.country}`);
     }
 }


 class player extends people{
    constructor(name,job,country,team)
    { 
        super(name,job,country);
        (this).team=team;
    }
    g()
    {
        console.log(`im : ${this.name} and im in ${this.team}`);
    }
    static f1()
    {
        console.log("im static function");
    }
    get f2()
    {
        return this.nick.toUpperCase();
    }
    set f3(hk)
    {
        this.name=hk;
    }
}


 const virat=new player("virat","cricek","india","mumbai");
 const msd=new player("ms dhoni","cricek","india","hyderabad");
const khan=new people("harish","software","india");