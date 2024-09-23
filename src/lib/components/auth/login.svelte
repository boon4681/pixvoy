<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { Github, Twitter } from "lucide-svelte";
    import { pb } from "$lib/api.js";
    import { login, register } from "../../auth.js";
    let email: string = "";
    let password: string = "";
</script>

<Card.Root class="sm:max-w-[425px] m-auto">
    <Card.Header>
        <Card.Title>Login</Card.Title>
        <Card.Description>Enter your credentials to access your account.</Card.Description>
    </Card.Header>
    <Card.Content class="sm:max-w-[425px]">
        <form on:submit={() => login({ password, email })} class="space-y-4">
            <div class="space-y-2">
                <Label for="username">Email or Username</Label>
                <Input
                    id="username"
                    type="text"
                    placeholder="Enter your email or username"
                    bind:value={email}
                    required
                />
            </div>
            <div class="space-y-2">
                <Label for="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" bind:value={password} required />
            </div>
            <Button type="submit" class="w-full">Log In</Button>
        </form>
        <!-- <div class="relative my-4">
            <div class="absolute inset-0 flex items-center">
                <span class="w-full border-t" />
            </div>
            <div class="relative flex justify-center text-xs uppercase">
                <span class="bg-background px-2 text-muted-foreground"> Or continue with </span>
            </div>
        </div> -->
        <div class="flex gap-2">
            <!-- <Button variant="outline" class="w-full">
                <Github class="mr-2 h-4 w-4" />
                Github
            </Button>
            <Button variant="outline" class="w-full">
                <Twitter class="mr-2 h-4 w-4" />
                Twitter
            </Button> -->
        </div>
        <slot></slot>
    </Card.Content>
</Card.Root>
