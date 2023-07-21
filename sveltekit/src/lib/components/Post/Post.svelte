<script>
    import Carousel from "$lib/components/Post/components/Carousel.svelte";
    import Reaction from "$lib/components/Post/components/Reaction.svelte";
    import Message from "$lib/components/Post/components/Message.svelte";
    import User from "$lib/components/Post/components/User.svelte";

    export let data;
</script>

<div class="m-auto w-1/2">
    {#each data.posts as post}
        <Carousel urls={post.urls} />
        <Reaction postId={post.post_id} />
        <User username={post.username} />
        <Message caption={post.caption} />
    {/each}
</div>
