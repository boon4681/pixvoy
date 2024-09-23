<script lang="ts">
    import Input from "$lib/components/ui/input/input.svelte";
    import { Search } from "lucide-svelte";
    import Guard from "../auth/guard.svelte";
    import Profile from "$lib/components/profile/profile.svelte";
    import UploadImage from "./upload-image.svelte";
    let searchQuery: string = "";
    export let search = false;
    export let me = false;
</script>

<div class="w-full group hover:shadow-sm border-b">
    <div class="group transition-all px-6 py-4 flex gap-4">
        <a href="/" class="text-4xl font-semibold">Pixvoy</a>
        <div class="hidden sm:flex gap-4 ">
            {#if me}
                <UploadImage></UploadImage>
            {/if}
        </div>
        <div class="flex-1 max-w-xl px-4 ml-auto">
            {#if search}
                <div class="hidden sm:flex relative">
                    <Search class="absolute left-4 top-2.5 h-6 w-6 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search for ideas"
                        class="pl-12 h-12 w-full"
                        bind:value={searchQuery}
                    />
                </div>
            {/if}
        </div>
        <Guard>
            <Profile></Profile>
        </Guard>
    </div>
</div>
