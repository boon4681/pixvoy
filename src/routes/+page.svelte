<script lang="ts">
    import { pb } from "$lib/api.js";
    import AuthCard from "$lib/components/auth/auth-card.svelte";
    import Header from "$lib/components/header/header.svelte";
    import type { IPin } from "$lib/components/pin/interface.js";
    import PinGrid from "$lib/components/pin/pin-grid.svelte";
    import Pin from "$lib/components/pin/pin.svelte";
    import { onDestroy, onMount } from "svelte";
    let pins: IPin[] = [];
    onMount(async () => {
        const loaded = (await pb.collection("image_posts").getList(1, 50, {
            fields: "*,expand.saved_posts_via_saved,expand.liked_via_post.id,expand.liked_via_post.owner,expand.tags.name",
            expand: `saved_posts_via_saved,liked_via_post,tags`,
            sort: "-created",
        })) as any;
        console.log(loaded.items[0].expand)
        pins = loaded.items.map((a: any) => {
            a.image = `/api/files/${a.collectionId}/${a.id}/${a.image}?thumb=300x350`;
            a.saved = (a.expand ?? {}).saved_posts_via_saved ? a.expand.saved_posts_via_saved[0].id : "";
            return a;
        });
    });
    const unsub = pb.collection("image_posts").subscribe("*", async ({ action, record }) => {
        if (action == "create") {
            const owner = await pb.collection("users").getOne(record.owner);
            record.expand = { owner };
            record.image = `/api/files/${record.collectionId}/${record.id}/${record.image}?thumb=300x350`;
            record.saved = (record.expand ?? {}).saved_posts_via_saved ? record.expand.saved_posts_via_saved[0].id : "";
            pins = [record as any, ...pins];
        }
    });
    onDestroy(async () => {
        (await unsub)();
    });
</script>

<Header me={true} search={true}></Header>
<PinGrid {pins}></PinGrid>
