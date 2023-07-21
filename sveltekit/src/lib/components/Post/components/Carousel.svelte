<script>
    export let urls;
</script>

<div class="carousel carousel-center border rounded-xl bg-black">
    {#each urls as url, i}
        <div id={i} class="carousel-item relative w-full justify-center">
            <img alt="truc" src="/public/posts/{url}" class="object-contain" />
            <div
                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
            >
                <a href="#{i - 1}" class="btn btn-square">❮</a>
                <a href="#{i + 1}" class="btn btn-square">❯</a>
            </div>
        </div>
    {/each}
</div>
