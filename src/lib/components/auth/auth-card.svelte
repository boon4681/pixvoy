<script lang="ts">
    import Button from "../ui/button/button.svelte";
    import Login from "./login.svelte";
    import Register from "./register.svelte";
    let mode: "register" | "login" = "login";
</script>

{#if mode == "login"}
    <Login>
        <div class="text-center text-sm relative mt-4">
            No account?
            <Button variant="link" on:click={() => (mode = "register")} class="text-primary hover:underline">
                try Sign up
            </Button>
        </div>
    </Login>
{:else if mode == "register"}
    <Register>
        <div class="text-center text-sm relative mt-4">
            Already have an account?
            <Button variant="link" on:click={() => (mode = "login")} class="text-primary hover:underline">
                try Login
            </Button>
        </div>
    </Register>
{/if}
