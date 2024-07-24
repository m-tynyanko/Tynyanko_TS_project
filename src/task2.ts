// Виды пасты - spagetti/penne/macaroni
// Tags: Union, Enum, Narrowing

interface italianFood {
  hasSauce: boolean;
  hasCheese: boolean;
}
interface pizzaProps extends italianFood {
  hasPepperoni: boolean;
  bakeTime: number;
  bake(): void;
}
interface pastaProps extends italianFood{
  pastaType: PastaTypes;
  cookTime: number;
  cook(): void;
}

enum PastaTypes {
  spagetti = 'spagetti',
  penne = 'penne',
  macaroni = 'macaroni'
}

class Pizza implements pizzaProps {
  hasPepperoni;
  hasSauce;
  hasCheese;
  bakeTime = 30;

  constructor(hasPepperoni: boolean, hasSauce: boolean, hasCheese: boolean) {
      this.hasPepperoni = hasPepperoni;
      this.hasSauce = hasSauce;
      this.hasCheese = hasCheese;
  }
  bake(): void {
      setTimeout(console.log, this.bakeTime, 'Enjoy your pizza!');
  }
}

class Pasta implements pastaProps {
  pastaType;
  hasSauce;
  hasCheese;
  cookTime: number = 30;

  constructor(pastaType: PastaTypes, hasSauce: boolean, hasCheese: boolean) {
      this.pastaType = pastaType;
      this.hasCheese = hasCheese;
      this.hasSauce = hasSauce;
   }

  cook(): void {
      setTimeout(console.log, this.cookTime, 'Enjoy your pasta!');
  }
}

type Dishes = Pasta | Pizza

class Kitchen {
  makeDish(dish: Dishes): Dishes | never {
    if (dish instanceof Pizza) {
        dish.bake();
        return dish;
    } else if (dish instanceof Pasta) {
        dish.cook();
        return dish;
    } else {
        throw new Error('Unknown dish');
    } 
  }
}

const kitchen = new Kitchen();
const pizza = new Pizza(true, true, false);
const pasta = new Pasta(PastaTypes.spagetti, true, true);

kitchen.makeDish(pizza);
kitchen.makeDish(pasta);
console.log('baker' in pizza)