<style scoped>
    a:before {
        content: '';
        @apply block pb-full;
    }

    a:nth-child(16n+1),
    a:nth-child(16n+3),
    a:nth-child(16n+5),
    a:nth-child(16n+7),
    a:nth-child(16n+10),
    a:nth-child(16n+12),
    a:nth-child(16n+14),
    a:nth-child(16n) {
        @apply bg-gray-300 text-gray-800;
    }
</style>

<template>
    <div class="max-w-2xl mx-auto">
        <div class="bg-gray-800 flex flex-wrap text-gray-300 text-xs">
            <a
                v-for="square in squares"
                class="relative w-1/8"
                href="#"
                :key="square"
                @click.prevent>
                <div
                    v-text="square"
                    class="absolute flex h-full items-center justify-center left-0 top-0 w-full hover:border-2 hover:border-red-500"
                />
            </a>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        squares() {
            const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
            const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

            return ranks.reduce((acc, r) => acc.concat(files.map(f => `${f}${r}`)), []);
        },
    },
};
</script>
