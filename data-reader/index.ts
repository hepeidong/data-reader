import { DataManager } from "./DataManager";

/**配置表数据文件读取模块 */
export class DataReader {
    public static get file() { return DataManager.instance.file; }
    /**
     * 加载配置表数据
     * @param path 配置表本地路径（必须是放置在resources目录下）
     * @param onComplete 加载成功回调
     */
    public static loadJSONTable(path: string, onComplete?: Function): void {
        DataManager.instance.loadJSONTable(path, onComplete);
    }
}
