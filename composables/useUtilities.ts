export const useUtilities = () => {
    /**
     * Capitalizes the first letter of each word in a string
     * @param str - string to capitalize
     */
    const capitalize = (str: string): string => {
        const words = str.split(' ');
        const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        return capitalizedWords.join(' ');
    }

    return {
        capitalize,
    }

}