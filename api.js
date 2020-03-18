function getCity(){
    var city = document.getElementById('city').value;
    const apiKey = '73471f972fa8c4a7c03d226d4d699699'
    const base_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    const Show = (result) => {
        var clouds = result['weather'];
        for(var teste in clouds){

            var sky = clouds[teste].main;
            var description = clouds[teste].description;
            var name = result['name'];
            var temp = result['main'].temp;
            
            document.getElementById('nome').innerHTML = name;
            document.getElementById('sky').innerHTML = sky;
            document.getElementById('description').innerHTML = description;
            document.getElementById('temp').innerHTML = temp;

        }
    }
    
    fetch(base_url)
    .then(response => { response.json()
      .then(data => Show(data))
    })
    .catch(e => console.log(e.message))
        


  }