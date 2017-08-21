<template>
    <div class="code">
        <pre>
            
        <code>let codeTage = document.getElementById('code');
        codeTage.onclick = () =>{
            console.log('this is a click form code tage')
        }
        var a = 100;
        let isFun = (a) => {
            return a + 1;
        }
        isFun(a);</code>
        </pre>
    </div>
</template>
<script>
export default {
    name: 'code',
    data() {
        return {

        }
    }
}
</script>
<style lang="scss">
.code pre {
    background: #000000;
    color: #a6e22e;
    text-align: justify
}
</style>