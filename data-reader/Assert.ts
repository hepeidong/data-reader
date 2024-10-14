import { js } from "cc";
import { Exception } from "./Exception";

type Constructor<T = unknown> = {new (...args: any[]): T};

export class Assert {
    constructor() {
        
    }

    private static _ins: Assert = null;
    public static get instance() { 
        if (!this._ins) {
            this._ins = new Assert();
        }
        return this._ins;
     }

    public static handle(exceptionType: string, condition: any, message?: string) {
        try {
            const exception = this.getException(exceptionType, condition, message);
            return exception.handle();
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    private static getException(exceptionType: string, condition: any, message?: string) {
        const exceptionRef = js.getClassByName(exceptionType) as Constructor;
        const exception = new exceptionRef(message, condition);
        return exception as Exception;
    }
}


export namespace Assert {
    export enum Type {
        ConfigDataException = "ConfigDataException",
    }
}
