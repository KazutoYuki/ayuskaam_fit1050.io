  function initMap(){
        var options ={zoom:14, center:{lat:-37.864, lng:145.139 }}
        var map = new 
        google.maps.Map(document.getElementById('map'), options);
        //new marker
        var marker = new google.maps.Marker({ 
            position:{lat:-37.864, lng:145.139 }, map:map});
        var Window = new google.maps.InfoWindow({
            content:'<h2>Ayuskaam Wellness and Beauty Salon Mount Waverley</h2>'
            
        
        });
        marker.addListener('click', function(){
            Window.open(map, marker)
        });
    }


