<script>
    import "@fontsource-variable/noto-sans-thai";
    import "../app.css";
    import AuthGuard from "$lib/components/auth/auth-guard.svelte";
    import Toaster from "$lib/components/ui/sonner/sonner.svelte";
</script>

<Toaster />
<div class="min-h-screen w-full flex flex-col">
    <AuthGuard>
        <slot></slot>
    </AuthGuard>
</div>
