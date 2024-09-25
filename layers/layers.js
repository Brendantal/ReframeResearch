var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AMIHotspots_1 = new ol.format.GeoJSON();
var features_AMIHotspots_1 = format_AMIHotspots_1.readFeatures(json_AMIHotspots_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AMIHotspots_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AMIHotspots_1.addFeatures(features_AMIHotspots_1);
var lyr_AMIHotspots_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AMIHotspots_1, 
                style: style_AMIHotspots_1,
                popuplayertitle: "AMI Hotspots",
                interactive: true,
    title: 'AMI Hotspots<br />\
    <img src="styles/legend/AMIHotspots_1_0.png" /> Top 40%<br />\
    <img src="styles/legend/AMIHotspots_1_1.png" /> Top 20%<br />\
    <img src="styles/legend/AMIHotspots_1_2.png" /> <br />'
        });
var format_BoomtownClustersforGIS_2 = new ol.format.GeoJSON();
var features_BoomtownClustersforGIS_2 = format_BoomtownClustersforGIS_2.readFeatures(json_BoomtownClustersforGIS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoomtownClustersforGIS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BoomtownClustersforGIS_2.addFeatures(features_BoomtownClustersforGIS_2);cluster_BoomtownClustersforGIS_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_BoomtownClustersforGIS_2
});
var lyr_BoomtownClustersforGIS_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_BoomtownClustersforGIS_2, 
                style: style_BoomtownClustersforGIS_2,
                popuplayertitle: "Boomtown Clusters for GIS",
                interactive: true,
                title: '<img src="styles/legend/BoomtownClustersforGIS_2.png" /> Boomtown Clusters for GIS'
            });
var format_ManufacturingBoomtowns_3 = new ol.format.GeoJSON();
var features_ManufacturingBoomtowns_3 = format_ManufacturingBoomtowns_3.readFeatures(json_ManufacturingBoomtowns_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ManufacturingBoomtowns_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ManufacturingBoomtowns_3.addFeatures(features_ManufacturingBoomtowns_3);
var lyr_ManufacturingBoomtowns_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ManufacturingBoomtowns_3, 
                style: style_ManufacturingBoomtowns_3,
                popuplayertitle: "Manufacturing Boomtowns",
                interactive: true,
    title: 'Manufacturing Boomtowns<br />\
    <img src="styles/legend/ManufacturingBoomtowns_3_0.png" /> 1<br />\
    <img src="styles/legend/ManufacturingBoomtowns_3_1.png" /> 2<br />\
    <img src="styles/legend/ManufacturingBoomtowns_3_2.png" /> 3<br />\
    <img src="styles/legend/ManufacturingBoomtowns_3_3.png" /> 4<br />\
    <img src="styles/legend/ManufacturingBoomtowns_3_4.png" /> 5<br />\
    <img src="styles/legend/ManufacturingBoomtowns_3_5.png" /> <br />'
        });
var format_MountainCounties_4 = new ol.format.GeoJSON();
var features_MountainCounties_4 = format_MountainCounties_4.readFeatures(json_MountainCounties_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MountainCounties_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MountainCounties_4.addFeatures(features_MountainCounties_4);
var lyr_MountainCounties_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MountainCounties_4, 
                style: style_MountainCounties_4,
                popuplayertitle: "Mountain Counties",
                interactive: true,
                title: '<img src="styles/legend/MountainCounties_4.png" /> Mountain Counties'
            });
var format_MountainTownsforGIS_5 = new ol.format.GeoJSON();
var features_MountainTownsforGIS_5 = format_MountainTownsforGIS_5.readFeatures(json_MountainTownsforGIS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MountainTownsforGIS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MountainTownsforGIS_5.addFeatures(features_MountainTownsforGIS_5);
var lyr_MountainTownsforGIS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MountainTownsforGIS_5, 
                style: style_MountainTownsforGIS_5,
                popuplayertitle: "Mountain Towns for GIS",
                interactive: true,
                title: '<img src="styles/legend/MountainTownsforGIS_5.png" /> Mountain Towns for GIS'
            });
var format_IECCAdoptionCity_6 = new ol.format.GeoJSON();
var features_IECCAdoptionCity_6 = format_IECCAdoptionCity_6.readFeatures(json_IECCAdoptionCity_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IECCAdoptionCity_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IECCAdoptionCity_6.addFeatures(features_IECCAdoptionCity_6);
var lyr_IECCAdoptionCity_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IECCAdoptionCity_6, 
                style: style_IECCAdoptionCity_6,
                popuplayertitle: "IECC Adoption - City",
                interactive: true,
                title: '<img src="styles/legend/IECCAdoptionCity_6.png" /> IECC Adoption - City'
            });
var format_IECCAdoptionState_7 = new ol.format.GeoJSON();
var features_IECCAdoptionState_7 = format_IECCAdoptionState_7.readFeatures(json_IECCAdoptionState_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IECCAdoptionState_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IECCAdoptionState_7.addFeatures(features_IECCAdoptionState_7);
var lyr_IECCAdoptionState_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IECCAdoptionState_7, 
                style: style_IECCAdoptionState_7,
                popuplayertitle: "IECC Adoption - State",
                interactive: true,
    title: 'IECC Adoption - State<br />\
    <img src="styles/legend/IECCAdoptionState_7_0.png" /> true<br />\
    <img src="styles/legend/IECCAdoptionState_7_1.png" /> <br />'
        });
var format_StatewideHousingReform_8 = new ol.format.GeoJSON();
var features_StatewideHousingReform_8 = format_StatewideHousingReform_8.readFeatures(json_StatewideHousingReform_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StatewideHousingReform_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StatewideHousingReform_8.addFeatures(features_StatewideHousingReform_8);
var lyr_StatewideHousingReform_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StatewideHousingReform_8, 
                style: style_StatewideHousingReform_8,
                popuplayertitle: "Statewide Housing Reform",
                interactive: true,
    title: 'Statewide Housing Reform<br />\
    <img src="styles/legend/StatewideHousingReform_8_0.png" /> 1<br />\
    <img src="styles/legend/StatewideHousingReform_8_1.png" /> 2<br />\
    <img src="styles/legend/StatewideHousingReform_8_2.png" /> 3<br />\
    <img src="styles/legend/StatewideHousingReform_8_3.png" /> 3.5<br />\
    <img src="styles/legend/StatewideHousingReform_8_4.png" /> 4<br />\
    <img src="styles/legend/StatewideHousingReform_8_5.png" /> 4.5<br />\
    <img src="styles/legend/StatewideHousingReform_8_6.png" /> 5<br />\
    <img src="styles/legend/StatewideHousingReform_8_7.png" /> <br />'
        });
var format_LocalUpzoning_9 = new ol.format.GeoJSON();
var features_LocalUpzoning_9 = format_LocalUpzoning_9.readFeatures(json_LocalUpzoning_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalUpzoning_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalUpzoning_9.addFeatures(features_LocalUpzoning_9);
var lyr_LocalUpzoning_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocalUpzoning_9, 
                style: style_LocalUpzoning_9,
                popuplayertitle: "Local Upzoning",
                interactive: true,
    title: 'Local Upzoning<br />\
    <img src="styles/legend/LocalUpzoning_9_0.png" /> 1<br />\
    <img src="styles/legend/LocalUpzoning_9_1.png" /> 2<br />\
    <img src="styles/legend/LocalUpzoning_9_2.png" /> 3<br />\
    <img src="styles/legend/LocalUpzoning_9_3.png" /> 4<br />\
    <img src="styles/legend/LocalUpzoning_9_4.png" /> 5<br />\
    <img src="styles/legend/LocalUpzoning_9_5.png" /> <br />'
        });
var format_ADUMarketSizing_10 = new ol.format.GeoJSON();
var features_ADUMarketSizing_10 = format_ADUMarketSizing_10.readFeatures(json_ADUMarketSizing_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADUMarketSizing_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADUMarketSizing_10.addFeatures(features_ADUMarketSizing_10);
var lyr_ADUMarketSizing_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADUMarketSizing_10, 
                style: style_ADUMarketSizing_10,
                popuplayertitle: "ADU Market Sizing",
                interactive: true,
    title: 'ADU Market Sizing<br />\
    <img src="styles/legend/ADUMarketSizing_10_0.png" /> 55<br />\
    <img src="styles/legend/ADUMarketSizing_10_1.png" /> 79<br />\
    <img src="styles/legend/ADUMarketSizing_10_2.png" /> 109<br />\
    <img src="styles/legend/ADUMarketSizing_10_3.png" /> 357<br />\
    <img src="styles/legend/ADUMarketSizing_10_4.png" /> 455<br />\
    <img src="styles/legend/ADUMarketSizing_10_5.png" /> 2310<br />\
    <img src="styles/legend/ADUMarketSizing_10_6.png" /> <br />'
        });
var format_TriplexMarketAnalysis_11 = new ol.format.GeoJSON();
var features_TriplexMarketAnalysis_11 = format_TriplexMarketAnalysis_11.readFeatures(json_TriplexMarketAnalysis_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TriplexMarketAnalysis_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TriplexMarketAnalysis_11.addFeatures(features_TriplexMarketAnalysis_11);
var lyr_TriplexMarketAnalysis_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TriplexMarketAnalysis_11, 
                style: style_TriplexMarketAnalysis_11,
                popuplayertitle: "Triplex Market Analysis",
                interactive: true,
    title: 'Triplex Market Analysis<br />\
    <img src="styles/legend/TriplexMarketAnalysis_11_0.png" /> 12<br />\
    <img src="styles/legend/TriplexMarketAnalysis_11_1.png" /> 40<br />\
    <img src="styles/legend/TriplexMarketAnalysis_11_2.png" /> 58<br />\
    <img src="styles/legend/TriplexMarketAnalysis_11_3.png" /> 103<br />\
    <img src="styles/legend/TriplexMarketAnalysis_11_4.png" /> 115<br />\
    <img src="styles/legend/TriplexMarketAnalysis_11_5.png" /> <br />'
        });
var format_DuplexMarketAnalysis_12 = new ol.format.GeoJSON();
var features_DuplexMarketAnalysis_12 = format_DuplexMarketAnalysis_12.readFeatures(json_DuplexMarketAnalysis_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DuplexMarketAnalysis_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DuplexMarketAnalysis_12.addFeatures(features_DuplexMarketAnalysis_12);
var lyr_DuplexMarketAnalysis_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DuplexMarketAnalysis_12, 
                style: style_DuplexMarketAnalysis_12,
                popuplayertitle: "Duplex Market Analysis",
                interactive: true,
    title: 'Duplex Market Analysis<br />\
    <img src="styles/legend/DuplexMarketAnalysis_12_0.png" /> Connecticut (52)<br />\
    <img src="styles/legend/DuplexMarketAnalysis_12_1.png" /> New Hampshire (121)<br />\
    <img src="styles/legend/DuplexMarketAnalysis_12_2.png" /> Vermont (160)<br />\
    <img src="styles/legend/DuplexMarketAnalysis_12_3.png" /> Maine (255)<br />\
    <img src="styles/legend/DuplexMarketAnalysis_12_4.png" /> Massachusetts (376)<br />\
    <img src="styles/legend/DuplexMarketAnalysis_12_5.png" /> Rhode Island (407)<br />\
    <img src="styles/legend/DuplexMarketAnalysis_12_6.png" /> <br />'
        });
var group_MarketSizing = new ol.layer.Group({
                                layers: [lyr_ADUMarketSizing_10,lyr_TriplexMarketAnalysis_11,lyr_DuplexMarketAnalysis_12,],
                                fold: "open",
                                title: "Market Sizing"});
var group_ZoningReform = new ol.layer.Group({
                                layers: [lyr_StatewideHousingReform_8,lyr_LocalUpzoning_9,],
                                fold: "open",
                                title: "Zoning Reform"});
var group_IECCAdoption = new ol.layer.Group({
                                layers: [lyr_IECCAdoptionCity_6,lyr_IECCAdoptionState_7,],
                                fold: "open",
                                title: "IECC Adoption"});
var group_MountainTowns = new ol.layer.Group({
                                layers: [lyr_MountainCounties_4,lyr_MountainTownsforGIS_5,],
                                fold: "open",
                                title: "Mountain Towns"});
var group_ManufacturingBoomtownAnalysis = new ol.layer.Group({
                                layers: [lyr_BoomtownClustersforGIS_2,lyr_ManufacturingBoomtowns_3,],
                                fold: "open",
                                title: "Manufacturing Boomtown Analysis"});
var group_AreaMedianIncome = new ol.layer.Group({
                                layers: [lyr_AMIHotspots_1,],
                                fold: "open",
                                title: "Area Median Income"});
var group_UnderlyingFiles = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,],
                                fold: "open",
                                title: "Underlying Files"});

lyr_OSMStandard_0.setVisible(true);lyr_AMIHotspots_1.setVisible(true);lyr_BoomtownClustersforGIS_2.setVisible(true);lyr_ManufacturingBoomtowns_3.setVisible(true);lyr_MountainCounties_4.setVisible(true);lyr_MountainTownsforGIS_5.setVisible(true);lyr_IECCAdoptionCity_6.setVisible(true);lyr_IECCAdoptionState_7.setVisible(true);lyr_StatewideHousingReform_8.setVisible(true);lyr_LocalUpzoning_9.setVisible(true);lyr_ADUMarketSizing_10.setVisible(true);lyr_TriplexMarketAnalysis_11.setVisible(true);lyr_DuplexMarketAnalysis_12.setVisible(true);
var layersList = [group_UnderlyingFiles,group_AreaMedianIncome,group_ManufacturingBoomtownAnalysis,group_MountainTowns,group_IECCAdoption,group_ZoningReform,group_MarketSizing];
lyr_AMIHotspots_1.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'STUSPS': 'STUSPS', 'NAMELSADCO': 'NAMELSADCO', 'STATE_NAME': 'State', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Geography': 'Geography', 'Geographic': 'Geographic', 'Households': 'Households', 'Household': 'Household Income', 'Income Qui': 'Income Quintile', });
lyr_BoomtownClustersforGIS_2.set('fieldAliases', {'CBSA': 'CBSA', 'MARKET NAME': 'MARKET NAME', 'Cluster': 'Cluster', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ManufacturingBoomtowns_3.set('fieldAliases', {'CSAFP_x': 'CSAFP_x', 'CBSAFP': 'CBSAFP', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'MEMI': 'MEMI', 'MTFCC': 'MTFCC', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'CBSA Code': 'CBSA Code', 'GeoName': 'GeoName', 'OVERALL SC': 'Overall Score', 'OVERALL RA': 'Overall Rank', 'Unnamed_ 4': 'Quintile', 'MANUFACTUR': 'Manufacturing Score', 'MANUFACT_1': 'Manufacturing Rank', 'HOUSING DE': 'Housing Demand Rank', 'HOUSING _1': 'Housing Demand Rank', 'ECONOMIC V': 'Economic Vitality Score', 'ECONOMIC_1': 'Economic Vitality Rank', 'NET MIGRAT': 'Net Migration Score', 'NET MIGR_1': 'Net Migration Rank', 'CSAFP_y': 'CSAFP_y', 'Unnamed_ 1': 'Unnamed_ 1', 'Unnamed__1': 'Unnamed__1', 'Unnamed__2': 'Unnamed__2', 'Unnamed__3': 'Unnamed__3', 'Unnamed__4': 'Unnamed__4', 'Unnamed__5': 'Unnamed__5', 'Unnamed_ 2': 'Unnamed_ 2', 'Unnamed__6': 'Unnamed__6', });
lyr_MountainCounties_4.set('fieldAliases', {'GEOID': 'GEOID', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'MetDv': 'MetDv', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'Mountain Counties for GIS_Location': 'Location', 'Mountain Counties for GIS_County municipalities': 'Municipalities Included', 'Mountain Counties for GIS_Development Incentives Score': 'Development Incentives Score', 'Mountain Counties for GIS_Public-Private Partnership Score': 'Public-Private Partnership Score', 'Mountain Counties for GIS_ADU Score': 'ADU Score', 'Mountain Counties for GIS_Overall Score (25)': 'Overall Score (25)', 'Mountain Counties for GIS_Overall Development Incentive Score': 'Overall Development Opportunity Score', 'Mountain Counties for GIS_PSF Construction Costs': 'PSF Construction Costs', 'Mountain Counties for GIS_Housing Production Need': 'Housing Production Need', 'Mountain Counties for GIS_field_11': 'Mountain Counties for GIS_field_11', 'Mountain Counties for GIS_field_12': 'Mountain Counties for GIS_field_12', });
lyr_MountainTownsforGIS_5.set('fieldAliases', {'Town': 'Town', 'Development Incentives Score': 'Development Incentives Score', 'Public-Private Partnership Score': 'Public-Private Partnership Score', 'ADU Score': 'ADU Score', 'Overall Score (25)': 'Overall Score (25)', 'PSF Construction Costs': 'PSF Construction Costs', 'Housing Production Need': 'Housing Production Need', 'Latitude': 'Latitude', 'field_9': 'field_9', 'Longitude': 'Longitude', });
lyr_IECCAdoptionCity_6.set('fieldAliases', {'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'MEMI': 'MEMI', 'MTFCC': 'MTFCC', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_IECCAdoptionState_7.set('fieldAliases', {'STATEFP': 'STATEFP', 'STATENS': 'STATENS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'IECC_Adoption copy_State FIPS': 'IECC_Adoption copy_State FIPS', 'IECC_Adoption copy_City FIPS': 'IECC_Adoption copy_City FIPS', 'IECC_Adoption copy_IECC Adoption': 'IECC_Adoption copy_IECC Adoption', });
lyr_StatewideHousingReform_8.set('fieldAliases', {'STATEFP': 'STATEFP', 'STATENS': 'STATENS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Housing Policy_State_GIS_FIPS': 'Housing Policy_State_GIS_FIPS', 'Housing Policy_State_GIS_Description': 'Description', 'Housing Policy_State_GIS_Dedicated Funds': 'Dedicated Funding Sources', 'Housing Policy_State_GIS_Density Bonus': 'Density Bonus', 'Housing Policy_State_GIS_ADU Reform': 'ADU Reform', 'Housing Policy_State_GIS_Duplex Statewide?': 'Duplexes Permited Statewide?', 'Housing Policy_State_GIS_Triplex Statewide?': 'Triplexes Permitted Statewide?', 'Housing Policy_State_GIS_Notes': 'Notes', 'Housing Policy_State_GIS_Score': 'Overall Score', });
lyr_LocalUpzoning_9.set('fieldAliases', {'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'MEMI': 'MEMI', 'MTFCC': 'MTFCC', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'Upzoning Sheet for GIS_CBSA': 'Upzoning Sheet for GIS_CBSA', 'Upzoning Sheet for GIS_Municipality': 'Municipality', 'Upzoning Sheet for GIS_State': 'State', 'Upzoning Sheet for GIS_state_short': 'Upzoning Sheet for GIS_state_short', 'Upzoning Sheet for GIS_region': 'Upzoning Sheet for GIS_region', 'Upzoning Sheet for GIS_Reform.Type': 'Reform Type', 'Upzoning Sheet for GIS_year': 'Year Passed', 'Upzoning Sheet for GIS_description': 'Description', 'Upzoning Sheet for GIS_ADU Score (5)': 'ADU Score (5)', 'Upzoning Sheet for GIS_Infill Development Score': 'Infill Development Score (10)', 'Upzoning Sheet for GIS_Combined Score (Unweighted)': 'Combined Score (Unweighted)', 'Upzoning Sheet for GIS_Combined Score (Weighted)': 'Combined Score (Weighted)', 'Upzoning Sheet for GIS_Score Quintiles': 'Quintile', });
lyr_ADUMarketSizing_10.set('fieldAliases', {'STATEFP': 'STATEFP', 'STATENS': 'STATENS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Market Sizing Summary_GIS_FIPS': 'Market Sizing Summary_GIS_FIPS', 'Market Sizing Summary_GIS_ADU - Low': 'ADU - Low Estimate', 'Market Sizing Summary_GIS_ADU - Middle': 'ADU - Middle Estimate', 'Market Sizing Summary_GIS_ADU - High': 'ADU - High Estimate', 'Market Sizing Summary_GIS_Duplex - Low': 'Market Sizing Summary_GIS_Duplex - Low', 'Market Sizing Summary_GIS_Duplex - Middle': 'Market Sizing Summary_GIS_Duplex - Middle', 'Market Sizing Summary_GIS_Duplex - High': 'Market Sizing Summary_GIS_Duplex - High', 'Market Sizing Summary_GIS_Triplex - Low': 'Market Sizing Summary_GIS_Triplex - Low', 'Market Sizing Summary_GIS_Triplex - Middle': 'Market Sizing Summary_GIS_Triplex - Middle', 'Market Sizing Summary_GIS_Triplex - High': 'Market Sizing Summary_GIS_Triplex - High', });
lyr_TriplexMarketAnalysis_11.set('fieldAliases', {'STATEFP': 'STATEFP', 'STATENS': 'STATENS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Market Sizing Summary_GIS_FIPS': 'Market Sizing Summary_GIS_FIPS', 'Market Sizing Summary_GIS_ADU - Low': 'Market Sizing Summary_GIS_ADU - Low', 'Market Sizing Summary_GIS_ADU - Middle': 'Market Sizing Summary_GIS_ADU - Middle', 'Market Sizing Summary_GIS_ADU - High': 'Market Sizing Summary_GIS_ADU - High', 'Market Sizing Summary_GIS_Duplex - Low': 'Market Sizing Summary_GIS_Duplex - Low', 'Market Sizing Summary_GIS_Duplex - Middle': 'Market Sizing Summary_GIS_Duplex - Middle', 'Market Sizing Summary_GIS_Duplex - High': 'Market Sizing Summary_GIS_Duplex - High', 'Market Sizing Summary_GIS_Triplex - Low': 'Triplex - Low Estimate', 'Market Sizing Summary_GIS_Triplex - Middle': 'Triplex - Middle Estimate', 'Market Sizing Summary_GIS_Triplex - High': 'Triplex - High Estimate', });
lyr_DuplexMarketAnalysis_12.set('fieldAliases', {'STATEFP': 'STATEFP', 'STATENS': 'STATENS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Market Sizing Summary_GIS_FIPS': 'Market Sizing Summary_GIS_FIPS', 'Market Sizing Summary_GIS_ADU - Low': 'ADU - Low Estimate', 'Market Sizing Summary_GIS_ADU - Middle': 'ADU - Middle Estimate', 'Market Sizing Summary_GIS_ADU - High': 'ADU - High Estimate', 'Market Sizing Summary_GIS_Duplex - Low': 'Duplex - Low Estimate', 'Market Sizing Summary_GIS_Duplex - Middle': 'Duplex - Middle Estimate', 'Market Sizing Summary_GIS_Duplex - High': 'Duplex - High Estimate', 'Market Sizing Summary_GIS_Triplex - Low': 'Triplex - Low Estimate', 'Market Sizing Summary_GIS_Triplex - Middle': 'T', 'Market Sizing Summary_GIS_Triplex - High': 'Market Sizing Summary_GIS_Triplex - High', });
lyr_AMIHotspots_1.set('fieldImages', {'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'TextEdit', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'NAMELSAD': 'Hidden', 'STUSPS': 'Hidden', 'NAMELSADCO': 'Hidden', 'STATE_NAME': 'TextEdit', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'Geography': 'TextEdit', 'Geographic': 'Hidden', 'Households': 'TextEdit', 'Household': 'TextEdit', 'Income Qui': 'TextEdit', });
lyr_BoomtownClustersforGIS_2.set('fieldImages', {'CBSA': 'Hidden', 'MARKET NAME': 'TextEdit', 'Cluster': 'Hidden', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ManufacturingBoomtowns_3.set('fieldImages', {'CSAFP_x': 'Hidden', 'CBSAFP': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'NAMELSAD': 'Hidden', 'LSAD': 'Hidden', 'MEMI': 'Hidden', 'MTFCC': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'INTPTLAT': 'Hidden', 'INTPTLON': 'Hidden', 'CBSA Code': 'Hidden', 'GeoName': 'TextEdit', 'OVERALL SC': 'TextEdit', 'OVERALL RA': 'TextEdit', 'Unnamed_ 4': 'TextEdit', 'MANUFACTUR': 'TextEdit', 'MANUFACT_1': 'TextEdit', 'HOUSING DE': 'TextEdit', 'HOUSING _1': 'TextEdit', 'ECONOMIC V': 'TextEdit', 'ECONOMIC_1': 'TextEdit', 'NET MIGRAT': 'TextEdit', 'NET MIGR_1': 'TextEdit', 'CSAFP_y': 'Hidden', 'Unnamed_ 1': 'Hidden', 'Unnamed__1': 'Hidden', 'Unnamed__2': 'Hidden', 'Unnamed__3': 'Hidden', 'Unnamed__4': 'Hidden', 'Unnamed__5': 'Hidden', 'Unnamed_ 2': 'Hidden', 'Unnamed__6': 'Hidden', });
lyr_MountainCounties_4.set('fieldImages', {'GEOID': 'TextEdit', 'LSAD': 'Hidden', 'CLASSFP': 'Hidden', 'MTFCC': 'Hidden', 'CSAFP': 'Hidden', 'CBSAFP': 'Hidden', 'MetDv': 'Hidden', 'FUNCSTAT': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'INTPTLAT': 'Hidden', 'Mountain Counties for GIS_Location': 'TextEdit', 'Mountain Counties for GIS_County municipalities': 'TextEdit', 'Mountain Counties for GIS_Development Incentives Score': 'Range', 'Mountain Counties for GIS_Public-Private Partnership Score': 'Range', 'Mountain Counties for GIS_ADU Score': 'Range', 'Mountain Counties for GIS_Overall Score (25)': 'Range', 'Mountain Counties for GIS_Overall Development Incentive Score': 'Range', 'Mountain Counties for GIS_PSF Construction Costs': 'TextEdit', 'Mountain Counties for GIS_Housing Production Need': 'Range', 'Mountain Counties for GIS_field_11': 'Hidden', 'Mountain Counties for GIS_field_12': 'Hidden', });
lyr_MountainTownsforGIS_5.set('fieldImages', {'Town': 'TextEdit', 'Development Incentives Score': 'Range', 'Public-Private Partnership Score': 'Range', 'ADU Score': 'Range', 'Overall Score (25)': 'Range', 'PSF Construction Costs': 'TextEdit', 'Housing Production Need': 'Range', 'Latitude': 'TextEdit', 'field_9': 'Hidden', 'Longitude': 'TextEdit', });
lyr_IECCAdoptionCity_6.set('fieldImages', {'CSAFP': 'Hidden', 'CBSAFP': 'Hidden', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'Hidden', 'LSAD': 'Hidden', 'MEMI': 'Hidden', 'MTFCC': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'INTPTLAT': 'Hidden', 'INTPTLON': 'Hidden', });
lyr_IECCAdoptionState_7.set('fieldImages', {'STATEFP': 'Hidden', 'STATENS': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'STUSPS': 'Hidden', 'NAME': 'TextEdit', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'IECC_Adoption copy_State FIPS': 'Hidden', 'IECC_Adoption copy_City FIPS': 'Hidden', 'IECC_Adoption copy_IECC Adoption': 'CheckBox', });
lyr_StatewideHousingReform_8.set('fieldImages', {'STATEFP': 'Hidden', 'STATENS': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'STUSPS': 'Hidden', 'NAME': 'TextEdit', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'Housing Policy_State_GIS_FIPS': 'Hidden', 'Housing Policy_State_GIS_Description': 'TextEdit', 'Housing Policy_State_GIS_Dedicated Funds': 'CheckBox', 'Housing Policy_State_GIS_Density Bonus': 'CheckBox', 'Housing Policy_State_GIS_ADU Reform': 'CheckBox', 'Housing Policy_State_GIS_Duplex Statewide?': 'TextEdit', 'Housing Policy_State_GIS_Triplex Statewide?': 'TextEdit', 'Housing Policy_State_GIS_Notes': 'TextEdit', 'Housing Policy_State_GIS_Score': 'TextEdit', });
lyr_LocalUpzoning_9.set('fieldImages', {'CSAFP': 'Hidden', 'CBSAFP': 'Hidden', 'GEOID': 'TextEdit', 'NAME': 'Hidden', 'NAMELSAD': 'Hidden', 'LSAD': 'Hidden', 'MEMI': 'Hidden', 'MTFCC': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'INTPTLAT': 'Hidden', 'INTPTLON': 'Hidden', 'Upzoning Sheet for GIS_CBSA': 'Hidden', 'Upzoning Sheet for GIS_Municipality': 'TextEdit', 'Upzoning Sheet for GIS_State': 'TextEdit', 'Upzoning Sheet for GIS_state_short': 'Hidden', 'Upzoning Sheet for GIS_region': 'Hidden', 'Upzoning Sheet for GIS_Reform.Type': 'TextEdit', 'Upzoning Sheet for GIS_year': 'TextEdit', 'Upzoning Sheet for GIS_description': 'TextEdit', 'Upzoning Sheet for GIS_ADU Score (5)': 'Range', 'Upzoning Sheet for GIS_Infill Development Score': 'Range', 'Upzoning Sheet for GIS_Combined Score (Unweighted)': 'Range', 'Upzoning Sheet for GIS_Combined Score (Weighted)': 'TextEdit', 'Upzoning Sheet for GIS_Score Quintiles': 'TextEdit', });
lyr_ADUMarketSizing_10.set('fieldImages', {'STATEFP': 'Hidden', 'STATENS': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'STUSPS': 'Hidden', 'NAME': 'TextEdit', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'Market Sizing Summary_GIS_FIPS': 'Range', 'Market Sizing Summary_GIS_ADU - Low': 'Range', 'Market Sizing Summary_GIS_ADU - Middle': 'Range', 'Market Sizing Summary_GIS_ADU - High': 'Range', 'Market Sizing Summary_GIS_Duplex - Low': 'Hidden', 'Market Sizing Summary_GIS_Duplex - Middle': 'Hidden', 'Market Sizing Summary_GIS_Duplex - High': 'Hidden', 'Market Sizing Summary_GIS_Triplex - Low': 'Hidden', 'Market Sizing Summary_GIS_Triplex - Middle': 'Hidden', 'Market Sizing Summary_GIS_Triplex - High': 'Hidden', });
lyr_TriplexMarketAnalysis_11.set('fieldImages', {'STATEFP': 'Hidden', 'STATENS': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'TextEdit', 'STUSPS': 'Hidden', 'NAME': 'TextEdit', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'Market Sizing Summary_GIS_FIPS': 'Range', 'Market Sizing Summary_GIS_ADU - Low': 'Hidden', 'Market Sizing Summary_GIS_ADU - Middle': 'Hidden', 'Market Sizing Summary_GIS_ADU - High': 'Hidden', 'Market Sizing Summary_GIS_Duplex - Low': 'Hidden', 'Market Sizing Summary_GIS_Duplex - Middle': 'Hidden', 'Market Sizing Summary_GIS_Duplex - High': 'Hidden', 'Market Sizing Summary_GIS_Triplex - Low': 'Range', 'Market Sizing Summary_GIS_Triplex - Middle': 'Range', 'Market Sizing Summary_GIS_Triplex - High': 'Range', });
lyr_DuplexMarketAnalysis_12.set('fieldImages', {'STATEFP': 'Hidden', 'STATENS': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'STUSPS': 'Hidden', 'NAME': 'TextEdit', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'Market Sizing Summary_GIS_FIPS': 'Hidden', 'Market Sizing Summary_GIS_ADU - Low': 'Hidden', 'Market Sizing Summary_GIS_ADU - Middle': 'Hidden', 'Market Sizing Summary_GIS_ADU - High': 'Hidden', 'Market Sizing Summary_GIS_Duplex - Low': 'Range', 'Market Sizing Summary_GIS_Duplex - Middle': 'Range', 'Market Sizing Summary_GIS_Duplex - High': 'Range', 'Market Sizing Summary_GIS_Triplex - Low': 'Hidden', 'Market Sizing Summary_GIS_Triplex - Middle': 'Hidden', 'Market Sizing Summary_GIS_Triplex - High': 'Hidden', });
lyr_AMIHotspots_1.set('fieldLabels', {'AFFGEOID': 'no label', 'STATE_NAME': 'no label', 'Geography': 'no label', 'Households': 'no label', 'Household': 'no label', 'Income Qui': 'no label', });
lyr_BoomtownClustersforGIS_2.set('fieldLabels', {'MARKET NAME': 'inline label - visible with data', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_ManufacturingBoomtowns_3.set('fieldLabels', {'GeoName': 'no label', 'OVERALL SC': 'no label', 'OVERALL RA': 'no label', 'Unnamed_ 4': 'no label', 'MANUFACTUR': 'no label', 'MANUFACT_1': 'no label', 'HOUSING DE': 'no label', 'HOUSING _1': 'no label', 'ECONOMIC V': 'no label', 'ECONOMIC_1': 'no label', 'NET MIGRAT': 'no label', 'NET MIGR_1': 'no label', });
lyr_MountainCounties_4.set('fieldLabels', {'GEOID': 'inline label - visible with data', 'Mountain Counties for GIS_Location': 'inline label - visible with data', 'Mountain Counties for GIS_County municipalities': 'inline label - visible with data', 'Mountain Counties for GIS_Development Incentives Score': 'inline label - visible with data', 'Mountain Counties for GIS_Public-Private Partnership Score': 'inline label - visible with data', 'Mountain Counties for GIS_ADU Score': 'inline label - visible with data', 'Mountain Counties for GIS_Overall Score (25)': 'inline label - visible with data', 'Mountain Counties for GIS_Overall Development Incentive Score': 'inline label - always visible', 'Mountain Counties for GIS_PSF Construction Costs': 'inline label - visible with data', 'Mountain Counties for GIS_Housing Production Need': 'inline label - visible with data', });
lyr_MountainTownsforGIS_5.set('fieldLabels', {'Town': 'inline label - visible with data', 'Development Incentives Score': 'inline label - visible with data', 'Public-Private Partnership Score': 'inline label - visible with data', 'ADU Score': 'inline label - visible with data', 'Overall Score (25)': 'inline label - visible with data', 'PSF Construction Costs': 'inline label - visible with data', 'Housing Production Need': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', });
lyr_IECCAdoptionCity_6.set('fieldLabels', {'GEOID': 'no label', 'NAME': 'no label', });
lyr_IECCAdoptionState_7.set('fieldLabels', {'NAME': 'no label', 'IECC_Adoption copy_IECC Adoption': 'no label', });
lyr_StatewideHousingReform_8.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Housing Policy_State_GIS_Description': 'inline label - visible with data', 'Housing Policy_State_GIS_Dedicated Funds': 'inline label - visible with data', 'Housing Policy_State_GIS_Density Bonus': 'inline label - visible with data', 'Housing Policy_State_GIS_ADU Reform': 'inline label - visible with data', 'Housing Policy_State_GIS_Duplex Statewide?': 'inline label - visible with data', 'Housing Policy_State_GIS_Triplex Statewide?': 'inline label - visible with data', 'Housing Policy_State_GIS_Notes': 'inline label - visible with data', 'Housing Policy_State_GIS_Score': 'inline label - visible with data', });
lyr_LocalUpzoning_9.set('fieldLabels', {'GEOID': 'inline label - always visible', 'Upzoning Sheet for GIS_Municipality': 'inline label - visible with data', 'Upzoning Sheet for GIS_State': 'inline label - visible with data', 'Upzoning Sheet for GIS_Reform.Type': 'header label - visible with data', 'Upzoning Sheet for GIS_year': 'inline label - visible with data', 'Upzoning Sheet for GIS_description': 'inline label - visible with data', 'Upzoning Sheet for GIS_ADU Score (5)': 'inline label - visible with data', 'Upzoning Sheet for GIS_Infill Development Score': 'inline label - visible with data', 'Upzoning Sheet for GIS_Combined Score (Unweighted)': 'inline label - visible with data', 'Upzoning Sheet for GIS_Combined Score (Weighted)': 'inline label - visible with data', 'Upzoning Sheet for GIS_Score Quintiles': 'inline label - visible with data', });
lyr_ADUMarketSizing_10.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Market Sizing Summary_GIS_FIPS': 'inline label - visible with data', 'Market Sizing Summary_GIS_ADU - Low': 'inline label - visible with data', 'Market Sizing Summary_GIS_ADU - Middle': 'inline label - visible with data', 'Market Sizing Summary_GIS_ADU - High': 'inline label - visible with data', });
lyr_TriplexMarketAnalysis_11.set('fieldLabels', {'GEOID': 'inline label - always visible', 'NAME': 'inline label - visible with data', 'Market Sizing Summary_GIS_FIPS': 'inline label - visible with data', 'Market Sizing Summary_GIS_Triplex - Low': 'header label - visible with data', 'Market Sizing Summary_GIS_Triplex - Middle': 'inline label - visible with data', 'Market Sizing Summary_GIS_Triplex - High': 'inline label - visible with data', });
lyr_DuplexMarketAnalysis_12.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Market Sizing Summary_GIS_Duplex - Low': 'inline label - visible with data', 'Market Sizing Summary_GIS_Duplex - Middle': 'inline label - visible with data', 'Market Sizing Summary_GIS_Duplex - High': 'inline label - visible with data', });
lyr_DuplexMarketAnalysis_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});