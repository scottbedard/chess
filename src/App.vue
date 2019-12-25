<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

<template>
    <div id="app">
        <h1 class="font-bold mt-6 text-center text-2xl">Chess Test</h1>
        <div class="container flex flex-wrap mx-auto p-4">
            <!-- board -->
            <main class="p-4 w-full md:w-3/4 xl:3/5">
                <Board :highlighted="highlighted" @highlight="highlight" />
            </main>

            <!-- sidebar -->
            <aside class="p-4 w-full md:w-1/4 xl:2/5">
                <Sidebar :highlighted="highlighted" />
            </aside>
        </div>
    </div>
</template>

<script>
import Board from './Board.vue';
import Sidebar from './Sidebar.vue';

export default {
    data() {
        return {
            highlighted: [],
        };
    },
    components: {
        Board,
        Sidebar,
    },
    methods: {
        highlight(square) {
            if (this.highlighted.includes(square)) {
                this.highlighted = this.highlighted.filter(id => id !== square);
            } else {
                this.highlighted.push(square);
            }
        },
    },
};
</script>
