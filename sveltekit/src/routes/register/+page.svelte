<script>
    import AuthForm from "$lib/components/AuthForm.svelte";
    const action = "Register";
    export let form;
</script>

<AuthForm {action} {form} />
