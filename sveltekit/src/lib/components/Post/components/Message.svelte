<script>
    export let caption;

    let action = "show more";
    let maxHeigt = true;
    function toggleHeight() {
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
    on:click={toggleHeight}
>
    {caption}
</div>

<button class="link" on:click={toggleHeight}>{action}</button>
