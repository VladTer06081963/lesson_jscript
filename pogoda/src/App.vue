<script>
export default {
  data() {
    return {
      city: "",
      error: ""
    }
  },
  computed: {
    cityName() {
      return "''"+ this.city +"''"
    }
  },
  methods: {
    getWeather() {
      if(this.city.trim().length < 2) {
        this.error = "Введите корректное название :)"
        return false
      }
      this.error = ''
    }
  }
}

</script>

<template>
 <div class="wrapper">
  

    <h1>Погодное приложение</h1>
  <p>Узнать погоду в  {{ city == "" ?  "вашем городе": cityName }} </p>
  <input type="text" v-model="city" placeholder="введите ваш город">
  <button v-if="city != ''" @click="getWeather()">получить погоду</button>
  <button disabled v-else>Введите название города</button>
  <p class="error">{{ error }}</p>
  
 </div>  
</template>

<style scoped>
.error {
  color: #d03939;
}
.wrapper{
  width: 900px;
  height: 500px;
  border-radius: 50px;
  background-color: rgb(42, 45, 48);
  text-align: center;
  color: rgb(238, 241, 64);
  padding: 20px;
  }
 
 .wrapper h1 {
  margin-top: 30px;
}
.wrapper p{
  margin-top: 50px;
}
.wrapper input {
  margin-top: 30px;
  background: transparent;
  border: 0;
  border-bottom: 2px solid#110813;
  color: #fcfcfc;
  font-size: 14px;
  padding: 5px 8px;
  outline: none;
}
.wrapper input:focus {
  border-bottom-color: #6e2d7d ;
}
.wrapper button:disabled {
  background: #746027;
  cursor: not-allowed;
}

.wrapper button{
  background: #e3bc4b;
  color: #fff;
  border-radius: 10px;
  border: 2px solid#b99935;
  padding: 10px 15px;
  margin-left: 20px;
  cursor: pointer;
  transition: transform 500ms ease;
}
.wrapper button:hover {
  transform: scale(1.1) translateY(-5px)
}

</style>
