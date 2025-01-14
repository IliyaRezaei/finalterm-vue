<script setup></script>

<template>
  <div id="footer-container">
    <div class="footer-icon">
      <base-logo firstSquareColor="white" secondSquareColor="white" logoColor="white"></base-logo>
    </div>
    <div class="footer-text">
      هلیوم بستری برای اشتراک گزاری ایده ها و فکر افراد پیشرو در زمینه علم و دانش است. در هلیوم
      میتوانید به جدیدترین مقالات علمی در کشور دسترسی داشته باشید و خود نیز در ترویج علم و دانش نقشی
      داشته باشید.
    </div>
    <div class="footer-links">
      <div class="footer-links-item">بنویسید</div>
      <div class="footer-links-item">راهنما</div>
      <div class="footer-links-item">معرفی به دوستان</div>
      <div class="footer-links-item">قوانین</div>
    </div>
  </div>
</template>

<style scoped>
#footer-container {
  background-image: url('https://img.freepik.com/free-photo/solid-navy-blue-concrete-textured-wall_53876-124584.jpg');
  height: 120px;
  border-top-left-radius: 0.7rem;
  border-top-right-radius: 0.7rem;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
.footer-text {
  text-wrap: wrap;
  width: 40%;
}
.footer-links {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 42px;
}
</style>
