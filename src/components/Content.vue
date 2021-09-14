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
                            <p>Search by voice</p>
                        </div>
                    </div>
                </label>
            </form>
        </div>

        <!--Buttons-->
        <div class="buttons">
            <button>Google Search</button>
            <button>I'm Feeling Lucky</button>
        </div>
        <div class="language-list">
            <p>Google offered in: </p>
            <a href="index-ro.html" class="language">Română</a>
            <a href="index-hu.html" class="language">Magyar</a>
            <a href="index-de.html" class="language">Deutsch</a>
        </div>
    </section>

</template>

<script>
</script>

<style>
@import './styles/content.css';
</style>