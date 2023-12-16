<template>
  <div>
    <div class="main-404">
      <div class="left">
        <div class="left-content">
          <div class="t-404">404</div>
          <div class="sorry-text">We are sorry, but the page you requested was not found</div>
          <router-link to="/home"><button class="back-button">Back To Home <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
</svg>
</button></router-link>
        </div>
      </div>
      <img class="img" src="/public/img/404bg.jpg" />
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {};
</script>

<style lang="scss" scoped></style>
