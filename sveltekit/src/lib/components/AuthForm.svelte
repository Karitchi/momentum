<script>
    export let action;
    export let form;
</script>

<form
    class="mt-5 p-5 w-50 m-auto body-tertiary border rounded shadow"
    method="POST"
>
    {#if action == "Register"}
        <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input
                type="text"
                class="form-control"
                value=""
                id="username"
                aria-describedby="emailHelp"
                placeholder="user123"
                name="username"
                required="true"
            />
        </div>
    {/if}

    <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
            type="email"
            class="form-control"
            value=""
            id="email"
            aria-describedby="emailHelp"
            placeholder="example@email.com"
            name="email"
            required="true"
        />
    </div>
    <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
            type="password"
            class="form-control"
            value=""
            id="password"
            placeholder="password"
            name="password"
            required="true"
        />
    </div>

    <button type="submit" class="btn btn-primary mb-3 w-100">{action}</button>
    {#if form}
        <p class="text-danger">{form}</p>
    {/if}
</form>
