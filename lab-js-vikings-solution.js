// Soldier
class Soldier {
    // theFirstArg is health
    // theSecondArg is strength

    constructor(theFirstArg, theSecondArg) {
      this.health = theFirstArg;
      this.strength = theSecondArg;
    }

    attack() {
      return this.strength;
    }
  
    receiveDamage(amountOfDamage) {
      this.health -= amountOfDamage;
    }
  }
  
  // Viking
  class Viking extends Soldier {
    // theFirstArg is name
    // theSecondArg is health
    // theThirdArg is strength

    constructor(theFirstArg, theSecondArg, theThirdArg) {
      super(theSecondArg, theThirdArg);
      this.name = theFirstArg;
    }
  
    receiveDamage(amountofDamage) {
        
      super.receiveDamage(amountofDamage);

      if (this.health > 0) {
        return `${this.name} has received ${amountofDamage} points of damage`;
      } else {
        return `${this.name} has died in act of combat`;
      }
    }
  
    battleCry() {
      return 'Odin Owns You All!';
    }
  }
  
  // Saxon
  class Saxon extends Soldier {
  
  // you don't have to do this since if you simply don't define this method, you will inherit perfectly from the parents class
  //   constructor(health, strength) {
  //     super(health, strength);
  //   }
  
    receiveDamage(amountofDamage) {
      super.receiveDamage(amountofDamage);
      if (this.health > 0) {
        return `A Saxon has received ${amountofDamage} points of damage`;
      } else {
        return `A Saxon has died in combat`;
      }
    }
  }
  
  // War
  class War {
    constructor() {
      this.vikingArmy = [];
      this.saxonArmy = [];
    }
  
    addViking(aVikingObject) {
      this.vikingArmy.push(aVikingObject);
    }
  
    addSaxon(aSaxonObject) {
      this.saxonArmy.push(aSaxonObject);
    }
  
    vikingAttack() {
      let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
      let randomViking = this.vikingArmy[randomVikingIndex];
      
      let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
      let randomSaxon = this.saxonArmy[randomSaxonIndex];
      
      let thingToReturnAtTheEnd = randomSaxon.receiveDamage(
        randomViking.attack()
      )
      
      if (randomSaxon.health <= 0) {
        this.saxonArmy.splice(randomSaxonIndex, 1);
      }
  
      return thingToReturnAtTheEnd;
    }
  
    saxonAttack() {
      let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
      let randomViking = this.vikingArmy[randomVikingIndex];
      
      let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
      let randomSaxon = this.saxonArmy[randomSaxonIndex];
  
      let thingToReturnAtTheEnd = randomViking.receiveDamage(
        randomSaxon.attack()
      )
      
      if (randomViking.health <= 0) {
        this.vikingArmy.splice(randomVikingIndex, 1);
      }
  
      return thingToReturnAtTheEnd;
    }
  
    showStatus() {
      if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
        return 'Vikings and Saxons are still in the thick of battle.';
      } else if (this.vikingArmy.length > 0) {
        return 'Vikings have won the war of the century!';
      } else {
        return 'Saxons have fought for their lives and survived another day...';
      }
    }
    
  // showStatus() {
  //   if (!this.saxonArmy.length) {
  //     return 'Vikings have won the war of the century!';
  //   } else if (!this.vikingArmy.length) {
  //     return 'Saxons have fought for their lives and survived another day...';
  //   } else {
  //     return 'Vikings and Saxons are still in the thick of battle.';
  //   }
  // }
    
  }
  