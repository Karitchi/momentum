<script>
    let action = "show more";
    let maxHeigt = true;
    function toggleHeight() {
        if (maxHeigt == true) {
            maxHeigt = false;
            action = "show less";
        } else {
            maxHeigt = true;
            action = "show more";
        }
    }
</script>

<div class="{maxHeigt == true ? 'max-h-12' : ''} overflow-hidden" on:click={toggleHeight}>
    message asdf asdf as df Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Nulla tempore Lorem ipsum dolor, sit amet consectetur adipisicing
    elit. Placeat eligendi iure vero quia eum assumenda voluptatum qui
    perspiciatis est numquam dicta repellendus, non ipsa officiis natus sit
    accusantium corporis quod!
</div>

<button class="link" on:click={toggleHeight}>{action}</button>
