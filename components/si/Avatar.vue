<template>
    <div class="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
        <span class="text-sml text-white uppercase">{{ letters }}</span>
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
    },
}
</script>