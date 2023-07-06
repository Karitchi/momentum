<script>
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
    export let data;
</script>

<div class="container">
    <Navbar {data} />
    <slot />
</div>
