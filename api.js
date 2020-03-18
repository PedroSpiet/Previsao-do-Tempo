function getCity(){
    var city = document.getElementById('city').value;
    const apiKey = '73471f972fa8c4a7c03d226d4d699699'
    const base_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    fetch(base_url)
    .then(response => { response.json()
      .then(data => console.log(data))
    })
    .catch(e => console.log(e.message))
    


  }