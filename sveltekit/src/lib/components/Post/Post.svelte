<script>
    import Carousel from "$lib/components/Post/components/Carousel.svelte";
    import Reaction from "$lib/components/Post/components/Reaction.svelte";
    import Message from "$lib/components/Post/components/Message.svelte";
    export let data;
    console.log(data)
</script>

<div class="grid justify-items-center">
    {#each data.posts as post}
        <div class="border rounded-xl shadow-xl p-3 w-1/2 h-auto">
            <!-- todo add poster info -->
            <Carousel imageURLs={post.image_url} />
            <Reaction />
            <Message caption={post.caption} />
            <!-- todo add date -->
        </div>
    {/each}
</div>
