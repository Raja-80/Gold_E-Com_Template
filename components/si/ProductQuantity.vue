<template>
    <div class="flex items-center justify-center overflow-hidden border rounded-full border-primary">
        <button aria-label="plus button" @click="inc(-1)" class="py-1.5 lg:py-2.5 px-3 lg:px-4">
            <svg aria-label="plus icon" class="w-2.5 h-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 9.45h-11a.55.55 0 000 1.1h11a.55.55 0 000-1.1z" fill="currentColor"></path></svg>
        </button>
        <div class="flex">
            <label class="relative py-1.5 lg:py-2.5 h-full">
                <span class="px-5 py-4 text-center text-sml">{{ value }}</span>
                <input :min="quantity.min" :max="quantity.max" class="absolute inset-0 w-full h-full px-2 text-center bg-opacity-0 outline-none text-sml" v-model="value" type="number">
            </label>
            <span class="flex items-center px-2 bg-white text-sml" v-if="quantity.unit">{{ quantity.unit }}</span>
        </div>
        <button aria-label="minus button" @click="inc(1)" class="py-1.5 lg:py-2.5 px-3 lg:px-4">
            <svg aria-label="minus icon" class="w-2.5 h-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 9.4h-4.9V4.5a.6.6 0 10-1.2 0v4.9H4.5a.6.6 0 000 1.2h4.9v4.9a.6.6 0 001.2 0v-4.9h4.9a.6.6 0 100-1.2z" fill="currentColor"></path></svg>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        quantity: Object,
    },
    data() {
        return {
            value: this.quantity.value || this.quantity.default || 1
        }
    },
    watch: {
        value(val) {
            if (val > this.quantity.instock) this.value = this.quantity.instock;
            if (val < this.quantity.min) this.value = this.quantity.default;
            if (isNaN(val)) this.value = this.quantity.default;
            this.$emit('selected', this.value);
        }
    },
    methods: {
        inc(inc) {
            this.value = Number(this.value) + (Number(this.quantity.increment) * Number(inc))
        }
    },
}
</script>