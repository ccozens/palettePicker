<!-- script -->
<script lang='ts'>
    import { count } from "$lib/stores/values";

    function decrement() {
        count.update((n) => n - 1);
    }
</script>

<!-- html -->
<button on:click={decrement}>-</button>