<script>
    import Carousel from "$lib/components/Post/components/Carousel.svelte";
    import Reaction from "$lib/components/Post/components/Reaction.svelte";
    import Message from "$lib/components/Post/components/Message.svelte";
</script>

<div class="grid justify-items-center">
    <div class="border rounded-xl shadow-xl p-3 w-1/2 h-auto">
        <Carousel />
        <Reaction />
        <Message />
    </div>
    <div class="border rounded-xl shadow-xl p-3 w-1/2 h-auto">
        <Carousel />
        <Reaction />
        <Message />
    </div>
    <div class="border rounded-xl shadow-xl p-3 w-1/2 h-auto">
        <Carousel />
        <Reaction />
        <Message />
    </div>
    <div class="border rounded-xl shadow-xl p-3 w-1/2 h-auto">
        <Carousel />
        <Reaction />
        <Message />
    </div>
</div>
