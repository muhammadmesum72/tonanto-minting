//Contains all the helper functions
export function formatAddress(address) {
    if (address.length !== 42) return null;
    return `${address.slice(0, 6)}...${address.slice(38)}`;
}

export async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(text);
    } else {
        return document.execCommand('copy', true, text);
    }
}