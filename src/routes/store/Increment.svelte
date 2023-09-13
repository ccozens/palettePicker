<!-- script -->
<script lang='ts'>
    import { count } from "$lib/stores/values";

    function increment() {
        count.update((n) => n + 1);
    }
</script>

<!-- html -->
<button on:click={increment}>+</button>