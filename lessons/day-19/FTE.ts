import Employee from "./Employee";

// Extends: IS-A Relationship
// Inheritance -> Design Concept and Reuse Concept
export default class FTE extends Employee{

    constructor(salary : number){
        super(salary);
        this.name = "FTE";
    }

}

/**
 * 
 * 
 * GET POST PUT DELETE PATCH -> Reuse
 * BaseReqHandler / FP
 * GETReqHandler extends BaseReqHandler
 * 
 */