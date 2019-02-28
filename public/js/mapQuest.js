function initMap() {
	// add your code here
	L.mapquest.key = '14IpVHZkLF3D66lzClBaYIlUH2NGfbjE';

    var map = L.mapquest.map('map', {
        center: [32.88, -117.236],
        layers: L.mapquest.tileLayer('map'),
        zoom: 12,
        zoomControl: false
    });

    L.marker([32.878947, -117.235869]).addTo(map);
}