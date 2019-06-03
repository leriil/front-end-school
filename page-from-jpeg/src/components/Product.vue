<template>
  <div class='col-lg-3' style='background-color:white; margin-left:6px; margin-right:6px;'>
    <div class='row' style='margin-top:24px;'>
      <div class='col'>
        <div id='item-logo'></div>
      </div>
      <div class='col'>
        <h6 style='font-size:14px;'>Lorem upsum Dolor</h6>
      </div>
    </div>
    <div class='row' style='height:200px;'>
      <div class='col'>
        <slot></slot>
      </div>
    </div>
    <div class='row'>
      <div class='col'>
        <h4 style='text-align:end'>Lorem</h4>
        <div class='float-right' style='font-size:9px;'>No fees and no time restrictions</div>
        <button
          type='button'
          class='btn-lg btn-block product-btn'
          style='margin-bottom:24px;'
        >View Details</button>
      </div>
    </div>
  </div>
</template>
<style>
#item-logo {
  background: url(../assets/item-logo.png);
  height: 80px;
  width: 80px;
  background-size: 100%;
  border-radius: 5px;
}
.product-btn {
  background-color: #ffa500;
  color: white;
}
</style>

 