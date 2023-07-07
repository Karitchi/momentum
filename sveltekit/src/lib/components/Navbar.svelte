<script>
    import { page } from "$app/stores";
    export let data;
    let isRegister, isLogin;
    $: {
        if ($page.url.pathname === "/register") {
            isRegister = true;
            isLogin = false;
        } else {
            isRegister = false;
            isLogin = true;
        }
    }
</script>

<div class="navbar bg-base-100">
    <!-- brand -->
    <div class="flex-1">
        <a href="/" class="btn btn-ghost normal-case text-xl">Momentum</a>
    </div>

    <div class="flex-none gap-2">
        {#if !data.isUserConnected}
            <!-- login/register -->
            <div class="flex-1">
                <a class="btn normal-case" href="/login">Login</a>
            </div>
            <div class="flex-1">
                <a class="btn normal-case" href="/register">Register</a>
            </div>
        {:else}
            <!-- create post -->
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
            </svg> -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
            </svg>
            <a href="/create"> Create</a>
            <!-- logout -->
            <div class="dropdown dropdown-end">
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <!-- svelte-ignore a11y-label-has-associated-control -->

                <!-- avatar -->
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <!-- <img src="" /> -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </label>
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->

                <!-- logout -->
                <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <form method="POST" action="?/logout">
                        <li>
                            <input type="submit" value="Logout" />
                        </li>
                    </form>
                </ul>
            </div>
        {/if}
    </div>
</div>
