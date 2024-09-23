import { toast } from "svelte-sonner";

export function clickToCopy(node: HTMLElement, text: string) {
    async function copyText() {
        try {
            await navigator.clipboard.writeText(text);
            toast.success("Copied to clipboard")

            node.dispatchEvent(
                new CustomEvent('copysuccess', {
                    bubbles: true
                })
            );
        } catch (error) {
            node.dispatchEvent(
                new CustomEvent('copyerror', {
                    bubbles: true,
                    detail: error
                })
            );
        }
    }

    node.addEventListener('click', copyText);

    return {
        destroy() {
            node.removeEventListener('click', copyText);
        }
    }
}