import fs from 'fs';
import path from 'path';

export class JsonReader {
    static readJson(filePath: string, key: string) {
        const fullPath = path.resolve(__dirname, '../../', filePath);
        const fileContent = fs.readFileSync(fullPath, 'utf-8');
        const data = JSON.parse(fileContent);
        return data[key];
    }
}
