<script>
    export let imageURLs

    console.log(imageURLs)
</script>

<div
    class="carousel carousel-center border rounded-xl bg-black h- xs:h-72 md:h-80 lg:h-96 xl:h-128 2xl:h-144"
>
    <h1>hello</h1>
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

    <!-- <div id="slide1" class="carousel-item relative w-full justify-center">
        <img
            alt="truc"
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.snut.fr%2Fwp-content%2Fuploads%2F2015%2F08%2Fimage-de-paysage.jpg&f=1&nofb=1&ipt=8b4cf34e6bea2cef5b92990621ecc5ee01d6ac059b831d5f3f58c494c890437b&ipo=images"
            class="object-contain"
        />
        <div
            class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
            <a href="#slide3" class="btn btn-square">❮</a>
            <a href="#slide2" class="btn btn-square">❯</a>
        </div>
    </div> -->
</div>
<!-- <div id="slide2" class="carousel-item relative w-full justify-center">
    <img
        alt="truc"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YAXlTjvtEKchdMVc5laZhwHaE8%26pid%3DApi&f=1&ipt=ac5e2bcb98574739f5e3eb2b160ad770c65295a417f86a1d4acf88f3bcf6a138&ipo=images"
        class="object-contain"
    />
    <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
    >
        <a href="#slide1" class="btn btn-square">❮</a>
        <a href="#slide3" class="btn btn-square">❯</a>
    </div>
</div>

<div id="slide3" class="carousel-item relative w-full justify-center">
    <img
        alt="truc"
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.snut.fr%2Fwp-content%2Fuploads%2F2015%2F08%2Fimage-de-paysage.jpg&f=1&nofb=1&ipt=8b4cf34e6bea2cef5b92990621ecc5ee01d6ac059b831d5f3f58c494c890437b&ipo=images"
        class="object-contain"
    />
    <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
    >
        <a href="#slide2" class="btn btn-square">❮</a>
        <a href="#slide1" class="btn btn-square">❯</a>
    </div>
</div> -->
