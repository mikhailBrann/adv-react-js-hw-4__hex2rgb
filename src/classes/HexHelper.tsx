class HexHelper {
    public static hex2rgb(hex: string): string
    {
        // Remove # if present
        hex = hex.replace('#', '');

        // Convert to RGB values
        return `rgb(
            ${parseInt(hex.substring(0, 2), 16)}, 
            ${parseInt(hex.substring(2, 4), 16)}, 
            ${parseInt(hex.substring(4, 6), 16)}
        )`;
    };

    public static isValidHex(hex: string): boolean 
    {
        const hexRegex = /^#?([A-Fa-f0-9]{6})$/;
        return hexRegex.test(hex);
    };
}

export default HexHelper;