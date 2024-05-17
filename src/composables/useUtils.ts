export const useUtils = {
    convertNumbers2English(text: string) {
        // @ts-ignore
        return text.replace(/[\u0660-\u0669\u06f0-\u06f9]/g, function (c:string) {
            return c.charCodeAt(0) & 0xf;
        });
    }
}