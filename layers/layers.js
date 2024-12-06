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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
var format_bma_zone_3 = new ol.format.GeoJSON();
var features_bma_zone_3 = format_bma_zone_3.readFeatures(json_bma_zone_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bma_zone_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bma_zone_3.addFeatures(features_bma_zone_3);
var lyr_bma_zone_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bma_zone_3, 
                style: style_bma_zone_3,
                popuplayertitle: "bma_zone",
                interactive: false,
    title: 'bma_zone<br />\
    <img src="styles/legend/bma_zone_3_0.png" /> 01<br />\
    <img src="styles/legend/bma_zone_3_1.png" /> 02<br />\
    <img src="styles/legend/bma_zone_3_2.png" /> 03<br />\
    <img src="styles/legend/bma_zone_3_3.png" /> 04<br />\
    <img src="styles/legend/bma_zone_3_4.png" /> 05<br />\
    <img src="styles/legend/bma_zone_3_5.png" /> 06<br />'
        });
var format_tblSportfield_C_4 = new ol.format.GeoJSON();
var features_tblSportfield_C_4 = format_tblSportfield_C_4.readFeatures(json_tblSportfield_C_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tblSportfield_C_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tblSportfield_C_4.addFeatures(features_tblSportfield_C_4);
var lyr_tblSportfield_C_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tblSportfield_C_4, 
                style: style_tblSportfield_C_4,
                popuplayertitle: "tblSportfield_C",
                interactive: true,
                title: '<img src="styles/legend/tblSportfield_C_4.png" /> tblSportfield_C'
            });
var format_tblSportfield_B_5 = new ol.format.GeoJSON();
var features_tblSportfield_B_5 = format_tblSportfield_B_5.readFeatures(json_tblSportfield_B_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tblSportfield_B_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tblSportfield_B_5.addFeatures(features_tblSportfield_B_5);
var lyr_tblSportfield_B_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tblSportfield_B_5, 
                style: style_tblSportfield_B_5,
                popuplayertitle: "tblSportfield_B",
                interactive: true,
                title: '<img src="styles/legend/tblSportfield_B_5.png" /> tblSportfield_B'
            });
var format_tblSportfield_A_6 = new ol.format.GeoJSON();
var features_tblSportfield_A_6 = format_tblSportfield_A_6.readFeatures(json_tblSportfield_A_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tblSportfield_A_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tblSportfield_A_6.addFeatures(features_tblSportfield_A_6);
var lyr_tblSportfield_A_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tblSportfield_A_6, 
                style: style_tblSportfield_A_6,
                popuplayertitle: "tblSportfield_A",
                interactive: true,
                title: '<img src="styles/legend/tblSportfield_A_6.png" /> tblSportfield_A'
            });
var format_tblSportfield__7 = new ol.format.GeoJSON();
var features_tblSportfield__7 = format_tblSportfield__7.readFeatures(json_tblSportfield__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tblSportfield__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tblSportfield__7.addFeatures(features_tblSportfield__7);
var lyr_tblSportfield__7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tblSportfield__7, 
                style: style_tblSportfield__7,
                popuplayertitle: "tblSportfield_ลานกีฬาโรงเรียน",
                interactive: true,
                title: '<img src="styles/legend/tblSportfield__7.png" /> tblSportfield_ลานกีฬาโรงเรียน'
            });
var format_tblSportfield__8 = new ol.format.GeoJSON();
var features_tblSportfield__8 = format_tblSportfield__8.readFeatures(json_tblSportfield__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tblSportfield__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tblSportfield__8.addFeatures(features_tblSportfield__8);
var lyr_tblSportfield__8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tblSportfield__8, 
                style: style_tblSportfield__8,
                popuplayertitle: "tblSportfield_ลานกีฬาชุมชน",
                interactive: true,
                title: '<img src="styles/legend/tblSportfield__8.png" /> tblSportfield_ลานกีฬาชุมชน'
            });
var format_tblSportfield__9 = new ol.format.GeoJSON();
var features_tblSportfield__9 = format_tblSportfield__9.readFeatures(json_tblSportfield__9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tblSportfield__9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tblSportfield__9.addFeatures(features_tblSportfield__9);
var lyr_tblSportfield__9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tblSportfield__9, 
                style: style_tblSportfield__9,
                popuplayertitle: "tblSportfield_ลานกีฬาสาธารณะ",
                interactive: true,
                title: '<img src="styles/legend/tblSportfield__9.png" /> tblSportfield_ลานกีฬาสาธารณะ'
            });
var format_tblSportfield_10 = new ol.format.GeoJSON();
var features_tblSportfield_10 = format_tblSportfield_10.readFeatures(json_tblSportfield_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tblSportfield_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tblSportfield_10.addFeatures(features_tblSportfield_10);
var lyr_tblSportfield_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tblSportfield_10, 
                style: style_tblSportfield_10,
                popuplayertitle: "tblSportfield",
                interactive: true,
    title: 'tblSportfield<br />\
    <img src="styles/legend/tblSportfield_10_0.png" /> A<br />\
    <img src="styles/legend/tblSportfield_10_1.png" /> B<br />\
    <img src="styles/legend/tblSportfield_10_2.png" /> C<br />'
        });

lyr_GoogleSatellite_0.setVisible(false);lyr_GoogleMap_1.setVisible(true);lyr_district_2.setVisible(true);lyr_bma_zone_3.setVisible(false);lyr_tblSportfield_C_4.setVisible(false);lyr_tblSportfield_B_5.setVisible(false);lyr_tblSportfield_A_6.setVisible(false);lyr_tblSportfield__7.setVisible(false);lyr_tblSportfield__8.setVisible(false);lyr_tblSportfield__9.setVisible(false);lyr_tblSportfield_10.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMap_1,lyr_district_2,lyr_bma_zone_3,lyr_tblSportfield_C_4,lyr_tblSportfield_B_5,lyr_tblSportfield_A_6,lyr_tblSportfield__7,lyr_tblSportfield__8,lyr_tblSportfield__9,lyr_tblSportfield_10];
lyr_district_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'dcode': 'dcode', 'dname': 'dname', 'dname_e': 'dname_e', 'pcode': 'pcode', 'pname': 'pname', 'z_code': 'z_code', 'num_female': 'num_female', 'num_male': 'num_male', 'num_health': 'num_health', 'num_temple': 'num_temple', 'num_comm': 'num_comm', 'num_hos': 'num_hos', 'num_sch': 'num_sch', 'area_dis': 'area_dis', });
lyr_bma_zone_3.set('fieldAliases', {'z_code': 'z_code', 'z_name': 'z_name', 'z_name_e': 'z_name_e', 'z_area': 'z_area', 'num_male': 'num_male', 'num_female': 'num_female', 'num_house': 'num_house', 'num_commu': 'num_commu', });
lyr_tblSportfield_C_4.set('fieldAliases', {'ID': 'ID', 'dcode': 'dcode', 'district': 'district', 'objectid': 'objectid', 'grade': 'grade', 'name': 'name', 'ownership': 'ownership', 'type_': 'type_', 'status': 'status', 'volunteer': 'volunteer', 'renovate_s': 'renovate_s', 'status_oth': 'status_oth', 'activity': 'activity', 'budget': 'budget', 'sport': 'sport', 'lat': 'lat', 'long': 'long', 'sport_othe': 'sport_othe', 'public_space': 'public_space', 'renovate_detail': 'renovate_detail', 'area_': 'area_', 'status_confirm': 'status_confirm', 'user_': 'user_', 'budget_other': 'budget_other', 'contract1': 'contract1', 'contract2': 'contract2', 'contract3': 'contract3', 'x': 'x', 'y': 'y', });
lyr_tblSportfield_B_5.set('fieldAliases', {'ID': 'ID', 'dcode': 'dcode', 'district': 'district', 'objectid': 'objectid', 'grade': 'grade', 'name': 'name', 'ownership': 'ownership', 'type_': 'type_', 'status': 'status', 'volunteer': 'volunteer', 'renovate_s': 'renovate_s', 'status_oth': 'status_oth', 'activity': 'activity', 'budget': 'budget', 'sport': 'sport', 'lat': 'lat', 'long': 'long', 'sport_othe': 'sport_othe', 'public_space': 'public_space', 'renovate_detail': 'renovate_detail', 'area_': 'area_', 'status_confirm': 'status_confirm', 'user_': 'user_', 'budget_other': 'budget_other', 'contract1': 'contract1', 'contract2': 'contract2', 'contract3': 'contract3', 'x': 'x', 'y': 'y', });
lyr_tblSportfield_A_6.set('fieldAliases', {'ID': 'ID', 'dcode': 'dcode', 'district': 'district', 'objectid': 'objectid', 'grade': 'grade', 'name': 'name', 'ownership': 'ownership', 'type_': 'type_', 'status': 'status', 'volunteer': 'volunteer', 'renovate_s': 'renovate_s', 'status_oth': 'status_oth', 'activity': 'activity', 'budget': 'budget', 'sport': 'sport', 'lat': 'lat', 'long': 'long', 'sport_othe': 'sport_othe', 'public_space': 'public_space', 'renovate_detail': 'renovate_detail', 'area_': 'area_', 'status_confirm': 'status_confirm', 'user_': 'user_', 'budget_other': 'budget_other', 'contract1': 'contract1', 'contract2': 'contract2', 'contract3': 'contract3', 'x': 'x', 'y': 'y', });
lyr_tblSportfield__7.set('fieldAliases', {'ID': 'ID', 'dcode': 'dcode', 'district': 'district', 'objectid': 'objectid', 'grade': 'grade', 'name': 'name', 'ownership': 'ownership', 'type_': 'type_', 'status': 'status', 'volunteer': 'volunteer', 'renovate_s': 'renovate_s', 'status_oth': 'status_oth', 'activity': 'activity', 'budget': 'budget', 'sport': 'sport', 'lat': 'lat', 'long': 'long', 'sport_othe': 'sport_othe', 'public_space': 'public_space', 'renovate_detail': 'renovate_detail', 'area_': 'area_', 'status_confirm': 'status_confirm', 'user_': 'user_', 'budget_other': 'budget_other', 'contract1': 'contract1', 'contract2': 'contract2', 'contract3': 'contract3', 'x': 'x', 'y': 'y', });
lyr_tblSportfield__8.set('fieldAliases', {'ID': 'ID', 'dcode': 'dcode', 'district': 'district', 'objectid': 'objectid', 'grade': 'grade', 'name': 'name', 'ownership': 'ownership', 'type_': 'type_', 'status': 'status', 'volunteer': 'volunteer', 'renovate_s': 'renovate_s', 'status_oth': 'status_oth', 'activity': 'activity', 'budget': 'budget', 'sport': 'sport', 'lat': 'lat', 'long': 'long', 'sport_othe': 'sport_othe', 'public_space': 'public_space', 'renovate_detail': 'renovate_detail', 'area_': 'area_', 'status_confirm': 'status_confirm', 'user_': 'user_', 'budget_other': 'budget_other', 'contract1': 'contract1', 'contract2': 'contract2', 'contract3': 'contract3', 'x': 'x', 'y': 'y', });
lyr_tblSportfield__9.set('fieldAliases', {'ID': 'ID', 'dcode': 'dcode', 'district': 'district', 'objectid': 'objectid', 'grade': 'grade', 'name': 'name', 'ownership': 'ownership', 'type_': 'type_', 'status': 'status', 'volunteer': 'volunteer', 'renovate_s': 'renovate_s', 'status_oth': 'status_oth', 'activity': 'activity', 'budget': 'budget', 'sport': 'sport', 'lat': 'lat', 'long': 'long', 'sport_othe': 'sport_othe', 'public_space': 'public_space', 'renovate_detail': 'renovate_detail', 'area_': 'area_', 'status_confirm': 'status_confirm', 'user_': 'user_', 'budget_other': 'budget_other', 'contract1': 'contract1', 'contract2': 'contract2', 'contract3': 'contract3', 'x': 'x', 'y': 'y', });
lyr_tblSportfield_10.set('fieldAliases', {'ID': 'ID', 'dcode': 'dcode', 'district': 'district', 'objectid': 'objectid', 'grade': 'grade', 'name': 'name', 'ownership': 'ownership', 'type_': 'type_', 'status': 'status', 'volunteer': 'volunteer', 'renovate_s': 'renovate_s', 'status_oth': 'status_oth', 'activity': 'activity', 'budget': 'budget', 'sport': 'sport', 'lat': 'lat', 'long': 'long', 'sport_othe': 'sport_othe', 'public_space': 'public_space', 'renovate_detail': 'renovate_detail', 'area_': 'area_', 'status_confirm': 'status_confirm', 'user_': 'user_', 'budget_other': 'budget_other', 'contract1': 'contract1', 'contract2': 'contract2', 'contract3': 'contract3', 'x': 'x', 'y': 'y', });
lyr_district_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'dcode': 'TextEdit', 'dname': 'TextEdit', 'dname_e': 'TextEdit', 'pcode': 'TextEdit', 'pname': 'TextEdit', 'z_code': 'TextEdit', 'num_female': 'TextEdit', 'num_male': 'TextEdit', 'num_health': 'Range', 'num_temple': 'Range', 'num_comm': 'Range', 'num_hos': 'Range', 'num_sch': 'Range', 'area_dis': 'TextEdit', });
lyr_bma_zone_3.set('fieldImages', {'z_code': 'TextEdit', 'z_name': 'TextEdit', 'z_name_e': 'TextEdit', 'z_area': 'TextEdit', 'num_male': 'Range', 'num_female': 'Range', 'num_house': 'Range', 'num_commu': 'Range', });
lyr_tblSportfield_C_4.set('fieldImages', {'ID': '', 'dcode': '', 'district': '', 'objectid': '', 'grade': '', 'name': '', 'ownership': '', 'type_': '', 'status': '', 'volunteer': '', 'renovate_s': '', 'status_oth': '', 'activity': '', 'budget': '', 'sport': '', 'lat': '', 'long': '', 'sport_othe': '', 'public_space': '', 'renovate_detail': '', 'area_': '', 'status_confirm': '', 'user_': '', 'budget_other': '', 'contract1': '', 'contract2': '', 'contract3': '', 'x': '', 'y': '', });
lyr_tblSportfield_B_5.set('fieldImages', {'ID': '', 'dcode': '', 'district': '', 'objectid': '', 'grade': '', 'name': '', 'ownership': '', 'type_': '', 'status': '', 'volunteer': '', 'renovate_s': '', 'status_oth': '', 'activity': '', 'budget': '', 'sport': '', 'lat': '', 'long': '', 'sport_othe': '', 'public_space': '', 'renovate_detail': '', 'area_': '', 'status_confirm': '', 'user_': '', 'budget_other': '', 'contract1': '', 'contract2': '', 'contract3': '', 'x': '', 'y': '', });
lyr_tblSportfield_A_6.set('fieldImages', {'ID': '', 'dcode': '', 'district': '', 'objectid': '', 'grade': '', 'name': '', 'ownership': '', 'type_': '', 'status': '', 'volunteer': '', 'renovate_s': '', 'status_oth': '', 'activity': '', 'budget': '', 'sport': '', 'lat': '', 'long': '', 'sport_othe': '', 'public_space': '', 'renovate_detail': '', 'area_': '', 'status_confirm': '', 'user_': '', 'budget_other': '', 'contract1': '', 'contract2': '', 'contract3': '', 'x': '', 'y': '', });
lyr_tblSportfield__7.set('fieldImages', {'ID': 'Range', 'dcode': 'Range', 'district': 'TextEdit', 'objectid': 'Range', 'grade': 'TextEdit', 'name': 'TextEdit', 'ownership': 'TextEdit', 'type_': 'TextEdit', 'status': 'TextEdit', 'volunteer': 'TextEdit', 'renovate_s': 'TextEdit', 'status_oth': 'TextEdit', 'activity': 'TextEdit', 'budget': 'TextEdit', 'sport': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'sport_othe': 'TextEdit', 'public_space': 'TextEdit', 'renovate_detail': 'TextEdit', 'area_': 'TextEdit', 'status_confirm': 'TextEdit', 'user_': 'Range', 'budget_other': 'TextEdit', 'contract1': 'TextEdit', 'contract2': 'TextEdit', 'contract3': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_tblSportfield__8.set('fieldImages', {'ID': 'Range', 'dcode': 'Range', 'district': 'TextEdit', 'objectid': 'Range', 'grade': 'TextEdit', 'name': 'TextEdit', 'ownership': 'TextEdit', 'type_': 'TextEdit', 'status': 'TextEdit', 'volunteer': 'TextEdit', 'renovate_s': 'TextEdit', 'status_oth': 'TextEdit', 'activity': 'TextEdit', 'budget': 'TextEdit', 'sport': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'sport_othe': 'TextEdit', 'public_space': 'TextEdit', 'renovate_detail': 'TextEdit', 'area_': 'TextEdit', 'status_confirm': 'TextEdit', 'user_': 'Range', 'budget_other': 'TextEdit', 'contract1': 'TextEdit', 'contract2': 'TextEdit', 'contract3': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_tblSportfield__9.set('fieldImages', {'ID': 'Range', 'dcode': 'Range', 'district': 'TextEdit', 'objectid': 'Range', 'grade': 'TextEdit', 'name': 'TextEdit', 'ownership': 'TextEdit', 'type_': 'TextEdit', 'status': 'TextEdit', 'volunteer': 'TextEdit', 'renovate_s': 'TextEdit', 'status_oth': 'TextEdit', 'activity': 'TextEdit', 'budget': 'TextEdit', 'sport': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'sport_othe': 'TextEdit', 'public_space': 'TextEdit', 'renovate_detail': 'TextEdit', 'area_': 'TextEdit', 'status_confirm': 'TextEdit', 'user_': 'Range', 'budget_other': 'TextEdit', 'contract1': 'TextEdit', 'contract2': 'TextEdit', 'contract3': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_tblSportfield_10.set('fieldImages', {'ID': 'Range', 'dcode': 'Range', 'district': 'TextEdit', 'objectid': 'Range', 'grade': 'TextEdit', 'name': 'TextEdit', 'ownership': 'TextEdit', 'type_': 'TextEdit', 'status': 'TextEdit', 'volunteer': 'TextEdit', 'renovate_s': 'TextEdit', 'status_oth': 'TextEdit', 'activity': 'TextEdit', 'budget': 'TextEdit', 'sport': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'sport_othe': 'TextEdit', 'public_space': 'TextEdit', 'renovate_detail': 'TextEdit', 'area_': 'TextEdit', 'status_confirm': 'TextEdit', 'user_': 'Range', 'budget_other': 'TextEdit', 'contract1': 'TextEdit', 'contract2': 'TextEdit', 'contract3': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_district_2.set('fieldLabels', {'OBJECTID': 'no label', 'dcode': 'no label', 'dname': 'no label', 'dname_e': 'no label', 'pcode': 'no label', 'pname': 'no label', 'z_code': 'no label', 'num_female': 'no label', 'num_male': 'no label', 'num_health': 'no label', 'num_temple': 'no label', 'num_comm': 'no label', 'num_hos': 'no label', 'num_sch': 'no label', 'area_dis': 'no label', });
lyr_bma_zone_3.set('fieldLabels', {'z_code': 'no label', 'z_name': 'no label', 'z_name_e': 'no label', 'z_area': 'no label', 'num_male': 'no label', 'num_female': 'no label', 'num_house': 'no label', 'num_commu': 'no label', });
lyr_tblSportfield_C_4.set('fieldLabels', {'ID': 'no label', 'dcode': 'inline label - always visible', 'district': 'inline label - always visible', 'objectid': 'no label', 'grade': 'inline label - always visible', 'name': 'inline label - always visible', 'ownership': 'inline label - always visible', 'type_': 'inline label - always visible', 'status': 'inline label - always visible', 'volunteer': 'inline label - always visible', 'renovate_s': 'inline label - always visible', 'status_oth': 'inline label - always visible', 'activity': 'inline label - always visible', 'budget': 'inline label - always visible', 'sport': 'inline label - always visible', 'lat': 'inline label - always visible', 'long': 'inline label - always visible', 'sport_othe': 'inline label - always visible', 'public_space': 'inline label - always visible', 'renovate_detail': 'inline label - always visible', 'area_': 'inline label - always visible', 'status_confirm': 'inline label - always visible', 'user_': 'inline label - always visible', 'budget_other': 'no label', 'contract1': 'no label', 'contract2': 'no label', 'contract3': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_tblSportfield_B_5.set('fieldLabels', {'ID': 'no label', 'dcode': 'inline label - always visible', 'district': 'inline label - always visible', 'objectid': 'inline label - always visible', 'grade': 'inline label - always visible', 'name': 'inline label - always visible', 'ownership': 'inline label - always visible', 'type_': 'inline label - always visible', 'status': 'inline label - always visible', 'volunteer': 'inline label - always visible', 'renovate_s': 'inline label - always visible', 'status_oth': 'inline label - always visible', 'activity': 'inline label - always visible', 'budget': 'inline label - always visible', 'sport': 'inline label - always visible', 'lat': 'inline label - always visible', 'long': 'inline label - always visible', 'sport_othe': 'inline label - always visible', 'public_space': 'inline label - always visible', 'renovate_detail': 'inline label - always visible', 'area_': 'inline label - always visible', 'status_confirm': 'inline label - always visible', 'user_': 'inline label - always visible', 'budget_other': 'inline label - always visible', 'contract1': 'no label', 'contract2': 'no label', 'contract3': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_tblSportfield_A_6.set('fieldLabels', {'ID': 'no label', 'dcode': 'header label - visible with data', 'district': 'inline label - always visible', 'objectid': 'no label', 'grade': 'inline label - always visible', 'name': 'inline label - visible with data', 'ownership': 'hidden field', 'type_': 'inline label - visible with data', 'status': 'inline label - always visible', 'volunteer': 'inline label - always visible', 'renovate_s': 'inline label - always visible', 'status_oth': 'inline label - always visible', 'activity': 'inline label - always visible', 'budget': 'inline label - always visible', 'sport': 'inline label - always visible', 'lat': 'inline label - always visible', 'long': 'inline label - always visible', 'sport_othe': 'inline label - always visible', 'public_space': 'inline label - always visible', 'renovate_detail': 'inline label - always visible', 'area_': 'inline label - always visible', 'status_confirm': 'inline label - always visible', 'user_': 'inline label - always visible', 'budget_other': 'no label', 'contract1': 'no label', 'contract2': 'no label', 'contract3': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_tblSportfield__7.set('fieldLabels', {'ID': 'hidden field', 'dcode': 'inline label - always visible', 'district': 'inline label - always visible', 'objectid': 'no label', 'grade': 'inline label - always visible', 'name': 'inline label - always visible', 'ownership': 'inline label - always visible', 'type_': 'inline label - always visible', 'status': 'inline label - always visible', 'volunteer': 'inline label - always visible', 'renovate_s': 'inline label - always visible', 'status_oth': 'inline label - always visible', 'activity': 'inline label - always visible', 'budget': 'inline label - always visible', 'sport': 'inline label - always visible', 'lat': 'inline label - always visible', 'long': 'inline label - always visible', 'sport_othe': 'inline label - always visible', 'public_space': 'inline label - always visible', 'renovate_detail': 'inline label - always visible', 'area_': 'inline label - always visible', 'status_confirm': 'inline label - always visible', 'user_': 'inline label - always visible', 'budget_other': 'no label', 'contract1': 'no label', 'contract2': 'no label', 'contract3': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_tblSportfield__8.set('fieldLabels', {'ID': 'no label', 'dcode': 'inline label - always visible', 'district': 'no label', 'objectid': 'inline label - always visible', 'grade': 'inline label - always visible', 'name': 'inline label - always visible', 'ownership': 'inline label - always visible', 'type_': 'inline label - always visible', 'status': 'inline label - always visible', 'volunteer': 'inline label - always visible', 'renovate_s': 'inline label - always visible', 'status_oth': 'inline label - always visible', 'activity': 'inline label - always visible', 'budget': 'inline label - always visible', 'sport': 'inline label - always visible', 'lat': 'inline label - always visible', 'long': 'inline label - always visible', 'sport_othe': 'inline label - always visible', 'public_space': 'inline label - always visible', 'renovate_detail': 'inline label - always visible', 'area_': 'inline label - always visible', 'status_confirm': 'inline label - always visible', 'user_': 'inline label - always visible', 'budget_other': 'no label', 'contract1': 'no label', 'contract2': 'no label', 'contract3': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_tblSportfield__9.set('fieldLabels', {'ID': 'no label', 'dcode': 'inline label - always visible', 'district': 'inline label - always visible', 'objectid': 'inline label - always visible', 'grade': 'inline label - always visible', 'name': 'inline label - always visible', 'ownership': 'inline label - visible with data', 'type_': 'inline label - always visible', 'status': 'inline label - always visible', 'volunteer': 'inline label - always visible', 'renovate_s': 'inline label - always visible', 'status_oth': 'inline label - always visible', 'activity': 'inline label - always visible', 'budget': 'no label', 'sport': 'inline label - always visible', 'lat': 'inline label - always visible', 'long': 'inline label - always visible', 'sport_othe': 'inline label - always visible', 'public_space': 'inline label - always visible', 'renovate_detail': 'inline label - always visible', 'area_': 'inline label - always visible', 'status_confirm': 'no label', 'user_': 'no label', 'budget_other': 'no label', 'contract1': 'no label', 'contract2': 'no label', 'contract3': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_tblSportfield_10.set('fieldLabels', {'ID': 'no label', 'dcode': 'inline label - always visible', 'district': 'inline label - always visible', 'objectid': 'no label', 'grade': 'inline label - always visible', 'name': 'inline label - always visible', 'ownership': 'inline label - always visible', 'type_': 'inline label - always visible', 'status': 'inline label - always visible', 'volunteer': 'inline label - always visible', 'renovate_s': 'inline label - always visible', 'status_oth': 'inline label - always visible', 'activity': 'inline label - always visible', 'budget': 'no label', 'sport': 'inline label - always visible', 'lat': 'inline label - always visible', 'long': 'inline label - always visible', 'sport_othe': 'no label', 'public_space': 'no label', 'renovate_detail': 'no label', 'area_': 'no label', 'status_confirm': 'no label', 'user_': 'no label', 'budget_other': 'no label', 'contract1': 'no label', 'contract2': 'no label', 'contract3': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_tblSportfield_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});