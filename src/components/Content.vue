<template>

    <!--Logo-->
    <section class="logo">
        <div class="google-logo">
            <img src="../assets/google-logo.png" alt="Google logo" class="google-image">
        </div>

        <!--Search Form-->
        <div class="search-container">
            <form>
                <label class="search">
                    <img src="../assets/search.png" alt="search pic">
                </label>
                <input type="text">
                <label class="microphone">
                    <div class ="dropdown">
                        <img src="../assets/mic.png" alt="mic pic" class="mic-pic">
                        <div class="dropdown-content">
                        </div>
                    </div>
                </label>
            </form>
        </div>

        <!--Buttons-->
        <div class="buttons">
            <button>{{$t("search.message")}}</button>
            <button>{{$t("lucky.message")}}</button>
        </div>
        <LanguageSelector></LanguageSelector>
        
    </section>

</template>

<script>
import LanguageSelector from './LanguageSelector.vue'
export default {
    components: {
        LanguageSelector: LanguageSelector
    }
}

</script>

<style>
@import './styles/content.css';
</style>