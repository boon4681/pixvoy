<script lang="ts">
    import * as Avatar from "../ui/avatar/index.js";
    export let username: string;
</script>

<Avatar.Root>
    <Avatar.Image src="https://avatar.boon4681.com/api/marble/{username}.svg" alt="@shadcn" />
    <Avatar.Fallback>PX</Avatar.Fallback>
</Avatar.Root>
