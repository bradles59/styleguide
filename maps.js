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
            '<p>The Rundle Mall Precinct is the heart of South Australian retail, circulating the freshest of fashion, beauty, lifestyle and food into the City of Adelaide. Bounded by the southern side of North Terrace, the eastern side of King William Street, the northern side of Grenfell Street and the western side of Pulteney Street, the precinct has Rundle Mall as its centerpiece.</p>'+
            '<p>The longest and one of the busiest malls in Australia, Adelaide’s Rundle Mall attracts more than 400,000 visitors and locals each week. Home to more than 1,000 retailers and services which employ over 5,000 people, Rundle Mall is a busy hub of activity in Adelaide city seven days a week. More than 85 percent of tourists spend time discovering the enchanting labyrinth of the precinct that is a generous host to its 24 million annual guests.</p>'+
            '<iframe id="video" src="https://www.youtube.com/embed/ujEEC36Lr3c?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'+
            '<p>Source: http://rundlemall.com/about/about-rundle-mall/</p>'+
            '</div>'+
            '</div>',
        icon: 'https://photos-5.dropbox.com/t/2/AADLpJStFH2g-_O_bhem-Kk-1sQSv4QjLBm4lBGMbvFwSg/12/80587277/png/32x32/1/_/1/2/departmentstore.png/EOiJ1j4YpEUgAigC/z5_2BiCzE-LPUPW8EP9sLpTL5iN1UDkSPN82d5JsKaQ?size=2048x1536&size_mode=3'
      },
      {
        position: new google.maps.LatLng(-34.928559, 138.599916),
        type: 'info',
        contentString: '<div id="content">'+
            '<h1 class="firstHeading">Victoria Square</h1>'+
            '<div id="bodyContent">'+
            '<p>Victoria Square/Tarntanyangga was recently redeveloped and is now host to a diverse range of events and activities in the heart of the City. Traversed by the tram, it\'s easy to access and with cafes and the Adelaide Central Market nearby there\'s always plenty to see and do, in and around the Square.</p>'+
            '<iframe id="video" src="https://www.youtube.com/embed/Lp_qqM4deAI?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'+
            '<p>Source: http://www.adelaideparklands.com.au/victoria-square/</p>'+
            '</div>'+
            '</div>',
        icon: 'https://photos-1.dropbox.com/t/2/AACa_r5CUx_ae-Wb3_Tpx4NXWb1tGDO901RGgceZjOJmTw/12/80587277/png/32x32/1/_/1/2/park.png/EOiJ1j4YpEUgAigC/XTzhGggmEd6uI6ZCsSK88YfljTOyUSLUhwt2V32ukcU?size=2048x1536&size_mode=3'
      },
      {
        position: new google.maps.LatLng(-34.921162, 138.597354),
        type: 'info',
        contentString: '<div id="content">'+
            '<h1 class="firstHeading">Adelaide Casino</h1>'+
            '<div id="bodyContent">'+
            '<p>Located in the historic Railway Station building on the banks of the River Torrens, SKYCITY Adelaide Casino is South Australia’s premiere casino destination, and the city’s most exciting gaming and entertainment venue.</p>'+
            '<p>As a member of the SKYCITY Entertainment Group, our philosophy is to provide our customers with a fun and exciting experience with a variety of entertainment options in a contemporary environment.</p>'+
            '<p>The SKYCITY Entertainment Group is based in Auckland, and is one of Australasia\'s leading gaming and entertainment companies, employing over 3,400 people in New Zealand and Australia. It is publicly listed on both the New Zealand and Australian stock exchanges. Besides Adelaide Casino, the SKYCITY group owns and operates casinos in Auckland, Darwin, Queenstown and Hamilton.</p>'+
            '<iframe id="video" src="https://www.youtube.com/embed/8gSTwKl0KYo?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'+
            '<p>Source: https://www.adelaidecasino.com.au/about-us/</p>'+
            '</div>'+
            '</div>',
        icon: 'https://photos-1.dropbox.com/t/2/AABSPgX6K9CzB1ek1Rj_fhX8nX211EvdKbhb0yFvL0TWgA/12/80587277/png/32x32/1/_/1/2/bar.png/EOiJ1j4YpEUgAigC/rJFezKrxxUrU37gRnvkkb2gWm4dxVzUro1d2VFbZt7E?size=2048x1536&size_mode=3'
      },
      {
        position: new google.maps.LatLng(-34.923130, 138.597083),
        type: 'info',
        contentString: '<div id="content">'+
            '<h1 class="firstHeading">Hinley Street</h1>'+
            '<div id="bodyContent">'+
            '<p>By the end of the twentieth century Hindley Street had developed a rather unsavoury reputation. Picture theatres had been replaced by more late-night nightclubs, strip clubs and bars. Tattoo parlours and billiard rooms, regarded with suspicion by many, operated alongside the few remaining down-market shops. Eating houses and restaurants continued to be well represented, although they were generally small and inexpensive.</p>'+
            '<p>As the twenty-first century unfolded, the state government, the Adelaide City Council and Hindley Street traders responded to the down-at-heel character of the street with various plans for changing its identity and atmosphere. The process has been led by the arts sector and education institutions. The South Australian Department for the Arts (Arts SA) tookup residence in the still beautiful West’s Coffee Palace, using its shop windows as exhibition spaces. The South Australian Symphony Orchestra and Youth Orchestras have occupied what was West’s Cinema.</p>'+
            '<p>Hindley Street west of Morphett Street is gradually being changed by the establishment and expansion of the University of South Australia’s City West campus. The buildings and the education services for students have reinvigorated this end of the street. The university has bought four of the nightclub premises with the aim of creating an environment that is safe for students and compatible with an educational hub. The process has benefited from similar arts and education facilities on the neighbouring North Terrace west, Currie Street and Light Square. Likewise, the completion of the new Royal Adelaide Hospital and related medical facilities on the parklands of North Terrace west will lead to a wider range of services on Hindley Street and redefine the street’s character.</p>'+
            '<iframe id="video" src="https://www.youtube.com/embed/2YkfOUcGQwg?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'+
            '<p>Source: http://adelaidia.sa.gov.au/places/hindley-street</p>'+
            '</div>'+
            '</div>',
        icon: 'https://photos-1.dropbox.com/t/2/AABSPgX6K9CzB1ek1Rj_fhX8nX211EvdKbhb0yFvL0TWgA/12/80587277/png/32x32/1/_/1/2/bar.png/EOiJ1j4YpEUgAigC/rJFezKrxxUrU37gRnvkkb2gWm4dxVzUro1d2VFbZt7E?size=2048x1536&size_mode=3'
      },
      {
        position: new google.maps.LatLng(-34.932591, 138.594180),
        type: 'info',
        contentString: '<div id="content">'+
            '<h1 class="firstHeading">Whitmore Square</h1>'+
            '<div id="bodyContent">'+
            '<p>Situated in the southwest corner of the city, Whitmore Square was named after William Wolryche Whitmore MP (1787–1858). Whitmore was a Whig member of the British House of Commons and a spokesperson for liberal causes such as the abolition of slavery and Catholic emancipation. He also opposed the use of convict labour and was concerned to provide employment opportunities for working people. Whitmore was a founding member of the South Australian Association, which lobbied for the establishment of the colony of South Australia. One of the guiding principles of the plan, and a likely attractive one for Whitmore, was the condition that the colony be worked by free labour and not convicts as was the case in Victoria and New South Wales. It was Whitmore who introduced the South Australia (Foundation) Bill into the British House of Commons in 1834.</p>'+
            '<iframe id="video" src="https://www.youtube.com/embed/xeSzn9NN8lk?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'+
            '<p>Source: http://sahistoryhub.com.au/places/whitmore-square</p>'+
            '</div>'+
            '</div>',
        icon: 'https://photos-1.dropbox.com/t/2/AACa_r5CUx_ae-Wb3_Tpx4NXWb1tGDO901RGgceZjOJmTw/12/80587277/png/32x32/1/_/1/2/park.png/EOiJ1j4YpEUgAigC/XTzhGggmEd6uI6ZCsSK88YfljTOyUSLUhwt2V32ukcU?size=2048x1536&size_mode=3'
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
