// Tags: Generic, Union

class Queue {
    tasks: Task[] = [];
   
    delay: number = 10;
   
    runQueue(): void {
         setTimeout(() => this.doJob(), this.delay);
     }
   
    doJob(): void {
         const task = this.tasks.shift();
         if (task != null) {
             console.log(task);
         }
         this.runQueue();
     }
   
     addJob(task: Task): number {
         return this.tasks.push(task);
     }
   
     run() {
         this.runQueue();
     }
   
     set jobDelay(time: number) {
         this.delay = time;
     }
   }
   
   type TaskType = number | string;


   
   class Task {
     value;
   
     constructor(value: TaskType) {
         this.value = value;
     }
   }
   
   const queue = new Queue();
   
   const task1 = new Task('task#1');
   const task2 = new Task(1);
   
   queue.jobDelay = 1000;
   
   queue.addJob(task1);
   queue.addJob(task2);
   
   queue.run();