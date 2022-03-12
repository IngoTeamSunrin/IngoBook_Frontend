<script lang="ts">
    import {fly} from 'svelte/transition';
    export let refresh;
</script>
{#key refresh}
    <main>
        <div class="section" in:fly={{x: -10, duration: 500, delay: 500}} out:fly={{x: 10, duration: 500}}>
            <slot />
        </div>
    </main>
{/key}

<style lang="scss">
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        top:72px;
        width: 100%;
        min-height: 100vh;
      .section{
        position: relative;
        width: 100%;
        min-height: 100vh;
      }
    }
</style>