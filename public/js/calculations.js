/// <reference path="../../typings/jquery/jquery.d.ts"/>
/******Conversion Scripts*******/
function CalcConvert() {
	var uMG = $('#MGtoMCG').val();
	var uMCG = $('#MCGtoMG').val();
	var umL = $('#mLtouL').val();
	var uuL = $('#uLtomL').val();

	var resMCG;
	var resMG;
	var resUL;
	var resML;

	resMCG = Math.round((uMG * 1000), 2);
	resMG = (uMCG / 1000);
	resUL = Math.round((umL * 1000), 2);
	resML = (uuL / 1000);

	$('#MCGResult').val(resMCG);
	$('#MGResult').val(resMG);
	$('#uLResult').val(resUL);
	$('#mLResult').val(resML);
}

function CalcReset() {
	$('#conversion-content input').val("");
}

function CalcValues() {
	var sVal;
	var sUnits;
	var tUnits;
	var numTicks;
	var pepMG;
	var bwML;
	var mcgPerUnit;
	var mcgPerTick;
	var dose;
	var IUs;
	var drawMark;

	sVal = $('#syringeVol').val();
	sUnits = (100 * sVal);
	$('#sUnits').val(sUnits);

	if (sVal == 1) {
		tUnits = 2;
	} 
	else {
		tUnits = 1;
	}
	
	$('#tUnits').val(tUnits);

	numTicks = (sUnits / tUnits);
	$('#numTicks').val(numTicks);

	pepMG = $('#peptideMG').val();
	bwML = $('#bactWaterML').val();

	mcgPerUnit = Math.round(((pepMG * 1000) / bwML) * (sVal / sUnits), 2);
	$('#mcgPerUnit').val(mcgPerUnit);

	mcgPerTick = Math.round(((pepMG * 1000) / bwML) * (sVal / numTicks), 2);
	$('#mcgPerTick').val(mcgPerTick);

	dose = $('#dose').val();
	IUs = Math.round((dose / mcgPerUnit), 0);
	drawMark = Math.round((dose / mcgPerTick), 0);

	$('#IUs').val(IUs);
	$('#drawMark').val(drawMark);
}

function CalcResetValues(){
	$('#calculator-content input').val("");
}

function CalcMCG(){
	var inVial = $('#mcg-1').val();
	var perInj = $('#mcg-2').val();
	var youGet = $('#mcg-3').val();
	var injPerDay = $('#mcg-4').val();
	var lastFor = $('#mcg-days').val();
	
	var totalOne = inVial / perInj;
	var totalTwo = totalOne / injPerDay;
	
	$('#mcg-3').val(totalOne);
	$('#mcg-days').val(totalTwo);
}

function ResetMCG(){
	$('#lastfor-mcg input').val("");
}

function Calcml(){
	var inVial = $('#ml-1').val();
	var bacWater = $('#ml-2').val();
	var tickMarks = $('#ml-3').val();
	var youGet = $('#ml-4').val();
	var injPerDay = $('#ml-5').val();
	var lastFor = $('#ml-days').val();
	
	var totalOne = (inVial / (bacWater * 1000)) / (tickMarks / 100);
	var totalTwo = totalOne / injPerDay;
	
	$('#ml-4').val(totalOne);
	$('#ml-days').val(totalTwo);
}

function Resetml(){
	$('#lastfor-ml input').val("");
}
