// 将时间戳转换为日期时间字符串
export function timestampToDateTime(timestamp: number): string {
    const date = new Date(timestamp);
    console.log('timestamp: ', timestamp);

    const Y = date.getFullYear() + '-';
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    const D = date.getDate() + ' ';
    const h = date.getHours() + ':';
    const m = date.getMinutes() + ':';
    const s = date.getSeconds();
    return (Y + M + D + h + m + s);
}