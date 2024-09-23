<script lang="ts">
    import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";
    import {
        Dialog,
        DialogContent,
        DialogDescription,
        DialogFooter,
        DialogHeader,
        DialogTitle,
        DialogTrigger,
    } from "../ui/dialog/index.js";
    import { Button } from "../ui/button/index.js";
    import { Label } from "../ui/label/index.js";
    import { Input } from "../ui/input/index.js";
    import { Upload, X } from "lucide-svelte";
    import { pb } from "$lib/api.js";
    import { authModel } from "$lib/auth.js";
    import { toast } from "svelte-sonner";
    let isOpen = false;
    let image: any = null;
    let previewUrl: any = null;
    let title = "";
    let fileInputRef: any;
    let lock = false;

    const handleFileChange = (event: any) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith("image/")) {
            image = file;
            const reader = new FileReader();
            reader.onloadend = () => {
                previewUrl = reader.result;
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (event: any) => {
        event.preventDefault();
    };

    const handleDrop = (event: any) => {
        event.preventDefault();
        const file = event.dataTransfer.files?.[0];
        if (file && file.type.startsWith("image/")) {
            image = file;
            const reader = new FileReader();
            reader.onloadend = () => {
                previewUrl = reader.result;
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (event: any) => {
        if (lock) return;
        lock = true;
        event.preventDefault();
        console.log("Submitting:", { image, title });
        const data = new FormData();
        data.set("title", title);
        data.set("image", image);
        data.set("owner", $authModel?.id);
        try {
            await pb.collection("image_posts").create(data);
            image = null;
            previewUrl = null;
            title = "";
            isOpen = false;
            lock = false;
        } catch (e) {
            toast.error("Upload failed")
            lock = false;
        }
    };

    const handleRemoveImage = () => {
        image = null;
        previewUrl = null;
        if (fileInputRef) {
            fileInputRef.value = "";
        }
    };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<Dialog bind:open={isOpen}>
    <DialogTrigger>
        <Button variant="outline">Upload Image</Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
            <DialogTitle>Upload Image</DialogTitle>
            <DialogDescription>
                Upload an image to share with the community. Add a title and description to make it easier for others to
                discover.
            </DialogDescription>
        </DialogHeader>
        <form on:submit={handleSubmit}>
            <div class="grid gap-4 py-4">
                <div class="grid gap-2">
                    <Label for="image">Image</Label>
                    <div
                        class="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer"
                        on:dragover={handleDragOver}
                        on:drop={handleDrop}
                        on:click={() => {
                            fileInputRef.click();
                        }}
                    >
                        {#if previewUrl}
                            <div class="relative">
                                <img src={previewUrl} alt="Preview" class="max-h-[200px] mx-auto" />
                                <Button
                                    type="button"
                                    variant="destructive"
                                    size="icon"
                                    class="absolute top-0 right-0"
                                    on:click={(e) => {
                                        e.stopPropagation();
                                        handleRemoveImage();
                                    }}
                                >
                                    <X class="h-4 w-4" />
                                </Button>
                            </div>
                        {:else}
                            <div class="text-muted-foreground">
                                <Upload class="mx-auto h-12 w-12 text-gray-400" />
                                <p>Click or drag and drop to upload image</p>
                            </div>
                        {/if}
                        <input
                            bind:this={fileInputRef}
                            id="image"
                            type="file"
                            accept="image/*"
                            class="sr-only"
                            on:change={handleFileChange}
                        />
                    </div>
                </div>
                <div class="grid gap-2">
                    <Label for="title">Title</Label>
                    <Input id="title" bind:value={title} placeholder="Give your image a title" />
                </div>
            </div>
            <DialogFooter>
                <Button type="submit" disabled={!image || !title || lock}>Upload</Button>
            </DialogFooter>
        </form>
    </DialogContent>
</Dialog>
