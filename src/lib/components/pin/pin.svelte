<script lang="ts">
    import { Share2, Heart, ThumbsUp } from "lucide-svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    // @ts-ignore
    import { clickToCopy } from "$lib/clickToCopy";
    // @ts-ignore
    import { pb } from "$lib/api";
    // @ts-ignore
    import { userInfo } from "$lib/auth";
    export let id: string;
    export let src: string;
    export let title: string;
    export let liked: boolean;
    export let saved: string;
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="relative group overflow-hidden rounded-lg select-none">
    <img
        {src}
        alt={title}
        width={300}
        height={400}
        class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
    />
    <div
        class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex flex-col justify-between p-4"
        on:click
    ></div>
    <div
        class="absolute top-4 right-4 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
        <div use:clickToCopy={window.location.href}>
            <Button variant="secondary" size="icon" class="rounded-full">
                <Share2 class="h-4 w-4" />
            </Button>
        </div>
    </div>
    <div class="absolute bottom-0 p-4 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 class="text-white font-semibold truncate">{title}</h3>
        <div class="flex justify-between items-center mt-2">
            {#if saved}
                <Button
                    on:click={async () => {
                        await pb.collection("saved_posts").delete(saved);
                        saved = "";
                    }}
                    variant="blue"
                    size="sm"
                    class="rounded-full">Saved</Button
                >
            {:else}
                <Button
                    on:click={async () => {
                        saved = (await pb.collection("saved_posts").create({ owner: $userInfo?.id, saved: id })).id
                    }}
                    variant="secondary"
                    size="sm"
                    class="rounded-full">Save</Button
                >
            {/if}
            <div class="flex space-x-2">
                <Button
                    variant="ghost"
                    size="icon"
                    class="rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 flex content-center"
                >
                    <Heart class={`h-4 w-4 ${liked ? "fill-red-500 text-red-500" : "text-gray-700"}`} />
                </Button>
                <!-- <Button variant="ghost" size="icon" class="rounded-full bg-white bg-opacity-50 hover:bg-opacity-75">
                    <ThumbsUp class="h-4 w-4" />
                </Button> -->
            </div>
        </div>
    </div>
</div>
