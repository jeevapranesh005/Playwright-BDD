import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse/sync';

export class CsvReader {
    static readCsv(filePath: string, rowCondition: (row: any) => boolean) {
        const fullPath = path.resolve(__dirname, '../../', filePath);
        const fileContent = fs.readFileSync(fullPath, 'utf-8');
        const records = parse(fileContent, {
            columns: true,
            skip_empty_lines: true,
            trim: true,
        });
        return records.find(rowCondition);
    }
}
