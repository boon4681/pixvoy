<script lang="ts">
    import { afterNavigate } from "$app/navigation";
    import { page } from "$app/stores";
    import { pb } from "$lib/api.js";
    import { authModel } from "$lib/auth.js";
    import { clickToCopy } from "$lib/clickToCopy.js";
    import Header from "$lib/components/header/header.svelte";
    import type { IPin } from "$lib/components/pin/interface.js";
    import Pin from "$lib/components/pin/pin.svelte";
    import { Button } from "$lib/components/ui/button/index.js";
    import { Card, CardContent } from "$lib/components/ui/card/index.js";
    import { Tabs, TabsContent, TabsList, TabsTrigger } from "$lib/components/ui/tabs/index.js";
    import { MessageCircle, Share2, Grid, Bookmark, Settings, Trash2 } from "lucide-svelte";
    import { onDestroy, onMount } from "svelte";

    let pins: IPin[] = [];
    const load_data = async () => {
        const loaded = (await pb.collection("image_posts").getList(1, 50, {
            sort: "-created",
            expand: "owner,tags",
            fields: "*,expand.tags.name",
            filter: `owner.username = "${$page.params.id}"`,
        })) as any;
        pins = loaded.items.map((a: any) => {
            a.image = `/api/files/${a.collectionId}/${a.id}/${a.image}?thumb=300x350`;
            return a;
        });
    };
    onMount(load_data);
    const unsub = pb.collection("image_posts").subscribe("*", async ({ action, record }) => {
        if (action == "create") {
            const owner = await pb.collection("users").getOne(record.owner);
            record.expand = { owner };
            record.image = `/api/files/${record.collectionId}/${record.id}/${record.image}?thumb=300x350`;
            pins = [record as any, ...pins];
        }
        if (action == "delete") {
            pins = pins.filter((a) => a.id != record.id);
        }
    });

    const handleDelete = async (id: string) => {
        await pb.collection("image_posts").delete(id);
    };
    afterNavigate(load_data);
    onDestroy(async () => {
        (await unsub)();
    });
</script>

<Header search={false} me={!!$authModel && $page.params.id == $authModel.username}></Header>
{#await pb.send(`/user/info/${$page.params.id}`, { method: "GET" })}
    Loading
{:then info}
    <div class="w-full">
        <div class="relative h-48 md:h-64 overflow-hidden">
            <img
                src="https://avatar.boon4681.com/api/marble/{info.id}.svg"
                alt="Cover"
                class="w-full h-full object-cover"
            />
        </div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <div class="sm:flex sm:items-end sm:space-x-5 relative -mt-16">
                <div class="relative flex flex-col">
                    <img
                        src="https://avatar.boon4681.com/api/marble/{info.username}.svg"
                        alt={info.username}
                        class="h-24 w-24 rounded-full ring-4 ring-white bg-white"
                    />
                    <div class="sm:hidden md:block mt-6 min-w-0 flex-1">
                        <h1 class="text-2xl font-bold text-gray-900 truncate">{info.username}</h1>
                        <p class="text-sm text-gray-500">{info.username}</p>
                    </div>
                </div>
                <div class="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                    <div class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                        {#if $authModel && $page.params.id != $authModel.username}
                            <Button>Follow</Button>
                        {/if}
                        <div use:clickToCopy={window.location.href}>
                            <Button variant="outline"><Share2 class="mr-2 h-4 w-4" /> Share</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
                <h1 class="text-2xl font-bold text-gray-900 truncate">{info.username}</h1>
            </div>
            <div class="mt-6">
                <!-- <p class="text-gray-600">{user.bio}</p> -->
            </div>
            <dl class="mt-6 flex gap-8">
                <div>
                    <dt class="text-sm font-medium text-gray-500">Followers</dt>
                    <dd class="mt-1 text-xl font-semibold text-gray-900">{info.followers}</dd>
                </div>
                <div>
                    <dt class="text-sm font-medium text-gray-500">Following</dt>
                    <dd class="mt-1 text-xl font-semibold text-gray-900">{info.following}</dd>
                </div>
                <div>
                    <dt class="text-sm font-medium text-gray-500">Likes</dt>
                    <dd class="mt-1 text-xl font-semibold text-gray-900">{info.likes}</dd>
                </div>
            </dl>
            <Tabs value="posts" class="mt-8">
                <TabsList>
                    <TabsTrigger value="posts"><Grid class="mr-2 h-4 w-4" /> Posts</TabsTrigger>
                    <!-- <TabsTrigger value="saved"><Bookmark class="mr-2 h-4 w-4" /> Saved</TabsTrigger> -->
                    <!-- <TabsTrigger value="settings"><Settings class="mr-2 h-4 w-4" /> Settings</TabsTrigger> -->
                </TabsList>
                <TabsContent value="posts" class="mt-6">
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {#each pins as pin, index (pin.id)}
                            <Card>
                                <CardContent class="p-0 relative group">
                                    <img src={pin.image} alt={pin.title} class="w-full h-48 object-cover" />
                                    <div class="p-4">
                                        <h3 class="font-semibold text-sm">{pin.title}</h3>
                                    </div>
                                    <Button
                                        variant="destructive"
                                        size="icon"
                                        class="absolute top-2 right-2 transition pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100"
                                        on:click={() => handleDelete(pin.id)}
                                    >
                                        <Trash2 class="h-4 w-4" />
                                        <span class="sr-only">Delete</span>
                                    </Button>
                                </CardContent>
                            </Card>
                        {/each}
                    </div>
                </TabsContent>
                <!-- <TabsContent value="saved">
                </TabsContent> -->
                <!-- <TabsContent value="settings">
                    <p class="text-gray-600">User settings will appear here.</p>
                </TabsContent> -->
            </Tabs>
        </div>
    </div>
{/await}
