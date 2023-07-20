<script>
    export let imageURLs
</script>

<div
    class="flex carousel carousel-center border rounded-xl bg-black"
>
    <!-- {#each imageUrls as imageUrl} -->
        <div id="slide1" class="carousel-item relative w-full justify-center">
            <img
                alt="truc"
                src="/public/posts/{imageURLs}"

                class="object-contain"
            />
            <div
                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
            >
                <a href="#slide3" class="btn btn-square">❮</a>
                <a href="#slide2" class="btn btn-square">❯</a>
            </div>
        </div>
    <!-- {/each} -->

</div>