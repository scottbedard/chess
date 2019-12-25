<template>
    <div>
        <h3 class="font-bold text-lg">History</h3>
        <p v-if="empty" data-empty>No squares have been clicked.</p>
        <ol v-else class="list-decimal pl-4">
            <li
                v-for="(square, index) in highlighted"
                v-text="square"
                :data-history="index"
                :key="square"
            />
        </ol>
    </div>
</template>

<script>
export default {
    computed: {
        empty() {
            return this.highlighted.length < 1;
        },
    },
    props: [
        'highlighted',
    ],
};
</script>
