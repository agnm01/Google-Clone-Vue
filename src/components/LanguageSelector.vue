<template>
    <div class="language-list">
        <p>{{$t("languageSelector.message")}}</p>
        <a href="#" class="language" @click='switchLanguage($t("languageSelector.lang1.selector"))'>{{$t("languageSelector.lang1.name")}}</a>
        <a href="#" class="language" @click='switchLanguage($t("languageSelector.lang2.selector"))'>{{$t("languageSelector.lang2.name")}}</a>
        <a href="#" class="language" @click='switchLanguage($t("languageSelector.lang3.selector"))'>{{$t("languageSelector.lang3.name")}}</a>
    </div>
</template>

<script>
import i18n from '../main'

export default {
  methods: {
    switchLanguage(lang) {
        i18n.global.locale = lang;
    },
  },
};
</script>

<style>
@import './styles/content.css';
</style>