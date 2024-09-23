import { pb } from "$lib/api.js";
import type { AdminModel, AuthModel } from "pocketbase";
import { readable, writable } from "svelte/store";
import { invalidateAll } from "$app/navigation";

export const userInfo = writable<{
    username: string,
    id: string,
    email: string
} | null>()

export const logout = () => {
    pb.authStore.clear()
}

export const authModel = readable<AuthModel | AdminModel | null>(
    null,
    function (set, update) {
        pb.authStore.onChange(async (token, model) => {
            if (model) {
                const res = await pb.send("/user/@me", { method: "GET" })
                userInfo.set(res)
            }
            update((oldval) => {
                if (
                    (oldval?.isValid && !model?.isValid) ||
                    (!oldval?.isValid && model?.isValid)
                ) {
                    invalidateAll();
                }
                return model;
            });
        }, true);
    }
);

export const lock_login = writable<boolean>(false)

export async function login(
    { email, password }: { email: string, password: string, }
) {
    lock_login.set(true)
    await pb.collection("users").authWithPassword(email, password);
    lock_login.set(false)
}

export const lock_register = writable<boolean>(false)

export const register = async ({ username, email, password }: { username: string; email: string; password: string }) => {
    lock_register.set(true)
    await pb.collection("users").create({
        username: username,
        email: email,
        emailVisibility: true,
        password: password,
        passwordConfirm: password,
        name: username,
    });
    await pb.collection("users").authWithPassword(email, password);
    lock_register.set(false)
};