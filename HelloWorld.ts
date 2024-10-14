
import { _decorator, Component, Node } from 'cc';
import { DataReader } from './data-reader';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = HelloWorld
 * DateTime = Mon Oct 14 2024 12:13:48 GMT+0800 (中国标准时间)
 * Author = uchihamadara
 * FileBasename = HelloWorld.ts
 * FileBasenameNoExtension = HelloWorld
 * URL = db://assets/script/HelloWorld.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */
 
@ccclass('HelloWorld')
export class HelloWorld extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        // [3]
        DataReader.loadJSONTable("/jsons", () => {
            console.log(DataReader.file.HeroWeapon.get(1100).name);
        });
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/zh/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/zh/scripting/life-cycle-callbacks.html
 */
