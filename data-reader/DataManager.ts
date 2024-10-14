import { Assert } from "./Assert";
import { FileContainer } from "./FileContainer";
import { JsonAsset, resources } from "cc";

function SAFE_CALLBACK(fn: Function|undefined, ...args: any) {
    if (typeof fn === 'function') {
        fn.apply(window, args);
    }
}


/**
 * 配置表管理父类
 */
export class DataManager {
    private _file: cck_file_data;
    constructor() {
        this._file = {};
    }

    private static _ins: DataManager = null;
    public static get instance(): DataManager {
        return this._ins = this._ins ? this._ins : new DataManager();
    }

    public get file() { return this._file; }

    /**
     * 加载配置表数据
     * @param path 配置表本地路径（必须是放置在resources目录下）
     * @param onComplete 加载成功回调
     */
    public loadJSONTable(path: string, onComplete?: Function) {
        resources.loadDir(path, JsonAsset, (err, assets: JsonAsset[]) => {
            if (err) {
                console.error("配置表加载失败", err);
                return;
            }
            let jsonData = assets[0].json;
            this.initFileData(jsonData);
            SAFE_CALLBACK(onComplete);
        });
    }

    private initFileData(data: any) {
        for (let key in data) {
            this.parserJSONData(data[key], key);
        }
    }

    private readAsObject(filename: string, fileContainer: FileContainer<any>): void {
        this._file[filename] = fileContainer;
        Object.defineProperty(this, filename, {
            get() {
                return fileContainer;
            }
        })
    }

    private parserJSONData(data: any, filename: string) {
        const flag = data !== null && (Array.isArray(data) || typeof data === "object");
        if (Assert.handle(Assert.Type.ConfigDataException, flag)) {
            const fileContainer = new FileContainer(data);
            this.readAsObject(filename, fileContainer);
        }
    }
}