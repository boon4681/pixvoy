<script lang="ts">
    import { authModel, logout, userInfo } from "$lib/auth.js";
    import * as Avatar from "../ui/avatar/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
</script>

<div>
    <DropdownMenu.Root>
        <DropdownMenu.Trigger>
            <Avatar.Root>
                <Avatar.Image src="https://avatar.boon4681.com/api/marble/{$userInfo?.username}.svg" alt="@shadcn" />
                <Avatar.Fallback>PX</Avatar.Fallback>
            </Avatar.Root>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
            <DropdownMenu.Group>
                <DropdownMenu.Label>My Account</DropdownMenu.Label>
                <DropdownMenu.Separator />
                <DropdownMenu.Item href="/profile/{$userInfo?.username}">Profile</DropdownMenu.Item>
                <DropdownMenu.Item on:click={logout}>Logout</DropdownMenu.Item>
            </DropdownMenu.Group>
        </DropdownMenu.Content>
    </DropdownMenu.Root>
</div>
