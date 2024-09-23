<script lang="ts">
    import { page } from "$app/stores";
    import { pb } from "$lib/api.js";
    import Header from "$lib/components/header/header.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import { Heart, MessageCircle, Share2 } from "lucide-svelte";
</script>

<Header></Header>
{#await pb.collection("image_posts_view").getOne($page.params.id) then record}
    <div class="relative w-full max-w-lg mt-4 mx-auto">
        <h1 class="text-2xl font-bold mb-6">{record.title}</h1>
        <div class="w-full aspect-[4/3] bg-neutral-200 rounded-lg">
            <img
                src="/api/files/{record.collectionId}/{record.id}/{record.image}?thumb=300x350"
                alt=""
                class="object-contain rounded-lg w-full h-full"
            />
        </div>
        <div class="flex justify-between items-center mt-4">
            <Button variant="secondary" size="sm" class="rounded-full">Save</Button>
            <div class="flex space-x-2">
                <Button variant="ghost" size="icon" class="rounded-full">
                    <Heart class="h-4 w-4 text-red-500" />
                </Button>
                <Button variant="ghost" size="icon" class="rounded-full">
                    <MessageCircle class="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" class="rounded-full">
                    <Share2 class="h-4 w-4" />
                </Button>
            </div>
        </div>
    </div>
{/await}
