<script>
import { Application } from '@splinetool/runtime';
import axios from 'axios';

export default {
  data() {
    return {
      city: "",
      error: "",
      info: null
    }
  },
  computed: {
    cityName() {
      return "'" + this.city + "'"
    },
    showTemp() {
      return this.info && this.info.main ? "Температура: " + this.info.main.temp : ""
    },
    showFeelsLike() {
      return this.info && this.info.main ? "Ощущается как: " + this.info.main.feels_like : ""
    },
    showMinTemp() {
      return this.info && this.info.main ? "Минимальная температура: " + this.info.main.temp_min : ""
    },
    showMaxTemp() {
      return this.info && this.info.main ? "Максимальная температура: " + this.info.main.temp_max : ""
    }
  },
  methods: {
    getWeather() {
      if (this.city.trim().length < 2) {
        this.error = "Введите корректное название :)"
        return false
      }
      this.error = ''
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=6df6e90d294f8b95dd87547766058540`)
        .then(res => {
          this.info = res.data;
        })
    },
    clearCity() {
      this.city = '';
    }
  },
  mounted() {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/Nl0B5K-ks5Oazd33/scene.splinecode');
  }
}

</script>

<template>
<div class="wrapper">
  <h1>Погодное приложение</h1>
  <p>Узнать погоду в  {{ city == "" ?  "вашем городе" : cityName }} </p>
  <div class="input-wrapper">
    <input type="text" v-model="city" placeholder="введите ваш город">
    <svg v-if="city" @click="clearCity" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="clear-icon size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.5 0 0 0 2.25 15Z" />
    </svg>
  </div>
  <button v-if="city" @click="getWeather()">получить погоду</button>
  <button disabled v-else>Введите название города</button>
  <p class="error">{{ error }}</p>
  <div v-if="info">
    <p>{{ showTemp }}</p>
    <p>{{ showFeelsLike }}</p>
    <p>{{ showMinTemp }}</p>
    <p>{{ showMaxTemp }}</p>
  </div>
  <!-- <p v-show="info != null">{{ info.main }}</p> -->
  <div class="logo-container">
    <canvas id="canvas3d"></canvas>
  </div>
</div>

</template>

<style scoped>
.error {
  color: #d03939;
}
.wrapper {
  width: 900px;
  height: 500px;
  border-radius: 50px;
  background-color: rgb(42, 45, 48);
  text-align: center;
  color: rgb(238, 241, 64);
  padding: 20px;
  position: relative;
}
.logo-container {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 100px;  /* Подберите нужный размер */
  height: 100px; /* Подберите нужный размер */
}
#canvas3d {
  width: 100%;
  height: 100%;
}
.wrapper h1 {
  margin-top: 30px;
}
.wrapper p {
  margin-top: 50px;
}
.input-wrapper {
  position: relative;
  display: inline-block;
}
.wrapper input {
  margin-top: 30px;
  background: transparent;
  border: 0;
  border-bottom: 2px solid #110813;
  color: #fcfcfc;
  font-size: 14px;
  padding: 5px 8px;
  outline: none;
}
.wrapper input:focus {
  border-bottom-color: #6e2d7d;
}
.clear-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 14px;
  width: 24px; /* Размер подгоняется под viewBox SVG */
  height: 24px; /* Размер подгоняется под viewBox SVG */
}
.wrapper button:disabled {
  background: #746027;
  cursor: not-allowed;
}
.wrapper button {
  background: #e3bc4b;
  color: #fff;
  border-radius: 10px;
  border: 2px solid #b99935;
  padding: 10px 15px;
  margin-left: 20px;
  cursor: pointer;
  transition: transform 500ms ease;
}
.wrapper button:hover {
  transform: scale(1.1) translateY(-5px);
}

</style>
