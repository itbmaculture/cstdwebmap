ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([100.142885, 13.315899, 101.226263, 14.049501]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMap_1 = new ol.layer.Tile({
            'title': 'Google Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_district_2 = new ol.format.GeoJSON();
var features_district_2 = format_district_2.readFeatures(json_district_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_district_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_district_2.addFeatures(features_district_2);
var lyr_district_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_district_2, 
                style: style_district_2,
                popuplayertitle: "district",
                interactive: false,
                title: '<img src="styles/legend/district_2.png" /> district'
            });
var format_groundsport_location__3 = new ol.format.GeoJSON();
var features_groundsport_location__3 = format_groundsport_location__3.readFeatures(json_groundsport_location__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_groundsport_location__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_groundsport_location__3.addFeatures(features_groundsport_location__3);
var lyr_groundsport_location__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_groundsport_location__3, 
                style: style_groundsport_location__3,
                popuplayertitle: "groundsport_location_ชุมชน",
                interactive: true,
                title: '<img src="styles/legend/groundsport_location__3.png" /> groundsport_location_ชุมชน'
            });
var format_groundsport_location__4 = new ol.format.GeoJSON();
var features_groundsport_location__4 = format_groundsport_location__4.readFeatures(json_groundsport_location__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_groundsport_location__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_groundsport_location__4.addFeatures(features_groundsport_location__4);
var lyr_groundsport_location__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_groundsport_location__4, 
                style: style_groundsport_location__4,
                popuplayertitle: "groundsport_location_สาธารณะ",
                interactive: true,
                title: '<img src="styles/legend/groundsport_location__4.png" /> groundsport_location_สาธารณะ'
            });
var format_groundsport_location__5 = new ol.format.GeoJSON();
var features_groundsport_location__5 = format_groundsport_location__5.readFeatures(json_groundsport_location__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_groundsport_location__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_groundsport_location__5.addFeatures(features_groundsport_location__5);
var lyr_groundsport_location__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_groundsport_location__5, 
                style: style_groundsport_location__5,
                popuplayertitle: "groundsport_location_โรงเรียน",
                interactive: true,
                title: '<img src="styles/legend/groundsport_location__5.png" /> groundsport_location_โรงเรียน'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMap_1.setVisible(true);lyr_district_2.setVisible(true);lyr_groundsport_location__3.setVisible(true);lyr_groundsport_location__4.setVisible(true);lyr_groundsport_location__5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMap_1,lyr_district_2,lyr_groundsport_location__3,lyr_groundsport_location__4,lyr_groundsport_location__5];
lyr_district_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'dcode': 'dcode', 'dname': 'dname', 'dname_e': 'dname_e', 'pcode': 'pcode', 'pname': 'pname', 'z_code': 'z_code', 'num_female': 'num_female', 'num_male': 'num_male', 'num_health': 'num_health', 'num_temple': 'num_temple', 'num_comm': 'num_comm', 'num_hos': 'num_hos', 'num_sch': 'num_sch', 'area_dis': 'area_dis', });
lyr_groundsport_location__3.set('fieldAliases', {'name': 'name', 'location': 'location', 'dcode': 'dcode', 'dname': 'dname', 'stdcode': 'stdcode', 'type': 'type', 'area': 'area', 'data': 'data', 'ownership': 'ownership', 'detail': 'detail', 'lat': 'lat', 'lng': 'lng', });
lyr_groundsport_location__4.set('fieldAliases', {'name': 'name', 'location': 'location', 'dcode': 'dcode', 'dname': 'dname', 'stdcode': 'stdcode', 'type': 'type', 'area': 'area', 'data': 'data', 'ownership': 'ownership', 'detail': 'detail', 'lat': 'lat', 'lng': 'lng', });
lyr_groundsport_location__5.set('fieldAliases', {'name': 'name', 'location': 'location', 'dcode': 'dcode', 'dname': 'dname', 'stdcode': 'stdcode', 'type': 'type', 'area': 'area', 'data': 'data', 'ownership': 'ownership', 'detail': 'detail', 'lat': 'lat', 'lng': 'lng', });
lyr_district_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'dcode': 'TextEdit', 'dname': 'TextEdit', 'dname_e': 'TextEdit', 'pcode': 'TextEdit', 'pname': 'TextEdit', 'z_code': 'TextEdit', 'num_female': 'TextEdit', 'num_male': 'TextEdit', 'num_health': 'Range', 'num_temple': 'Range', 'num_comm': 'Range', 'num_hos': 'Range', 'num_sch': 'Range', 'area_dis': 'TextEdit', });
lyr_groundsport_location__3.set('fieldImages', {'name': 'TextEdit', 'location': 'TextEdit', 'dcode': 'Range', 'dname': 'TextEdit', 'stdcode': 'TextEdit', 'type': 'TextEdit', 'area': 'TextEdit', 'data': 'TextEdit', 'ownership': 'TextEdit', 'detail': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', });
lyr_groundsport_location__4.set('fieldImages', {'name': 'TextEdit', 'location': 'TextEdit', 'dcode': 'Range', 'dname': 'TextEdit', 'stdcode': 'TextEdit', 'type': 'TextEdit', 'area': 'TextEdit', 'data': 'TextEdit', 'ownership': 'TextEdit', 'detail': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', });
lyr_groundsport_location__5.set('fieldImages', {'name': 'TextEdit', 'location': 'TextEdit', 'dcode': 'Range', 'dname': 'TextEdit', 'stdcode': 'TextEdit', 'type': 'TextEdit', 'area': 'TextEdit', 'data': 'TextEdit', 'ownership': 'TextEdit', 'detail': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', });
lyr_district_2.set('fieldLabels', {'OBJECTID': 'no label', 'dcode': 'no label', 'dname': 'no label', 'dname_e': 'no label', 'pcode': 'no label', 'pname': 'no label', 'z_code': 'no label', 'num_female': 'no label', 'num_male': 'no label', 'num_health': 'no label', 'num_temple': 'no label', 'num_comm': 'no label', 'num_hos': 'no label', 'num_sch': 'no label', 'area_dis': 'no label', });
lyr_groundsport_location__3.set('fieldLabels', {'name': 'no label', 'location': 'no label', 'dcode': 'no label', 'dname': 'no label', 'stdcode': 'no label', 'type': 'no label', 'area': 'no label', 'data': 'no label', 'ownership': 'no label', 'detail': 'no label', 'lat': 'no label', 'lng': 'no label', });
lyr_groundsport_location__4.set('fieldLabels', {'name': 'no label', 'location': 'no label', 'dcode': 'no label', 'dname': 'no label', 'stdcode': 'no label', 'type': 'no label', 'area': 'no label', 'data': 'no label', 'ownership': 'no label', 'detail': 'no label', 'lat': 'no label', 'lng': 'no label', });
lyr_groundsport_location__5.set('fieldLabels', {'name': 'no label', 'location': 'no label', 'dcode': 'no label', 'dname': 'no label', 'stdcode': 'no label', 'type': 'no label', 'area': 'no label', 'data': 'no label', 'ownership': 'no label', 'detail': 'no label', 'lat': 'no label', 'lng': 'no label', });
lyr_groundsport_location__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});