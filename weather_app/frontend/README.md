BACKEND FOR WEATHER APP

**CONTENTS OF WEATHER APP**
*When given a place:*
	a) **Current conditions**
            • Temperature
            • Weather description
            • Wind speed and direction
            • Humidity level
            • Lattitude and longitude
      #############################################################################
      #  b) **Forecast**                                                          #
      #	    • Daily  and hourly forecast for the upcomming days                   #
      #	    • High and low temperatures for each day                              #
      #	    • Probability for precipitation                                       #
      #	    • Weather icon for quick visual interpretation                        #
      ###################################################################################
      #     c) **Radar and Maps**                                                       #
      #           • Interactive maps showing current weather patterns                   #
      #           • Radar images displaying precipitation, storms and their movement    #
      ###################################################################################


        d)  **Settings**
            • Units preferences (e.g Celsius or fahrenheight, metric or imperial)






**APIs that will be queried**
#https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}# 
  *Used to get the current weather of a place*
*example response for London query*

     {
        "coord":{"lon":-0.1257,"lat":51.5085},
        "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],
        "base":"stations",
        "main":{"temp":284.38,"feels_like":283.57,"temp_min":283.31, "temp_max":285.21, "pressure":1017, "humidity":77},
        "visibility":10000,
        "wind":{"speed":4.47,"deg":207,"gust":6.26},
        "clouds":{"all":75},
        "dt":1709124257,
        "sys":{"type":2,"id":2075535,"country":"GB","sunrise":1709102971,"sunset":1709141830},
        "timezone":0,
        "id":2643743,
        "name":"London",
        "cod":200
     }
