<script>
    export let data;
</script>

<nav class="mt-3 navbar navbar-expand-lg bg-body-secondary rounded">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">Momentum</a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                {#if !data.isUserConnected}
                    <li class="nav-item">
                        <a
                            class="nav-link active"
                            aria-current="page"
                            href="/register">Register</a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/login">Login</a>
                    </li>
                {:else}
                    <form method="POST">
                        <input type="submit" class="btn" value="Logout" />
                    </form>
                {/if}
            </ul>
        </div>
    </div>
</nav>
