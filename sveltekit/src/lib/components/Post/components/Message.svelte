<script>
    export let caption;

    let action = "show more";
    let maxHeigt = true;
    function showMoreLess() {
        if (maxHeigt == true) {
            maxHeigt = !maxHeigt;
            action = "show less";
        } else {
            maxHeigt = !maxHeigt;
            action = "show more";
        }
    }
</script>
<div
    class="{maxHeigt == true ? 'max-h-12' : ''} overflow-hidden"
    on:click={showMoreLess}
    on:keydown={showMoreLess}
    role="button"
    tabindex="0"
    aria-label="Show more/less text"
>
    {caption}
</div>

<button class="link" on:click={showMoreLess}>{action}</button>
