<script>
    import AuthForm from "$lib/components/AuthForm.svelte";
    const action = "login";
    export let form;
</script>

<AuthForm {action} {form} />
