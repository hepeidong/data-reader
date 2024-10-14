import { _decorator } from "cc";
import { Exception } from "./Exception";

const { ccclass } = _decorator

@ccclass("ConfigDataException")
export class ConfigDataException extends Exception {
    private flag: any;
    constructor(_message: string, flag: boolean) {
        super("配置表数据类型错误，不是Array,也不是Object!");
        this.flag = flag;
    }

    public handle(): boolean {
        if (this.flag) {
            return true;
        }
        throw new Error(this.toString());
    }
}