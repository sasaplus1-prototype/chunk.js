"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunk = void 0;
function chunk(values, size) {
    const len = values.length;
    const result = [];
    let index = 0;
    while (index < len) {
        result.push(values.slice(index, index + size));
        index += size;
    }
    return result;
}
exports.chunk = chunk;
