<template>
  <div class='responsive'>
    <div id='clip'>
      <img id='circle' src='../assets/logo.jpg'>
    </div>
  </div>
</template>
<script>
</script>
<style>
.responsive {
  width: 100%;
  height: auto;
}
#clip {
  width: 100%;
  height: 200px;
  background: url(../assets/background-image.jpg) 0 -230px;
  background-size: cover;
  position: relative;
}
#circle {
  height: 142px;
  border-radius: 50%;
  margin-left: 17%;
  margin-top: 142px;
  margin-bottom: 20px;
}
</style>