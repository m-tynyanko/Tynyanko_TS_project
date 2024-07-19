// Виды пасты - spagetti/penne/macaroni
// Tags: Union, Enum, Narrowing

class Pizza {
  hasPepperoni;
  hasSauce;
  hasCheese;
  bakeTime: number = 30;

  constructor(hasPepperoni: boolean, hasSauce: boolean, hasCheese: boolean) {
      this.hasPepperoni = hasPepperoni;
      this.hasSauce = hasSauce;
      this.hasCheese = hasCheese;
  }
  bake() {
      setTimeout(console.log, this.bakeTime, 'Enjoy your pizza!');
  }
}

enum PastaTypes {
    spagetti = 'spagetti',
    penne = 'penne',
    macaroni = 'macaroni'
}


class Pasta {
  pastaType;
  hasSauce;
  hasCheese;
  cookTime: number = 30;

  constructor(pastaType: PastaTypes, hasSauce: boolean, hasCheese: boolean) {
      this.pastaType = pastaType;
      this.hasCheese = hasCheese;
      this.hasSauce = hasSauce;
   }

  cook() {
      setTimeout(console.log, this.cookTime, 'Enjoy your pasta!');
  }
}

class Kitchen {
  makeDish(dish) {
      // эту часть надо переделать
      if ('bake' in dish) {
          dish.bake();
          return dish;
      } else if ('cook' in dish) {
          dish.cook();
          return dish;
      }
      throw new Error('Unknown dish');
  }
}

const kitchen = new Kitchen();
const pizza = new Pizza(true, true, false);
const pasta = new Pasta('spagetti', true, true);

kitchen.makeDish(pasta);
kitchen.makeDish(pasta);