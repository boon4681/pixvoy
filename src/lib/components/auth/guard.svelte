<script lang="ts">
    import { authModel } from "../../auth.js";
</script>

{#if $authModel}
    <slot></slot>
{/if}
