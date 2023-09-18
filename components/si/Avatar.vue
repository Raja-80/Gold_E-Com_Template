<template>
    <div class="flex items-center justify-center w-8 h-8 rounded-full bg-primary">
        <span class="text-white uppercase text-sml">{{ letters }}</span>
    </div>
</template>

<script>
export default {
    props: {
        name: { type: String, default: '' },
    },
    data() {
        return {
            letters: this.name.split(' ').map(word => word[0]).join('.'),
        }
    }
}
</script>