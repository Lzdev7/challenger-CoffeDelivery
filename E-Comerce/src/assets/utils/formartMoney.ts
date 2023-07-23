export function formartMoney ( value: number) {
    return value.toLocaleString( "pt-br", {
        minimumFractionDigits:2,
    });
}