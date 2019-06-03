<template>
  <div>
    <div class='row middle'>
      <div class='col-lg-2'></div>
      <div class='col-md-6 col-md-offset-2 col-lg-6 col-lg-offset-2 col-sm-4 col-sm-offset-4'>
        <h2>Lorem ipsum</h2>
      </div>
    </div>
    <div class='row'>
      <div class='col-lg-2'></div>
      <div class='col-lg-6'>
        <div class='row header'>
          <div class='col'>
            <h5>About</h5>
          </div>
        </div>
        <div class='row main-content'>
          <div class='col'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac erat sed mi scelerisque cursus sit amet sed dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tincidunt facilisis nunc vel malesuada. Donec ornare, velit et tincidunt finibus, ligula magna convallis mauris, quis pretium ante velit sed dolor. Phasellus quis consequat orci, at pharetra massa. Cras fringilla, sapien non efficitur lacinia, mi libero pellentesque mauris, at tempor nulla augue ut mi. Vestibulum commodo odio eget urna fringilla malesuada commodo in felis. Ut gravida fringilla enim eu euismod. Morbi sed quam eget enim rutrum eleifend sit amet vitae enim.</p>
          </div>
        </div>
        <div class='row'>
          <div class='col'>
            <h5>Area of Focus</h5>
          </div>
        </div>
        <div class='row'>
          <div id='area-of-focus' class='col'>
            <img id='politics' src='../assets/internet.svg'>
            <label
              style='background-color: whitesmoke; width: fit-content;'
            >Economy, Politics & Environment</label>
          </div>
          <div id='area-of-focus' class='col'>
            <img id='culture' src='../assets/culture.svg'>
            <label style='background-color: whitesmoke; width: fit-content;'>Heath & Culture</label>
          </div>
        </div>
        <div class='row'>
          <div id='area-of-focus' class='col'>
            <img id='non-profit' src='../assets/handshake.svg'>
            <label
              style='background-color: whitesmoke; width: fit-content;'
            >Public Administration and Non-Profit</label>
          </div>
        </div>
      </div>
      <div class='col-lg-2'>
        <div class='row header'>
          <div class='col'>
            <h5>Contact</h5>
          </div>
        </div>
        <div class='row'>
          <div class='col'>
            <div class='row'>
              <div class='col'>
                <img id='gosling' src='../assets/gosling.jpg'>
              </div>
              <div class='col'>
                <div class='row'>Ivan Ivanov</div>
                <div class='row'>
                  <a href='#'>Ivan@mail.ru</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='follow-us' class='row'>
          <div class='col'>
            <div class='row'>
              <div class='col'>
                <h5>Follow us</h5>
              </div>
            </div>
            <div class='row'>
              <div class='col'>
                <div class='row'>
                  <div class='col' id='goslin-contact'>
                    <img id='in' src='../assets/web.svg'>
                    <a id='lorem-link' href='#'>lorem.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div class='row'>
              <div class='col'>
                <div class='row'>
                  <div class='col'>
                    <img id='in' src='../assets/in.svg'>
                    <a id='linkedin-link' href='#'>linkedin.com/lorem</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style>
.header {
  margin-top: 36px;
  margin-bottom: 36px;
}
.middle {
  margin-top: 100px;
}
.main-content {
  margin-top: 30px;
}
#gosling {
  border-radius: 50%;
  height: 48px;
}
#follow-us {
  margin-top: 18px;
}
#in {
  margin-right: 12px;
}
#lorem-link {
  font-size: 14px;
}
#linkedin-link {
  font-size: 14px;
}
#svg-background {
  background-color: azure;
  background-image: url(../assets/web.svg);
}
#goslin-contact {
  max-width: fit-content;
}
#area-of-focus {
  max-width: fit-content;
}
#politics {
  max-width: fit-content;
  width: 25px;
  background-color: #5a4d99;
}
#culture {
  max-width: fit-content;
  width: 25px;
  background-color: #bfcc36;
}
#non-profit {
  max-width: fit-content;
  width: 25px;
  background-color: #1a587a;
}
</style>