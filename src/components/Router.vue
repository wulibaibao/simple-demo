<template>
    <ul>
        <li v-for="i in conf">
            <router-link :to="i.path" :name="i.name">{{i.name}}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'route',
    data() {
        return {
            conf: [
                {
                    path: '/code',
                    name: 'code',
                    islink: ''
                }, {
                    path: '/slide',
                    name: 'slide',
                    islink: ''
                }, {
                    path: '/lazyload',
                    name: 'lazyload',
                    islink: ''
                }, {
                    path: '/scroll',
                    name: 'scroll'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
ul,
li {
    list-style: none;
}
</style>


