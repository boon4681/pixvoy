<script lang="ts">
    import { Heart, MessageCircle, Share2 } from "lucide-svelte";
    import { Button } from "../ui/button/index.js";
    import {
        Dialog,
        DialogContent,
        DialogDescription,
        DialogHeader,
        DialogTitle,
        DialogTrigger,
    } from "../ui/dialog/index.js";
    import type { IPin } from "./interface.js";
    import Pin from "./pin.svelte";
    import { clickToCopy } from "$lib/clickToCopy.js";
    import Av from "../profile/av.svelte";
    import { pb } from "$lib/api.js";
    import { userInfo } from "$lib/auth.js";
    import Badge from "../ui/badge/badge.svelte";

    let selected_pin: any;
    export let pins: IPin[];
</script>

<div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-6">Discover Ideas</h1>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {#each pins as pin}
            <Pin
                on:click={() => (selected_pin = pin)}
                id={pin.id}
                saved={pin.saved}
                liked={pin.liked}
                src={pin.image}
                title={pin.title}
            />
        {/each}
    </div>
</div>

<div class="fixed">
    <Dialog open={!!selected_pin} onOpenChange={() => (selected_pin = null)}>
        {#if selected_pin}
            {#await pb.send(`/user/view/${selected_pin.owner}`, { method: "GET" }) then info}
                <DialogContent class="sm:max-w-[700px] w-screen">
                    <DialogHeader>
                        <div class="flex gap-2 text-sm">
                            <Av username={info.username}></Av>
                            <div class="mt-1">
                                {info.username}
                                <div class="font-light text-xs">
                                    @{info.username}
                                </div>
                            </div>
                        </div>
                        <DialogTitle class="pt-2">
                            {selected_pin.title}
                        </DialogTitle>
                        <DialogDescription></DialogDescription>
                    </DialogHeader>
                    <div
                        class="relative aspect-[4/3] w-full mt-4 flex justify-center rounded-lg overflow-hidden bg-neutral-200"
                    >
                        <img
                            src={selected_pin.image.replace(/\?thumb=.*/, "")}
                            alt={selected_pin.title}
                            class="object-contain w-full rounded-lg"
                        />
                    </div>
                    <div class="flex justify-between items-center mt-4">
                        <div class="flex space-y-1 flex-wrap">
                            {#if selected_pin.expand?.tags}
                                {#each selected_pin.expand.tags as tag}
                                    <Badge class="ml-1">{tag.name}</Badge>
                                {/each}
                            {/if}
                        </div>
                    </div>
                </DialogContent>
            {/await}
        {/if}
    </Dialog>
</div>
