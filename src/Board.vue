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
    <div class="max-w-xl mx-auto">
        <div class="bg-gray-800 flex flex-wrap font-bold text-gray-300 text-xs sm:text-sm lg:text-base">
            <a
                v-for="square in squares"
                class="relative w-1/8"
                href="#"
                :data-square="square"
                :key="square"
                @click.prevent="highlight(square)">
                <div
                    v-text="square"
                    class="absolute flex h-full items-center justify-center left-0 top-0 w-full hover:border-4 hover:border-red-500"
                    :class="{
                        'border-4 border-red-500': highlighted.includes(square),
                    }"
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
    methods: {
        highlight(square) {
            this.$emit('highlight', square);
        },
    },
    props: [
        'highlighted',
    ],
};
</script>
