<template>

    <div class="flex flex-col justify-between items-center p-4 overflow-hidden bg-white border border-black rounded-md h-64">


        <!-- Rating stars -->
        <div class="flex justify-start items-center h-1/5">
            <!-- Render stars based on item.rating -->
            <template v-for="star in 5">
                <svg v-if="star <= item.rating" class="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M10 3.13l1.82 4.526h4.696l-3.793 2.918 1.523 4.757L10 14.94l-3.228 2.374 1.523-4.757-3.793-2.918h4.696L10 3.13z" />
                </svg>
                <svg v-else class="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M10 3.13l1.82 4.526h4.696l-3.793 2.918 1.523 4.757L10 14.94l-3.228 2.374 1.523-4.757-3.793-2.918h4.696L10 3.13z" />
                </svg>

            </template>
        </div>

        <div class=" font-light text-gray-500 leading-loose text-sm text-center text-ellipsis h-3/5">
            {{ item.content }}
        </div>

        <div class=" h-1/5 flex justify-end items-center ">
            <div class=" text-xs font-semibold text-center">
                {{ `${item.customer.firstname} ${item.customer.lastname}` }}
            </div>

        </div>
    </div>




</template>

<script>
export default {
    props: {
        item: Object
    },
}
</script>

<style></style>