<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body {
    height: 100%;
}
</style>

<template>
    <div class="container flex flex-wrap mx-auto p-4" id="app">
        <!-- board -->
        <main class="p-4 w-full md:w-3/4">
            <Board />
        </main>

        <!-- sidebar -->
        <aside class="p-4 w-full md:w-1/4">
            <Sidebar />
        </aside>
    </div>
</template>

<script>
import Board from './Board.vue';
import Sidebar from './Sidebar.vue';

export default {
    components: {
        Board,
        Sidebar,
    },
    name: 'app',
};
</script>
