<template>
    <div class="letter">
        <ul class="mp-character-list">
            <li v-for="(item,key) in SortCities" @click="characterClick"  :key="key">{{key}}</li>
        </ul>
    </div>
</template>
<script>
    export default{
        name:"Alphabet",
        props: {
            SortCities:{}
        },
        methods:{
            characterClick(e){
                this.$emit('change',e.target.innerHTML)
            }
        }
    }
</script>
<style>
.letter{
    position: fixed;
    right:0;
    top:20%;
    line-height: 20px;
    
}
.letter li{color:#00bcd4;}
</style>