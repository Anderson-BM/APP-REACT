import { LEVELS } from "./levels.enunm";

export class Task {
    name = '';
    descrition = '';
    completed = false;
    level = LEVELS.NORMAL


    constructor(name, descrition, completed,level ){
        this.name = name;
        this.descrition = descrition;
        this.completed = completed;
        this.level = level;

    }
   
}