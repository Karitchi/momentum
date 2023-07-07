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
    <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">Momentum</a>
    </div>
    <div class="flex-none gap-2">
        {#if !data.isUserConnected}
            <div class="flex-1">
                <a class="btn normal-case" href="/login">Login</a>
            </div>
            <div class="flex-1">
                <a class="btn normal-case" href="/register">Register</a>
            </div>
        {:else}
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <!-- <img src="" /> -->
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                </label>
                <ul
                    tabindex="0"
                    class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                    <li>
                        <a class="justify-between" href="#"> Profile </a>
                    </li>
                    <li>
                        <form method="POST">
                            <button type="submit" class="link" value="Logout">
                                Logout</button
                            >
                        </form>
                    </li>
                </ul>
            </div>
        {/if}
    </div>
</div>

<!-- <nav>
    <div>
        <a href="/">Momentum</a>
        <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon" />
        </button>
        <div>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                {#if !data.isUserConnected}
                    <li class="nav-item">
                        <a
                            class="nav-link {isRegister ? 'active' : ''}"
                            aria-current="page"
                            href="/register">Register</a
                        >
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link {isLogin ? 'active' : ''}"
                            href="/login">Login</a
                        >
                    </li>
                {:else}
                    <form method="POST">
                        <input type="submit" class="btn" value="Logout" />
                    </form>
                {/if}
            </ul>
        </div>
    </div>
</nav> -->
