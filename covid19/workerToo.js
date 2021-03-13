// tripleWorker

let iso3166toCountry = {
	"4":["AFG","Afghanistan"],"248":["ALA","Aland Islands"],"8":["ALB","Albania"],"12":["DZA","Algeria"],"16":["ASM","American Samoa"],"20":["AND","Andorra"],"24":["AGO","Angola"],"660":["AIA","Anguilla"],"10":["ATA","Antarctica"],"28":["ATG","Antigua and Barbuda"],"32":["ARG","Argentina"],"51":["ARM","Armenia"],"533":["ABW","Aruba"],"36":["AUS","Australia"],"40":["AUT","Austria"],"31":["AZE","Azerbaijan"],"44":["BHS","Bahamas"],"48":["BHR","Bahrain"],"50":["BGD","Bangladesh"],"52":["BRB","Barbados"],"112":["BLR","Belarus"],"56":["BEL","Belgium"],"84":["BLZ","Belize"],"204":["BEN","Benin"],"60":["BMU","Bermuda"],"64":["BTN","Bhutan"],"68":["BOL","Bolivia"],"535":["BES","Bonaire Sint Eustatius and Saba"],"70":["BIH","Bosnia and Herzegovina"],"72":["BWA","Botswana"],"74":["BVT","Bouvet Island"],"76":["BRA","Brazil"],"86":["IOT","British Indian Ocean Territory"],"92":["VGB","British Virgin Islands"],"96":["BRN","Brunei"],"100":["BGR","Bulgaria"],"854":["BFA","Burkina Faso"],"108":["BDI","Burundi"],"116":["KHM","Cambodia"],"120":["CMR","Cameroon"],"124":["CAN","Canada"],"132":["CPV","Cape Verde"],"136":["CYM","Cayman Islands"],"140":["CAF","Central African Republic"],"148":["TCD","Chad"],"830":["OWID_CIS","Channel Islands"],"152":["CHL","Chile"],"156":["CHN","China"],"162":["CXR","Christmas Island"],"166":["CCK","Cocos Islands"],"170":["COL","Colombia"],"174":["COM","Comoros"],"178":["COG","Congo"],"184":["COK","Cook Islands"],"188":["CRI","Costa Rica"],"384":["CIV","Cote dIvoire"],"191":["HRV","Croatia"],"192":["CUB","Cuba"],"531":["CUW","Curacao"],"196":["CYP","Cyprus"],"203":["CZE","Czech Republic"],"180":["COD","Democratic Republic of Congo"],"208":["DNK","Denmark"],"262":["DJI","Djibouti"],"212":["DMA","Dominica"],"214":["DOM","Dominican Republic"],"218":["ECU","Ecuador"],"818":["EGY","Egypt"],"222":["SLV","El Salvador"],"226":["GNQ","Equatorial Guinea"],"232":["ERI","Eritrea"],"233":["EST","Estonia"],"231":["ETH","Ethiopia"],"234":["FRO","Faeroe Islands"],"238":["FLK","Falkland Islands"],"242":["FJI","Fiji"],"246":["FIN","Finland"],"250":["FRA","France"],"254":["GUF","French Guiana"],"258":["PYF","French Polynesia"],"260":["ATF","French Southern Territories"],"266":["GAB","Gabon"],"270":["GMB","Gambia"],"268":["GEO","Georgia"],"276":["DEU","Germany"],"288":["GHA","Ghana"],"292":["GIB","Gibraltar"],"300":["GRC","Greece"],"304":["GRL","Greenland"],"308":["GRD","Grenada"],"312":["GLP","Guadeloupe"],"316":["GUM","Guam"],"320":["GTM","Guatemala"],"831":["GGY","Guernsey"],"324":["GIN","Guinea"],"624":["GNB","Guinea-Bissau"],"328":["GUY","Guyana"],"332":["HTI","Haiti"],"334":["HMD","Heard Island and McDonald Islands"],"340":["HND","Honduras"],"344":["HKG","Hong Kong"],"348":["HUN","Hungary"],"352":["ISL","Iceland"],"356":["IND","India"],"360":["IDN","Indonesia"],"364":["IRN","Iran"],"368":["IRQ","Iraq"],"372":["IRL","Ireland"],"833":["IMN","Isle of Man"],"376":["ISR","Israel"],"380":["ITA","Italy"],"388":["JAM","Jamaica"],"392":["JPN","Japan"],"832":["JEY","Jersey"],"400":["JOR","Jordan"],"398":["KAZ","Kazakhstan"],"404":["KEN","Kenya"],"296":["KIR","Kiribati"],"414":["KWT","Kuwait"],"417":["KGZ","Kyrgyzstan"],"418":["LAO","Laos"],"428":["LVA","Latvia"],"422":["LBN","Lebanon"],"426":["LSO","Lesotho"],"430":["LBR","Liberia"],"434":["LBY","Libya"],"438":["LIE","Liechtenstein"],"440":["LTU","Lithuania"],"442":["LUX","Luxembourg"],"446":["MAC","Macao"],"807":["MKD","Macedonia"],"450":["MDG","Madagascar"],"454":["MWI","Malawi"],"458":["MYS","Malaysia"],"462":["MDV","Maldives"],"466":["MLI","Mali"],"470":["MLT","Malta"],"584":["MHL","Marshall Islands"],"474":["MTQ","Martinique"],"478":["MRT","Mauritania"],"480":["MUS","Mauritius"],"175":["MYT","Mayotte"],"484":["MEX","Mexico"],"583":["FSM","Micronesia (country)"],"498":["MDA","Moldova"],"492":["MCO","Monaco"],"496":["MNG","Mongolia"],"499":["MNE","Montenegro"],"500":["MSR","Montserrat"],"504":["MAR","Morocco"],"508":["MOZ","Mozambique"],"104":["MMR","Myanmar"],"516":["NAM","Namibia"],"520":["NRU","Nauru"],"524":["NPL","Nepal"],"528":["NLD","Netherlands"],"540":["NCL","New Caledonia"],"554":["NZL","New Zealand"],"558":["NIC","Nicaragua"],"562":["NER","Niger"],"566":["NGA","Nigeria"],"570":["NIU","Niue"],"574":["NFK","Norfolk Island"],"408":["PRK","North Korea"],"580":["MNP","Northern Mariana Islands"],"578":["NOR","Norway"],"512":["OMN","Oman"],"586":["PAK","Pakistan"],"585":["PLW","Palau"],"275":["PSE","Palestine"],"591":["PAN","Panama"],"598":["PNG","Papua New Guinea"],"600":["PRY","Paraguay"],"604":["PER","Peru"],"608":["PHL","Philippines"],"612":["PCN","Pitcairn"],"616":["POL","Poland"],"620":["PRT","Portugal"],"630":["PRI","Puerto Rico"],"634":["QAT","Qatar"],"638":["REU","Reunion"],"642":["ROU","Romania"],"643":["RUS","Russia"],"646":["RWA","Rwanda"],"652":["BLM","Saint Barth?lemy"],"654":["SHN","Saint Helena"],"659":["KNA","Saint Kitts and Nevis"],"662":["LCA","Saint Lucia"],"663":["MAF","Saint Martin (French part)"],"666":["SPM","Saint Pierre and Miquelon"],"670":["VCT","Saint Vincent and the Grenadines"],"882":["WSM","Samoa"],"674":["SMR","San Marino"],"678":["STP","Sao Tome and Principe"],"682":["SAU","Saudi Arabia"],"686":["SEN","Senegal"],"688":["SRB","Serbia"],"690":["SYC","Seychelles"],"694":["SLE","Sierra Leone"],"702":["SGP","Singapore"],"534":["SXM","Sint Maarten (Dutch part)"],"703":["SVK","Slovakia"],"705":["SVN","Slovenia"],"90":["SLB","Solomon Islands"],"706":["SOM","Somalia"],"710":["ZAF","South Africa"],"239":["SGS","South Georgia and the South Sandwich Islands"],"410":["KOR","South Korea"],"728":["SSD","South Sudan"],"724":["ESP","Spain"],"144":["LKA","Sri Lanka"],"729":["SDN","Sudan"],"740":["SUR","Suriname"],"744":["SJM","Svalbard and Jan Mayen"],"748":["SWZ","Swaziland"],"752":["SWE","Sweden"],"756":["CHE","Switzerland"],"760":["SYR","Syria"],"158":["TWN","Taiwan"],"762":["TJK","Tajikistan"],"834":["TZA","Tanzania"],"764":["THA","Thailand"],"626":["TLS","Timor"],"768":["TGO","Togo"],"772":["TKL","Tokelau"],"776":["TON","Tonga"],"780":["TTO","Trinidad and Tobago"],"788":["TUN","Tunisia"],"792":["TUR","Turkey"],"795":["TKM","Turkmenistan"],"796":["TCA","Turks and Caicos Islands"],"798":["TUV","Tuvalu"],"800":["UGA","Uganda"],"804":["UKR","Ukraine"],"784":["ARE","United Arab Emirates"],"826":["GBR","United Kingdom"],"840":["USA","United States"],"581":["UMI","United States Minor Outlying Islands"],"850":["VIR","United States Virgin Islands"],"858":["URY","Uruguay"],"860":["UZB","Uzbekistan"],"548":["VUT","Vanuatu"],"336":["VAT","Vatican"],"862":["VEN","Venezuela"],"704":["VNM","Vietnam"],"876":["WLF","Wallis and Futuna"],"732":["ESH","Western Sahara"],"887":["YEM","Yemen"],"894":["ZMB","Zambia"],"716":["ZWE","Zimbabwe"],"10000":["Africa","Africa"],"10100":["Central Africa","Central Africa"],"10200":["Eastern Africa","Eastern Africa"],"10300":["Northern Africa","Northern Africa"],"10400":["Southern Africa","Southern Africa"],"10500":["Western Africa","Western Africa"],"11000":["Americas","Americas"],"11100":["Caribbean","Caribbean"],"11200":["Central America","Central America"],"11300":["Northern America","Northern America"],"11400":["South America","South America"],"12000":["Asia","Asia"],"12100":["Central Asia","Central Asia"],"12200":["Eastern Asia","Eastern Asia"],"12300":["Southeastern Asia","Southeastern Asia"],"12400":["Southern Asia","Southern Asia"],"12500":["Western Asia","Western Asia"],"13000":["Europe","Europe"],"13100":["Eastern Europe","Eastern Europe"],"13200":["Northern Europe","Northern Europe"],"13300":["Southern Europe","Southern Europe"],"13400":["Western Europe","Western Europe"],"14000":["Oceania","Oceania"],"14100":["Antarctica","Antarctica"],"14200":["Australia & NewZealand","Australia & NewZealand"],"14300":["Micronesia","Micronesia"],"14400":["Melanesia","Melanesia"],"14500":["Polynesia","Polynesia"]

};


let colorArr = [];

function fillColorArr(){
	
	colorArr = [];
	
	let red, green, blue, alpha;
	
	for(let i=0, imax=30; i<imax; i++){
		
		red 	= 110 + Math.round( Math.random()*140 );
		green 	= 110 + Math.round( Math.random()*140 );
		blue 	= 110 + Math.round( Math.random()*140 );
		alpha 	= 0.75 + Math.round( Math.random()*2.5 )/10;
		
		colorArr.push( 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')' );
		
	}
}

function maximizeCentrality(scenario){
	
	// unpackage the incoming scenario:
	let gridSize 	= scenario.gridSize;
	let minPoint 	= scenario.minPoint;
	let maxPoint 	= scenario.maxPoint;
	let uniques 	= scenario.uniques;
	let uniqueCount = scenario.uniqueCount;
	
	// translate point values to position values
	let uniquePositions = {};
	for(let u in uniques){
		uniquePositions[u] = gridSize * u/maxPoint;
	}
	
	// initialize some temp and tracking variables
	let centralityScore = 0;
	let maxCScore = 0;
	let maxScoreScenario = {};
	let expansion;
	let position;
	
	// loop through focusBoxSizes
	for(let i=80; i>=20; i--){
			
		// skip when invalid ending position
		if(
			uniqueCount*i < gridSize ||
			uniqueCount*i - gridSize > expansion
		){
			continue;
		}
		
		centralityScore = 0;
		
		for(position in uniquePositions){
			//console.log({position:uniquePositions[position], j:j, i:i, posMinusJ:(uniquePositions[position] - j),posMinusJModi:(uniquePositions[position] - j)%i, iMinusPosMinusJModi:i - (uniquePositions[position] - j)%i});
			
			centralityScore += Math.min(
				(uniquePositions[position])%i,
				i - (uniquePositions[position])%i
			);
		}
		if(centralityScore > maxCScore){
			maxScoreScenario.focusSize = i;
			// maxScoreScenario.normedScore = centralityScore/uniqueCount;
		}
	}
	
	// console.log(maxScoreScenario);
	return maxScoreScenario.focusSize;
}

function findGoodDivisor(divideMe){ // this helps to ensure that edge-wise focus boxes are large enough to support scroll
	
	let modBest = false;
	let closest = 10000;
	
	for(let i=80; i>=20; i--){
		
		if(divideMe%i===0){
			modBest = i;
			break;
		}
		
		if(i - divideMe%i < closest){
			
			closest = i - divideMe%i;
			
			modBest = i;
		}
	}
	
	return modBest;
}

let lineArr 		= [];
let lineDataArr 	= [];
// Initialize your pointGridArr
let pointGridArr 	= [];
let x, y, xmax = 0, ymax = 0, od, dc, i;
let focusBoxSize, xSized, ySized, xSizedGrid, ySizedGrid;


function fillLineArr(e){
	
	lineArr 		= [];
	lineDataArr 	= [];
	pointGridArr 	= [];

	let fileJSON = downloadedData['dhub_nations_wc'].raw;
	
	let ikey;
	// find min and max values
	// and number of unique values per axis
	// for use in focusBox and pointGridArrdeterminations
	let uniqueXs = {};
	let uniqueXCount = 0;
	let uniqueYs = {};
	let uniqueYCount = 0;
	for(let key in fileJSON){
		
		if(fileJSON[key]['deathCount']){ // note that this currently filters out Africa and Eastern Europe, etc

			for(ikey in fileJSON[key]['deathCount']){
					
				x = Math.max(Math.floor(fileJSON[key]['percentOfWorstCaseMet'][ikey]), 0.5);
				if(!uniqueXs[x]){uniqueXs[x]=0; uniqueXCount++;}
				uniqueXs[x]++;
				
				y = fileJSON[key]['days_since_last'][ikey];
				if(!uniqueYs[y]){uniqueYs[y]=0; uniqueYCount++;}
				uniqueYs[y]++;
				
				xmax = Math.max(x, xmax);
				
				ymax = Math.max(y, ymax);
			}
		}
	}
	
	focusBoxSizeX = maximizeCentrality({
			
		gridSize	: e.data.layoutObject.gridWidth,
		minPoint	: 0.5,
		maxPoint	: xmax,
		uniques		: uniqueXs,
		uniqueCount : uniqueXCount
	});
	
	focusBoxSizeY = findGoodDivisor(e.data.layoutObject.gridHeight);
	// get a representative set (the uniques) and run a max function that looks for max distance between points and edges of boxes... allow the function to shift the left and or top starting points and cycle through x and y sizes... and to try to minimize the max number of elements in any one box
	for(let key in fileJSON){
		
		if(fileJSON[key]['deathCount']){ // note that this currently filters out Africa and Eastern Europe, etc

			lineArr[key] = [];
			
			lineDataArr[key] = [];
			
			for(ikey in fileJSON[key]['deathCount']){
					
				x = Math.max(Math.floor(fileJSON[key]['percentOfWorstCaseMet'][ikey]), 0.5);
				
				y = fileJSON[key]['days_since_last'][ikey];
				
				od = fileJSON[key]['onDate'][ikey];
				
				dc = fileJSON[key]['deathCount'][ikey];
				
				xSized = Math.floor(e.data.layoutObject.gridAreaXstart + x*e.data.layoutObject.gridWidth/xmax);
				
				ySized = Math.floor(e.data.layoutObject.gridAreaYend - y*e.data.layoutObject.gridHeight/ymax);
				
				xSizedGrid = Math.floor( x*e.data.layoutObject.gridWidth/xmax / focusBoxSizeX );
				
				ySizedGrid = Math.floor( - y*e.data.layoutObject.gridHeight/ymax / focusBoxSizeY );
				
				lineArr[key].push( [xSized,ySized] );
				
				lineDataArr[key].push( 
					"<td>" + iso3166toCountry[key][1] + "</td><td>" + x + "</td><td>" + y + "</td><td>" + od + "</td><td>" + dc.toLocaleString() + "</td>" 
				);
				
				if( !pointGridArr[xSizedGrid] ){
					
					pointGridArr[xSizedGrid] = [];
				}
				if( !pointGridArr[xSizedGrid][ySizedGrid] ){
					
					pointGridArr[xSizedGrid][ySizedGrid] = [];
				}
				
				pointGridArr[xSizedGrid][ySizedGrid].push( [key, ikey]);
			}
		}
	}
	// console.log(pointGridArr);
	// order the pointGridArr leaf-arrays by the [key][days_since_last column][ikey]
	let ikeyObj = {};
	let ySG;
	let i=0, imax=0, j=0, jmax=0;
	let dsl = 0;
	let keys;
	
	for(let xSG in pointGridArr){
		
		for(ySG in pointGridArr[xSG]){
			
			ikeyObj = {};
			
			for(i=0, imax=pointGridArr[xSG][ySG].length; i<imax; i++){
				
				key = pointGridArr[xSG][ySG][i][0];
				ikey = parseInt(pointGridArr[xSG][ySG][i][1]);
				
				dsl = fileJSON[ key ]['days_since_last'][ ikey ];
				if(!ikeyObj[ dsl ]){
					ikeyObj[ dsl ] = [];
				}
				ikeyObj[ dsl ].push( pointGridArr[xSG][ySG][i] );
			}
			
			ikeyObj = JSON.parse(JSON.stringify(ikeyObj));
			
			keys = Object.keys(ikeyObj);
			
			imax = keys.length;
			// console.log(ikeyObj);
			keys.sort(function(a, b){return a-b});
			
			keys.reverse();
			
			pointGridArr[xSG][ySG] = [];
			
			for (i = 0; i < imax; i++) {
				for(j=0, jmax=ikeyObj[keys[i]].length; j<jmax; j++){
					pointGridArr[xSG][ySG].push(ikeyObj[ keys[i] ][j]);
				}
			}
		}
	}
	
	
	e.data.titleObj.textTitle 			= e.data.titleObj.textTitle 			|| 'Days between percentage-wise steps towards a country\'s worst-case-normalized death rates' || false;
	
	e.data.titleObj.textSubtitle 		= e.data.titleObj.textSubtitle 			|| 'where worst-case-normalization is based on population age-distributions informed by age to IFR (infection fatality rate) relationships' || false;
	
	e.data.titleObj.textLeftAxisTitle 	= e.data.titleObj.textLeftAxisTitle 	|| 'Days Between Steps' || false;
	
	e.data.titleObj.textBottomAxisTitle = e.data.titleObj.textBottomAxisTitle 	|| 'Percentage of Worst Case Deaths Suffered Thus Far' || false;
	
	e.data.titleObj.textRightAxisTitle 	= e.data.titleObj.textRightAxisTitle 	|| false;
	//|| 'Right Axis Title Right Axis Title Right Axis Title Right Axis Title Right Axis Title Right Axis Title' 
	
	e.data.titleObj.textTopAxisTitle 	= e.data.titleObj.textTopAxisTitle 		|| false;
	// 'Top Axis Title' || 
	
	postMessage({
		colorArr:colorArr,
		lineArr:lineArr,
		pointGridArr:pointGridArr,
		lineDataArr:lineDataArr,
		handler:e.data.handler,
		xmax:xmax,
		ymax:ymax,
		titleObj:e.data.titleObj,
		layoutObject:e.data.layoutObject,
		focusBoxSizeX:focusBoxSizeX,
		focusBoxSizeY:focusBoxSizeY
	});
}


let downloadedData 	= {};

function getFile(e){
	
	let fileName = "dhub_nations_wc.txt";
	
	// let callback = requestObj.routeTo;
	
	
	let xmlhttp = new XMLHttpRequest();
	
	xmlhttp.open('GET', fileName, true);
	
	xmlhttp.onreadystatechange = function(){
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
			
			// Store a local copy of the json file response
			downloadedData['dhub_nations_wc'] = {'raw':JSON.parse(xmlhttp.responseText),'meta':{}};
			// Update its meta values
			
			// Call the callback function on the stored json
			// buildResponse[callback](requestObj);
			fillLineArr(e);
		}
		else if(xmlhttp.readyState == 4){
			
			let capturedMessage = "while attempting to submit, the readyState equaled 4 and the status equaled: " + xmlhttp.status;
			
			console.log(capturedMessage);
			/*
			postMessage(
				{
					'requestObj'		:requestObj,
					'capturedMessage'	:capturedMessage,
					'routeTo'			:'errorHandler'
				}
			);
			*/
		}
	}
	
	xmlhttp.send();
}


onmessage = function(e){
	
	fillColorArr();
	
	getFile(e);
}

/*
// LINEARR
// and yet a third array (also id-keyed)
// that holds each line's endpoints.
// This one is to help me highlight lines as I hover/click

// POINTGRIDARR
// i'd like to make an array
// that holds the ids of 
// of each random line
// in an array that represent
// chunks of the canvas
// wherein a line's endpoint resides

// LINEDATAARR
// i then need another (id-keyed) array
// that will hold the random info
// that I assign to each line.
// This one is to fill a floating info box
*/
