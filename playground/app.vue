<template>
  <div>RTLCSS Nuxt module playground!</div>
  <div style="border: 3px solid #222">
    <div class="test">
      i'm auto rtl
    </div>
  </div>
  <div
    dir="rtl"
    style="border: 3px solid #222"
  >
    <div class="test">
      i'm auto rtl
    </div>
  </div>
</template>

<script setup></script>
<style>
.test {
  height: 100px;
  width: 100px;
  background-color: #ccc;
  margin-left: 10px;
}
</style>
