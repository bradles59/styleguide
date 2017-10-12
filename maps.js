var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: new google.maps.LatLng(-34.928963, 138.600711),
    mapTypeId: 'roadmap'
  });

  var icons = [
    {
      bar: 'https://lh6.googleusercontent.com/oo6IEkt0yGkvX0oa6OT8UKVjWKHi7iCVTl4tzVPKPqzAUO5H0FCKZDxv6jvc5Sj5BU3LXPLIwN-pV48=w1920-h925'
    },
    {
      shopping: 'https://lh5.googleusercontent.com/iLrXXBqNNrqEBnH4W3D4fQJa-SkWeShVzv2qxM8v8u-pWQHDIwSR7e8MCh4BTyGIbffPvT4qkzFwCK0=w1920-h925'
    },
    {
      park: 'https://lh5.googleusercontent.com/8o4GQusV8q9DsSDt4UB1NthDinMf0pVcMJR8Fx5IrYFN7dL5lgmcpiaE1Nj2bD_rd1vT_W5pTDveI2w=w1920-h925'
    }
  ];

      var features = [
      {
        position: new google.maps.LatLng(-34.922908, 138.601179),
        type: 'info',
        contentString: '<div id="content">'+
            '<h1 class="firstHeading">Rundle Mall</h1>'+
            '<div id="bodyContent">'+
            '<p>Adelaide is South Australia’s cosmopolitan coastal capital. Its ring of '+
            'parkland on the River Torrens is home to renowned museums such as the '+
            'Art Gallery of South Australia, displaying expansive collections including '+
            'noted Indigenous art, and the South Australian Museum, devoted to natural '+
            'history. The citys Adelaide Festival is an annual international arts '+
            'gathering with spin-offs including fringe and film events.</p>'+
            '<iframe id="video" src="https://www.youtube.com/embed/kf3_U0MLs9A?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'+
            '</div>'+
            '</div>',
        icon: 'https://lh5.googleusercontent.com/iLrXXBqNNrqEBnH4W3D4fQJa-SkWeShVzv2qxM8v8u-pWQHDIwSR7e8MCh4BTyGIbffPvT4qkzFwCK0=w1920-h925'
      },
      {
        position: new google.maps.LatLng(-34.928559, 138.599916),
        type: 'info',
        contentString: '<div id="content">'+
            '<h1 class="firstHeading">Victoria Square</h1>'+
            '<div id="bodyContent">'+
            '<p>Adelaide is South Australia’s cosmopolitan coastal capital. Its ring of '+
            'parkland on the River Torrens is home to renowned museums such as the '+
            'Art Gallery of South Australia, displaying expansive collections including '+
            'noted Indigenous art, and the South Australian Museum, devoted to natural '+
            'history. The citys Adelaide Festival is an annual international arts '+
            'gathering with spin-offs including fringe and film events.</p>'+
            '<iframe id="video" src="https://www.youtube.com/embed/Sj-VzFlJ14o?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'+
            '</div>'+
            '</div>',
        icon: 'https://lh5.googleusercontent.com/8o4GQusV8q9DsSDt4UB1NthDinMf0pVcMJR8Fx5IrYFN7dL5lgmcpiaE1Nj2bD_rd1vT_W5pTDveI2w=w1920-h925'
      },
      {
        position: new google.maps.LatLng(-34.921162, 138.597354),
        type: 'info',
        contentString: '<div id="content">'+
            '<h1 class="firstHeading">Adelaide Casino</h1>'+
            '<div id="bodyContent">'+
            '<p>Adelaide is South Australia’s cosmopolitan coastal capital. Its ring of '+
            'parkland on the River Torrens is home to renowned museums such as the '+
            'Art Gallery of South Australia, displaying expansive collections including '+
            'noted Indigenous art, and the South Australian Museum, devoted to natural '+
            'history. The citys Adelaide Festival is an annual international arts '+
            'gathering with spin-offs including fringe and film events.</p>'+
            '<iframe id="video" src="https://www.youtube.com/embed/Sj-VzFlJ14o?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'+
            '</div>'+
            '</div>',
        icon: 'https://lh6.googleusercontent.com/oo6IEkt0yGkvX0oa6OT8UKVjWKHi7iCVTl4tzVPKPqzAUO5H0FCKZDxv6jvc5Sj5BU3LXPLIwN-pV48=w1920-h925'
      },
      {
        position: new google.maps.LatLng(-34.923130, 138.597083),
        type: 'info',
        contentString: '<div id="content">'+
            '<h1 class="firstHeading">Hinley Street</h1>'+
            '<div id="bodyContent">'+
            '<p>Adelaide is South Australia’s cosmopolitan coastal capital. Its ring of '+
            'parkland on the River Torrens is home to renowned museums such as the '+
            'Art Gallery of South Australia, displaying expansive collections including '+
            'noted Indigenous art, and the South Australian Museum, devoted to natural '+
            'history. The citys Adelaide Festival is an annual international arts '+
            'gathering with spin-offs including fringe and film events.</p>'+
            '<iframe id="video" src="https://www.youtube.com/embed/Sj-VzFlJ14o?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'+
            '</div>'+
            '</div>',
        icon: 'https://lh6.googleusercontent.com/oo6IEkt0yGkvX0oa6OT8UKVjWKHi7iCVTl4tzVPKPqzAUO5H0FCKZDxv6jvc5Sj5BU3LXPLIwN-pV48=w1920-h925'
      },
      {
        position: new google.maps.LatLng(-34.932591, 138.594180),
        type: 'info',
        contentString: '<div id="content">'+
            '<h1 class="firstHeading">Whitmore Square</h1>'+
            '<div id="bodyContent">'+
            '<p>Adelaide is South Australia’s cosmopolitan coastal capital. Its ring of '+
            'parkland on the River Torrens is home to renowned museums such as the '+
            'Art Gallery of South Australia, displaying expansive collections including '+
            'noted Indigenous art, and the South Australian Museum, devoted to natural '+
            'history. The citys Adelaide Festival is an annual international arts '+
            'gathering with spin-offs including fringe and film events.</p>'+
            '<iframe id="video" src="https://www.youtube.com/embed/Sj-VzFlJ14o?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'+
            '</div>'+
            '</div>',
        icon: 'https://lh5.googleusercontent.com/8o4GQusV8q9DsSDt4UB1NthDinMf0pVcMJR8Fx5IrYFN7dL5lgmcpiaE1Nj2bD_rd1vT_W5pTDveI2w=w1920-h925'
      }
    ];


    //Make all the markers
    features.forEach(function(feature) {
      var marker = new google.maps.Marker({
        position: feature.position,
        icon: feature.icon,
        map: map
      });
      var infowindow = new google.maps.InfoWindow({
        content: feature.contentString
      });
      marker.addListener('click', function() {
        infowindow.open(map, marker)
      });
    });
}
