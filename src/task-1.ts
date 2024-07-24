// есть функция - которая возвращает кортеж
// в кортеже первый элемент всегда строка, 
// второй - аргумент функции (может быть абсолютно любого типа)


// interface Fuu{
//     <T>(a: T): ['hi', T]
// }

// const fu: Fuu = (a) => ['hi', a]
// console.log(fu(1))
// console.log(fu('1'))
// console.log(fu(true))
// // нужно ее типизировать



// interface Cbb {
//     (a: number): number 
// }

// export function createMap(list: number[]): (cb: Cbb) => number[] {
//     return function(cb: Cbb): number[] {
//       const result = [];
      
//       for (let el of list) {
//         result.push(cb(el))
//       }
  
//       return result;
//     }
//   }
  
//   const mapNums = createMap([1, 2, 3])
//   const result = mapNums((num) => num + 200)
  
//   console.log(result)
//   console.log(1)

// interface A {
//   y: string;
//   x: number;
// }
// interface B {
//   y: string;
//   x: string;
// }
// type C = B & A
// let c: C

// c = {x: 1, y: '123'}

// type D = {x: number}
// type F = {y: string}

// let s: D&F

// s = {x: 1, y: "afa"}


// enum UserRoles {
//   User = 'user',
//   Moderator = 'moderator',
//   Admin = 'admin'
// }

// interface UserProps {
//   id: number;
//   name: string;
//   role: UserRoles;
//   age?: number;
// }

// const user: UserProps = {
//   id: 1,
//   name: 'Test',
//   role: UserRoles.Admin,
// };

// user.age = 20;

// interface hasPermissionsProps<T, D> {
//   (user: D): T;
// }
// interface createCounterProps {
//   (initial?: number, error?: string): {increment(): string | number, reset(): void}
// }



// const hasPermissions: hasPermissionsProps<boolean | never, UserProps> = (user) => {
//   if (user.role === UserRoles.Admin) return true;
//   else if (user.role === UserRoles.Moderator) return true;
//   else if (user.role === UserRoles.User) return false;
//   throw new Error('Unknown user role');
// };

// const createCounter: createCounterProps = (initial = 0, error = 'Unauthorized') => {
//   let count = initial;
//   return {
//       increment() {
//           if (hasPermissions(user)) {
//               count += 1;
//               return count;
//           }
//           return error;
//       },
//       reset() {
//           count = initial;
//       }
//   }
// }

// console.log(createCounter(6).increment())

// написать функцию которая принимает объект
// возвращает этот объект с доп полем keys которое содержит количество ключей


interface ObjectProps<T> {
  [key: string]: T;
}
interface ObjWithKey {
  keys?:number;
}

let obj: ObjectProps<string | number> = {a: 1, b: '2'};

const countFunc = <T>(obj: ObjectProps<T> & ObjWithKey ): ObjectProps<T>  => {
  obj.keys = ++Object.keys(obj).length;
  return obj;
}

console.log(countFunc(obj))
console.log(obj)
