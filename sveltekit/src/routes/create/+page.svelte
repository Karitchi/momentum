<script>
    import { enhance } from "$app/forms";
</script>

<div class="flex justify-center">
    <form
        method="post"
        class="form-control border w-1/2"
        enctype="multipart/form-data"
        use:enhance
    >
        <input
            type="file"
            class="file-input"
            name="image"
            multiple="multiple"
        />
        <input
            type="text"
            class="input shadow"
            name="caption"
            placeholder="caption"
        />
        <input type="submit" class="btn" value="Post" />
    </form>
</div>


