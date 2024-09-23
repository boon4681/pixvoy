<script lang="ts">
    import { authModel } from "../../auth.js";
    import AuthCard from "./auth-card.svelte";

</script>

{#if $authModel}
    <slot></slot>
{:else}
    <AuthCard></AuthCard>
{/if}
